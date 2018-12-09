"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _element = _interopRequireDefault(require("../../element"));

var _modifiers = _interopRequireDefault(require("../../../modifiers"));

var _constants = _interopRequireDefault(require("../../../constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var InputFile =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(InputFile, _PureComponent);

  function InputFile() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, InputFile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InputFile)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      filename: undefined
    }, _this.select = function (event) {
      var files = event.target.files;

      _this.setState({
        filename: files.length > 0 ? files[0].name : undefined
      });

      if (_this.props.onChange) {
        _this.props.onChange(event);
      }
    }, _temp));
  }

  _createClass(InputFile, [{
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style,
          onChange = _this$props.onChange,
          color = _this$props.color,
          size = _this$props.size,
          fileName = _this$props.fileName,
          fullwidth = _this$props.fullwidth,
          right = _this$props.right,
          boxed = _this$props.boxed,
          name = _this$props.name,
          label = _this$props.label,
          icon = _this$props.icon,
          props = _objectWithoutProperties(_this$props, ["className", "style", "onChange", "color", "size", "fileName", "fullwidth", "right", "boxed", "name", "label", "icon"]);

      var filename = this.state.filename;
      return _react.default.createElement(_element.default, {
        style: style,
        className: (0, _classnames2.default)('file', className, (_classnames = {}, _defineProperty(_classnames, "is-".concat(size), size), _defineProperty(_classnames, "is-".concat(color), color), _defineProperty(_classnames, 'has-name', !fileName), _defineProperty(_classnames, 'is-right', right), _defineProperty(_classnames, 'is-boxed', boxed), _defineProperty(_classnames, 'is-fullwidth', fullwidth), _classnames))
      }, _react.default.createElement("label", {
        className: "file-label"
      }, _react.default.createElement("input", _extends({}, props, {
        name: name,
        value: "",
        type: "file",
        className: "file-input",
        onChange: this.select
      })), _react.default.createElement("span", {
        className: "file-cta"
      }, icon && _react.default.createElement("span", {
        className: "file-icon"
      }, icon), _react.default.createElement("span", {
        className: "file-label"
      }, label)), fileName && filename && _react.default.createElement("span", {
        className: "file-name"
      }, filename)));
    }
  }]);

  return InputFile;
}(_react.PureComponent);

exports.default = InputFile;
InputFile.propTypes = _objectSpread({}, _modifiers.default.propTypes, {
  className: _propTypes.default.string,
  style: _propTypes.default.shape({}),
  onChange: _propTypes.default.func,
  color: _propTypes.default.oneOf(colors),
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),
  fileName: _propTypes.default.bool,
  fullwidth: _propTypes.default.bool,
  right: _propTypes.default.bool,
  boxed: _propTypes.default.bool,

  /**
   * The name of the input field Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
   */
  name: _propTypes.default.string,
  label: _propTypes.default.string,
  icon: _propTypes.default.element
});
InputFile.defaultProps = _objectSpread({}, _modifiers.default.defaultProps, {
  className: undefined,
  style: undefined,
  onChange: function onChange() {},
  color: undefined,
  size: undefined,
  fileName: true,
  fullwidth: undefined,
  right: undefined,
  boxed: undefined,
  name: undefined,
  icon: undefined,
  label: 'Choose a file...'
});
//# sourceMappingURL=input-file.js.map