"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _constants = _interopRequireDefault(require("../../constants"));

var _column = _interopRequireDefault(require("./components/column"));

var _constants2 = _interopRequireDefault(require("./constants"));

var _modifiers = _interopRequireDefault(require("../../modifiers"));

var _element = _interopRequireDefault(require("../element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var breakpoints = [null].concat(Object.keys(_constants.default.BREAKPOINTS).map(function (key) {
  return _constants.default.BREAKPOINTS[key];
}));

var Columns = _react.default.forwardRef(function (_ref, ref) {
  var _classNames;

  var className = _ref.className,
      breakpoint = _ref.breakpoint,
      gapless = _ref.gapless,
      multiline = _ref.multiline,
      centered = _ref.centered,
      props = _objectWithoutProperties(_ref, ["className", "breakpoint", "gapless", "multiline", "centered"]);

  return _react.default.createElement(_element.default, _extends({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, 'columns', (_classNames = {}, _defineProperty(_classNames, "is-".concat(breakpoint), breakpoint), _defineProperty(_classNames, 'is-gapless', gapless), _defineProperty(_classNames, 'is-multiline', multiline), _defineProperty(_classNames, 'is-centered', centered), _classNames))
  }));
});

Columns.Column = _column.default;
Columns.CONSTANTS = _constants2.default;
Columns.propTypes = _objectSpread({}, _modifiers.default.propTypes, {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  style: _propTypes.default.shape({}),

  /**
     * Breakpoint where columns become stacked.
     */
  breakpoint: _propTypes.default.oneOf(breakpoints),

  /**
     * `true` to remove space between columns
     */
  gapless: _propTypes.default.bool,

  /**
     * `true` if you want to use more than one line if you add more column elements that would fit in a single row.
     */
  multiline: _propTypes.default.bool,

  /**
     * `true` you want the columns inside to be horizontaly centered
     */
  centered: _propTypes.default.bool
});
Columns.defaultProps = _objectSpread({}, _modifiers.default.defaultProps, {
  children: null,
  className: '',
  style: {},
  breakpoint: null,
  gapless: false,
  centered: false,
  multiline: true
});
var _default = Columns;
exports.default = _default;
//# sourceMappingURL=columns.js.map