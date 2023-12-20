"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Navigation } from "@/components/Header/Navigation/Navigation";
import imgBanner from "../../../public/PNG/banner.png";
import imgLogo from "../../../public/WEBP/loopstudios.webp";

export const Header = () => {
  const [collapse, setCollapse] = React.useState<boolean>(false);
  const [navHeight, setNavHeight] = React.useState<number>(0);

  const refHeader = React.useRef<HTMLDivElement>(null);
  const refNav = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const nav = refNav.current;
    if (nav === null) return;

    const resizeObserver = new ResizeObserver((event) =>
      setNavHeight(event[0].contentRect.height),
    );

    resizeObserver.observe(nav);

    return () => resizeObserver.disconnect();
  }, []);

  React.useEffect(() => {
    const header = refHeader.current;
    if (header === null) return;

    const intersectionObserver = new IntersectionObserver(
      (event) => setCollapse(event[0].isIntersecting === true ? false : true),
      {
        rootMargin: `${navHeight}px 0px 0px 0px`,
        threshold: 1,
      },
    );

    intersectionObserver.observe(header);

    return () => intersectionObserver.disconnect();
  }, [navHeight]);

  return (
    <header
      className="sm:flex sm:flex-col sm:w-full"
      ref={refHeader}
    >
      <div
        className="sm:fixed sm:flex sm:px-6 sm:top-0 sm:w-full sm:z-20"
        ref={refNav}
      >
        <div
          className={twMerge(
            "sm:duration-standard sm:ease-standard sm:gap-6 sm:grid sm:grid-cols-[auto_1fr] sm:items-center sm:max-w-page-container sm:mx-auto sm:py-10 sm:transition-[padding-top,padding-bottom] sm:w-full",
            collapse === true && "md:py-10",
            collapse === false && "md:py-16",
          )}
        >
          <Link
            className="sm:flex"
            href="/"
          >
            <Image
              alt="Loopstudios"
              className={twMerge(
                "sm:h-6 sm:object-contain sm:w-auto",
                "md:h-8",
              )}
              height={32}
              loading="eager"
              placeholder="blur"
              priority
              src={imgLogo}
              width={200}
            />
          </Link>

          <Navigation />
        </div>
      </div>

      <div
        className={twMerge(
          "sm:flex sm:h-[40.625rem] sm:items-center sm:justify-center sm:p-6 sm:pt-[5.5rem] sm:relative sm:w-full",
          "sm:before:absolute sm:before:bg-[#00000066] sm:before:flex sm:before:h-full sm:before:left-0 sm:before:top-0 sm:before:w-full sm:before:z-10",
          "md:pt-[7.5rem]",
        )}
      >
        <Image
          alt=""
          className="sm:h-full sm:object-cover sm:-scale-x-100 sm:w-full"
          fill
          loading="eager"
          placeholder="blur"
          priority
          sizes="(min-width: 0px) 100vw"
          src={imgBanner}
        />

        <div className="sm:flex sm:max-w-page-container sm:mx-auto sm:w-full">
          <h1 className="sm:absolute sm:h-0 sm:opacity-0 sm:overflow-hidden sm:w-0">
            Loopstudios
          </h1>

          <p
            className={twMerge(
              "sm:border-[#FFFFFF] sm:border-[0.125rem] sm:font-josefin-sans sm:font-light sm:max-w-[20.4375rem] sm:p-6 sm:text-[#FFFFFF] sm:text-[2.5rem] sm:leading-[2.375rem] sm:uppercase sm:w-full sm:z-10",
              "md:max-w-[40.625rem] md:p-10 md:text-7xl md:leading-[4.375rem]",
            )}
          >
            Immersive experiences that <br className="md:hidden" /> deliver
          </p>
        </div>
      </div>
    </header>
  );
};
