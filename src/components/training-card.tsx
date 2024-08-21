import React from 'react';

import { TimelineBody, TimelineItem, Typography } from "@material-tailwind/react";
import { useTranslations } from 'next-intl';
import { DocumentArrowDownIcon } from '@heroicons/react/24/solid';

interface TrainingCardProps {
    title: string;
    desc: string;
    note: string;
    trainings: {
      name: string;
      link: string;
    }[];
  }
  
  function TrainingCard({ title, desc, note, trainings }: TrainingCardProps) {
    const t = useTranslations();
    return (
      <TimelineItem>
        <TimelineBody >
          <div className={`flex flex-cols gap-10 p-6 `}>
            <div className='flex flex-col p-6'>
              <Typography variant="h3">
                {title}
              </Typography>
              <br />
              <Typography color="gray" className="font-normal  text-gray-600">
              {desc}
              </Typography>
              <Typography  className="font-bold  py-6">
              {note}
              </Typography>
              <table className="w-8/12 min-w-max table-auto text-left">
                <tbody>
                  {trainings.map(({ name, link }, index) => {
                    const isLast = index === trainings.length - 1;
                    const classes = isLast ? "py-4" : "py-4 border-b border-gray-300";
      
                    return (
                      <tr key={name} className="hover:bg-gray-50 cursor-pointer" >
                        <td className={`${classes}`}>
                          <a className='flex px-2' target='_blank' href={link}>
                          <DocumentArrowDownIcon
                            strokeWidth={2.5}
                            className={'hidden h-4 w-4 transition-transform lg:block mr-4 self-center'}
                            />
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                            >
                            {name}
                          </Typography>
                            </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </TimelineBody>
      </TimelineItem>
    );
  }
export default TrainingCard