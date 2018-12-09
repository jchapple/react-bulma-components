"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _constants = _interopRequireDefault(require("../../constants"));

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

var Tile = _react.default.forwardRef(function (_ref, ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      kind = _ref.kind,
      vertical = _ref.vertical,
      size = _ref.size,
      color = _ref.color,
      notification = _ref.notification,
      props = _objectWithoutProperties(_ref, ["children", "className", "kind", "vertical", "size", "color", "notification"]);

  return _react.default.createElement(_element.default, _extends({}, props, {
    ref: ref,
    className: (0, _classnames2.default)('tile', className, (_classnames = {
      notification: notification
    }, _defineProperty(_classnames, "is-".concat(kind), kind), _defineProperty(_classnames, "is-".concat(size), size), _defineProperty(_classnames, "is-".concat(color), color), _defineProperty(_classnames, 'is-vertical', vertical), _classnames))
  }), children);
});

Tile.propTypes = _objectSpread({}, _modifiers.default.propTypes, {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  style: _propTypes.default.shape({}),
  renderAs: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),
  kind: _propTypes.default.oneOf(['ancestor', 'parent', 'child']),
  vertical: _propTypes.default.bool,
  size: _propTypes.default.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  color: _propTypes.default.oneOf(colors),
  notification: _propTypes.default.bool
});
Tile.defaultProps = _objectSpread({}, _modifiers.default.defaultProps, {
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
  kind: null,
  vertical: false,
  size: null,
  color: null,
  notification: false
});
var _default = Tile;
exports.default = _default;
//# sourceMappingURL=tile.js.map