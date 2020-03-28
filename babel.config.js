// Only used to convert ES Modules (i.e. import/export) into CommonJS (Node)
// modules (i.e. require()) for Jest.
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};