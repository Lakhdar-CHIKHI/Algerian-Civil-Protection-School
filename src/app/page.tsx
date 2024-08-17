// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./components/hero";
import TrainingCategories from "./components/training-categories";
import BackToSchoolBooks from "./components/news";
import OtherBookOffers from "./components/other-book-offers";
import CarouselFeatures from "./components/carousel-features";
import GetYourBookFromUs from "./components/get-your-book-from-us";
import Faq from "./components/faq";


export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrainingCategories />
      <BackToSchoolBooks />
      {/* <OtherBookOffers /> */}
      <CarouselFeatures />
      {/* <GetYourBookFromUs /> */}
      <Faq />
      <Footer />
    </>
  );
}
