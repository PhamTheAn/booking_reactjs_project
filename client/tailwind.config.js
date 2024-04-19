/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js,jsx}",
    "./pages/admin/*.{html,js,jsx}",
    "./layouts/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('/img/hero-pattern.svg')",
        "footer-img":
          "url('https://mikazuki.com.vn/vnt_upload/weblink/fuji_mount.jpg')",
      }),
    },
  },
  plugins: [],
  variants: {
    backgroundColor: ["responsive", "hover", "focus"],
  },
};
