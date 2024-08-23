"use client";

import { IconButton, Tab, Tabs, TabsHeader, Typography } from "@material-tailwind/react";
import React from "react";
import { NewsCard } from "@/components";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import next from "next";
import { useTranslations } from "next-intl";

const NEWS = [
  {
    img: `/image/hero/1.jpg`,
    category: "30 Jan 2024",
    title: "Advanced Firefighting Techniques Training",
    desc: "The National School of Firefighters has launched an advanced training program focusing on modern firefighting techniques, aimed at enhancing the skills of our trainees.",
  },
  {
    img: `/image/hero/21.jpg`,
    category: "30 Jan 2024",
    title: "Launch of National Fire Safety Awareness Week",
    desc: "Join us for the National Fire Safety Awareness Week, where we will host workshops and seminars to educate the public on fire prevention and safety measures."
  },
  {
    img: `/image/hero/18.jpg`,
    category: "30 Jan 2024",
    title: "Joint Training Initiative with International Fire Departments",
    desc: "We are proud to announce our new joint training initiative with several international fire departments to exchange knowledge and expertise.",
  },
  {
    img: `/image/hero/12.jpg`,
    category: "30 Jan 2024",
    title: "Graduation Ceremony for the 2024 Batch",
    desc: "Celebrate with us as we honor the graduating class of 2024, who have successfully completed their rigorous training at the National School of Firefighters.",
  },
];

const NEWS_TABS = [
  "Training Programs",
  "International Collaborations",
  "Events & Ceremonies",
  "Recruitment & Enrollments",
  "Safety Campaigns",
];

function ContentNews() {
  const t = useTranslations();
  const [activeTab, setActiveTab] = React.useState("Training Programs");
  const [active, setActive] = React.useState(1);
 
  const next = () => {
    if (active === 10) return;
 
    setActive(active + 1);
  };
 
  const prev = () => {
    if (active === 1) return;
 
    setActive(active - 1);
  };

  return (
      <div className="container mx-auto">
      <div className="flex items-center justify-center pb-12">
          <Tabs value={activeTab} className="w-full bg-[#f6f6f6]">
            <TabsHeader
              className="h-12 bg-transparent"
              indicatorProps={{
                className: "!bg-gray-900 rounded-lg",
              }}
            >
              {NEWS_TABS.map((name) => (
                <Tab
                  key={name}
                  value={name}
                  className={`!font-medium capitalize transition-all duration-300
                    ${activeTab === name ? "text-white" : "capitalize"}
                  `}
                  onClick={() => setActiveTab(name)}
                >
                  {name}
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
        </div>
      <div className="container mx-auto grid grid-cols-1 items-start gap-x-16 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
        {NEWS.map((props, key) => (
          <NewsCard key={key} {...{...props, page:'news'}} />
        ))}
      </div>  

      <div className="justify-center pt-12 flex items-center gap-8 container mx-auto">
      <IconButton
        size="sm"
        variant="outlined"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
      <Typography color="gray" className="font-normal">
        {t('pagination.page')} <strong className="text-gray-900">{active}</strong> {t('pagination.of')}{" "}
        <strong className="text-gray-900">10</strong>
      </Typography>
      <IconButton
        size="sm"
        variant="outlined"
        onClick={next}
        disabled={active === 10}
      >
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
    </div>   
      </div>
  );
}
export default ContentNews;
