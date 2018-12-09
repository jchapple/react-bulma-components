"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _modifiers = _interopRequireDefault(require("../../../modifiers"));

var _element = _interopRequireDefault(require("../../element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DropdownItem = function DropdownItem(_ref) {
  var active = _ref.active,
      children = _ref.children,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, ["active", "children", "value"]);

  return _react.default.createElement(_element.default, _extends({
    title: value
  }, props, {
    role: "presentation",
    className: (0, _classnames.default)('dropdown-item', {
      'is-active': active
    })
  }), children);
};

DropdownItem.propTypes = _objectSpread({}, _modifiers.default.propTypes, {
  active: _propTypes.default.bool,
  children: _propTypes.default.node,
  value: _propTypes.default.any.isRequired,
  onClick: _propTypes.default.func
});
DropdownItem.defaultProps = _objectSpread({}, _modifiers.default.defaultProps, {
  active: false,
  onClick: undefined,
  children: null
});
var _default = DropdownItem;
exports.default = _default;
//# sourceMappingURL=item.js.map