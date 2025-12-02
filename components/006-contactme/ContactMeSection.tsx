import ContactForm2 from "./ContactForm2";

export interface SocialMediaLinksType {
  icon: React.ReactNode;
  link: string;
}

export default function ContactMeSection() {
  return (
    <>
      <h2 className=" text-center font-nunito font-bold text-3xl sm:text-4xl text-(--yellow-p-200) mt-16 tracking-tight uppercase ">
        Contact Me 🤝
      </h2>
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
