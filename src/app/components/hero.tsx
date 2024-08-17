"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import { useTranslations } from "next-intl";
import React from "react";

function Hero() {
  const t = useTranslations();
  return (
    <header className="mt-12 bg-white px-8">
      <div className="container mx-auto grid h-full min-h-[65vh] w-full grid-cols-1 place-items-center gap-y-10 lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto lg:-mt-40">
          <Typography
            variant="h1"
            color="red"
            className="text-3xl !leading-snug"
          >
            {t('hero_section.sub_title')}
          </Typography>
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-2 max-w-sm text-3xl !leading-snug lg:mb-3 lg:text-3xl"
          >
            {t('hero_section.title')}
          </Typography>
          <Typography
            variant="lead"
            className="mb-6 font-normal !text-gray-500 md:pr-16 xl:pr-28"
          >
            {t('hero_section.description')}
          </Typography>
          <Button size="lg" color="gray">
          {t('hero_section.button')}
          </Button>
        </div>
        <div className="mt-40 grid gap-8 lg:mt-0">
          <div className="grid grid-cols-4 gap-24">
            <Image
              width={1000}
              height={1000}
              src="/image/hero/12.jpg"
              className="rounded-lg shadow-md hero-image"
              alt="flowers"
            />
            <Image
              width={1000}
              height={1000}
              src="/image/hero/13.jpg"
              className="-mt-28 rounded-lg shadow-md hero-image"
              alt="flowers"
            />
            <Image
              width={1000}
              height={1000}
              src="/image/hero/14.jpg"
              className="-mt-14 rounded-lg shadow-md hero-image"
              alt="flowers"
            />
            <Image
              width={1000}
              height={1000}
              src="/image/hero/27.jpg"
              className="-mt-20 rounded-lg shadow-md hero-image"
              alt="flowers"
            />
          </div>
          <div className="grid grid-cols-4 gap-24">
            <div></div>
            <Image
              width={1000}
              height={1000}
              src="/image/hero/18.jpg"
              className="-mt-28 rounded-lg shadow-md hero-image-2"
              alt="flowers"
            />
            <Image
              width={1000}
              height={1000}
              src="/image/hero/29.jpg"
              className="-mt-14 rounded-lg shadow-md hero-image-2"
              alt="flowers"
            />
            <Image
              width={1000}
              height={1000}
              src="/image/hero/8.jpg"
              className="-mt-20 rounded-lg shadow-md hero-image-2"
              alt="flowers"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
export default Hero;
