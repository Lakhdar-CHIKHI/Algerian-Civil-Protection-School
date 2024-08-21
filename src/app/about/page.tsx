// components

// sections
import { Footer, Navbar } from "@/components";
import Hero from "../components/hero-page";
import AboutContent from "../components/about-content";
import CarouselFeatures from "./../components/carousel-features";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations();

  const contentPage = {
    title: t('hero_about.title'),
    subtitle: t('hero_about.subtitle'),
    page: t('nav_menu.about_us')
  } 
  return (
    <>
      <Navbar />
      <Hero {...contentPage} />
      <AboutContent />
      <CarouselFeatures />
      <Footer />
    </>
  );
}
