import Image from "next/image";
import Card from "../ui/card";
import SignatureImg from "@/public/assets/images/me/signature.png";
import Button from "../ui/button";
import { FaDownload } from "react-icons/fa";
import Socials from "../ui/socials";

export default function ResumeCard() {
  return (
    <Card className="md:h-full ">
      <p className="text-lg xl:text-2xl font-medium text-primary-foreground">
      Graduate student at the University of Sydney, pursuing a Master&apos;s in Software Engineering, and a passionate full-stack developer. Armed with a portfolio of innovative projects, I thrive at the crossroads of creativity and technology. With a sharp eye for AI-powered solutions and a knack for mastering new skills quickly, I bring a relentless drive for learning and growth to every challenge. Whether it’s crafting intuitive front-end designs or engineering robust back-end systems, I deliver with both precision and empathy. Ready to collaborate and create the future? Let’s innovate, inspire, and make the digital world a friendlier place! 🚀🌏
      </p>
      {/*Signature*/}
      <div className="flex justify-center ">
        <Image className="h-32 w-2/3 rounded-md mb-12" src={SignatureImg} alt="Mark" />
      </div>
      {/*Socials and resume btn*/}
      <div className="flex items-center justify-between md:absolute md:bottom-6 md:left-6 md:w-[calc(100%-48px)]">
        {/*Socials*/}
        <Socials />
        <a href="/resume_test.pdf" download="mark-zhang-resume.pdf">
          <Button>
            <FaDownload />
            Resume
          </Button>
        </a>
        
      </div>
    </Card>
  );
}
