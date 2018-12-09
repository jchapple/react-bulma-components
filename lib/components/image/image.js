"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _constants = _interopRequireDefault(require("./constants"));

var _modifiers = _interopRequireDefault(require("../../modifiers"));

var _element = _interopRequireDefault(require("../element"));

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

var Image =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Image, _PureComponent);

  function Image() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, Image);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Image)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {}, _this.onError = function () {
      _this.setState({
        src: _this.props.fallback
      });
    }, _temp));
  }

  _createClass(Image, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          alt = _this$props.alt,
          size = _this$props.size,
          fallback = _this$props.fallback,
          rounded = _this$props.rounded,
          src = _this$props.src,
          props = _objectWithoutProperties(_this$props, ["className", "alt", "size", "fallback", "rounded", "src"]);

      var s = size;

      if (typeof size === 'number') {
        s = "".concat(s, "x").concat(s);
      }

      return _react.default.createElement(_element.default, _extends({}, props, {
        renderAs: "figure",
        className: (0, _classnames2.default)('image', className, _defineProperty({}, "is-".concat(s), s))
      }), _react.default.createElement("img", {
        className: (0, _classnames2.default)({
          'is-rounded': rounded
        }),
        onError: this.onError,
        src: this.state.src,
        alt: alt
      }));
    }
  }]);

  return Image;
}(_react.PureComponent);

exports.default = Image;
Image.propTypes = _objectSpread({}, _modifiers.default.propTypes, {
  className: _propTypes.default.string,
  src: _propTypes.default.string,
  alt: _propTypes.default.string,
  rounded: _propTypes.default.bool,
  style: _propTypes.default.shape({}),
  size: _propTypes.default.oneOf(_constants.default.SIZES),
  fallback: _propTypes.default.string
});
Image.defaultProps = _objectSpread({}, _modifiers.default.defaultProps, {
  className: '',
  src: '',
  alt: '',
  rounded: false,
  style: {},
  size: null,
  fallback: 'http//bulma.io/images/placeholders/480x480.png'
});

Image.getDerivedStateFromProps = function (props, state) {
  return {
    src: state.default !== props.src ? props.src : state.src,
    default: props.src
  };
};
//# sourceMappingURL=image.js.map