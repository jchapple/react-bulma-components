"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _progress = _interopRequireDefault(require("react-bulma-components/lib/components/progress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Progress', module).add('Default', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_progress.default, {
    max: 100,
    value: 15,
    color: "primary",
    size: "small"
  }), _react.default.createElement(_progress.default, {
    max: 100,
    value: 15,
    color: "info"
  }), _react.default.createElement(_progress.default, {
    max: 100,
    value: 15,
    color: "success",
    size: "medium"
  }), _react.default.createElement(_progress.default, {
    max: 100,
    value: 15,
    color: "error",
    size: "large"
  }));
});
//# sourceMappingURL=progress.story.js.map