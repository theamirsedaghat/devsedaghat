"use client";
import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";

import HamburgerMenu from "./ui/icons/HamburgerMenu";
import CloseMenu from "./ui/icons/CloseMenu";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import {
  IconBrandYoutube,
  IconBrandTiktok,
  IconBrandX,
} from "@tabler/icons-react";
import Footer from "./Footer";

interface MenuNewProps {
  links?: { label: string; href: string }[];
}

const defaultLinks = [
  { label: "Hero", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
];

// رنگ اختصاصی برای هر سکشن (بر اساس id سکشن)
const linkAccentClasses: Record<string, string> = {
  hero: "text-(--blue-p-300)",
  about: "text-(--purple-p-300)",
  skills: "text-(--mint-p-300)",
  services: "text-(--orange-p-200)",
  contact: "text-(--pink-p-300)",
};

const MenuNew: React.FC<MenuNewProps> = ({ links = defaultLinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string>("hero");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { scrollY } = useScroll();

  // Scroll spy برای لینک‌ها
  useEffect(() => {
    const targets = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as HTMLElement[];

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let best: IntersectionObserverEntry | null = null;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          if (!best || entry.intersectionRatio > best.intersectionRatio) {
            best = entry;
          }
        }
        if (best) {
          const id = (best.target as HTMLElement).id;
          setActiveItem(id);
        }
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [links]);

  // Scroll spy برای contact
  useMotionValueEvent(scrollY, "change", () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      const rect = contactSection.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.5) {
        setActiveItem("contact");
      }
    }
  });

  const drawerVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <nav aria-label="Main navigation">
      {/* Desktop / main bar */}
      <div
        className={
          "topnav backdrop-blur-xs sm:backdrop-blur-md fixed inset-x-0 mx-auto top-0 z-50 flex items-center justify-center px-4 py-6"
        }
      >
        <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <span className="font-bold text-xl md:text-2xl tracking-tight">
              AmirSedaghat
            </span>
          </Link>

          {/* Desktop links */}
          <div className="relative z-10 hidden md:flex items-center">
            <ul className="flex items-center space-x-10 lg:space-x-20">
              {links.map((link) => {
                const slug = link.href.replace("#", "");
                const isActive = activeItem === slug;
                const isHovered = hoveredItem === slug;
                const hasHover = hoveredItem !== null;
                const accent = linkAccentClasses[slug] ?? "text-white";

                let stateClasses = "";

                if (isHovered) {
                  // لینک hover شده → رنگ اختصاصی + پررنگ
                  stateClasses = `${accent} font-semibold`;
                } else if (isActive && !hasHover) {
                  // فعال، وقتی چیزی hover نیست
                  stateClasses = `${accent} font-semibold`;
                } else if (hasHover) {
                  // یه لینک دیگه hover شده → این کم‌رنگ بشه
                  stateClasses = "text-white/25 font-light";
                } else {
                  // حالت عادی بدون hover
                  stateClasses = "text-white/50 font-light";
                }

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }}
                      onMouseEnter={() => setHoveredItem(slug)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className={`text-lg  transition-all duration-500 ${stateClasses}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Desktop CTA */}
          <div className="relative z-10 hidden md:flex items-center space-x-4">
            <InteractiveHoverButton>
              <Link href="#contact">Let&apos;s Talk</Link>
            </InteractiveHoverButton>
          </div>

          {/* Mobile menu toggle */}
          <div className="relative z-10 md:hidden flex items-center space-x-4">
            {!isOpen && (
              <span className="text-base font-medium text-white/80">
                {links.find((l) => l.href.replace("#", "") === activeItem)
                  ?.label || (activeItem === "contact" ? "Let's Talk" : "Hero")}
              </span>
            )}
            <button
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <HamburgerMenu className="w-7 h-7 cursor-pointer" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden  fixed inset-0 bg-black/50 z-50"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed top-0 right-0 h-full w-5/6 bg-white/1 backdrop-blur-xs md:backdrop-blur-lg shadow-xl z-80  rounded-bl-4xl rounded-tl-4xl flex flex-col customBlur124"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="w-full flex justify-end items-center gap-3 my-6 px-4">
              <InteractiveHoverButton className="grow mx-2">
                <Link href="#contact" onClick={() => setIsOpen(false)}>
                  Let&apos;s Talk
                </Link>
              </InteractiveHoverButton>
              <button
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <CloseMenu className="size-8" />
              </button>
            </div>

            <ul className="flex grow items-end flex-col space-y-8 p-6">
              {links.map((link) => {
                const slug = link.href.replace("#", "");
                const isActive = activeItem === slug;
                const accent = linkAccentClasses[slug] ?? "text-white";

                const colorClasses = isActive
                  ? `${accent} font-semibold`
                  : "font-light text-black/40 dark:text-white/40";

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => {
                        setIsOpen(false);
                        document.querySelector(link.href)?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }}
                      className={`text-lg transition-all duration-500 ${colorClasses}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Footer
              className="space-x-6 p-4 md:p-6 md:space-x-12 "
              textStyle={"tracking-wider md:tracking-widest py-4 "}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MenuNew;
