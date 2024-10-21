import { nextui } from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    "themes": {
      "light": {
        "colors": {
          "default": {
            "50": "#e9eae8",
            "100": "#cbcdc7",
            "200": "#acb0a6",
            "300": "#8d9385",
            "400": "#6f7664",
            "500": "#505943",
            "600": "#424937",
            "700": "#343a2c",
            "800": "#262a20",
            "900": "#181b14",
            "foreground": "#fff",
            "DEFAULT": "#505943"
          },
          "primary": {
            "50": "#e1e8e4",
            "100": "#b6c7bd",
            "200": "#8ba697",
            "300": "#608571",
            "400": "#36654a",
            "500": "#0b4424",
            "600": "#09381e",
            "700": "#072c17",
            "800": "#052011",
            "900": "#03140b",
            "foreground": "#fff",
            "DEFAULT": "#0b4424"
          },
          "secondary": {
            "50": "#f2f4eb",
            "100": "#e0e4ce",
            "200": "#cdd5b2",
            "300": "#bbc596",
            "400": "#a8b679",
            "500": "#96a65d",
            "600": "#7c894d",
            "700": "#626c3c",
            "800": "#474f2c",
            "900": "#2d321c",
            "foreground": "#000",
            "DEFAULT": "#96a65d"
          },
          "success": {
            "50": "#e2f8ec",
            "100": "#b9efd1",
            "200": "#91e5b5",
            "300": "#68dc9a",
            "400": "#40d27f",
            "500": "#17c964",
            "600": "#13a653",
            "700": "#0f8341",
            "800": "#0b5f30",
            "900": "#073c1e",
            "foreground": "#000",
            "DEFAULT": "#17c964"
          },
          "warning": {
            "50": "#fef4e4",
            "100": "#fce4bd",
            "200": "#fad497",
            "300": "#f9c571",
            "400": "#f7b54a",
            "500": "#f5a524",
            "600": "#ca881e",
            "700": "#9f6b17",
            "800": "#744e11",
            "900": "#4a320b",
            "foreground": "#000",
            "DEFAULT": "#f5a524"
          },
          "danger": {
            "50": "#fee1eb",
            "100": "#fbb8cf",
            "200": "#f98eb3",
            "300": "#f76598",
            "400": "#f53b7c",
            "500": "#f31260",
            "600": "#c80f4f",
            "700": "#9e0c3e",
            "800": "#73092e",
            "900": "#49051d",
            "foreground": "#000",
            "DEFAULT": "#f31260"
          },
          "background": "#0D0D0D",
          "foreground": {
            "50": "#ffffff",
            "100": "#ffffff",
            "200": "#ffffff",
            "300": "#ffffff",
            "400": "#ffffff",
            "500": "#ffffff",
            "600": "#d2d2d2",
            "700": "#a6a6a6",
            "800": "#797979",
            "900": "#4d4d4d",
            "foreground": "#000",
            "DEFAULT": "#ffffff"
          },
          "content1": {
            "DEFAULT": "#0b4424",
            "foreground": "#fff"
          },
          "content2": {
            "DEFAULT": "#022210",
            "foreground": "#fff"
          },
          "content3": {
            "DEFAULT": "#282828",
            "foreground": "#fff"
          },
          "content4": {
            "DEFAULT": "#1a1a1a",
            "foreground": "#fff"
          },
          "focus": "#01441d",
          "overlay": "#000000",
          "divider": "#111111"
        }
      },
      "dark": {
        "colors": {
          "default": {
            "50": "#dfeee6",
            "100": "#b3d7c2",
            "200": "#86bf9f",
            "300": "#59a77b",
            "400": "#2d9058",
            "500": "#007834",
            "600": "#00632b",
            "700": "#004e22",
            "800": "#003919",
            "900": "#002410",
            "foreground": "#fff",
            "DEFAULT": "#007834"
          },
          "primary": {
            "50": "#e1e8e4",
            "100": "#b6c7bd",
            "200": "#8ba697",
            "300": "#608571",
            "400": "#36654a",
            "500": "#0b4424",
            "600": "#09381e",
            "700": "#072c17",
            "800": "#052011",
            "900": "#03140b",
            "foreground": "#fff",
            "DEFAULT": "#0b4424"
          },
          "secondary": {
            "50": "#f2f4eb",
            "100": "#e0e4ce",
            "200": "#cdd5b2",
            "300": "#bbc596",
            "400": "#a8b679",
            "500": "#96a65d",
            "600": "#7c894d",
            "700": "#626c3c",
            "800": "#474f2c",
            "900": "#2d321c",
            "foreground": "#000",
            "DEFAULT": "#96a65d"
          },
          "success": {
            "50": "#e2f8ec",
            "100": "#b9efd1",
            "200": "#91e5b5",
            "300": "#68dc9a",
            "400": "#40d27f",
            "500": "#17c964",
            "600": "#13a653",
            "700": "#0f8341",
            "800": "#0b5f30",
            "900": "#073c1e",
            "foreground": "#000",
            "DEFAULT": "#17c964"
          },
          "warning": {
            "50": "#fef4e4",
            "100": "#fce4bd",
            "200": "#fad497",
            "300": "#f9c571",
            "400": "#f7b54a",
            "500": "#f5a524",
            "600": "#ca881e",
            "700": "#9f6b17",
            "800": "#744e11",
            "900": "#4a320b",
            "foreground": "#000",
            "DEFAULT": "#f5a524"
          },
          "danger": {
            "50": "#fee1eb",
            "100": "#fbb8cf",
            "200": "#f98eb3",
            "300": "#f76598",
            "400": "#f53b7c",
            "500": "#f31260",
            "600": "#c80f4f",
            "700": "#9e0c3e",
            "800": "#73092e",
            "900": "#49051d",
            "foreground": "#000",
            "DEFAULT": "#f31260"
          },
          "background": "#ffffff",
          "foreground": {
            "50": "#dfdfdf",
            "100": "#b3b3b3",
            "200": "#868686",
            "300": "#595959",
            "400": "#2d2d2d",
            "500": "#000000",
            "600": "#000000",
            "700": "#000000",
            "800": "#000000",
            "900": "#000000",
            "foreground": "#fff",
            "DEFAULT": "#000000"
          },
          "content1": {
            "DEFAULT": "#0b4424",
            "foreground": "#fff"
          },
          "content2": {
            "DEFAULT": "#022210",
            "foreground": "#fff"
          },
          "content3": {
            "DEFAULT": "#141414",
            "foreground": "#fff"
          },
          "content4": {
            "DEFAULT": "#ffffff",
            "foreground": "#000"
          },
          "focus": "#01441d",
          "overlay": "#000000",
          "divider": "#000000"
        }
      }
    },
    "layout": {
      "fontSize": {
        "tiny": "0.75rem",
        "small": "0.875rem",
        "medium": "1rem",
        "large": "1.125rem"
      },
      "lineHeight": {
        "tiny": "1rem",
        "small": "1.25rem",
        "medium": "1.5rem",
        "large": "1.75rem"
      },
      "radius": {
        "small": "0.5rem",
        "medium": "0.75rem",
        "large": "0.875rem"
      },
      "borderWidth": {
        "small": "1px",
        "medium": "2px",
        "large": "3px"
      },
      "disabledOpacity": "0.5",
      "dividerWeight": "1",
      "hoverOpacity": "0.9"
    }
  })],
};
export default config;
