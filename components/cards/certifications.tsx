import React from "react";
import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";


export default function CertificationsCard() {
  return (
    <Card title="My Certifications">
      <Timeline>
        {CertificationssData.map((ex, i) => (
          <TimelineItem
            key={i}
            date={ex.date}
            title={ex.title}
            subTitle={ex.subTitle}
          />
        ))}
      </Timeline>
    </Card>
  );
}

const CertificationssData = [
  {
    date: "2024",
    title: "AWS Cloud Practitioner (CLF-C02)",
    subTitle: "Amazon Web Services",
  },
  { 
    date: "2025",
    title: "AWS Certified Solutions Architect - Associate",
    subTitle: "Amazon Web Services",
  },
  {
    date: "2025",
    title: "Certified CSS Developer (W3C)",
    subTitle: "W3C",
  },
  {
    date: "2025",
    title: "Certified HTML Developer (W3C)",
    subTitle: "W3C",
  },
];
