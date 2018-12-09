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

var _element = _interopRequireDefault(require("../../element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var colors = [null].concat(Object.keys(_constants.default.COLORS).map(function (key) {
  return _constants.default.COLORS[key];
}));

var Input =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Input, _React$PureComponent);

  function Input() {
    _classCallCheck(this, Input);

    return _possibleConstructorReturn(this, _getPrototypeOf(Input).apply(this, arguments));
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props = this.props,
          className = _this$props.className,
          type = _this$props.type,
          size = _this$props.size,
          color = _this$props.color,
          readOnly = _this$props.readOnly,
          isStatic = _this$props.isStatic,
          disabled = _this$props.disabled,
          placeholder = _this$props.placeholder,
          value = _this$props.value,
          name = _this$props.name,
          innerRef = _this$props.innerRef,
          props = _objectWithoutProperties(_this$props, ["className", "type", "size", "color", "readOnly", "isStatic", "disabled", "placeholder", "value", "name", "innerRef"]);

      return _react.default.createElement(_element.default, _extends({}, props, {
        ref: innerRef,
        renderAs: "input",
        name: name,
        value: value,
        type: type,
        placeholder: placeholder,
        readOnly: readOnly || isStatic,
        disabled: disabled,
        className: (0, _classnames2.default)('input', className, (_classnames = {
          'is-static': isStatic
        }, _defineProperty(_classnames, "is-".concat(size), size), _defineProperty(_classnames, "is-".concat(color), color), _classnames))
      }));
    }
  }]);

  return Input;
}(_react.default.PureComponent);

Input.propTypes = _objectSpread({}, _modifiers.default.propTypes, {
  className: _propTypes.default.string,
  style: _propTypes.default.shape({}),
  type: _propTypes.default.oneOf(['text', 'email', 'tel', 'password', 'number', 'search', 'color', 'date', 'time']),
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),
  color: _propTypes.default.oneOf(colors),
  readOnly: _propTypes.default.bool,
  isStatic: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  placeholder: _propTypes.default.string,
  value: _propTypes.default.string,

  /**
   * The name of the input field Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
   */
  name: _propTypes.default.string
});
Input.defaultProps = _objectSpread({}, _modifiers.default.defaultProps, {
  className: '',
  value: '',
  style: {},
  type: 'text',
  size: null,
  color: null,
  readOnly: false,
  isStatic: false,
  disabled: false,
  placeholder: '',
  name: null
});

var _default = _react.default.forwardRef(function (props, ref) {
  return _react.default.createElement(Input, _extends({
    innerRef: ref
  }, props));
});

exports.default = _default;
//# sourceMappingURL=input.js.map