"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

require("./loader.story.sass");

var _loader = _interopRequireDefault(require("react-bulma-components/lib/components/loader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Loader', module).add('Default', function () {
  return _react.default.createElement(_loader.default, null);
}).add('with inline style', function () {
  return _react.default.createElement(_loader.default, {
    style: {
      width: 300,
      height: 300,
      border: '4px solid blue',
      borderTopColor: 'transparent',
      borderRightColor: 'transparent'
    }
  });
}).add('with other classes', function () {
  return _react.default.createElement(_loader.default, {
    className: "loader-override"
  });
});
//# sourceMappingURL=loader.story.js.map