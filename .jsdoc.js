module.exports = {
  plugins: [
    "node_modules/jsdoc-vuejs"
  ],
  source: {
    include: [
      'README.md',
    ],
    includePattern: '\\.(vue|js)$',
  },
  opts: {
    encoding: 'utf8',
  },
};