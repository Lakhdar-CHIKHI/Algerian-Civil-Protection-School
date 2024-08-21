// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./components/hero";
import TrainingCategories from "./components/training-categories";
import News from "./components/news";
import CarouselFeatures from "./components/carousel-features";
import Faq from "./components/faq";


export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrainingCategories />
      <News />
      <CarouselFeatures />
      <Faq />
      <Footer />
    </>
  );
}
