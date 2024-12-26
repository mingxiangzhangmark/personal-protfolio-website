import FeaturedCard from "@/components/cards/featured/featured-card";
import ExpandableFeatured from "@/components/expandables/expandable-featured";
import Heading from "@/components/heading/heading";

import { featuredData } from "@/data";

const MainFeatured = featuredData[0]; 

export default function FeaturedSection() {
  const firstExpandableData = featuredData.slice(1, 4); // 第 2-4 项
  // const secondExpandableData = featuredData.slice(4, 7); // 第 5-7 项
  return (
    <div id="projects" className="pt-24 px-3 lg:px-8">
      {/*Heading*/}
      <Heading number="01" title_1="Featured" title_2="Work" />
      {/*Main Featured Card*/}
      <FeaturedCard
        active
        title={MainFeatured.title}
        tag={MainFeatured.tag}
        video={MainFeatured.video}
        link={MainFeatured.link}
      />
      <div className="mt-24">
        <ExpandableFeatured data={firstExpandableData}/>
        {/*if you want to add more expandable section, you can uncomment the code below*/}
        {/* <ExpandableFeatured data={secondExpandableData}/> */}
      </div>
    </div>
  );
}
