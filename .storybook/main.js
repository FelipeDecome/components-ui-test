module.exports = {
  stories: [
    "../packages/**/lib/**/*.stories.@(tsx|mdx)",
    "../docs/Storybook/*.stories.@(tsx|mdx)"
 ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss",
    "@react-theming/storybook-addon"
  ],
  reactOptions: {
    fastRefresh: true,
  },
}
