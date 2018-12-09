"use strict";

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _button = _interopRequireDefault(require("react-bulma-components/lib/components/button"));

var _section = _interopRequireDefault(require("react-bulma-components/lib/components/section"));

var _box = _interopRequireDefault(require("react-bulma-components/lib/components/box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var colors = {
  Default: '',
  primary: 'primary',
  info: 'info',
  danger: 'danger',
  warning: 'warning',
  success: 'success',
  white: 'white',
  black: 'black',
  light: 'light',
  dark: 'dark',
  link: 'link'
};
var positions = {
  default: '',
  centered: 'centered',
  right: 'right'
};
(0, _react2.storiesOf)('Button', module).addDecorator(function (story) {
  return _react.default.createElement("div", {
    className: "button-display"
  }, story());
}).add('Default', function () {
  return _react.default.createElement(_section.default, null, _react.default.createElement(_box.default, null, "Play with the button props using the knobs addon panel at the bottom"), _react.default.createElement(_button.default, {
    fullwidth: (0, _addonKnobs.boolean)('Full width', false),
    color: (0, _addonKnobs.select)('Color', colors),
    loading: (0, _addonKnobs.boolean)('Loading', false),
    outlined: (0, _addonKnobs.boolean)('Outlined', false),
    inverted: (0, _addonKnobs.boolean)('Inverted', false),
    disabled: (0, _addonKnobs.boolean)('Disabled', false),
    text: (0, _addonKnobs.boolean)('Text', false),
    remove: (0, _addonKnobs.boolean)('Remove', false),
    isStatic: (0, _addonKnobs.boolean)('Static', false),
    rounded: (0, _addonKnobs.boolean)('Rounded', false),
    onClick: (0, _addonActions.action)('Button Click'),
    onMouseEnter: (0, _addonActions.action)('Hover')
  }, "Button"));
}).add('As another React element', function () {
  var CustomComponent = function CustomComponent(_ref) {
    var customProp = _ref.customProp,
        children = _ref.children,
        className = _ref.className;
    return _react.default.createElement("a", {
      className: className,
      href: customProp
    }, children);
  };

  CustomComponent.propTypes = {
    customProp: _propTypes.default.string.isRequired,
    className: _propTypes.default.string.isRequired,
    children: _propTypes.default.node.isRequired
  };
  return _react.default.createElement(_section.default, null, _react.default.createElement(_button.default, {
    color: "info",
    renderAs: CustomComponent,
    customProp: "https://github.com/couds/react-bulma-components"
  }, "Button rendered using another React Component with props"));
}).add('Button group', function () {
  return _react.default.createElement(_section.default, null, _react.default.createElement(_button.default.Group, {
    hasAddons: (0, _addonKnobs.boolean)('hasAddons', false),
    position: (0, _addonKnobs.select)('Position', positions)
  }, _react.default.createElement(_button.default, {
    renderAs: "span",
    color: "success"
  }, "Save changes"), _react.default.createElement(_button.default, {
    renderAs: "span",
    color: "info"
  }, "Save and continue"), _react.default.createElement(_button.default, {
    renderAs: "span",
    color: "danger"
  }, "Cancel")));
}).add('Ref forwarding', function () {
  var ref = _react.default.createRef();

  return _react.default.createElement(_section.default, null, _react.default.createElement(_button.default, {
    onClick: function onClick() {
      return ref.current.click();
    }
  }, "click other button"), _react.default.createElement(_button.default, {
    ref: ref,
    onClick: function onClick() {
      return console.log('clicked');
    }
  }, "this will be clicked"));
});
//# sourceMappingURL=button.story.js.map