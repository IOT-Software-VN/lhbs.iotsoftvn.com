import { readdir, readFile, writeFile, stat } from 'fs/promises'
import { join, relative, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = join(__dirname, '..', 'out')

const ABSOLUTE_PATH_PATTERNS = ['_next/', 'images/', 'fonts/', 'videos/', 'assets/']

const FALLBACK_CSS = `
<style id="static-fallback-styles">
/* Static Export Fallback: Show hidden animated content when React hydration fails */
/* This will be removed by React after successful hydration */
[style*="opacity: 0"], [style*="opacity:0"] {
  opacity: 1 !important;
  transition: none !important;
}
[style*="translateY"], [style*="translateX"] {
  transform: none !important;
  transition: none !important;
}
/* Also target motion.div initial states */
[style*="transform: translateY"], [style*="transform:translateY"],
[style*="transform: translateX"], [style*="transform:translateX"] {
  transform: none !important;
}
</style>
<script>
(function() {
  var timeout = setTimeout(function() {
    var el = document.querySelector('[style*="opacity: 1"]');
    if (el) {
      var fallback = document.getElementById('static-fallback-styles');
      if (fallback) fallback.remove();
    }
  }, 2000);
  
  var observer = new MutationObserver(function(mutations) {
    var animated = document.querySelector('[style*="opacity: 1"]');
    if (animated) {
      var fallback = document.getElementById('static-fallback-styles');
      if (fallback) fallback.remove();
      observer.disconnect();
      clearTimeout(timeout);
    }
  });
  
  observer.observe(document.body || document.documentElement, {
    attributes: true,
    subtree: true,
    attributeFilter: ['style']
  });
})();
</script>
`

async function findHtmlFiles(dir, files = []) {
  const entries = await readdir(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      await findHtmlFiles(fullPath, files)
    } else if (entry.name.endsWith('.html')) {
      files.push(fullPath)
    }
  }

  return files
}

function getRelativePrefix(htmlPath) {
  const relativePath = relative(OUT_DIR, dirname(htmlPath))
  if (!relativePath) return './'

  const depth = relativePath.split(/[\\/]/).filter(Boolean).length
  return '../'.repeat(depth)
}

function makePathsRelative(content, relativePrefix) {
  let modified = content

  for (const pattern of ABSOLUTE_PATH_PATTERNS) {
    const htmlAttrPattern = new RegExp(`(href=["']|src=["']|content=["']|srcset=["'])\\/${pattern}`, 'g')
    modified = modified.replace(htmlAttrPattern, `$1${relativePrefix}${pattern}`)

    const cssUrlPattern = new RegExp(`url\\((["']?)\\/${pattern}`, 'g')
    modified = modified.replace(cssUrlPattern, `url($1${relativePrefix}${pattern}`)

    const jsDoubleQuotePattern = new RegExp(`"\\/${pattern}`, 'g')
    modified = modified.replace(jsDoubleQuotePattern, `"${relativePrefix}${pattern}`)

    const jsEscapedPattern = new RegExp(`\\\\"\\/${pattern}`, 'g')
    modified = modified.replace(jsEscapedPattern, `\\"${relativePrefix}${pattern}`)

    const jsSingleQuotePattern = new RegExp(`'\\/${pattern}`, 'g')
    modified = modified.replace(jsSingleQuotePattern, `'${relativePrefix}${pattern}`)
  }

  return modified
}

function injectFallbackCSS(content) {
  return content.replace(/<head>/i, '<head>' + FALLBACK_CSS)
}

async function processHtmlFiles() {
  console.log('🔄 Processing static export for file:// compatibility...')
  console.log(`   Output directory: ${OUT_DIR}`)

  try {
    await stat(OUT_DIR)
  } catch {
    console.error('❌ Output directory does not exist. Run build first.')
    process.exit(1)
  }

  const htmlFiles = await findHtmlFiles(OUT_DIR)
  console.log(`   Found ${htmlFiles.length} HTML files\n`)

  let modifiedCount = 0

  for (const htmlPath of htmlFiles) {
    const content = await readFile(htmlPath, 'utf-8')
    const relativePrefix = getRelativePrefix(htmlPath)

    let modified = makePathsRelative(content, relativePrefix)
    modified = injectFallbackCSS(modified)

    if (modified !== content) {
      await writeFile(htmlPath, modified, 'utf-8')
      modifiedCount++
      const displayPath = relative(OUT_DIR, htmlPath)
      console.log(`   ✓ ${displayPath}`)
    }
  }

  console.log(`\n✅ Processed ${modifiedCount}/${htmlFiles.length} files`)
  console.log(`   • Converted absolute paths to relative`)
  console.log(`   • Injected CSS fallback for file:// protocol`)
  console.log(`\n📂 HTML files can now be opened directly from filesystem!`)
}

processHtmlFiles().catch(console.error)
