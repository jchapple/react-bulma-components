"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _icon = _interopRequireDefault(require("react-bulma-components/lib/components/icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Icon', module).add('Default', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_icon.default, {
    icon: "bars",
    color: "info"
  }), _react.default.createElement(_icon.default, {
    icon: "angle-down"
  }));
}).add('Custom Icon', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_icon.default, null, _react.default.createElement("span", {
    className: "rbc rbc-bars"
  })));
});
//# sourceMappingURL=icon.story.js.map