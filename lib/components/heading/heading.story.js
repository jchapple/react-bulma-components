"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _heading = _interopRequireDefault(require("react-bulma-components/lib/components/heading"));

var _box = _interopRequireDefault(require("react-bulma-components/lib/components/box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Heading', module).add('Default', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_box.default, null, _react.default.createElement(_heading.default, null, "Title"), _react.default.createElement(_heading.default, {
    subtitle: true,
    size: 6
  }, "Subtitle")), _react.default.createElement(_box.default, null, _react.default.createElement(_heading.default, {
    size: 1
  }, "Title"), _react.default.createElement(_heading.default, {
    subtitle: true,
    size: 3
  }, "Subtitle")), _react.default.createElement(_box.default, null, _react.default.createElement(_heading.default, {
    size: 2
  }, "Title"), _react.default.createElement(_heading.default, {
    subtitle: true,
    size: 4,
    renderAs: "h2"
  }, "Subtitle")), _react.default.createElement(_box.default, null, _react.default.createElement(_heading.default, {
    size: 3
  }, "Title"), _react.default.createElement(_heading.default, {
    subtitle: true,
    size: 5,
    renderAs: "h2"
  }, "Subtitle")), _react.default.createElement(_box.default, null, _react.default.createElement(_heading.default, {
    size: 4
  }, "Title"), _react.default.createElement(_heading.default, {
    subtitle: true,
    size: 6,
    renderAs: "h2"
  }, "Subtitle")));
});
//# sourceMappingURL=heading.story.js.map