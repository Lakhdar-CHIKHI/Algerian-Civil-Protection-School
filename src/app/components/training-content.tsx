'use client'

import TrainingCard from "@/components/training-card";
import { Timeline } from "@material-tailwind/react";
import { useTranslations } from "next-intl";

function TrainingContent() {
    const t = useTranslations();
    const CONTENT = [
        {
          title: t('training_content.content_1.title'),
          desc: t('training_content.content_1.description'),
          note: t('training_content.content_1.note'),
          trainings: [
            {
                name: t('training_content.content_1.trainings.1.name'),
                link: t('training_content.content_1.trainings.1.link'),
            },
            {
                name: t('training_content.content_1.trainings.2.name'),
                link: t('training_content.content_1.trainings.2.link'),
            },
          ]
        },
        {
            title: t('training_content.content_2.title'),
            desc: t('training_content.content_2.description'),
            note: t('training_content.content_2.note'),
            trainings: [
                {
                    name: t('training_content.content_2.trainings.1.name'),
                    link: t('training_content.content_2.trainings.1.link'),
                },
                {
                    name: t('training_content.content_2.trainings.2.name'),
                    link: t('training_content.content_2.trainings.2.link'),
                },
              ]
        },
        {
            title: t('training_content.content_3.title'),
            desc: t('training_content.content_3.description'),
            note: t('training_content.content_3.note'),
            trainings: [
                {
                    name: t('training_content.content_3.trainings.1.name'),
                    link: t('training_content.content_3.trainings.1.link'),
                },
                {
                    name: t('training_content.content_3.trainings.2.name'),
                    link: t('training_content.content_3.trainings.2.link'),
                },
              ]
        },
      ];
    return (
        <section className="container mx-auto pb-16 pt-16 ">
            <Timeline>
                {CONTENT.map((props, key) => (
                    <TrainingCard key={key} {...props} />
                ))}
            </Timeline>
        </section>
    );
}

export default TrainingContent;