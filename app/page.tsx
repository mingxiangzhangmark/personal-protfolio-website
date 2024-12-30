"use client";

import AboutSection from "@/sections/about";
import ContactSection from "@/sections/contact";
import FeaturedSection from "@/sections/featured";
import LandingSection from "@/sections/landing";
import dynamic from "next/dynamic";
import 'react-toastify/dist/ReactToastify.css';
import { Analytics } from '@vercel/analytics/next';
// import Link from "next/link";



// Dynamic import WaterWaveWrapper to ensure it's only used in the client-side environment
const WaterWaveWrapper = dynamic(
  () => import("@/components/visualEffects/WaterWaveWrapper"),
  { ssr: false }
);

export default function Home() {
  return (
    <div>
      <WaterWaveWrapper
      imageUrl=""
      dropRadius="3"
      perturbance="5"
      resolution="2048"
    >
      {() => (
        <div className="pb-8">
        

          <LandingSection  />
          <FeaturedSection />
          <AboutSection />
          <ContactSection />
          {/* <Link className="text-center block text-blue-500 text-lg font-bold mt-10" href="#about">
            
            About
            
          </Link> */}
        </div>
      )}
    </WaterWaveWrapper>
     <Analytics />
    </div>
    
  );
}
