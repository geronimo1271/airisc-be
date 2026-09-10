import type { Config } from "tailwindcss";

export default {
  content: [],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      transparent: "transparent",
      inherit: "inherit",
      current: "currentColor",
      success: "#06D6A0",
      error: "#EF476F",
      grey: {
        "100": "#DEDEDE",
        "200": "#f4f4f4",
        "400": "#98A2B3",
        "500": "#667085",
        "600": "#525252",
        "700": "#344054",
        "900": "#101828",
      },
      blue: {
        "500": "#001489",
        "100": "#DFEFFF",
      },
      yellow: {
        "500": "#FBB900",
      },
      red: {
        "700": "#b91c1c",
      },
      guild: {
        "100": "#E6F4EA",
        "200": "#CCE9D5",
        "300": "#B3DEBF",
        "400": "#99D3AA",
        "500": "#80C994",
        "600": "#66BF7F",
        "700": "#008000",
        "800": "#005900",
        "900": "#003300",
      },
      guildtext: {
        "100": "#FDE8D7",
        "200": "#FBD1AF",
        "300": "#F9BA87",
        "400": "#F7A35F",
        "500": "#F58C37",
        "600": "#F3750F",
        "700": "#FA6529",
        "800": "#C8501F",
        "900": "#963B15",
      },
    },
    fontSize: {
      "xs-1": ["0.75rem", "0.878rem"], // [12px, 14px]
      "xs-2": ["0.875rem", "1.024rem"], // [14px, 16.39px]
      "xs-3": ["1rem", "1.3rem"], // [16px, 20.8px]
      "s-1": ["1rem", "1.5rem"], // [16px, 24px]
      "m-1": ["1.125rem", "1.375rem"], // [18px, 22px]
      "m-2": ["1.125rem", "1.625rem"], // [18px, 26px]
      "m-3": ["1.125rem", "2rem"], // [18px, 32px]
      "l-1": ["1.25rem", "1.75rem"], // [20px, 28px]
      "l-2": ["1.375rem", "1.5rem"], // [22px, 24px]
      "l-3": ["1.5rem", "2rem"], // [24px, 32px]
      "xl-1": ["1.75rem", "2rem"], // [28px, 32px]
      "xl-2": ["2.188rem", "2.375rem"], // [35px, 38px]
      "xl-3": ["2.625rem", "2.75rem"], // [42px, 44px]
      "xxl-1": ["3.5rem", "4.099rem"], // [56px, 65.584px]
      "xxl-2": ["4rem", "4.5rem"], // [64px, 72px]
      "xxl-3": ["6rem", "8.25rem"], // [96px, 132px]
    },
    extend: {
      screens: {
        xs: "320px",
        xs2: "500px",
      },
      backgroundImage: {
        "gradient-blue":
          "linear-gradient(90deg, #001489 2.42%, #3049DD 97.58%)",
      },
      boxShadow: {
        box: "0px 4px 4px 0px #00000040",
        input: "0 0 7px 0.1rem rgba(0, 20, 137, 0.5)",
        "input-invalid": "0 0 7px 0.1rem rgba(185, 28, 28, 0.7)",
      },
    },
  },
  plugins: [],
} satisfies Config;
