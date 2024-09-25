"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import { useTranslations } from "next-intl";
import React from "react";

function Hero() {
  const t = useTranslations();
  return (
    <header className="lg:mb-12 bg-[url('/image/Background_3.jpg')] bg-center bg-cover ">
      <div className="grid w-full h-full min-h-[65vh] w-full grid-cols-1 place-items-center bg-black/70 inset-0">
        {/* <div className="w-full top-0 !absolute z-1">
          <Image width={786} height={786} className="w-full h-[75vh] opacity-30" src={'/image/Background_2.jpg'} alt="" />
        </div> */}
        <div className="flex flex-row container mx-auto place-items-center">
          <div className="row-start-2 lg:row-auto text-center lg:text-left lg:rtl:text-right lg:w-5/12 w-full px-4 lg:px-0">
            <Typography
              variant="h1"
              color="red"
              className="lg:text-3xl text-xl !leading-snug"
            >
              {t('hero_section.sub_title')}
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="mb-2 lg:max-w-sm lg:text-3xl text-2xl !leading-snug lg:mb-3"
            >
              {t('hero_section.title')}
            </Typography>
            <Typography
              variant="lead"
              className="mb-6 font-normal lg:text-xl text-sm !text-gray-300 lg:ltr:pr-16 xl:ltr:pr-28"
            >
              {t('hero_section.description')}
            </Typography>
            <Button  className="text-xs lg:text-sm" variant="filled" color="amber">
            {t('hero_section.button')}
            </Button>
          </div>
          <div className="mt-40 grid gap-6 lg:w-7/12 lg:grid hidden">
            <div className="grid grid-cols-4 gap-28">
              <Image
                width={1000}
                height={1000}
                src="/image/hero/12.jpg"
                className="rounded-lg shadow-2xl hero-image"
                alt="flowers"
              />
              <Image
                width={1000}
                height={1000}
                src="/image/hero/13.jpg"
                className="-mt-28 rounded-lg shadow-2xl hero-image"
                alt="flowers"
              />
              <Image
                width={1000}
                height={1000}
                src="/image/hero/14.jpg"
                className="-mt-14 rounded-lg shadow-2xl hero-image"
                alt="flowers"
              />
              <Image
                width={1000}
                height={1000}
                src="/image/hero/27.jpg"
                className="-mt-20 rounded-lg shadow-2xl hero-image"
                alt="flowers"
              />
            </div>
            <div className="grid grid-cols-4 gap-28">
              <div></div>
              <Image
                width={1000}
                height={1000}
                src="/image/hero/18.jpg"
                className="-mt-28 rounded-lg shadow-2xl hero-image-2"
                alt="flowers"
              />
              <Image
                width={1000}
                height={1000}
                src="/image/hero/29.jpg"
                className="-mt-14 rounded-lg shadow-2xl hero-image-2"
                alt="flowers"
              />
              <Image
                width={1000}
                height={1000}
                src="/image/hero/8.jpg"
                className="-mt-20 rounded-lg shadow-2xl hero-image-2"
                alt="flowers"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Hero;
