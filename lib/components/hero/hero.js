"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _constants = _interopRequireDefault(require("../../constants"));

var _heroHead = _interopRequireDefault(require("./components/hero-head"));

var _heroBody = _interopRequireDefault(require("./components/hero-body"));

var _heroFooter = _interopRequireDefault(require("./components/hero-footer"));

var _modifiers = _interopRequireDefault(require("../../modifiers"));

var _element = _interopRequireDefault(require("../element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var colors = [null].concat(Object.keys(_constants.default.COLORS).map(function (key) {
  return _constants.default.COLORS[key];
}));

var Hero = _react.default.forwardRef(function (_ref, ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      color = _ref.color,
      gradient = _ref.gradient,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, ["children", "className", "color", "gradient", "size"]);

  return _react.default.createElement(_element.default, _extends({}, props, {
    ref: ref,
    className: (0, _classnames2.default)('hero', className, (_classnames = {}, _defineProperty(_classnames, "is-".concat(color), color), _defineProperty(_classnames, "is-".concat(size), size), _defineProperty(_classnames, 'is-bold', gradient), _classnames))
  }), children);
});

Hero.Head = _heroHead.default;
Hero.Body = _heroBody.default;
Hero.Footer = _heroFooter.default;
Hero.propTypes = _objectSpread({}, _modifiers.default.propTypes, {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  style: _propTypes.default.shape({}),
  renderAs: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),
  color: _propTypes.default.oneOf(colors),
  gradient: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['small', 'medium', 'large', 'fullheight'])
});
Hero.defaultProps = _objectSpread({}, _modifiers.default.defaultProps, {
  children: null,
  className: '',
  style: {},
  renderAs: 'section',
  color: null,
  gradient: false,
  size: null
});
var _default = Hero;
exports.default = _default;
//# sourceMappingURL=hero.js.map