"use client";
import React from "react";

import { Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { useTranslations } from "next-intl";


interface IconProps {
  id: number,
  open: number
}
function Icon({ id, open }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export function Faq() {
  const t = useTranslations();
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  const FAQS = [
    {
      title: t('faq.title_1'),
      desc: t('faq.description_1'),
    },
    {
      title: t('faq.title_2'),
      desc: t('faq.description_2'),
    },
    {
      title: t('faq.title_3'),
      desc: t('faq.description_3'),
    },
    {
      title: t('faq.title_4'),
      desc: t('faq.description_4'),
    },
    {
      title: t('faq.title_5'),
      desc: t('faq.description_5'),
    },
  ];

  return (
    <section className="px-8 py-12">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography variant="h1" color="blue-gray" className="mb-4">
            {t('faq.title')}
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 w-full max-w-2xl !text-gray-500"
          >
            {t('faq.description')}
          </Typography>
        </div>
        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {FAQS.map(({ title, desc }, key) => (
            <Accordion
              key={key}
              open={open === key + 1}
              icon={<Icon id={key+1} open={open} />}
              onClick={() => handleOpen(key + 1)}
            >
              <AccordionHeader className="text-left text-gray-900">
                {title}
              </AccordionHeader>
              <AccordionBody >
                <Typography
                  color="blue-gray"
                  className="font-normal text-gray-500"
                >
                  {desc}
                </Typography>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Faq;
