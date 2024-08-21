import React from 'react';
import Image from "next/image";

import {
    Typography,
    Card,
    CardBody,
    CardHeader,
  } from "@material-tailwind/react";
  
  interface NewsCardProps {
    img: string;
    title: string;
    desc: string;
    category: string;
  }
  
  export function NewsCard({
    img,
    category,
    title,
    desc
  }: NewsCardProps) {
    return (
      <Card color="transparent" shadow={false}>
        <CardHeader color="gray" floated={false} className="mx-0 mt-0 mb-6">
          <Image
            width={768}
            height={768}
            src={img}
            alt={title}
            className="h-full w-full scale-[1.1] object-cover object-center"
          />
        </CardHeader>
        <CardBody className="p-0">
          <Typography color="blue" className="mb-2 text-xs !font-semibold">
            {category}
          </Typography>
          <a href="#">
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
        </CardBody>
      </Card>
    );
  }
export default NewsCard;