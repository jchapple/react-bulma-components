"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _container = _interopRequireDefault(require("react-bulma-components/lib/components/container"));

var _heading = _interopRequireDefault(require("react-bulma-components/lib/components/heading"));

var _section = _interopRequireDefault(require("react-bulma-components/lib/components/section"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Container', module).add('Default', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_section.default, null, _react.default.createElement(_container.default, null, _react.default.createElement("p", {
    className: "bd-notification is-success"
  }, _react.default.createElement(_heading.default, {
    size: 5,
    renderAs: "p"
  }, "Default"), _react.default.createElement(_heading.default, {
    subtitle: true,
    renderAs: "p"
  }, "Container")))), _react.default.createElement(_section.default, null, _react.default.createElement(_container.default, {
    fluid: true
  }, _react.default.createElement("p", {
    className: "bd-notification is-info"
  }, _react.default.createElement(_heading.default, {
    size: 5,
    renderAs: "p"
  }, "Fluid"), _react.default.createElement(_heading.default, {
    subtitle: true,
    renderAs: "p"
  }, "Container")))), _react.default.createElement(_section.default, null, _react.default.createElement(_container.default, {
    breakpoint: "widescreen"
  }, _react.default.createElement("p", {
    className: "bd-notification is-warning"
  }, _react.default.createElement(_heading.default, {
    size: 5,
    renderAs: "p"
  }, "Breakpoint Widescreen"), _react.default.createElement(_heading.default, {
    subtitle: true,
    renderAs: "p"
  }, "Container")))), _react.default.createElement(_section.default, null, _react.default.createElement(_container.default, {
    breakpoint: "fullhd"
  }, _react.default.createElement("p", {
    className: "bd-notification is-danger"
  }, _react.default.createElement(_heading.default, {
    size: 5,
    renderAs: "p"
  }, "Breakpoint Fullhd"), _react.default.createElement(_heading.default, {
    subtitle: true,
    renderAs: "p"
  }, "Container")))));
});
//# sourceMappingURL=container.story.js.map