// components

// sections
import { Footer, Navbar } from "@/components";
import Hero from "../components/hero-page";
import AboutContent from "../components/about-content";
import CarouselFeatures from "../components/carousel-features";
import { useTranslations } from "next-intl";
import TrainingContent from "../components/training-content";

export default function Training() {
  const t = useTranslations();

  const contentPage = {
    title: t('hero_training.title'),
    subtitle: t('hero_training.subtitle'),
    page: t('nav_menu.training')
  } 

  return (
    <>
      <Navbar />
      <Hero {...contentPage} />
      <TrainingContent />
      <CarouselFeatures />
      <Footer />
    </>
  );
}
