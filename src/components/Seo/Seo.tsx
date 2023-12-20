import Image from "next/image";
import { twMerge } from "tailwind-merge";
import imgBannerSeo from "../../../public/PNG/banner-seo.png";

export const Seo = () => (
  <article
    className={twMerge(
      "sm:flex sm:flex-col sm:gap-12 sm:items-center sm:relative sm:w-full",
      "md:flex-row md:items-end md:justify-start md:min-h-[31.25rem]",
    )}
  >
    <div
      className={twMerge(
        "sm:h-56 sm:relative sm:w-full",
        "md:absolute md:h-full md:max-w-[45.625rem]",
      )}
    >
      <Image
        alt="A man immersed in virtual reality with a headset on, experiencing a simulated environment."
        className="sm:bg-[#705294] sm:contrast-100 sm:h-full sm:object-cover sm:-scale-x-100 sm:w-full"
        height={500}
        placeholder="blur"
        src={imgBannerSeo}
        width={730}
      />
    </div>

    <div
      className={twMerge(
        "sm:flex sm:flex-col sm:gap-4 sm:max-w-[17.5rem] sm:text-center sm:w-full sm:z-10",
        "md:bg-[#FFFFFF] md:gap-[1.5625rem] md:max-w-[33.75rem] md:ml-auto md:pl-24 md:pt-24 md:text-left",
      )}
    >
      <h2
        className={twMerge(
          "sm:font-josefin-sans sm:font-light sm:text-[#000000] sm:text-[2rem] sm:leading-[2rem] sm:uppercase",
          "md:text-5xl md:leading-[3rem]",
        )}
      >
        The leader in interactive VR
      </h2>

      <p className="sm:font-alata sm:font-normal sm:text-[#00000080] sm:text-[0.9375rem] sm:leading-[1.5625rem]">
        Founded in 2011, Loopstudios has been producing world-class virtual
        reality projects for some of the best companies around the globe. Our
        award-winning creations have transformed businesses through digital
        experiences that bind to their brand.
      </p>
    </div>
  </article>
);
