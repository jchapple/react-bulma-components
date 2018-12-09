"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _modifiers = _interopRequireDefault(require("../../../modifiers"));

var _constants = _interopRequireDefault(require("../../../constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var colors = [null].concat(Object.keys(_constants.default.COLORS).map(function (key) {
  return _constants.default.COLORS[key];
}));

var Select = _react.default.forwardRef(function (_ref, ref) {
  var _classnames;

  var className = _ref.className,
      style = _ref.style,
      size = _ref.size,
      color = _ref.color,
      loading = _ref.loading,
      readOnly = _ref.readOnly,
      disabled = _ref.disabled,
      value = _ref.value,
      multiple = _ref.multiple,
      children = _ref.children,
      name = _ref.name,
      allProps = _objectWithoutProperties(_ref, ["className", "style", "size", "color", "loading", "readOnly", "disabled", "value", "multiple", "children", "name"]);

  var props = _modifiers.default.clean(allProps);

  return _react.default.createElement("div", {
    className: (0, _classnames2.default)('select', _modifiers.default.classnames(allProps), className, (_classnames = {}, _defineProperty(_classnames, "is-".concat(size), size), _defineProperty(_classnames, "is-".concat(color), color), _defineProperty(_classnames, 'is-loading', loading), _defineProperty(_classnames, 'is-multiple', multiple), _classnames)),
    style: style
  }, _react.default.createElement("select", _extends({}, props, {
    ref: ref,
    multiple: multiple,
    value: value,
    readOnly: readOnly,
    disabled: disabled,
    name: name
  }), children));
});

Select.propTypes = _objectSpread({}, _modifiers.default.propTypes, {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  style: _propTypes.default.shape({}),
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),
  color: _propTypes.default.oneOf(colors),
  readOnly: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  multiple: _propTypes.default.bool,
  loading: _propTypes.default.bool,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
       * The name of the input field Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
       */
  name: _propTypes.default.string
});
Select.defaultProps = _objectSpread({}, _modifiers.default.defaultProps, {
  children: null,
  className: '',
  value: '',
  style: {},
  size: null,
  color: null,
  readOnly: false,
  disabled: false,
  multiple: false,
  loading: false,
  name: null
});
var _default = Select;
exports.default = _default;
//# sourceMappingURL=select.js.map