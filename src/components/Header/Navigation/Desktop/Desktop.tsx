import Link from "next/link";
import { twMerge } from "tailwind-merge";

type Nav = {
  href: string;
  name: string;
};

const navs: Nav[] = [
  { href: "#", name: "About" },
  { href: "#", name: "Careers" },
  { href: "#", name: "Events" },
  { href: "#", name: "Products" },
  { href: "#", name: "Support" },
];

export const Desktop = () => (
  <nav className={twMerge("sm:hidden sm:w-full", "md:flex")}>
    <ul className="sm:flex sm:flex-wrap sm:gap-[1rem_2rem] sm:items-center sm:justify-end sm:w-full">
      {navs.map(({ href, name }, index) => (
        <li
          className="sm:flex"
          key={index}
        >
          <Link
            className={twMerge(
              "sm:font-josefin-sans sm:font-normal sm:relative sm:text-[#FFFFFF] sm:text-[0.9375rem] sm:leading-[1.5625rem]",
              "sm:before:absolute sm:before:bg-[#FFFFFF] sm:before:-bottom-[0.625rem] sm:before:duration-standard sm:before:ease-standard sm:before:h-[0.125rem] sm:before:left-1/2 sm:before:pointer-events-none sm:before:-translate-x-1/2 sm:before:transition-[width] sm:before:w-0",
              "sm:before:hover:w-[calc(100%-1.875rem)]",
            )}
            href={href}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
