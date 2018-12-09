"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _navbar = _interopRequireDefault(require("react-bulma-components/lib/components/navbar"));

var _box = _interopRequireDefault(require("../box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* eslint-disable react/no-multi-comp, react/prop-types */
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
(0, _react2.storiesOf)('Navbar', module).addDecorator(function (story) {
  return _react.default.createElement("div", null, story(), _react.default.createElement(_box.default, {
    style: {
      margin: '15px auto',
      maxWidth: '75vw'
    }
  }, "Check the Know tab to see the behavior of this component"));
}).add('Default', function () {
  return _react.default.createElement(_navbar.default, {
    color: (0, _addonKnobs.select)('Color', colors),
    fixed: (0, _addonKnobs.select)('Fixed', {
      default: null,
      top: 'top',
      bottom: 'bottom'
    }),
    active: (0, _addonKnobs.boolean)('Active', false),
    transparent: (0, _addonKnobs.boolean)('Transparent', false)
  }, _react.default.createElement(_navbar.default.Brand, null, _react.default.createElement(_navbar.default.Item, {
    renderAs: "a",
    href: "#"
  }, _react.default.createElement("img", {
    src: "https://bulma.io/images/bulma-logo.png",
    alt: "Bulma: a modern CSS framework based on Flexbox",
    width: "112",
    height: "28"
  })), _react.default.createElement(_navbar.default.Burger, null)), _react.default.createElement(_navbar.default.Menu, null, _react.default.createElement(_navbar.default.Container, null, _react.default.createElement(_navbar.default.Item, {
    href: "#"
  }, "Second")), _react.default.createElement(_navbar.default.Container, {
    position: "end"
  }, _react.default.createElement(_navbar.default.Item, {
    href: "#"
  }, "At the end"))));
});
//# sourceMappingURL=navbar.story.js.map