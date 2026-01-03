import { type RouteConfig, index, layout, route } from '@react-router/dev/routes'

export default [
  layout('components/layout/layout.tsx', [
    // Home page
    route('/', 'modules/home/pages/HomePage.tsx'),

    // About - Vision & Mission
    route('tam-nhin-su-menh', 'modules/vision-mission/pages/VisionMissionPage.tsx'),
    route('ban-lanh-dao', 'modules/directors/pages/DirectorsPage.tsx'),
    route('he-thong-co-so', 'modules/campus/pages/CampusPage.tsx'),
    route('cong-khai-thong-tin', 'modules/public-info/pages/PublicInfoPage.tsx'),
    route('cot-moc-dang-nho', 'modules/milestone/pages/MilestonePage.tsx'),
    route('lo-trinh-hoc-tap', 'modules/learning-path/pages/LearningPathPage.tsx'),

    // Catch-all route for 404 pages (must be last)
    route('*', 'routes/404.tsx')
  ])
] satisfies RouteConfig
