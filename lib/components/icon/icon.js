"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames3 = _interopRequireDefault(require("classnames"));

var _modifiers = _interopRequireDefault(require("../../modifiers"));

var _constants = _interopRequireDefault(require("../../constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var colors = [null].concat(Object.keys(_constants.default.COLORS).map(function (key) {
  return _constants.default.COLORS[key];
}));

var Icon = _react.default.forwardRef(function (_ref, ref) {
  var _classnames;

  var icon = _ref.icon,
      size = _ref.size,
      color = _ref.color,
      className = _ref.className,
      align = _ref.align,
      children = _ref.children,
      allProps = _objectWithoutProperties(_ref, ["icon", "size", "color", "className", "align", "children"]);

  var props = _modifiers.default.clean(allProps);

  return _react.default.createElement("span", _extends({}, props, {
    className: (0, _classnames3.default)('icon', _modifiers.default.classnames(allProps), className, (_classnames = {}, _defineProperty(_classnames, "is-".concat(size), size), _defineProperty(_classnames, "is-".concat(align), align), _defineProperty(_classnames, "has-text-".concat(color), color), _classnames))
  }), children || _react.default.createElement("i", {
    ref: ref,
    className: (0, _classnames3.default)('rbc', _defineProperty({}, "rbc-".concat(icon), icon))
  }));
});

Icon.propTypes = _objectSpread({}, _modifiers.default.propTypes, {
  icon: _propTypes.default.string,
  children: _propTypes.default.element,
  className: _propTypes.default.string,
  style: _propTypes.default.shape({}),
  size: _propTypes.default.oneOf(['small', 'medium', 'large', 'auto']),
  align: _propTypes.default.oneOf(['left', 'right']),
  color: _propTypes.default.oneOf(colors)
});
Icon.defaultProps = _objectSpread({}, _modifiers.default.defaultProps, {
  className: '',
  style: {},
  size: null,
  color: null,
  children: null,
  align: null,
  icon: null
});
var _default = Icon;
exports.default = _default;
//# sourceMappingURL=icon.js.map