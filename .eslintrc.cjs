module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@typescript-eslint/parser",
    jsxPragma: "React",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  plugins: ["@typescript-eslint", "vue"],
  /*
   * off 或 0：表示不验证规则
   * warn 或 1：表示验证规则，当不满足时，给警告
   * error 或 2 ：表示验证规则，不满足时报错
   */
  rules: {
    // eslint (https://eslint.bootcss.com/docs/rules/)
    "no-var": "error", // 禁止使用 var
    "no-multiple-empty-lines": ["warn", { max: 1 }], // 禁止出现多行空行
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off", // 禁止使用 console
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off", // 禁止使用 debugger
    // "no-unexpected-multiline": "error", // 禁止使用令人困惑的多行表达式

    // typeScript (https://typescript-eslint.io/rules)
    "@typescript-eslint/no-unused-vars": "error", // 禁止出现未使用过的变量
    "@typescript-eslint/prefer-ts-expect-error": "error", // 使用 @ts-expect-error 而不是 @ts-ignore
    "@typescript-eslint/no-explicit-any": "off", // 禁止使用 any
    "@typescript-eslint/no-non-null-assertion": "off", // 禁止使用 non-null 断言
    "@typescript-eslint/no-no-namespace": "off", // 禁止使用自定义 typescript 模块和命名空间
    "@typescript-eslint/no-empty-function": "off", // 禁止空函数
    "@typescript-eslint/no-empty-interface": "off", // 禁止空接口
    // "@typescript-eslint/semi": "off", // 禁止使用分号

    // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
    "vue/multi-word-component-names": "off", // 组件名必须是多个单词  - 连接符连接
    "vue/script-setup-uses-vars": "error", // 确保在 <script setup> 中使用的变量被声明
    "vue/no-mutating-props": "off", // 禁止修改 props
    "vue/attribute-hyphenation": "off", // 组件的属性名必须使用连字符连接
  },
};
