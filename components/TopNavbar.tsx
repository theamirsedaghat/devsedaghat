"use client";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

import HamburgerMenu from "./ui/icons/HamburgerMenu";
import CloseMenu from "./ui/icons/CloseMenu";
import SocialMediaBar, { SocialMediaLinksType } from "./SocialMediaBar";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";

interface MenuNewProps {
  links?: { label: string; href: string }[];
  contactText?: string;
  onThemeToggle?: () => void;
}

const defaultLinks = [
  { label: "Hero", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
];

const MenuNew: React.FC<MenuNewProps> = ({
  links = defaultLinks,

  onThemeToggle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { theme, setTheme } = useTheme();

  // Refs برای محاسبه دقیق position و width
  const linkRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);

  // IntersectionObserver برای activeIndex
  useEffect(() => {
    // Only observe sections we actually have in `links`
    const targets = links
      .map((link) => {
        const el = document.querySelector(link.href);
        return el instanceof HTMLElement ? el : null;
      })
      .filter(Boolean) as HTMLElement[];

    if (targets.length === 0) return;

    // Use center window band so sections past "Skills" still activate
    const observer = new IntersectionObserver(
      (entries) => {
        // pick the entry with the highest intersectionRatio that belongs to `links`
        let best: IntersectionObserverEntry | null = null;

        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          const id = `#${(entry.target as HTMLElement).id}`;
          const idx = links.findIndex((l) => l.href === id);
          if (idx === -1) continue; // ignore sections not listed (e.g., #contact)

          if (!best || entry.intersectionRatio > best.intersectionRatio) {
            best = entry;
          }
        }

        if (best) {
          const id = `#${(best.target as HTMLElement).id}`;
          const idx = links.findIndex((l) => l.href === id);
          if (idx !== -1) setActiveIndex(idx);
        }
      },
      // Center-based band: element counts as active when its center is near viewport center
      {
        root: null,
        // push the observation window inward so tall sections still activate as you scroll
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [links]);

  // محاسبه position و width indicator بر اساس refs
  // Measure indicator position/width whenever activeIndex changes
  useEffect(() => {
    const updateIndicator = () => {
      const li = linkRefs.current[activeIndex];
      if (!li) return;

      const ulLeft = li.parentElement?.getBoundingClientRect().left ?? 0;
      const liLeft = li.getBoundingClientRect().left;
      setIndicatorPosition(liLeft - ulLeft);
      setIndicatorWidth(li.offsetWidth ?? 0);
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeIndex]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 200);
  });

  //? theme
  // const toggleTheme = () => {
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   setTheme(newTheme);
  //   if (onThemeToggle) onThemeToggle();
  // };

  const navVariants = {
    full: { width: "100%", maxWidth: "1200px", transition: { duration: 0.3 } },
    shrunk: { maxWidth: "1200px", transition: { duration: 0.3 } },
  };

  const drawerVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

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
      icon: <IconBrandYoutube className="md:w-8 md:h-8" />,
      link: "https://youtube.com",
    },
  ];

  return (
    <>
      <nav
        aria-label="Main navigation"
        style={{
          background:
            "linear-gradient(to bottom, rgba(22, 22, 30,.5), rgba(22, 22, 30,.5))",
        }}
        className={` fixed inset-x-0 mx-auto top-0 z-50 flex items-center justify-center px-4 py-6 backdrop-blur-xl bg-white/5 border-b border-white/5 mask-[linear-gradient(to_bottom,black,black_50%,transparent)] supports-backdrop-filter:backdrop-blur-md 
       
          `}
      >
        <div className=" mx-auto flex items-center justify-between    w-7xl">
          <Link href={"/"}>
            <span className="font-bold text-2xl">DevSedaghat</span>
          </Link>

          <div className="hidden md:flex items-center relative ">
            <ul className="flex items-center space-x-8 lg:space-x-20">
              {links.map((link, index) => (
                <motion.li
                  key={link.href}
                  ref={(el) => {
                    linkRefs.current[index] = el;
                  }}
                  layout
                >
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                    className={`text-lg  transition-colors relative z-10 ${
                      activeIndex === index
                        ? " font-semibold"
                        : "text-(--myneutral-100)/30 dark:text-(--neutral-light-300)/50 font-light"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* //? theme */}
            {/* INDICATOR پایین لینک‌ها، با translateX + width داینامیک */}
            {/* <motion.div
              className="absolute -bottom-1 h-1 bg-(--my-primary-red) rounded-full" // bottom-[-4px] برای پایین لینک‌ها
              style={{ left: 0 }} 
              animate={{
                x: indicatorPosition, 
                width: indicatorWidth,
              }}
              
            /> */}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <InteractiveHoverButton>
              <Link href={"#contact"}>Let&apos;s Talk</Link>
            </InteractiveHoverButton>
            {/* //? theme */}
            {/* <button
              className="p-[3px] relative cursor-pointer"
              onClick={toggleTheme}
            >
              <div className="absolute inset-0 bg-linear-to-r from-(--my-accent-red) to-(--my-primary-red) rounded-full" />
              <div className=" p-2 border rounded-md  relative group transition duration-200 text-white hover:bg-(--bg-light)">
                {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
              </div>
            </button> */}
          </div>

          <div className="md:hidden flex items-center space-x-4">
            {isOpen ? (
              ""
            ) : (
              <span className="text-lg font-medium">
                {links[activeIndex]?.label || "Hero"}
              </span>
            )}

            <button onClick={() => setIsOpen(!isOpen)}>
              <HamburgerMenu className="w-8 h-8 cursor-pointer" />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 backdrop-blur-sm bg-black/30 z-60"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed top-0 right-0 h-full w-5/6    bg-white/90 dark:bg-[#4444441a] backdrop-blur-lg shadow-xl z-70 overflow-y-auto rounded-bl-4xl rounded-tl-4xl flex flex-col"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="w-full flex justify-end my-6 px-4">
              <div className="flex items-center justify-between grow ">
                {/* //? theme */}
                {/* <button
                  className="p-[3px] relative cursor-pointer"
                  onClick={toggleTheme}
                >
                  <div className="absolute inset-0 bg-linear-to-r from-(--my-accent-red) to-(--my-primary-red) rounded-full" />
                  <div className="p-2 rounded-md  relative group transition duration-200 text-white hover:bg-transparent">
                    {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
                  </div>
                </button> */}

                <InteractiveHoverButton className="grow mx-4 ">
                  <Link href={"#contact"} onClick={() => setIsOpen(false)}>
                    Let&apos;s Talk
                  </Link>
                </InteractiveHoverButton>
              </div>
              <button
                className="cursor-pointer "
                onClick={() => setIsOpen(false)}
              >
                <CloseMenu className="size-8 " />
              </button>
            </div>

            <ul className="flex  grow   items-end flex-col space-y-10 p-6  ">
              {links.map((link, index) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => {
                      setActiveIndex(index);
                      setIsOpen(false);
                    }}
                    className={`text-lg  transition-colors ${
                      activeIndex === index
                        ? "text-gray-800 dark:text-white  font-semibold"
                        : "text-black/30 dark:text-white/30 font-light"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <SocialMediaBar socials={socialMediaLinks} />

            <div className="w-full text-center px-6 py-4 mt-8 border-t">
              <h6 className="text-white/20 text-sm font-bold tracking-wider">
                ©2025 DevSedaghat. All rights reserved.
              </h6>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MenuNew;
