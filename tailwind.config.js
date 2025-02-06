/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}", // Add your file paths here
];

export const theme = {
  extend: {
    keyframes: {
      transfer: {
        from: { transform: "translateX(100%)" },
        to: { transform: "translateX(0%)" },
      },
    },
    animation: {
      transfer: "transfer 0.5s ease-in-out",
    },
  },
};
export const plugins = [];
