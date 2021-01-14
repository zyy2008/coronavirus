module.exports = {
  plugins: [
    "node_modules/jsdoc-vuejs"
  ],
  source: {
    include: [
      'src/',
      'src/views',
      'README.md',
    ],
    includePattern: "\\.(vue|js)$"
  },
};