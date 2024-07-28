module.exports = {
    extends: [
      "airbnb",
      "plugin:react/recommended",
      "plugin:jsx-a11y/recommended",
      "plugin:import/errors",
      "plugin:import/warnings"
    ],
    plugins: ["react", "jsx-a11y", "import"],
    env: {
      browser: true,
      es6: true,
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: "module",
    },
    rules: {
      "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
      "import/prefer-default-export": "off",
    },
  };
  