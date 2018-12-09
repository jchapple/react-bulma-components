"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _tag = _interopRequireDefault(require("react-bulma-components/lib/components/tag"));

var _form = require("react-bulma-components/lib/components/form");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Tag', module).addDecorator(function (story) {
  return _react.default.createElement("div", {
    style: {
      margin: 10
    }
  }, story());
}).add('Default', function () {
  return _react.default.createElement(_tag.default, null, "Tag Text");
}).add('Group Tags', function () {
  return _react.default.createElement(_tag.default.Group, null, _react.default.createElement(_tag.default, {
    color: "primary"
  }, "Tag Text"), _react.default.createElement(_tag.default, {
    color: "success"
  }, "Tag Text"), _react.default.createElement(_tag.default, {
    color: "danger"
  }, "Tag Text"), _react.default.createElement(_tag.default, {
    color: "warrning"
  }, "Tag Text"), _react.default.createElement(_tag.default, {
    color: "info"
  }, "Tag Text"));
}).add('Group Tags without gap', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_tag.default.Group, {
    gapless: true
  }, _react.default.createElement(_tag.default, null, "Tag Text"), _react.default.createElement(_tag.default, {
    color: "primary"
  }, "Tag Text")), _react.default.createElement(_tag.default.Group, {
    gapless: true
  }, _react.default.createElement(_tag.default, {
    color: "danger"
  }, "Delete"), _react.default.createElement(_tag.default, {
    remove: true,
    renderAs: "a"
  })));
}).add('Group Tags without gap multiline', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_form.Field, {
    multiline: true,
    kind: "group"
  }, _react.default.createElement(_form.Control, null, _react.default.createElement(_tag.default.Group, {
    gapless: true
  }, _react.default.createElement(_tag.default, {
    color: "dark"
  }, "npm"), _react.default.createElement(_tag.default, {
    color: "info"
  }, "V 5.3"))), _react.default.createElement(_form.Control, null, _react.default.createElement(_tag.default.Group, {
    gapless: true
  }, _react.default.createElement(_tag.default, {
    color: "dark"
  }, "Build"), _react.default.createElement(_tag.default, {
    color: "success"
  }, "Pass"))), _react.default.createElement(_form.Control, null, _react.default.createElement(_tag.default.Group, {
    gapless: true
  }, _react.default.createElement(_tag.default, {
    color: "dark"
  }, "Chat"), _react.default.createElement(_tag.default, {
    color: "primary"
  }, "Slack")))));
}).add('Others', function () {
  return _react.default.createElement(_tag.default.Group, null, _react.default.createElement(_tag.default, {
    rounded: true
  }, "Rounded"), _react.default.createElement(_tag.default, {
    remove: true
  }));
});
//# sourceMappingURL=tag.story.js.map