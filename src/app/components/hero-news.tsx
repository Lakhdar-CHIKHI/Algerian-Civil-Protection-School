"use client";

import Image from "next/image";
import { Button, Input, Typography } from "@material-tailwind/react";
import { useTranslations } from "next-intl";
import React from "react";

function HeroNews() {
  const t = useTranslations();
  const [search, setSearch] = React.useState("");
  const onChange = (value: string) => setSearch(value);

  return (
    <header className="mt-12 bg-white px-8">
      <div className="container mx-auto grid h-full min-h-[58vh] w-full grid-cols-1 place-items-center gap-y-10 lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto lg:-mt-40">
          <Typography
            variant="h1"
            color="red"
            className="text-3xl !leading-snug"
          >
            {t('hero_news.sub_title')}
          </Typography>
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-2 max-w-sm text-3xl !leading-snug lg:mb-3 lg:text-3xl"
          >
            {t('hero_news.title')}
          </Typography>
          <Typography
            variant="lead"
            className="mb-6 font-normal !text-gray-500 md:pr-16 xl:pr-28"
          >
            {t('hero_news.description')}
          </Typography>
          <div className="relative flex w-full max-w-[24rem]">
                <Input
                  name="search"
                  type="search"
                  placeholder={t('hero_news.placeholder')}
                  value={search}
                  onChange={(e) => onChange(e.target.value)}
                  className="pr-28"
                  containerProps={{
                    className: "min-w-full",
                  }}
                  labelProps={{
                    className: "focus:hidden",
                  }}
                />
                <Button
                  size="sm"
                  color={search ? "gray" : "blue-gray"}
                  disabled={!search}
                  className="!absolute right-1 top-1 rounded"
                >
                  {t('hero_news.button')}
                </Button>
              </div>
        </div>
        <div className="self-start -scale-x-100">
          <Image width={400} height={400} src={'/image/news.svg'} alt={""} />
        </div>
      </div>
    </header>
  );
}
export default HeroNews;
