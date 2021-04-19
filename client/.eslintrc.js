module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "../.eslintrc.json",
    "plugin:vue/recommended",
    // "eslint:recommended",
    "@vue/prettier"
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    pascalcase: "off"
  },
  globals: {
    $: true,
    jQuery: false,
    Handlebars: false,
    axios: false,
    Vue: true,
    expect: false,
    test: false
  }
};
