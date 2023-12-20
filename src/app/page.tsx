import { twMerge } from "tailwind-merge";
import { Seo } from "@/components/Seo/Seo";

const Home = () => (
  <main
    className={twMerge(
      "sm:flex sm:flex-col sm:py-24 sm:w-full",
      "md:py-40 md:pb-[11.5rem]",
    )}
  >
    <section className="sm:flex sm:px-6 sm:w-full">
      <div className="sm:flex sm:max-w-page-container sm:mx-auto sm:w-full">
        <Seo />
      </div>
    </section>
  </main>
);

export default Home;
