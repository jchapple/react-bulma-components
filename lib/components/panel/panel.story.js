"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _panel = _interopRequireDefault(require("react-bulma-components/lib/components/panel"));

var _form = require("react-bulma-components/lib/components/form");

var _icon = _interopRequireDefault(require("react-bulma-components/lib/components/icon"));

var _button = _interopRequireDefault(require("react-bulma-components/lib/components/button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Panel', module).addDecorator(function (story) {
  return _react.default.createElement("div", {
    style: {
      margin: 10
    }
  }, story());
}).add('Default', function () {
  return _react.default.createElement(_panel.default, null, _react.default.createElement(_panel.default.Header, null, "repositories"), _react.default.createElement(_panel.default.Block, null, _react.default.createElement(_form.Control, null, _react.default.createElement(_form.Input, {
    size: "small",
    type: "text",
    placeholder: "search"
  }))), _react.default.createElement(_panel.default.Tabs, {
    className: "panel-tabs"
  }, _react.default.createElement(_panel.default.Tabs.Tab, {
    active: true
  }, "all"), _react.default.createElement(_panel.default.Tabs.Tab, null, "public"), _react.default.createElement(_panel.default.Tabs.Tab, null, "private"), _react.default.createElement(_panel.default.Tabs.Tab, null, "sources"), _react.default.createElement(_panel.default.Tabs.Tab, null, "forks")), _react.default.createElement(_panel.default.Block, {
    renderAs: "a",
    active: true
  }, _react.default.createElement(_panel.default.Icon, {
    renderAs: _icon.default,
    icon: "angle-down"
  }), "bulma"), _react.default.createElement(_panel.default.Block, null, _react.default.createElement(_panel.default.Icon, {
    renderAs: _icon.default,
    icon: "angle-down"
  }), "react-bulma-components"), _react.default.createElement(_panel.default.Block, null, _react.default.createElement(_panel.default.Icon, {
    renderAs: _icon.default,
    icon: "angle-down"
  }), "minireset.css"), _react.default.createElement(_panel.default.Block, null, _react.default.createElement(_panel.default.Icon, {
    renderAs: _icon.default,
    icon: "angle-down"
  }), "jgthms.github.io"), _react.default.createElement(_panel.default.Block, null, _react.default.createElement(_panel.default.Icon, {
    renderAs: _icon.default,
    icon: "angle-down"
  }), "couds.gidhub.io"), _react.default.createElement(_panel.default.Block, null, _react.default.createElement(_panel.default.Icon, {
    renderAs: _icon.default,
    icon: "angle-down"
  }), "mojs"), _react.default.createElement(_panel.default.Block, {
    renderAs: "label",
    className: "panel-block"
  }, _react.default.createElement(_form.Checkbox, null), "remember me"), _react.default.createElement(_panel.default.Block, null, _react.default.createElement(_button.default, {
    fullwidth: true,
    color: "link",
    outlined: true
  }, "reset all filters")));
});
//# sourceMappingURL=panel.story.js.map