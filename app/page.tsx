"use client";

import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import {  FaArrowRight, FaHome, FaUser } from "react-icons/fa";
// import AboutSection from "@/sections/about";
// import ContactSection from "@/sections/contact";
// import FeaturedSection from "@/sections/featured";
// import LandingSection from "@/sections/landing";
import dynamic from "next/dynamic";
import Input from "@/components/ui/input";
import TextArea from "@/components/ui/text-area";
import Profile from "@/components/ui/profile";
import FancyButton from "@/components/ui/fancy-button";
import LiveClock from "@/components/ui/live-clock";
import MagnetciWrapper from "@/components/visualEffects/magnetic-wrapper";
import ScrollDown from "@/components/ui/scroll-down";


// Dynamic import WaterWaveWrapper to ensure it's only used in the client-side environment
const WaterWaveWrapper = dynamic(
  () => import("@/components/visualEffects/WaterWaveWrapper"),
  { ssr: false }
);

export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius="3"
      perturbance="5"
      resolution="2048"
    >
      {() => (
        // <div className="pb-8">


        <div className="w-full p-10">
         <div className="max-w-2xl mx-auto">
          <Card title="UI components">
            <div className="flex justify-between">
              <Button>Basic Button</Button>
             <Button link="https://google.com">Link Button</Button>
             <Button isIcon><FaUser/></Button>
             <Button><FaHome/> Home Page</Button>
            </div>
            <Input type="text" name="exampleInput" placeholder="Write some things"/>
            <Input type="text" name="exampleInput" placeholder="Write some things" icon={<FaUser/>}/>
            <TextArea name="exampleTextArea" placeholder="Write some things" icon = {<FaHome/>}/>
            <TextArea name="exampleTextArea" placeholder="Write some things"/>
            <Profile/>
            <MagnetciWrapper className="w-[300px]">
              <FancyButton text="Let's Talk" icon={<FaArrowRight/>}/>
            </MagnetciWrapper>
            <LiveClock timeZone="Australia/Sydney"/>
            <MagnetciWrapper>
              <ScrollDown/>
            </MagnetciWrapper>
             
          </Card>
         </div>
        



          {/* <LandingSection />
          <FeaturedSection />
          <AboutSection />
          <ContactSection /> */}
        </div>
      )}
    </WaterWaveWrapper>
  );
}
