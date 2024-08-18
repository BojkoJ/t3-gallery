import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        fadeIn: {
          "0%": { background: "rgba(0, 0, 0, 0)" },
          "100%": { background: "rgba(0, 0, 0, 0.5)" },
        },
        fadeOut: {
          "0%": { background: "rgba(0, 0, 0, 0.5)" },
          "100%": { background: "rgba(0, 0, 0, 0)" },
        },
        scaleUp: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        scaleDown: {
          "0%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(0.8)" },
        },
        scaleBack: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.95)" },
        },
        scaleForward: {
          "0%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
        quickScaleDown: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.8)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1.000) forwards",
        fadeOut: "fadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1.000) forwards",
        scaleUp: "scaleUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1.000) forwards",
        scaleDown:
          "scaleDown 0.5s cubic-bezier(0.165, 0.84, 0.44, 1.000) forwards",
        scaleBack:
          "scaleBack 0.5s cubic-bezier(0.165, 0.84, 0.44, 1.000) forwards",
        scaleForward:
          "scaleForward 0.5s cubic-bezier(0.165, 0.84, 0.44, 1.000) forwards",
        quickScaleDown: "quickScaleDown 0s 0.5s linear forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
