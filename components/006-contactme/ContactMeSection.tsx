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

      <div className="relative py-20">
        <div className="max-w-7xl mx-auto p-4">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-20">
            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
              {/* <Image
          src="/images/contactFrame.png"
          alt="contact"
          width={400}
          height={400}
        /> */}
            </div>

            {/* Form */}
            <div className="w-full  lg:w-1/2 flex justify-center order-1 lg:order-2">
              <ContactForm2 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
