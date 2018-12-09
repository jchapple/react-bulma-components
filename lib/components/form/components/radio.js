"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _modifiers = _interopRequireDefault(require("../../../modifiers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Radio = _react.default.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      style = _ref.style,
      disabled = _ref.disabled,
      checked = _ref.checked,
      value = _ref.value,
      name = _ref.name,
      children = _ref.children,
      allProps = _objectWithoutProperties(_ref, ["className", "style", "disabled", "checked", "value", "name", "children"]);

  var props = _modifiers.default.clean(allProps);

  return _react.default.createElement("label", {
    disabled: disabled,
    className: (0, _classnames.default)('radio', _modifiers.default.classnames(allProps), className),
    style: style
  }, _react.default.createElement("input", _extends({}, props, {
    ref: ref,
    name: name,
    checked: checked,
    type: "radio",
    value: value,
    disabled: disabled
  })), children);
});

Radio.propTypes = _objectSpread({}, _modifiers.default.propTypes, {
  children: _propTypes.default.node,
  className: _propTypes.default.string,

  /**
   * The name of the input field Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
   */
  name: _propTypes.default.string.isRequired,
  style: _propTypes.default.shape({}),
  disabled: _propTypes.default.bool,
  checked: _propTypes.default.bool,
  value: _propTypes.default.string
});
Radio.defaultProps = _objectSpread({}, _modifiers.default.defaultProps, {
  children: null,
  className: '',
  value: '',
  style: {},
  disabled: false,
  checked: false
});
var _default = Radio;
exports.default = _default;
//# sourceMappingURL=radio.js.map