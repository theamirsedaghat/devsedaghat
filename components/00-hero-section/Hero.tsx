import dynamic from "next/dynamic";
import Image from "next/image";
import { Button } from "../ui/button";
import { ChevronRight, Plus } from "lucide-react";
import Link from "next/link";
import { HeroAnimatedBeam } from "./HeroAnimatedBeam";

import { FlipWords } from "../ui/flip-words";
import TerminalAnimation from "./TerminalAnimation";
import heroImg from "@/public/HeroImage.webp";
const Hero = () => {
  return (
    <div className="relative my-5 flex items-start md:items-center justify-center overflow-hidden lg:overflow-visible">
      <div
        id="bg-absolute"
        className="pointer-events-none absolute inset-0   max-w-7xl  md:w-[90%] xl:mx-0 px-4 sm:px-6 md:px-8 lg:px-0
                   rounded-tl-[180px] rounded-tr-[30px] rounded-br-[20px] rounded-bl-[60px]
                   
                   sm:rounded-tl-[120px] sm:rounded-tr-[40px] sm:rounded-br-[30px] sm:rounded-bl-[80px]
                   md:rounded-tl-[180px] md:rounded-tr-[50px] md:rounded-br-[35px] md:rounded-bl-[100px]
                   lg:rounded-tl-[200px] lg:rounded-tr-[60px] lg:rounded-br-[40px] lg:rounded-bl-[120px]
                   xl:rounded-tl-[250px]
                   bg-(--myneutral-200) opacity-70 dark:opacity-50 -z-20"
      />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-8   ">
        <div
          className="flex flex-col items-center justify-center  gap-8  pt-18 sm:gap-12 md:gap-14 md:pb-36
                        lg:min-h-[90vh] lg:flex-row lg:justify-between
                        lg:gap-16 lg:py-20 xl:gap-20 "
        >
          <div className="flex w-full flex-col items-center  justify-center space-y-6 text-center sm:max-w-lg  sm:space-y-10 md:max-w-2xl md:space-y-12   lg:w-full lg:items-start  lg:text-left  ">
            <div className="space-y-4  sm:space-y-6 ">
              <p className="text-base font-medium text-foreground/70 tracking-widest">
                👋 Hey, I&apos;m
              </p>

              <h1 className="font-bold tracking-tight text-4xl  sm:text-5xl md:text-6xl ">
                <strong className="block text-foreground">Amir Sedaghat</strong>
              </h1>

              <p className=" text-base  sm:text-xl text-foreground/70 flex flex-wrap justify-center lg:justify-start items-center gap-1 ">
                <span className="tracking-wider">also known as</span>
                <span className="italic font-bold text-foreground">
                  TheAmirSedaghat
                </span>
              </p>

              <div className=" text-3xl mx-auto items-center justify-center text-center lg:text-left font-semibold text-foreground/70  leading-tight sm:leading-normal space-y-2 ">
                <p className="text-lg sm:text-2xl md:text-3xl ">
                  A passionate{" "}
                </p>
                <FlipWords
                  className="text-4xl text-center"
                  words={[
                    {
                      text: "Tech Educator",
                      className: "text-(--blue-p-200)",
                    },
                    {
                      text: "Product Builder",
                      className: "text-(--purple-p-300)",
                    },
                    {
                      text: "Emerging SaaS founder",

                      className: "text-(--mint-p-300) ",
                    },
                    {
                      text: "UI/UX Designer",
                      className: "text-(--yellow-p-200)",
                    },
                    {
                      text: "Content Creator",
                      className: "text-(--pink-p-300)",
                    },
                  ]}
                />
              </div>

              <div className="mt-6 sm:mt-10 space-y-3 text-base sm:text-lg  lg:text-base  sm:max-w-lg md:max-w-2xl mx-auto lg:mx-0">
                <p>
                  I build modern web and mobile products with a clear focus on
                  usability, clarity, and real-world constraints — not just
                  pretty demos. Alongside that, I teach what I learn. From
                  fundamentals to production-ready patterns, my goal is to help
                  developers move from “I kind of get it” to “I actually shipped
                  something that works.”
                </p>
              </div>
            </div>

            <div className="space-y-6  w-full  ">
              <p className="text-(--orange-p-200) font-medium text-base sm:text-base">
                Join the journey. Learn, build, and grow —{" "}
                <span className="italic">with me</span>.
              </p>

              <div className="space-y-4 sm:space-y-0 sm:space-x-4 w-full flex justify-center flex-col sm:flex-row items-center  ">
                <Button
                  className="cursor-pointer bg-(--blue-p-200) hover:bg-(--blue-p-200) transition-all duration-400 hover:shadow-[0_0_16px_var(--blue-p-200)] w-full sm:w-1/2
              "
                >
                  🎉 <hr className=" h-4 w-px bg-neutral-500" />
                  Follow on LinkedIn <Plus />
                </Button>
                <Link href={"#project"} className="w-full">
                  <Button className="group animate-rainbow w-full  cursor-pointer border-0 bg-size-[200%] [background-clip:padding-box,border-box,border-box] bg-origin-border text-primary-foreground transition-all duration-400 [border:calc(0.125rem)_solid_transparent] hover:shadow-[0_0_16px_var(--purple-p-200)] hover:brightness-110 hover:saturate-150 dark:bg-[linear-gradient(var(--text-dark-100),rgba(0,0,0,0)),linear-gradient(90deg,var(--mint-p-300),var(--yellow-p-200),var(--pink-p-100),var(--blue-p-300),var(--purple-p-200),var(--mint-p-200),var(--blue-p-300),var(--yellow-p-200))] ">
                    View my project
                    <ChevronRight className=" size-4 stroke-neutral-500 group-hover:stroke-neutral-800 transition-all duration-300 ease-in-out group-hover:translate-x-0.5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/*!-------- */}
          <div className="absolute right-0 bottom-0 left-0 flex justify-center   lg:-bottom-12 lg:left-1/2  lg:items-end">
            <div className="absolute bottom-0 h-[70%] w-80  items-center  justify-center rounded-tl-[80px] rounded-tr-[30px] rounded-br-[10px] rounded-bl-[45px] bg-(--myneutral-500)"></div>
            <svg
              width="306"
              height="544"
              viewBox="0 0 306 544"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute hidden md:block bottom-0 left-0 z-30 w-52 xs:left-[8%] sm:left-[18%] md:left-[25%]  lg:left-12"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M170.604 303.394C154.429 298.701 138.984 295.005 123.933 289.485C117.34 287.071 108.719 287.891 105.655 275.671C103.3 266.249 104.567 260.56 111.185 256.228C136.183 239.878 161.153 223.437 186.112 206.983C201.55 196.799 216.962 186.557 232.356 176.284C235.681 174.071 238.9 171.575 242.159 169.226C226.473 161.493 211.121 153.972 195.799 146.355C187.248 142.106 178.425 138.482 170.377 132.929C167.096 130.666 164.195 124.329 163.586 119.296C162.984 114.358 162.815 107.694 167.919 104.002C183.43 92.768 198.919 81.4398 214.105 69.465C232.598 54.8847 250.837 39.7384 269.07 24.5826C277.447 17.6161 285.768 10.4443 293.677 2.60112C298.642 -2.31517 300.967 0.253228 303.29 6.00529C307.902 17.4335 306.68 23.5028 298.367 30.5955C278.377 47.6399 258.662 65.2764 238.367 81.635C224.488 92.8277 209.803 102.265 195.509 112.536C193.692 113.845 192.004 115.458 188.597 118.325C200.704 124.628 211.188 130.612 221.946 135.556C234.552 141.351 247.766 145.108 259.988 152.007C265.413 155.073 269.617 163.166 273.117 170.088C274.047 171.944 271.156 179.989 268.667 181.707C242.703 199.576 216.517 216.905 190.274 234.045C173.35 245.1 156.22 255.574 139.211 266.37C138.47 266.838 137.941 267.908 135.96 270.404C149.642 273.97 161.929 277.289 174.261 280.326C180.288 281.809 186.389 282.805 192.454 283.97C198.289 285.096 205.105 294.129 205.838 302.116C206.603 310.46 202.009 313.366 197.401 316.322C163.263 338.228 129.163 360.256 94.9968 382.105C90.3765 385.062 85.4607 387.196 80.5833 391.84C85.1234 393.352 89.6044 395.226 94.1969 396.324C107.388 399.48 120.613 402.352 133.835 405.3C140.045 406.687 147.017 415.206 147.238 423.421C147.324 426.507 145.177 431.026 143.061 432.762C106.728 462.662 70.184 492.128 33.8097 521.972C26.9976 527.556 20.6478 534.198 14.2448 540.636C9.53513 545.367 6.07472 543.845 3.01688 537.889C-2.57593 526.988 -0.476699 518.313 10.0178 509.76C33.9831 490.226 57.9638 470.759 81.9343 451.252C91.9841 443.077 102.031 434.906 111.973 424.257C107.799 423.209 103.546 422.53 99.4626 421.039C85.0374 415.791 70.5637 410.694 56.3305 404.624C50.8734 402.292 48.7404 396.261 48.6969 387.71C48.6511 379.803 52.1102 379.813 55.7602 377.551C92.985 354.4 130.114 330.972 167.238 307.525C168.416 306.784 169.247 305.099 170.604 303.394Z"
                fill="#93C5FD"
              />
            </svg>
            <svg
              width="291"
              height="516"
              viewBox="0 0 291 516"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute w-62 hidden md:block  "
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M128.327 227.583C143.679 232.045 158.336 235.561 172.621 240.807C178.877 243.101 187.058 242.329 189.97 253.922C192.208 262.861 191.008 268.257 184.73 272.361C161.015 287.854 137.326 303.433 113.648 319.024C99.0023 328.674 84.3814 338.379 69.777 348.114C66.6223 350.211 63.5691 352.576 60.4772 354.803C75.3649 362.148 89.936 369.293 104.478 376.528C112.594 380.564 120.968 384.007 128.607 389.28C131.721 391.429 134.477 397.442 135.056 402.216C135.629 406.901 135.792 413.222 130.95 416.721C116.236 427.367 101.542 438.102 87.1361 449.451C69.5931 463.269 52.2909 477.625 34.9946 491.989C27.0485 498.592 19.1548 505.389 11.6524 512.824C6.94278 517.484 4.736 515.046 2.52978 509.588C-1.85112 498.745 -0.69395 492.989 7.19221 486.266C26.1541 470.111 44.8562 453.395 64.1085 437.891C77.2744 427.283 91.2061 418.341 104.766 408.608C106.489 407.367 108.091 405.838 111.323 403.121C99.8322 397.134 89.8809 391.451 79.6705 386.754C67.7066 381.249 55.1658 377.677 43.565 371.124C38.4161 368.213 34.4243 360.533 31.1005 353.964C30.2165 352.204 32.9573 344.574 35.3182 342.947C59.9494 326.013 84.7914 309.593 109.689 293.352C125.744 282.876 141.995 272.952 158.132 262.723C158.834 262.279 159.336 261.264 161.215 258.898C148.23 255.506 136.569 252.35 124.866 249.461C119.147 248.05 113.357 247.102 107.601 245.993C102.064 244.921 95.5923 236.348 94.8935 228.771C94.1645 220.857 98.5225 218.103 102.895 215.302C135.281 194.545 167.631 173.672 200.044 152.969C204.427 150.168 209.091 148.147 213.718 143.745C209.409 142.308 205.156 140.527 200.798 139.482C188.28 136.48 175.729 133.747 163.181 130.942C157.288 129.623 150.669 121.537 150.456 113.744C150.372 110.817 152.409 106.532 154.415 104.886C188.882 76.5475 223.548 48.6217 258.054 20.3366C264.516 15.0435 270.539 8.74804 276.613 2.64559C281.08 -1.8397 284.364 -0.39298 287.268 5.25858C292.579 15.6022 290.591 23.8292 280.635 31.9358C257.901 50.4493 235.153 68.8994 212.413 87.3869C202.88 95.1357 193.349 102.88 183.919 112.975C187.88 113.972 191.916 114.618 195.792 116.035C209.482 121.022 223.219 125.867 236.727 131.634C241.906 133.85 243.933 139.572 243.977 147.684C244.024 155.183 240.741 155.172 237.278 157.315C201.963 179.251 166.74 201.45 131.52 223.667C130.403 224.368 129.615 225.966 128.327 227.583Z"
                fill="#E0F2FE"
                fillOpacity="0.5"
              />
            </svg>
            <svg
              width="304"
              height="430"
              viewBox="0 0 304 430"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute hidden md:block w-50 bottom-8 right-0 z-30  xs:right-[8%] sm:right-[18%] md:right-[25%]  lg:right-12"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M152.122 179.789C168.069 191.083 184.226 199.726 199.958 209.116C204.756 211.988 209.603 214.92 213.914 218.578C218.169 222.174 220.429 227.626 218.277 234.986C216.002 242.794 211.154 247.501 204.502 249.295C192.98 252.43 181.432 255.638 169.899 258.548C149.601 263.695 129.3 268.334 109.039 275.453C104.758 276.953 100.355 277.839 96.1079 281.207C96.1021 285.52 99.1182 286.754 101.279 288.53C117.905 302.244 134.684 315.743 151.366 329.369C155.459 332.727 159.882 335.698 162.851 340.488C168.726 349.972 165.42 362.162 154.911 369.064C151.232 371.495 147.174 372.959 143.246 374.504C124.273 381.894 105.171 387.164 86.0913 393.132C74.9782 396.608 63.8374 400.121 52.7913 404.298C40.124 409.098 27.6378 414.662 16.2725 424.986C10.0551 430.628 4.44426 430.302 1.50768 425.653C-1.41611 421.017 -0.106591 414.474 5.60383 407.934C11.9627 400.627 19.4291 395.646 27.2137 391.445C53.2173 377.445 79.8737 369.518 106.49 361.035C115.029 358.316 123.559 355.311 132.613 352.282C130.886 346.363 127.158 345.153 124.358 342.889C107.569 329.397 90.5631 316.222 74.9606 301.011C73.0536 299.139 71.0097 297.416 69.2618 295.362C61.6563 286.532 63.6438 274.831 74.3736 265.851C78.9981 261.991 84.0157 259.364 89.1743 257.111C113.248 246.655 137.541 240.948 161.812 234.725C166.823 233.457 171.992 233.218 178.327 229.005C174.469 226.436 171.617 224.302 168.563 222.517C153.362 213.646 138.407 204.331 123.999 194.064C121.257 192.101 118.411 190.195 116.092 187.675C109.093 180.02 112.176 167.436 122.56 161.442C128.325 158.109 134.341 156.432 140.333 155.03C167.394 148.711 194.45 142.478 221.516 136.17C226.219 135.077 230.929 133.783 236.355 132.408C235.493 127.082 231.975 126.171 229.494 124.257C213.116 111.511 196.613 98.9741 180.213 86.2603C174.813 82.0592 168.977 77.7856 171.087 67.6602C173.332 56.8982 181.27 52.8654 188.71 49.4832C211.798 38.9696 234.961 29.0291 258.081 18.5888C264.583 15.6387 270.983 13.0521 276.55 5.88472C282.221 -1.39221 295.354 -1.67649 300.669 3.68776C306.703 9.75754 304.191 21.4 295.135 26.7618C287.175 31.4886 278.903 35.2509 270.684 39.0181C252.309 47.4315 233.871 55.5848 215.463 63.8884C212.05 65.4387 208.207 65.7384 205.647 70.2749C207.547 74.634 211.453 76.2859 214.659 78.7669C226.599 87.9961 238.702 96.9664 250.742 106.044C256.447 110.365 262.204 114.737 266.672 120.696C274.818 131.579 269.52 147.601 255.83 152.642C246.379 156.118 236.752 158.397 227.22 160.627C206.517 165.49 185.83 169.875 165.134 174.635C161.285 175.519 157.243 175.279 152.122 179.789Z"
                fill="#DDD6FE"
              />
            </svg>

            <Image
              src={heroImg}
              alt="Portrait of Amir Sedaghat (theamirsedaghat) - tech educator, full-stack developer, and SaaS builder."
              width={400}
              height={400}
              priority
              quality={90}
              className="w-84 lg:w-100 z-40"
              placeholder="blur"
              blurDataURL={heroImg.blurDataURL}
            />

            {/* <Terminal
              startOnView={true}
              className="z-40 absolute bottom-2 right-[4%] sm:right-12 md:right-[20%] lg:right-4 "
            >
              <TypingAnimation delay={0}>
                &gt; npx amirsedaghat@latest init
              </TypingAnimation>
              <AnimatedSpan delay={2500} className="text-blue-400">
                ✔ Building creative interfaces...
              </AnimatedSpan>
              <AnimatedSpan delay={3800} className="text-blue-400">
                ✔ Integrating design & motion...
              </AnimatedSpan>

              <AnimatedSpan delay={5000} className="text-green-400">
                ✨ Ready to deploy
              </AnimatedSpan>
            </Terminal> */}
            <TerminalAnimation />
          </div>
          <HeroAnimatedBeam className="z-50 w-full  sm:z-35 md:-right-28 md:bottom-8 md:w-full lg:-right-8 lg:bottom-0 lg:pr-6  " />
          <div className="h-[400px] md:hidden"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
