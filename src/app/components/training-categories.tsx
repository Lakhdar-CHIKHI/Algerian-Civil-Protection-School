"use client";

import React from "react";
import CategoryCard from "@/components/category-card";

import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import {
  GlobeEuropeAfricaIcon,
  HeartIcon,
  FireIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";



export function TrainingCategories() {
  const t = useTranslations();

  const CATEGORIES = [
    {
      img: "/image/Background_2.jpg",
      icon: FireIcon,
      title: t('training.training_2.title'),
      desc: t('training.training_2.description'),
    },
    {
      img: "/image/hero/29.jpg",
      icon: LifebuoyIcon,
      title: t('training.training_3.title'),
      desc: t('training.training_3.description'),
    },
    {
      img: "/image/hero/11.jpg",
      icon: HeartIcon,
      title: t('training.training_4.title'),
      desc: t('training.training_4.description'),
    },
    {
      img: "/image/hero/18.jpg",
      icon: GlobeEuropeAfricaIcon,
      title: t('training.training_5.title'),
      desc: t('training.training_5.description'),
    },
  ];

  return (
    <section className="container mx-auto px-8 pb-5 pt-5">
      <div className="mb-10 lg:mb-20 grid place-items-center text-center">
        <Typography color="blue-gray" className="my-3 text-2xl font-bold lg:text-4xl">
          {t("training.title")}
        </Typography>
        <Typography variant="lead" className="!text-gray-500 lg:w-11/12 text-sm lg:text-xl lg:pt-2">
        {t("training.description")}
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card
          color="gray"
          className="relative grid h-full w-full place-items-center overflow-hidden text-center"
        >
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          <CardBody className="relative w-full">
            {/* <Typography color="white" className="text-xs font-bold opacity-50">
              up to 40% OFF
            </Typography> */}
            <Typography variant="h4" className="mt-9" color="white">
              {t('training.training_1.title')}
            </Typography>
            <Typography
              color="white"
              className="mt-4 mb-14 font-normal opacity-70"
            >
              {t('training.training_1.description')}
            </Typography>
            <Button size="sm" color="white">
              {t('news.show_more')}
            </Button>
          </CardBody>
        </Card>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(0, 2).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(2, 4).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrainingCategories;
