import { twMerge } from "tailwind-merge";
import { Card, CardProps } from "@/components/OurCreations/Card/Card";

export type OurCreationsProps = {
  cards: CardProps[];
};

export const OurCreations = ({ cards = [] }: OurCreationsProps) => (
  <article
    className={twMerge(
      "sm:grid sm:grid-cols-1 md:items-center sm:justify-items-center sm:w-full",
      "md:gap-20 md:grid-cols-[auto_1fr]",
    )}
  >
    <h2
      className={twMerge(
        "sm:font-josefin-sans sm:font-light sm:text-[#000000] sm:text-[2rem] sm:text-center sm:leading-8 sm:uppercase",
        "md:justify-self-start md:order-1 md:text-5xl md:leading-[3rem]",
      )}
    >
      OUR CREATIONS
    </h2>

    {cards.length !== 0 && (
      <ul
        className={twMerge(
          "sm:gap-6 sm:grid sm:grid-cols-1 sm:mb-8 sm:mt-12 sm:w-full",
          "md:col-span-2 md:gap-7 md:grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] md:justify-between md:mb-0 md:mt-0 md:order-3",
        )}
      >
        {cards.map((card, index) => (
          <li
            className="sm:flex sm:w-full"
            key={index}
          >
            <Card {...card} />
          </li>
        ))}
      </ul>
    )}

    <button
      className={twMerge(
        "sm:border-[0.0625rem] sm:border-[#000000] sm:duration-standard sm:ease-standard sm:font-alata sm:font-normal sm:max-w-full sm:min-h-10 sm:min-w-40 sm:p-2 sm:text-[#000000] sm:text-sm sm:leading-[0.875rem] sm:tracking-[0.3125rem] sm:transition-colors sm:uppercase sm:w-fit",
        "sm:hover:bg-[#000000] sm:hover:text-[#FFFFFF]",
        "md:justify-self-end md:order-2",
      )}
    >
      SEE ALL
    </button>
  </article>
);
