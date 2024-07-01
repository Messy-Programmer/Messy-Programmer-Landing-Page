const {
  createOpenGraphImage,
} = require("gatsby-plugin-dynamic-open-graph-images");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  const openGraphImage = createOpenGraphImage(createPage, {
    component: path.resolve(`src/images/index-og-image.jpeg`),
    size: {
      width: 400,
      height: 50,
    },
  });
};
