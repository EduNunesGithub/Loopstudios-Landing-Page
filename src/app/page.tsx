import { twMerge } from "tailwind-merge";
import {
  OurCreations,
  OurCreationsProps,
} from "@/components/OurCreations/OurCreations";
import { Seo } from "@/components/Seo/Seo";
import mockOurCreations from "@/mock/ourCreations.json";

const cards: OurCreationsProps["cards"] = mockOurCreations;

const Home = () => (
  <main
    className={twMerge(
      "sm:flex sm:flex-col sm:py-24 sm:w-full",
      "md:py-40 md:pb-[11.5rem]",
    )}
  >
    <section
      className={twMerge(
        "sm:flex sm:mb-24 sm:px-6 sm:w-full",
        "md:mb-[11.5rem]",
      )}
    >
      <div className="sm:flex sm:max-w-page-container sm:mx-auto sm:w-full">
        <Seo />
      </div>
    </section>

    <section className="sm:flex sm:px-6 sm:w-full">
      <div className="sm:flex sm:max-w-page-container sm:mx-auto sm:w-full">
        <OurCreations cards={cards} />
      </div>
    </section>
  </main>
);

export default Home;
