"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getHtmlClasses = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _canUseDom = _interopRequireDefault(require("../../services/can-use-dom"));

var _brand = _interopRequireDefault(require("./components/brand"));

var _burger = _interopRequireDefault(require("./components/burger"));

var _menu = _interopRequireDefault(require("./components/menu"));

var _item = _interopRequireDefault(require("./components/item"));

var _dropdown = _interopRequireDefault(require("./components/dropdown"));

var _divider = _interopRequireDefault(require("./components/divider"));

var _link = _interopRequireDefault(require("./components/link"));

var _container = _interopRequireDefault(require("./components/container"));

var _constants = _interopRequireDefault(require("../../constants"));

var _context = require("./context");

var _element = _interopRequireDefault(require("../element"));

var _modifiers = _interopRequireDefault(require("../../modifiers"));

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
var htmlClass = '';

var getHtmlClasses = function getHtmlClasses() {
  return htmlClass;
};

exports.getHtmlClasses = getHtmlClasses;

var Navbar =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Navbar, _React$PureComponent);

  function Navbar() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, Navbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Navbar)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {}, _temp));
  }

  _createClass(Navbar, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var fixed = this.props.fixed;
      window.document.querySelector('html').classList.remove("has-navbar-fixed-".concat(fixed));
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props = this.props,
          innerRef = _this$props.innerRef,
          children = _this$props.children,
          className = _this$props.className,
          fixed = _this$props.fixed,
          transparent = _this$props.transparent,
          color = _this$props.color,
          active = _this$props.active,
          props = _objectWithoutProperties(_this$props, ["innerRef", "children", "className", "fixed", "transparent", "color", "active"]);

      return _react.default.createElement(_context.ShowContext.Provider, {
        value: active
      }, _react.default.createElement(_element.default, _extends({}, props, {
        ref: innerRef,
        role: "navigation",
        className: (0, _classnames2.default)('navbar', _modifiers.default.classnames(props), className, (_classnames = {
          'is-transparent': transparent
        }, _defineProperty(_classnames, "is-fixed-".concat(fixed), fixed), _defineProperty(_classnames, "is-".concat(color), color), _classnames))
      }), children));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if (!_canUseDom.default) {
        return null;
      }

      var html = window.document.querySelector('html');
      html.classList.remove('has-navbar-fixed-top');
      html.classList.remove('has-navbar-fixed-bottom');

      if (nextProps.fixed) {
        htmlClass = "has-navbar-fixed-".concat(nextProps.fixed);
        html.classList.add("has-navbar-fixed-".concat(nextProps.fixed));
      }

      return null;
    }
  }]);

  return Navbar;
}(_react.default.PureComponent); // const NavbarRef = React.forwardRef((props, ref) => <Navbar innerRef={ref} {...props} />);


Navbar.propTypes = _objectSpread({}, _modifiers.default.propTypes, {
  children: _propTypes.default.node,
  innerRef: _propTypes.default.node,
  className: _propTypes.default.string,
  style: _propTypes.default.shape({}),
  transparent: _propTypes.default.bool,
  renderAs: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),
  fixed: _propTypes.default.oneOf(['top', 'bottom']),
  color: _propTypes.default.oneOf(colors),
  active: _propTypes.default.bool
});
Navbar.defaultProps = _objectSpread({}, _modifiers.default.defaultProps, {
  children: null,
  innerRef: undefined,
  className: '',
  style: {},
  renderAs: 'nav',
  transparent: false,
  active: false,
  fixed: null,
  color: null
});

var NavbarRef = _react.default.forwardRef(function (props, ref) {
  return _react.default.createElement(Navbar, _extends({
    innerRef: ref
  }, props));
});

NavbarRef.Brand = _brand.default;
NavbarRef.Burger = _burger.default;
NavbarRef.Menu = _menu.default;
NavbarRef.Item = _item.default;
NavbarRef.Dropdown = _dropdown.default;
NavbarRef.Link = _link.default;
NavbarRef.Divider = _divider.default;
NavbarRef.Container = _container.default;
var _default = NavbarRef;
exports.default = _default;
//# sourceMappingURL=navbar.js.map