"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _box = _interopRequireDefault(require("react-bulma-components/lib/components/box"));

var _breadcrumb = _interopRequireDefault(require("react-bulma-components/lib/components/breadcrumb"));

var _addonKnobs = require("@storybook/addon-knobs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

(0, _react2.storiesOf)('Breadcrumb', module).add('Default', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_box.default, null, _react.default.createElement(_breadcrumb.default, {
    separator: (0, _addonKnobs.select)('Separator', {
      arrow: 'arrow',
      dot: 'dot',
      bullet: 'bullet',
      succeeds: 'succeeds'
    }),
    items: [{
      name: 'Storybook',
      url: '#1'
    }, {
      name: 'Breadcrumb',
      url: '#2'
    }, {
      name: 'Breadcrumb Types',
      url: '#3',
      active: true
    }]
  })));
}).add('Use Custom render Element', function () {
  /* eslint-disable react/prop-types */
  var Anchor = function Anchor(_ref) {
    var children = _ref.children,
        props = _objectWithoutProperties(_ref, ["children"]);

    return _react.default.createElement("a", _extends({
      className: "Others"
    }, props), children);
  };
  /* eslint-enable react/prop-types */


  return _react.default.createElement("div", null, _react.default.createElement(_box.default, null, _react.default.createElement(_breadcrumb.default, {
    renderAs: Anchor,
    hrefAttr: "href",
    separator: (0, _addonKnobs.select)('Separator', {
      default: null,
      arrow: 'arrow',
      dot: 'dot',
      bullet: 'bullet',
      succeeds: 'succeeds'
    }),
    items: [{
      name: 'Storybook',
      url: '#1'
    }, {
      name: 'Breadcrumb',
      url: '#2'
    }, {
      name: 'Breadcrumb Types',
      url: '#3',
      active: true
    }]
  })));
});
//# sourceMappingURL=breadcrumb.story.js.map