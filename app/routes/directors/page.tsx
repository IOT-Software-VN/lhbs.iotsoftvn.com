import type { Route } from './+types/page'
import SubPageHero from '@/components/shared-ui/hero-carousel'
import { WelcomeSection, DirectorsCarousel } from '@/components/directors'

export function meta({ }: Route.MetaArgs) {
    return [
        { title: 'Ban Lãnh đạo - LHBS' },
        { name: 'description', content: 'Gặp gỡ Ban Lãnh đạo Trường Song ngữ Lạc Hồng, những người dẫn dắt và định hướng phát triển giáo dục toàn diện.' }
    ]
}

export default function DirectorsPage() {
    return (
        <>
            <SubPageHero
                title="Ban Lãnh đạo"
                subtitle="Kiến tạo tương lai - Vươn tầm quốc tế"
                backgroundImage="https://lhbs.edu.vn/wp-content/uploads/2022/11/MG_5251.jpg"
            />

            <WelcomeSection />
            <DirectorsCarousel />
        </>
    )
}
