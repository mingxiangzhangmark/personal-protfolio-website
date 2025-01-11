import React from "react";
import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";


export default function ExperienceCard() {
  return (
    <Card title="My Experience">
      <Timeline>
        {experiencesData.map((ex, i) => (
          <TimelineItem
            key={i}
            date={ex.date}
            title={ex.title}
            subTitle={ex.subTitle}
            link={ex.link}
            tag={ex.tag}
          />
        ))}
      </Timeline>
    </Card>
  );
}
const experiencesData = [
  {
    date: "2021 — 2023",
    title: "Teacher and Tutor",
    subTitle: "English",
    link: "/",
    tag: "Beijing, China",
  },
  {
    date: "2025",
    title: "React js full stack developer internship",
    subTitle: "None",
    link: "/",
    tag: "Remote",
  },
];
