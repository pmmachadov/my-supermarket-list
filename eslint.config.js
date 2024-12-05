import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [{
  files: ["**/*.{js,mjs,cjs,jsx}"],
  ignores: ["node_modules/**", "dist/**"],
  languageOptions: { globals: globals.browser },
  ...pluginJs.configs.recommended,
  ...pluginReact.configs.flat.recommended,
  settings: {
    react: {
      version: "detect"
    },
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  }
}];