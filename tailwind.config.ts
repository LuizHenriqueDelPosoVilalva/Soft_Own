import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      spacing: {
        "40": "40px",
        "167": "167px",
        "237": "237px",
        "42": "42px",
        "598": "598px",
        "346.67": "346.67px",
        "433": "433px"
      },
      colors: {
        blue: "#0277EE",
        containerColor: "#F8F9FA",
        textColor: "#6B7280",
        textBlack: "#121214"
      }
    }
  },
  plugins: []
}
export default config
