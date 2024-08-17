"use client";

import React from "react";
import {
  Button,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import NewsCard from "@/components/news-card";
import { useTranslations } from "next-intl";

const NEWS = [
  {
    img: `/image/hero/1.jpg`,
    category: "Natasha Wing",
    title: "Advanced Firefighting Techniques Training",
    desc: "The National School of Firefighters has launched an advanced training program focusing on modern firefighting techniques, aimed at enhancing the skills of our trainees.",
  },
  {
    img: `/image/hero/21.jpg`,
    category: "Launch of National Fire Safety Awareness Week",
    title: "Launch of National Fire Safety Awareness Week",
    desc: "Join us for the National Fire Safety Awareness Week, where we will host workshops and seminars to educate the public on fire prevention and safety measures."
  },
  {
    img: `/image/hero/18.jpg`,
    category: "Helen W. Colby",
    title: "Joint Training Initiative with International Fire Departments",
    desc: "We are proud to announce our new joint training initiative with several international fire departments to exchange knowledge and expertise.",
  },
  {
    img: `/image/hero/12.jpg`,
    category: "Walter Pauk",
    title: "Graduation Ceremony for the 2024 Batch",
    desc: "Celebrate with us as we honor the graduating class of 2024, who have successfully completed their rigorous training at the National School of Firefighters.",
    price: "$99",
    offPrice: "$79",
  },
];

const NEWS_TABS = [
  "Training Programs",
  "International Collaborations",
  "Events & Ceremonies",
  "Recruitment & Enrollments",
  "Safety Campaigns",
];

export function News() {
  const t = useTranslations();
  const [activeTab, setActiveTab] = React.useState("Training Programs");

  return (
    <section className="px-8 pt-20 pb-10">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-2">
          {t('news.title')}
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-9/12"
        >
          {t('news.description')}
        </Typography>
        <div className="mt-12 flex items-center justify-center">
          <Tabs value={activeTab} className="w-full">
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
      </div>
      <div className="container mx-auto grid grid-cols-1 items-start gap-x-20 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {NEWS.map((props, key) => (
          <NewsCard key={key} {...props} />
        ))}
      </div>
      <div className="grid place-items-center">
        <Button className="mt-16" variant="outlined">
          {t('news.show_more')}
        </Button>
      </div>
    </section>
  );
}


export default News