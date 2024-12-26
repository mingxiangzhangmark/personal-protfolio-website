import Button from "./button";
import { SiUdemy } from "react-icons/si";
import { FaLinkedinIn} from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function Socials() {
  return (
    <div className="flex items-center flex-wrap gap-3">
      {socials.map((social, i) => (
        <Button key={i} link={social.link} isIcon>
          <span className="w-7 h-7 grid place-items-center">{social.icon}</span>
        </Button>
      ))}
    </div>
  );
}

const socials = [
{
    icon: <FaGithub className="w-5 h-5" />,
    link: "https://github.com/mingxiangzhangmark",
    username: "mingxiangzhangmark",
  },
  {
    icon: <FaLinkedinIn className="w-5 h-5" />,
    link: "https://www.linkedin.com/in/mingxiang-zhang-04b3722b7/",
    username: "Mingxiang (Mark) Zhang",
  },
  {
    icon: <SiUdemy className="w-4 h-4" />,
    link: "https://www.udemy.com/user/mingxiangzhang/",
    username: "Mingxiang Zhang",
  },
  
  
  // {
  //   icon: <FaInstagram className="w-5 h-5" />,
  //   link: "https://www.instagram.com/med_hajji7/",
  //   username: "Mohamed HAJJI",
  // },
];
