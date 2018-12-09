"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _constants = _interopRequireDefault(require("../../constants"));

var _item = _interopRequireDefault(require("./components/item"));

var _divider = _interopRequireDefault(require("./components/divider"));

var _button = _interopRequireDefault(require("../button"));

var _icon = _interopRequireDefault(require("../icon"));

var _modifiers = _interopRequireDefault(require("../../modifiers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var Dropdown =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Dropdown, _PureComponent);

  function Dropdown() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, Dropdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Dropdown)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      open: false
    }, _this.close = function (evt) {
      // IDK yet how to test using the ref in enzime
      if (_this.props.hoverable || evt && _this.htmlElement.contains(evt.target)) {
        return;
      }

      _this.setState({
        open: false
      });
    }, _this.toggle = function (evt) {
      if (_this.props.hoverable) {
        return;
      }

      if (evt) {
        evt.preventDefault();
      }

      _this.setState(function (_ref) {
        var open = _ref.open;
        return {
          open: !open
        };
      });
    }, _this.select = function (value) {
      return function () {
        if (_this.props.onChange) {
          _this.props.onChange(value);
        }

        _this.close();
      };
    }, _temp));
  }

  _createClass(Dropdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('click', this.close);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.close);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          value = _this$props.value,
          color = _this$props.color,
          align = _this$props.align,
          right = _this$props.right,
          up = _this$props.up,
          hoverable = _this$props.hoverable,
          onChange = _this$props.onChange,
          allProps = _objectWithoutProperties(_this$props, ["className", "children", "value", "color", "align", "right", "up", "hoverable", "onChange"]);

      var current = null;

      var props = _modifiers.default.clean(allProps);

      var childrenArray = _react.default.Children.map(children, function (child, i) {
        if (i === 0 || child.props.value === value) {
          current = child.props.children;
        }

        return _react.default.cloneElement(child, child.type === _item.default ? {
          active: child.props.value === value,
          onClick: _this2.select(child.props.value)
        } : {});
      });

      if (align === 'right') {
        // eslint-disable-next-line no-console
        console.warn('react-bulma-components: "Align" prop will be replaced by "right" prop in future releases. Please update your code to avoid breaking changes.');
      }

      return _react.default.createElement("div", _extends({}, props, {
        ref: function ref(node) {
          _this2.htmlElement = node;
        },
        className: (0, _classnames.default)('dropdown', _modifiers.default.classnames(allProps), className, {
          'is-active': this.state.open,
          'is-up': up,
          'is-right': right || align === 'right',
          'is-hoverable': hoverable
        })
      }), _react.default.createElement("div", {
        className: "dropdown-trigger",
        role: "presentation",
        onClick: this.toggle
      }, _react.default.createElement(_button.default, {
        color: color
      }, _react.default.createElement("span", null, current), _react.default.createElement(_icon.default, {
        icon: "angle-down",
        size: "small"
      }))), _react.default.createElement("div", {
        className: "dropdown-menu",
        id: "dropdown-menu",
        role: "menu"
      }, _react.default.createElement("div", {
        className: "dropdown-content"
      }, childrenArray)));
    }
  }]);

  return Dropdown;
}(_react.PureComponent);

exports.default = Dropdown;
Dropdown.Item = _item.default;
Dropdown.Divider = _divider.default;
Dropdown.propTypes = _objectSpread({}, _modifiers.default.propTypes, {
  className: _propTypes.default.string,
  style: _propTypes.default.shape({}),
  children: _propTypes.default.node,
  value: _propTypes.default.any,
  onChange: _propTypes.default.func,
  color: _propTypes.default.oneOf(colors),
  right: _propTypes.default.bool,
  up: _propTypes.default.bool,
  align: _propTypes.default.oneOf(['right']),
  hoverable: _propTypes.default.bool
});
Dropdown.defaultProps = _objectSpread({}, _modifiers.default.defaultProps, {
  className: '',
  style: {},
  value: undefined,
  children: [],
  onChange: undefined,
  color: undefined,
  align: undefined,
  hoverable: undefined
});
//# sourceMappingURL=dropdown.js.map