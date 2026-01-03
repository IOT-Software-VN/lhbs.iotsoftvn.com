import { type RouteConfig, index, layout, route } from '@react-router/dev/routes'

export default [
  layout('components/layouts/layout.tsx', [
    // Home page
    index('routes/home.tsx'),
    
    // About - Vision & Mission
    route('tam-nhin-su-menh', 'routes/vision-mission/page.tsx'),
    route('ban-lanh-dao', 'routes/directors/page.tsx'),
    route('he-thong-co-so', 'routes/our-campus/page.tsx'),
    route('cong-khai-thong-tin', 'routes/public-information/page.tsx'),
    route('cot-moc-dang-nho', 'routes/milestone/page.tsx'),
    route('lo-trinh-hoc-tap', 'routes/learning-path/page.tsx'),
    
    // Catch-all route for 404 pages (must be last)
    route('*', 'routes/404.tsx'),
  ])
] satisfies RouteConfig
