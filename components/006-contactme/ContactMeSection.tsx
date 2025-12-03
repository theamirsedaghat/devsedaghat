import ContactForm2 from "./ContactForm2";

export interface SocialMediaLinksType {
  icon: React.ReactNode;
  link: string;
}

export default function ContactMeSection() {
  return (
    <>
      <div className="my-12 flex px-4 items-center justify-center">
        <div className="h-px w-full max-w-md bg-foreground/20"></div>
        <span className="mx-4 text-2xl sm:text-3xl">🤝</span>
        <div className="h-px w-full max-w-md bg-foreground/20"></div>
      </div>
      <h2 className="text-center font-nunito font-bold text-3xl sm:text-4xl text-(--yellow-p-300) tracking-tight uppercase">
        Let&apos;s Talk
      </h2>
      <div className="space-y-4 mt-4 text-center max-w-2xl mx-auto">
        <p className="font-headline text-center text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
          Idea, MVP, collab, or just a question?
        </p>
        <p className="font-body text-center text-sm sm:text-base text-foreground/70 leading-relaxed">
          Drop a message — I reply to everything.
        </p>
      </div>

      <div className="relative">
        <div className="">
          <div className="relative max-w-[1200px] mx-auto  flex flex-col px-6 md:px-0 pt-20">
            <div className="w-full max-w-[1200px] grow   flex flex-col md:flex-row items-end lg:gap-20 md:px-4 xl:px-0 gap-4">
              <div className="w-full lg:w-1/2   flex mb-4   justify-center order-1 md:order-2 ">
                {/* <ContactMeForm /> */}
                {/* <ContactForm /> */}
                <ContactForm2 />
              </div>
              <div className="w-full lg:w-1/2 flex justify-center  order-2 md:order-1 ">
                {/* <Image
                  src="/images/contactFrame.png"
                  alt="my image"
                  width={400}
                  height={400}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
