import React from 'react';

import { TimelineBody, TimelineItem, Typography } from "@material-tailwind/react";
import Image from 'next/image';

interface ContentCardProps {
    img: string;
    title: string;
    desc: string;
    direction: string;
  }
  
  function ContentCard({ img, title, desc, direction }: ContentCardProps) {
    return (
      <TimelineItem>
        <TimelineBody className="px-6 py-14">
          <div className={`flex flex-col lg:flex-row gap-10 p-6 ${
            direction === 'left' ? "" : "lg:flex-row-reverse"
          }`}>
            <Image
              width={786}
              height={786}
              className=" w-5/12 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
              src={img}
              alt="nature image"
            />
            <div className='flex flex-col p-6'>
              <Typography variant="h3">
                {title}
              </Typography>
              <br />
              <Typography color="gray" className="font-normal  text-gray-600">
              {desc}
              </Typography>
            </div>
          </div>
        </TimelineBody>
      </TimelineItem>
    );
  }
export default ContentCard