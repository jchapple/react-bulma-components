"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _tab = _interopRequireDefault(require("./components/tab"));

var _modifiers = _interopRequireDefault(require("../../modifiers"));

var _element = _interopRequireDefault(require("../element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Tabs = _react.default.forwardRef(function (_ref, ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      align = _ref.align,
      size = _ref.size,
      type = _ref.type,
      fullwidth = _ref.fullwidth,
      props = _objectWithoutProperties(_ref, ["children", "className", "align", "size", "type", "fullwidth"]);

  return _react.default.createElement(_element.default, _extends({}, props, {
    ref: ref,
    className: (0, _classnames2.default)('tabs', className, (_classnames = {}, _defineProperty(_classnames, "is-".concat(align), align), _defineProperty(_classnames, "is-".concat(size), size), _defineProperty(_classnames, 'is-toggle', type === 'toggle-rounded'), _defineProperty(_classnames, "is-".concat(type), type), _defineProperty(_classnames, 'is-fullwidth', fullwidth), _classnames))
  }), _react.default.createElement("ul", null, children));
});

Tabs.Tab = _tab.default;
Tabs.propTypes = _objectSpread({}, _modifiers.default.propTypes, {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  style: _propTypes.default.shape({}),
  renderAs: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),
  align: _propTypes.default.oneOf(['centered', 'right']),
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),

  /** This is called style on Bulma documentation */
  type: _propTypes.default.oneOf(['toggle', 'boxed', 'toggle-rounded']),
  fullwidth: _propTypes.default.bool
});
Tabs.defaultProps = _objectSpread({}, _modifiers.default.defaultProps, {
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
  align: null,
  size: null,
  type: null,
  fullwidth: false
});
var _default = Tabs;
exports.default = _default;
//# sourceMappingURL=tabs.js.map