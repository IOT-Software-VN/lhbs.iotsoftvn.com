const { rmSync, existsSync } = require('fs')
const { glob } = require('glob')

const patterns = process.argv.slice(2)

if (patterns.length === 0) {
  console.error('Usage: node scripts/clean.js <pattern1> <pattern2> ...')
  process.exit(1)
}

async function clean() {
  for (const pattern of patterns) {
    try {
      const matches = await glob(pattern, {
        ignore: ['node_modules/**'],
        absolute: false
      })

      for (const match of matches) {
        if (existsSync(match)) {
          rmSync(match, { recursive: true, force: true })
          console.log(`✓ Removed: ${match}`)
        }
      }
    } catch (error) {
      console.error(`Error cleaning pattern "${pattern}":`, error.message)
    }
  }
}

clean().catch(console.error)
