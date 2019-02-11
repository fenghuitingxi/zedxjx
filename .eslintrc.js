// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-alert": 0,
    "array-bracket-spacing": [2, "never"],
    "quotes": [1, "single"],
    // "no-console": 1,
    "no-extra-semi": 2,// 禁止多余的冒号
    "no-multi-spaces": 1,
    "no-undef": 1,// 不能有未定义的变量
    "no-var": 0,// 禁用var，用let和const代替
    "eqeqeq": 1,// 必须使用全等
    // "indent": [2, 4],// 缩进风格
    "semi": [2, "always"], // 语句强制分号结尾
    "no-use-before-define": 2,//未定义前不能使用
    "no-unused-vars": [2, {"vars": "all", "args": "after-used"}],
    "comma-dangle": [2, "never"],// 对象字面量项尾不能有逗号
    "no-trailing-spaces": 1, // 一行结束后面不要有空格
    "key-spacing": [0, { "beforeColon": false, "afterColon": true }], // 对象字面量中冒号的前后空格
    "spaced-comment": 1,// 注释风格要不要有空格什么的
  }
}
