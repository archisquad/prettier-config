/** @type {import("prettier").Config} */
const config = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: false,
  quoteProps: "consistent",
  jsxSingleQuote: false,
  trailingComma: "es5",
  bracketSpacing: true,
  bracketSameLine: true,
  arrowParens: "always",
  proseWrap: "always",
  vueIndentScriptAndStyle: false,
  endOfLine: "lf",
  singleAttributePerLine: false,
  plugins: [
    "prettier-plugin-tailwindcss",
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
}

export default config
