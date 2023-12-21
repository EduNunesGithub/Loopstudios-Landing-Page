import React from "react";
import Image, { ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";
import { base64 } from "@/utils/plaiceholder/plaiceholder";

export type CardProps = {
  image: ImageType;
  title: React.ReactNode;
};

type ImageType = {
  alt: ImageProps["alt"];
  desktop: ImageProps["src"];
  mobile: ImageProps["src"];
};

export const Card = async ({ image, title }: CardProps) => {
  const placeholderDesktop = await base64(image.desktop as string);
  const placeholderMobile = await base64(image.mobile as string);

  return (
    <div
      className={twMerge(
        "group sm:cursor-pointer sm:flex sm:items-end sm:justify-start sm:min-h-[7.5rem] sm:p-5 sm:relative sm:w-full",
        "sm:before:absolute sm:before:bg-gradient-to-b sm:before:duration-standard sm:before:ease-standard sm:before:flex sm:before:from-[#00000000_0%] sm:before:h-full sm:before:left-0 sm:before:pointer-events-none sm:before:to-[#00000099_100%] sm:before:top-0 sm:before:transition-colors sm:before:w-full sm:before:z-10",
        "sm:before:hover:bg-[#ffffffbf]",
        "md:min-h-[28.125rem] md:px-10 md:py-8",
      )}
    >
      <Image
        alt={image.alt}
        blurDataURL={placeholderDesktop}
        className={twMerge(
          "sm:absolute sm:h-full sm:hidden sm:left-0 sm:object-cover sm:top-0 sm:w-full",
          "md:flex",
        )}
        height={256}
        placeholder="blur"
        src={image.desktop}
        width={450}
      />

      <Image
        alt={image.alt}
        blurDataURL={placeholderMobile}
        className={twMerge("sm:h-full sm:object-cover sm:w-full", "md:hidden")}
        fill
        placeholder="blur"
        sizes="(min-width: 907.5px) 0vw, (min-width: 0px) 87.2vw"
        src={image.mobile}
      />

      <div
        className={twMerge(
          "sm:duration-standard sm:ease-standard sm:flex sm:font-josefin-sans sm:font-light sm:text-[#FFFFFF] sm:text-2xl sm:leading-6 sm:transition-colors sm:uppercase sm:z-10",
          "sm:group-hover:text-[#000000]",
          "md:text-[2rem] md:leading-8",
        )}
        dangerouslySetInnerHTML={{ __html: title as string }}
      />
    </div>
  );
};
