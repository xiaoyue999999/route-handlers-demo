import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-plugin-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
   {
    // 应用到所有文件
    files: ["**/*.{js,jsx,ts,tsx,json,css,md}"],
    
    // 使用 Prettier 插件
    plugins: {
      prettier,
    },
    
    // 启用 Prettier 规则并设为错误级别
    rules: {
      "prettier/prettier": "error",
      ...prettier.configs.recommended.rules,
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
