const htmlWebpackPlugin = require("html-webpack-plugin");

const GenerateHtmlPlugin = (title) => {
   return new htmlWebpackPlugin({
      title,
      filename: "index.html",
      template: `../src/index.html`,
   });
};

const PopulateHtmlPlugins = (pagesArray) => {
   res = [];
   pagesArray.forEach((page) => {
      res.push(GenerateHtmlPlugin(page));
   });
   return res;
};

module.exports = { GenerateHtmlPlugin, PopulateHtmlPlugins };
