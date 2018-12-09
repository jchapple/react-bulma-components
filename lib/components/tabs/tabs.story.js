"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _tabs = _interopRequireDefault(require("react-bulma-components/lib/components/tabs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Tabs', module).addDecorator(function (story) {
  return _react.default.createElement("div", {
    style: {
      margin: 10
    }
  }, story());
}).add('Default', function () {
  return _react.default.createElement(_tabs.default, {
    type: (0, _addonKnobs.select)('Tab type', {
      boxed: 'boxed',
      toggle: 'toggle',
      'toggle-rounded': 'toggle-rounded'
    }, 'boxed'),
    fullwidth: (0, _addonKnobs.boolean)('Full width', false),
    align: (0, _addonKnobs.select)('Align', {
      Default: null,
      centered: 'centered',
      right: 'right'
    })
  }, _react.default.createElement(_tabs.default.Tab, {
    active: true
  }, "Test"), _react.default.createElement(_tabs.default.Tab, null, "Test"), _react.default.createElement(_tabs.default.Tab, null, "Test"), _react.default.createElement(_tabs.default.Tab, null, "Test"));
});
//# sourceMappingURL=tabs.story.js.map