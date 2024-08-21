'use client'

import ContentCard from "@/components/content-card";
import { HomeIcon, BellIcon, CurrencyDollarIcon, BuildingLibraryIcon, ShieldExclamationIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";
import { Timeline, TimelineItem, TimelineConnector, TimelineHeader, TimelineIcon, Typography, TimelineBody } from "@material-tailwind/react";
import { useTranslations } from "next-intl";

function AboutContent() {
    const t = useTranslations();
    const CONTENT = [
        {
          img: "/image/hero/12.jpg",
          title: t('content.content_1.title'),
          desc: t('content.content_1.description'),
          direction: 'right',
        },
        {
            img: "/image/hero/25.jpg",
            title: t('content.content_2.title'),
            desc: t('content.content_2.description'),
            direction: 'left',
        },
        {
            img: "/image/hero/18.jpg",
            title: t('content.content_3.title'),
            desc: t('content.content_3.description'),
            direction: 'right',
        },
      ];
    return (
        <section className="container mx-auto pb-16 pt-16 ">
            <Timeline>
                {CONTENT.map((props, key) => (
                    <ContentCard key={key} {...props} />
                ))}
            </Timeline>
        </section>
    );
}

export default AboutContent;