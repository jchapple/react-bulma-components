"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _hero = _interopRequireDefault(require("react-bulma-components/lib/components/hero"));

var _heading = _interopRequireDefault(require("react-bulma-components/lib/components/heading"));

var _section = _interopRequireDefault(require("react-bulma-components/lib/components/section"));

var _container = _interopRequireDefault(require("react-bulma-components/lib/components/container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Hero', module).add('Default with color', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_section.default, null, _react.default.createElement(_hero.default, {
    color: "primary"
  }, _react.default.createElement(_hero.default.Body, null, _react.default.createElement(_container.default, null, _react.default.createElement(_heading.default, null, "Hero title Primary"), _react.default.createElement(_heading.default, {
    subtitle: true,
    size: 3
  }, "Subtitle"))))), _react.default.createElement(_section.default, null, _react.default.createElement(_hero.default, {
    color: "danger"
  }, _react.default.createElement(_hero.default.Body, null, _react.default.createElement(_container.default, null, _react.default.createElement(_heading.default, null, "Hero title Danger"), _react.default.createElement(_heading.default, {
    subtitle: true,
    size: 3
  }, "Subtitle"))))), _react.default.createElement(_section.default, null, _react.default.createElement(_hero.default, {
    color: "info"
  }, _react.default.createElement(_hero.default.Body, null, _react.default.createElement(_container.default, null, _react.default.createElement(_heading.default, null, "Hero title Info"), _react.default.createElement(_heading.default, {
    subtitle: true,
    size: 3
  }, "Subtitle"))))));
}).add('Gradient (EXPERIMENTAL)', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_section.default, null, _react.default.createElement(_hero.default, {
    color: "primary",
    gradient: true
  }, _react.default.createElement(_hero.default.Body, null, _react.default.createElement(_container.default, null, _react.default.createElement(_heading.default, null, "Hero title Primary"), _react.default.createElement(_heading.default, {
    subtitle: true,
    size: 3
  }, "Subtitle"))))), _react.default.createElement(_section.default, null, _react.default.createElement(_hero.default, {
    color: "danger",
    gradient: true
  }, _react.default.createElement(_hero.default.Body, null, _react.default.createElement(_container.default, null, _react.default.createElement(_heading.default, null, "Hero title Danger"), _react.default.createElement(_heading.default, {
    subtitle: true,
    size: 3
  }, "Subtitle"))))), _react.default.createElement(_section.default, null, _react.default.createElement(_hero.default, {
    color: "info",
    gradient: true
  }, _react.default.createElement(_hero.default.Body, null, _react.default.createElement(_container.default, null, _react.default.createElement(_heading.default, null, "Hero title Info"), _react.default.createElement(_heading.default, {
    subtitle: true,
    size: 3
  }, "Subtitle"))))));
}).add('Differents Sizes', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_hero.default, {
    color: "primary",
    size: "medium"
  }, _react.default.createElement(_hero.default.Body, null, "Medium")), _react.default.createElement(_hero.default, {
    color: "info",
    size: "large"
  }, _react.default.createElement(_hero.default.Body, null, "Large")), _react.default.createElement(_hero.default, {
    color: "danger",
    size: "fullheight"
  }, _react.default.createElement(_hero.default.Body, null, "FULL HEIGHT")));
}).add('Vertical Alignments', function () {
  return _react.default.createElement(_hero.default, {
    size: "fullheight",
    color: "primary"
  }, _react.default.createElement(_hero.default.Head, {
    renderAs: "header"
  }, _react.default.createElement("div", {
    className: "bd-notification is-info"
  }, "Header")), _react.default.createElement(_hero.default.Body, null, "Body"), _react.default.createElement(_hero.default.Footer, null, _react.default.createElement("div", {
    className: "bd-notification is-danger"
  }, "Footer")));
});
//# sourceMappingURL=hero.story.js.map