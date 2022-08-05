const { mergeConfig } = require('vite');
const angular = require('@analogjs/vite-plugin-angular');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/angular",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  async viteFinal(config, { configType }) {
    // return the customized config
    return mergeConfig(config, {
      root: '../src',
      publicDir: 'assets',
      resolve: {
        mainFields: ['module'],
      },
      plugins: [angular.default()],
    });
  },  
}