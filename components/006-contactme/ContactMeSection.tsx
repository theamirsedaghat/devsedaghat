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
} from "@tabler/icons-react";
import SignupFormDemo from "../signup-form-demo";
import { Highlighter } from "../ui/highlighter";
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
      <h2 className=" text-center font-nunito font-bold text-4xl text-(--blue-p-400) my-8 tracking-tight uppercase ">
        <Highlighter
          action="underline"
          isView
          strokeWidth={2}
          iterations={3}
          color="var(--blue-p-400)"
          padding={16}
          animationDuration={1000}
        >
          Contact Me
        </Highlighter>
      </h2>
      <div className="relative">
        {/* <div
          className="
        pointer-events-none absolute rounded-full bg-[linear-gradient(80deg,_rgba(158,0,0,0.6)_20%,_rgba(63,3,86,0.6)_3%)] 
        //? position 
        -left-[25%] md:-left-[15%] lg:-left-[5%] 2xl:left-[10%] 
        bottom-[0%]  lg:bottom-[5%] 
        //? blur1
        blur-[3rem] xl:blur-[2rem]
        "
          style={{
            width: "clamp(280px, 28vw, 370px)",
            height: "clamp(380px, 36vw, 420px)",
            rotate: "85deg",
          }}
        /> */}
        {/* <div
          className="
        pointer-events-none absolute rounded-full bg-[linear-gradient(80deg,_rgba(158,0,0,0.6)_45%,_rgba(63,3,86,0.6)_3%)] 
        //? position 
      right-[15%]  2xl:right-[10%] 
        
        //? blur1
        blur-[5rem]
        "
          style={{
            width: "clamp(250px, 28vw, 400px)",
            height: "clamp(300px, 36vw, 480px)",
            rotate: "35deg",
          }}
        /> */}

        <div className="">
          <section
            id="contact"
            className="relative max-w-[1200px] mx-auto  flex flex-col    px-6 md:px-0 pt-20"
          >
            <div className="w-full max-w-[1200px] grow   flex flex-col md:flex-row items-end lg:gap-20 md:px-4 xl:px-0 gap-4">
              <div className="w-full lg:w-1/2   flex mb-4   justify-center order-1 md:order-2 ">
                <SignupFormDemo />
              </div>
              <div className="w-full lg:w-1/2 flex justify-center  order-2 md:order-1 ">
                <Image
                  src="/images/contactFrame.png"
                  alt="Ali Ghanbarzadeh"
                  width={400}
                  height={400}
                />
              </div>
            </div>

            <SocialMediaBar socials={socialMediaLinks} />
            <div className="w-full  mt-8 text-center p-4  ">
              <div className="my-2 h-px w-full bg-linear-to-r from-transparent via-neutral-500 to-transparent dark:via-neutral-400" />
              <h6 className="text-foreground/30 text-sm font-bold tracking-widest">
                ©2025 DevSedaghat. All rights reserved. Design & Develop By
                DevSedaghat
              </h6>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
