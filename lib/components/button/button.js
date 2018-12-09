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

var _buttonGroup = _interopRequireDefault(require("./components/button-group"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var colors = [null, ''].concat(Object.keys(_constants.default.COLORS).map(function (key) {
  return _constants.default.COLORS[key];
}));

var Button = _react.default.forwardRef(function (_ref, ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      renderAs = _ref.renderAs,
      color = _ref.color,
      size = _ref.size,
      outlined = _ref.outlined,
      inverted = _ref.inverted,
      state = _ref.state,
      submit = _ref.submit,
      reset = _ref.reset,
      fullwidth = _ref.fullwidth,
      loading = _ref.loading,
      disabled = _ref.disabled,
      remove = _ref.remove,
      isSelected = _ref.isSelected,
      isStatic = _ref.isStatic,
      rounded = _ref.rounded,
      onClick = _ref.onClick,
      text = _ref.text,
      allProps = _objectWithoutProperties(_ref, ["children", "className", "renderAs", "color", "size", "outlined", "inverted", "state", "submit", "reset", "fullwidth", "loading", "disabled", "remove", "isSelected", "isStatic", "rounded", "onClick", "text"]);

  var Element = isStatic ? 'span' : renderAs;

  var props = _modifiers.default.clean(allProps);

  var otherProps = {};

  if (submit) {
    Element = 'button';
    otherProps.type = 'submit';
  }

  if (reset) {
    Element = 'button';
    otherProps.type = 'reset';
  }

  return _react.default.createElement(Element, _extends({
    ref: ref,
    tabIndex: disabled ? -1 : 0
  }, props, otherProps, {
    disabled: disabled,
    onClick: disabled ? undefined : onClick,
    className: (0, _classnames2.default)(className, _modifiers.default.classnames(allProps), (_classnames = {}, _defineProperty(_classnames, "is-".concat(color), color), _defineProperty(_classnames, "is-".concat(size), size), _defineProperty(_classnames, "is-".concat(state), state), _defineProperty(_classnames, 'is-selected', isSelected), _defineProperty(_classnames, 'is-static', isStatic), _defineProperty(_classnames, 'is-rounded', rounded), _defineProperty(_classnames, 'is-outlined', outlined), _defineProperty(_classnames, 'is-inverted', inverted), _defineProperty(_classnames, 'is-fullwidth', fullwidth), _defineProperty(_classnames, 'is-loading', loading), _defineProperty(_classnames, 'is-text', text), _defineProperty(_classnames, "delete", remove), _defineProperty(_classnames, "button", !remove), _classnames))
  }), children);
});

Button.Group = _buttonGroup.default;
Button.propTypes = _objectSpread({}, _modifiers.default.propTypes, {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  style: _propTypes.default.shape({}),
  renderAs: _propTypes.default.oneOfType([_propTypes.default.oneOf(['a', 'button', 'span']), _propTypes.default.func]),
  onClick: _propTypes.default.func,
  color: _propTypes.default.oneOf(colors),
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),
  state: _propTypes.default.oneOf(['hover', 'focus', 'active', 'loading']),
  outlined: _propTypes.default.bool,
  inverted: _propTypes.default.bool,
  submit: _propTypes.default.bool,
  reset: _propTypes.default.bool,
  loading: _propTypes.default.bool,
  fullwidth: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  remove: _propTypes.default.bool,
  isSelected: _propTypes.default.bool,
  isStatic: _propTypes.default.bool,
  rounded: _propTypes.default.bool,
  text: _propTypes.default.bool
});
Button.defaultProps = _objectSpread({}, _modifiers.default.defaultProps, {
  children: null,
  className: '',
  style: {},
  renderAs: 'button',
  onClick: function onClick() {
    return null;
  },
  color: null,
  size: null,
  state: null,
  outlined: false,
  inverted: false,
  submit: false,
  reset: false,
  fullwidth: false,
  loading: false,
  disabled: false,
  remove: false,
  isSelected: false,
  isStatic: false,
  rounded: false,
  text: false
});
var _default = Button;
exports.default = _default;
//# sourceMappingURL=button.js.map