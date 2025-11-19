import React from "react";

import Link from "next/link";

export interface SocialMediaLinksType {
  icon: React.ReactNode;
  link: string;
}
const SocialMediaBar = ({
  socials,
}: {
  socials: SocialMediaLinksType[];
  className?: string;
}) => {
  return (
    <div className="w-[95%] mx-auto bg-black p-2 md:p-4 rounded-3xl neon-animated flex flex-wrap justify-evenly items-center">
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 md:p-3 border-2 border-white/80 rounded-full drop-shadow-2xl bg-white/50 m-2 transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-white/70 md:mx-4 "
        >
          <div className="flex justify-center items-center">{social.icon}</div>
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaBar;
