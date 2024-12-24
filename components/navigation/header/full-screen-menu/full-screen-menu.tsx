import { motion } from "framer-motion";
import { menuSlide } from "./animation";
import Curve from "./curve";
import Profile from "@/components/ui/profile";
import NavLink from "./nav-link";
import Link from "next/link";
import MenuCard from "./menu-card";

export default function FullScreenMenu() {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen w-full bg-black fixed top-0 right-0 text-primary-foreground z-40 font-oswald"
    >
      <div className="relative w-full pl-[1%]">
        {/*Profile*/}
        <div className="absolute top-0">
          <Profile />
        </div>
      </div>
      {/*Menu and card*/}
      <div className="absolute bottom-32 w-full lg:px-[5%]">
        <div
          className="grid relative"
          style={{ gridTemplateColumns: "1fr 500px" }}
        >
          <div className="pl-4 ml-20  flex flex-col justify-end">
            {navItems.map((item, index) => (
              <NavLink key={index} data={{ ...item, index }} />
            ))}
          </div>
          {/*Menu about card*/}
          <MenuCard />
        </div>
      </div>
      {/*Footer links*/}
      <div className="w-[95%] pl-[5%] absolute bottom-8">
        <div className="flex flex-wrap items-center justify-between uppercase text-white text-lg ">
          {/*----Left--------------*/}
          {/* <div className="flex items-center gap-4">
            <Link href="/">LEGAL NOTICE</Link>
            <Link href="/">404</Link>
            <Link href="/">LEGALSTYLE</Link>
          </div> */}
          {/*----Middle--------------*/}
          <div className="flex items-center gap-4 ">
            <Link className="hover:underline" href="/">LINKEDIN</Link>
            <Link className="hover:underline" href="/">GITHUB</Link>
            <Link className="hover:underline" href="/">FACEBOOK</Link>
            <Link className="hover:underline" href="/">DISCORD</Link>
            <Link className="hover:underline" href="/">WHATSAPP</Link>
          </div>
          {/*----rIGHT--------------*/}
          <div className="flex items-center gap-4">
            <Link href="/">©2024</Link>
          </div>
        </div>
      </div>
      {/*Curve svg effect*/}
      <Curve />
    </motion.div>
  );
}

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Featured",
    href: "/#featured",
  },
  {
    title: "About",
    href: "/#about",
  },
  {
    title: "Projects",
    href: "/#projects",
  },
  {
    title: "Contact",
    href: "/#contact",
  },
];
