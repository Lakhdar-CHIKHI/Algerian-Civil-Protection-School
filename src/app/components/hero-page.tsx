"use client";

import {  Typography } from "@material-tailwind/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  page: string;
}

function Hero({title, subtitle, page}: HeroProps) {
  const t = useTranslations();
  return (
    <header className=" flex mt-12 bg-white px-8 place-content-center">
      <figure className="relative h-96 w-9/12">
      <Image
        className="h-full w-full rounded-xl object-cover object-center"
        src="/image/hero/7.jpg"
        alt="nature image"
      />
      <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <div>
          <Typography variant="h5" color="blue-gray">
            {title}
          </Typography>
          <Typography color="gray" className="mt-2 font-normal">
          {subtitle}
          </Typography>
        </div>
        <Typography variant="h5" color="blue-gray">
        {page}
        </Typography>
      </figcaption>
    </figure>
    </header>
  );
}
export default Hero;
