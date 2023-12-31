import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        alata: "var(--alata)",
        "josefin-sans": "var(--josefin-sans)",
      },
      maxWidth: {
        "page-container": "69.375rem",
      },
      transitionDuration: {
        "emphasized-accelerate": "200ms",
        "emphasized-decelerate": "400ms",
        standard: "300ms",
      },
      transitionTimingFunction: {
        "emphasized-accelerate": "cubic-bezier(0.3, 0.0, 0.8, 0.15)",
        "emphasized-decelerate": "cubic-bezier(0.05, 0.7, 0.1, 1.0)",
        standard: "cubic-bezier(0.2, 0.0, 0, 1.0)",
      },
      width: {
        "page-container": "69.375rem",
      },
    },
    screens: {
      sm: "0px",
      md: "907.5px",
    },
  },
  plugins: [],
};

export default config;
