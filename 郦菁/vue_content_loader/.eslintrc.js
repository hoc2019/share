/*
 * @Author: lijing
 * @Date: 2019-10-15 15:49:00
 * @LastEditors: lijing
 * @LastEditTime: 2019-11-29 10:57:16
 * @Description:
 * @FilePath: /vue_content_loader/.eslintrc.js
 */
// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint"
  },
  env: {
    browser: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    "plugin:vue/essential",
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    "standard"
  ],
  // required to lint *.vue files
  plugins: ["vue"],
  // add your custom rules here
  rules: {
    // allow async-await
    "generator-star-spacing": "off",
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    semi: 0, //分号检查
    // always-multiline：多行模式必须带逗号，单行模式不能带逗号
    "comma-dangle": [2, "never"],
    // 控制逗号前后的空格
    "comma-spacing": [2, { before: false, after: true }]
  }
};
