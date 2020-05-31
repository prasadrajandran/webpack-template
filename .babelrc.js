module.exports = (api) => {
  api.cache(true);

  const presets = [
    // Presets go here.
    '@babel/preset-env',
  ];

  const plugins = [
    // Plugins
  ];

  return { presets, plugins };
};
