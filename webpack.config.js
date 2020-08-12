export const module = {
  rules: [
    {
      test: /\.s[ac]ss$/i,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          options: {
            webpackImporter: false,
          },
        },
      ],
    },
  ],
};
