import React from "react";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "../icons/Icons";

function HeroLinks() {
  const links = [
    {
      Icon: GithubIcon,
      href: "https://github.com/MrDrogoa",
      label: "Github",
    },
    {
      Icon: InstagramIcon,
      href: "https://www.instagram.com/j.daniel.01/",
      label: "Instagram",
    },
    {
      Icon: LinkedinIcon,
      href: "https://www.linkedin.com/in/daniel-rosales-1b737a1a9/",
      label: "LinkedIn",
    },
    {
      Icon: WhatsappIcon,
      href: "https://wa.me/+56962857073",
      label: "WhatsApp",
    },
  ];

  return (
    <div className="hidden lg:flex justify-center flex-col items-center gap-4 py-6 px-3 border-2 border-white rounded-lg bg-transparent text-white absolute left-5 top-1/2 -translate-y-1/2 z-10">
      {links.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="bg-white rounded-md p-1 flex items-center justify-center hover:bg-[#FF6F61] transition-colors "
        >
          <Icon className="text-2xl text-[#202023]" />
        </a>
      ))}
    </div>
  );
}

export default HeroLinks;
