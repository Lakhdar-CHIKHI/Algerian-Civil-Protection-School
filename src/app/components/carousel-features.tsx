"use client";

import Image from "next/image";
import { Typography, Carousel } from "@material-tailwind/react";
import { useTranslations } from "next-intl";


export function CarouselFeatures() {
  const t = useTranslations();
  const PARTNERS = [
    {
      img: "/image/partners/sonatrach.svg",
      title: t('partners.sonatrach.title'),
      desc: t('partners.sonatrach.description'),
    },
    {
      img: "/image/partners/air_algerie.svg",
      title: t('partners.air_algerie.title'),
      desc: t('partners.air_algerie.description'),
    }
  ];
  
  return (
    <div className="px-8 py-20">
      <div className="container mx-auto flex flex-col items-center">
        <Typography variant="h1" color="blue-gray" className="mb-2">
            {t('partners.title')}
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 !text-gray-500 lg:w-9/12 text-center pb-12"
          >
            {t('partners.description')}
        </Typography>
      </div>
      <section className="container mx-auto !rounded-lg bg-[url('/image/Background_2.jpg')] bg-center bg-cover ">
      <div className="inset-0 h-full w-full !rounded-lg bg-black/70 py-10 lg:px-16">
        <Carousel
          transition={{ duration: 1, delay: 1 }}
          autoplay={true}
          loop={true}
          nextArrow={() => <></>}
          prevArrow={() => <></>}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute left-16 bottom-0 z-50 flex h-5 w-20 -translate-x-2/4 gap-2 md:left-2/4 ">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 w-10 cursor-pointer transition-all content-[''] ${
                    activeIndex === i ? "bg-white" : "bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          {PARTNERS.map((partner, i) => (
            <div
              key={i}
              className="!relative flex grid-cols-1 flex-col-reverse gap-6 px-10 py-14 md:grid md:grid-cols-5  md:gap-14 md:py-20"
            >
              <div className="col-span-3 flex flex-col items-start justify-center">
                <Typography variant="h3" className="mt-6" color="white">
                  {partner.title}
                </Typography>
                <br />
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-5 text-xl font-normal "
                >
                  {partner.desc}
                </Typography>
                {/* <div className="flex items-center gap-2">
                  🚚
                  <Typography
                    variant="small"
                    color="white"
                    className="font-medium uppercase"
                  >
                    Free Delivery
                  </Typography>
                </div> */}
              </div>
              <div className="col-span-2 flex w-full shrink-0 md:!justify-end">
                <Image
                  width={300}
                  height={300}
                  src={partner.img}
                  alt="testimonial image"
                  className="h-full w-2/4 object-contain"
                />
              </div>
            </div>
          ))}
      </Carousel>
      </div>
      </section>
    </div>
  );
}

export default CarouselFeatures;
