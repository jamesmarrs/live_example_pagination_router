module.exports = function (api) {
  api.cache.using(() => process.env.NODE_ENV);

  const presets = [
    [
      "@babel/preset-env",
      {
        targets: "> 1%, not dead",
        useBuiltIns: "usage",
        corejs: "3.25.5",
      },
    ],
    "@babel/preset-react",
  ];

  const plugins = [];

  return {
    presets,
    plugins,
  };
};
