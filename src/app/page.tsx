
import SectionHero from '@/components/section-hero'
import SectionBrands from '@/components/section-brands'
import SectionTestimonials from '@/components/section-testimonials'
import SectionAbout from '@/components/section-about'
import Footer from '@/components/footer'
import FooterCopyright from '@/components/footer-copyright'

export default function Home() {
  return (
    <main>
      <SectionHero></SectionHero>
      <SectionBrands></SectionBrands>
      <SectionTestimonials></SectionTestimonials>
      <SectionAbout></SectionAbout>
      <Footer></Footer>
      <FooterCopyright></FooterCopyright>
    </main>
  )
}
