import React from 'react';
import Image from "next/image";

import {
    Typography,
    Card,
    CardBody,
    CardHeader,
    Button,
    Chip,
  } from "@material-tailwind/react";
  
  interface NewsCardProps {
    img: string;
    title: string;
    desc: string;
    category: string;
    page?: string;
  }
  
  export function NewsCard({
    img,
    category,
    title,
    desc,
    page = 'home'
  }: NewsCardProps) {
    return (
      <Card color="transparent" shadow={false} >
        <CardHeader color="gray" floated={false} className="mx-0 mt-0 mb-4">
          <Image
            width={768}
            height={768}
            src={img}
            alt={title}
            className={`h-full w-full scale-[1] object-cover object-center ${page === 'news' ? '' : ''}`} // remove opacity from home page 
          />
        </CardHeader>
        <CardBody className="p-0">
          <Typography className={`mb-2 text-xs !font-semibold ${page === 'news' ? 'text-gray-600' : 'text-blue-600'}`}>
            {category}
          </Typography>
          <a href="/news/5">
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-3 font-bold normal-case xl:w-64"
            >
              {title}
            </Typography>
          </a>
          <Typography className="mb-2 font-normal !text-gray-500">
            {desc}
          </Typography>
          {
            page === 'news' && <Chip variant="ghost" value="chip ghost" className="rounded-full capitalize !absolute left-4 top-4 bg-black/70 text-white font-normal" />
          }
        </CardBody>
      </Card>
    );
  }
export default NewsCard;