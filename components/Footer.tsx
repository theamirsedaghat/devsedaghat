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
        <GitHubLogoIcon className="size-6 text-white/50 transition-all duration-300 hover:scale-110 hover:text-white/75 cursor-pointer" />
        <LinkedInLogoIcon className="size-6 text-white/50 transition-all duration-300 hover:scale-110 hover:text-white/75 cursor-pointer" />
        <IconBrandYoutube className="size-7 text-white/50 transition-all duration-300 hover:scale-110 hover:text-white/75 cursor-pointer" />
        <InstagramLogoIcon className="size-7 text-white/50 transition-all duration-300 hover:scale-110 hover:text-white/75 cursor-pointer" />
        <IconBrandTiktok className="size-6 text-white/50 transition-all duration-300 hover:scale-110 hover:text-white/75 cursor-pointer" />
        <IconBrandX className="size-6 text-white/50 transition-all duration-300 hover:scale-110 hover:text-white/75 cursor-pointer" />
      </nav>

      <div className="h-px w-full bg-linear-to-r from-transparent via-neutral-500 to-transparent dark:via-neutral-500" />
      <div className="w-full text-center ">
        <h2
          className={`text-white/30 text-xs md:text-sm font-semibold leading-normal  uppercase ${textStyle}`}
        >
          ©2025 DevSedaghat. All rights reserved.
        </h2>
      </div>
    </div>
  );
};

export default Footer;
