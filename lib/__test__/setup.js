"use strict";

require('raf/polyfill');

var Adapter = require('enzyme-adapter-react-16');

var enzyme = require('enzyme');

enzyme.configure({
  adapter: new Adapter()
});
//# sourceMappingURL=setup.js.map