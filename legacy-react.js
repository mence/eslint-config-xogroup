module.exports = {
  'extends': [
    'eslint-config-airbnb/legacy',
    'eslint-config-airbnb/rules/react',
  ],
  'env': {
    'browser': true,
    'node': true,
    'amd': false,
    'mocha': false,
    'jasmine': false
  },
  'ecmaFeatures': {},
  'globals': {},
  'rules': {
    // AirBnB style guide for ES5 indicates there should be no dangling commas
    'comma-dangle': [2, 'never']
  }
};
