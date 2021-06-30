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
    "pascalcase": "off"
    // "vue/component-definition-name-casing": ["off", "PascalCase" | "kebab-case"]
  },

  globals: {
    $: true,
    jQuery: false,
    Handlebars: false,
    axios: false,
    Vue: true,
    expect: false,
    test: false
  },

  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};
