'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/react-vvm.production.js');
} else {
  module.exports = require('./dist/react-vvm.development.js');
}
