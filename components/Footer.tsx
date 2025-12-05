import {
  IconBrandYoutube,
  IconBrandTiktok,
  IconBrandX,
} from "@tabler/icons-react";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

const Footer = ({
  className,
  textStyle,
}: {
  className?: string;
  textStyle?: string;
}) => {
  return (
    <div>
      {/* Social links */}
      <nav
        aria-label="Social links"
        className={`flex justify-center w-auto ${className}  `}
      >
        <Link target="_blank" href={"https://www.youtube.com/@TheAmirSedaghat"}>
          <IconBrandYoutube className="size-7 text-white/50 transition-all duration-300 hover:scale-110 hover:text-white/75 cursor-pointer" />
        </Link>

        {/* TikTok */}
        <Link target="_blank" href={"https://www.tiktok.com/@TheAmirSedaghat"}>
          <IconBrandTiktok className="size-6 text-white/50 transition-all duration-300 hover:scale-110 hover:text-white/75 cursor-pointer" />
        </Link>
        {/* LinkedIn */}
        <Link target="_blank" href={"https://www.linkedin.com/in/AmirSedaghat"}>
          <LinkedInLogoIcon className="size-6 text-white/50 transition-all duration-300 hover:scale-110 hover:text-white/75 cursor-pointer" />
        </Link>

        {/* Github */}
        <Link target="_blank" href={"https://github.com/TheAmirSedaghat"}>
          <GitHubLogoIcon className="size-6 text-white/50 transition-all duration-300 hover:scale-110 hover:text-white/75 cursor-pointer" />
        </Link>
        {/* Instagram */}
        <Link
          target="_blank"
          href={"https://www.instagram.com/TheAmirSedaghat/"}
        >
          <InstagramLogoIcon className="size-7 text-white/50 transition-all duration-300 hover:scale-110 hover:text-white/75 cursor-pointer" />
        </Link>

        {/* X */}
        <Link
          className="rounded-full"
          target="_blank"
          href={"https://x.com/TheAmirSedaghat"}
        >
          <IconBrandX className="size-6 text-white/50 transition-all duration-300 hover:scale-110 hover:text-white/75 cursor-pointer" />
        </Link>
      </nav>

      <div className="h-px w-full bg-linear-to-r from-transparent via-neutral-500 to-transparent dark:via-neutral-500" />
      <div className="w-full text-center ">
        <h2
          className={`text-white/30 text-xs md:text-sm font-semibold leading-normal  uppercase ${textStyle}`}
        >
          ©2025 Amir Sedaghat. All rights reserved.
        </h2>
      </div>
    </div>
  );
};

export default Footer;
