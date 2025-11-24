import Image from "next/image";

import SocialMediaBar from "../SocialMediaBar";
import {
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandPinterest,
  IconBrandTelegram,
  IconBrandGithubFilled,
  IconBrandTiktok,
  IconBrandYoutubeFilled,
  IconBrandX,
} from "@tabler/icons-react";
import SignupFormDemo from "../signup-form-demo";
import { Highlighter } from "../ui/highlighter";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
export interface SocialMediaLinksType {
  icon: React.ReactNode;
  link: string;
}
const socialMediaLinks: SocialMediaLinksType[] = [
  {
    icon: <IconBrandGithub className="md:w-8 md:h-8" />,
    link: "https://github.com",
  },
  {
    icon: <IconBrandTwitter className="md:w-8 md:h-8" />,
    link: "https://twitter.com",
  },
  {
    icon: <IconBrandLinkedin className="md:w-8 md:h-8" />,
    link: "https://linkedin.com",
  },
  {
    icon: <IconBrandFacebook className="md:w-8 md:h-8" />,
    link: "https://facebook.com",
  },
  {
    icon: <IconBrandInstagram className="md:w-8 md:h-8" />,
    link: "https://instagram.com",
  },
  {
    icon: <IconBrandYoutube className="md:w-8 md:h-8" />,
    link: "https://youtube.com",
  },
  {
    icon: <IconBrandPinterest className="md:w-8 md:h-8" />,
    link: "https://pinterest.com",
  },
  {
    icon: <IconBrandTelegram className="md:w-8 md:h-8" />,
    link: "https://telegram.org",
  },
];

export default function ContactMeSection() {
  return (
    <>
      <h2 className=" text-center font-nunito font-bold text-3xl sm:text-4xl text-(--yellow-p-200) mt-16 mb-8 tracking-tight uppercase ">
        <Highlighter
          action="underline"
          isView
          strokeWidth={2}
          iterations={3}
          color="var(--yellow-p-200)"
          padding={12}
          animationDuration={1000}
        >
          Contact Me 🤝
        </Highlighter>
      </h2>
      <div className="relative">
        <div className="">
          <section
            id="contact"
            className="relative max-w-[1200px] mx-auto  flex flex-col px-6 md:px-0 pt-20"
          >
            <div className="w-full max-w-[1200px] grow   flex flex-col md:flex-row items-end lg:gap-20 md:px-4 xl:px-0 gap-4">
              <div className="w-full lg:w-1/2   flex mb-4   justify-center order-1 md:order-2 ">
                <SignupFormDemo />
              </div>
              <div className="w-full lg:w-1/2 flex justify-center  order-2 md:order-1 ">
                {/* <Image
                  src="/images/contactFrame.png"
                  alt="Ali Ghanbarzadeh"
                  width={400}
                  height={400}
                /> */}
              </div>
            </div>

            <div className="mt-8 flex justify-center w-full py-2 space-x-4 md:space-x-8">
              <div
                className="    
                    `z-10 flex size-10 items-center justify-center   cursor-pointer  transition-all duration-700 ease-out      group 
          overflow-hidden 
            "
              >
                <GitHubLogoIcon
                  className="
              size-6 text-white/50 
              transition-all duration-500 group-hover:scale-120 group-hover:text-white/80 "
                />
              </div>
              <div
                className="    
                    `z-10 flex size-10 items-center justify-center   cursor-pointer  transition-all duration-700 ease-out      group 
          overflow-hidden 
            "
              >
                <LinkedInLogoIcon
                  className="
              size-6 text-white/50 
              transition-all duration-500 group-hover:scale-120 group-hover:text-white/80 "
                />
              </div>
              <div
                className="    
                    `z-10 flex size-10 items-center justify-center   cursor-pointer  transition-all duration-700 ease-out      group 
          overflow-hidden 
            "
              >
                <IconBrandYoutube
                  className="
              size-7 text-white/50 
              transition-all duration-500 group-hover:scale-120 group-hover:text-white/80 "
                />
              </div>
              <div
                className="    
                    `z-10 flex size-10 items-center justify-center   cursor-pointer  transition-all duration-700 ease-out      group 
          overflow-hidden 
            "
              >
                <InstagramLogoIcon
                  className="
              size-7 text-white/50 
              transition-all duration-500 group-hover:scale-120 group-hover:text-white/80 "
                />
              </div>
              <div
                className="    
                    `z-10 flex size-10 items-center justify-center   cursor-pointer  transition-all duration-700 ease-out      group 
          overflow-hidden 
            "
              >
                <IconBrandTiktok
                  className="
              size-6 text-white/50 
              transition-all duration-500 group-hover:scale-120 group-hover:text-white/80 "
                />
              </div>
              <div
                className="    
                    `z-10 flex size-10 items-center justify-center   cursor-pointer  transition-all duration-700 ease-out      group 
          overflow-hidden 
            "
              >
                <IconBrandX
                  className="
              size-6 text-white/50 
              transition-all duration-500 group-hover:scale-120 group-hover:text-white/80 "
                />
              </div>
            </div>
            <div className="w-full text-center pb-4  ">
              <div className="mb-4 h-px w-full bg-linear-to-r from-transparent via-neutral-500 to-transparent dark:via-neutral-500" />

              <p className="text-foreground/30 text-xs md:text-xs font-bold tracking-widest">
                ©2025 DevSedaghat. All rights reserved.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
