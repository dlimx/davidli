module.exports = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      extensions: ['.js', '.json', '.ts', '.tsx'],
    },
  });
};
