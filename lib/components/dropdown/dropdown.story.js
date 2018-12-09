"use strict";

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

var _container = _interopRequireDefault(require("../container"));

var _section = _interopRequireDefault(require("../section"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var alignment = {
  Default: '',
  right: 'right'
};

var Wrapper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Wrapper, _React$Component);

  function Wrapper() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, Wrapper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Wrapper)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      selected: 'active'
    }, _this.onChange = function (selected) {
      _this.setState({
        selected: selected
      });
    }, _temp));
  }

  _createClass(Wrapper, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_.default, _extends({
        value: this.state.selected,
        onChange: this.onChange,
        color: "info"
      }, this.props), _react.default.createElement(_.default.Item, {
        value: "item"
      }, "Dropdown item"), _react.default.createElement(_.default.Item, {
        value: "other"
      }, "Other Dropdown item"), _react.default.createElement(_.default.Item, {
        value: "active"
      }, "Active Dropdown item"), _react.default.createElement(_.default.Item, {
        value: "other 2"
      }, "Other Dropdown item"), _react.default.createElement(_.default.Divider, null), _react.default.createElement(_.default.Item, {
        value: "divider"
      }, "With divider"));
    }
  }]);

  return Wrapper;
}(_react.default.Component);

(0, _react2.storiesOf)('Dropdown', module).add('Default', function () {
  return _react.default.createElement(_.default, {
    value: "item"
  }, _react.default.createElement(_.default.Item, {
    value: "item"
  }, "Dropdown item"), _react.default.createElement(_.default.Item, {
    value: "other"
  }, "Other Dropdown item"), _react.default.createElement(_.default.Item, {
    value: "active"
  }, "Active Dropdown item"), _react.default.createElement(_.default.Item, {
    value: "other 2"
  }, "Other Dropdown item"), _react.default.createElement(_.default.Divider, null), _react.default.createElement(_.default.Item, {
    value: "divider"
  }, "With divider"));
}).add('Hoverable', function () {
  return _react.default.createElement(_.default, {
    hoverable: true,
    value: "item"
  }, _react.default.createElement(_.default.Item, {
    value: "item"
  }, "Dropdown item"), _react.default.createElement(_.default.Item, {
    value: "other"
  }, "Other Dropdown item"), _react.default.createElement(_.default.Item, {
    value: "active"
  }, "Active Dropdown item"), _react.default.createElement(_.default.Item, {
    value: "other 2"
  }, "Other Dropdown item"), _react.default.createElement(_.default.Divider, null), _react.default.createElement(_.default.Item, {
    value: "divider"
  }, "With divider"));
}).add('Alignment', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_container.default, null, _react.default.createElement(_section.default, {
    size: "large"
  }, _react.default.createElement(_.default, {
    align: (0, _addonKnobs.select)('align (deprecated; will be removed in future releases)', alignment),
    right: (0, _addonKnobs.boolean)('right (will replace "align" prop)', false),
    value: "item",
    up: (0, _addonKnobs.boolean)('up', false)
  }, _react.default.createElement(_.default.Item, {
    value: "item"
  }, "Dropdown item"), _react.default.createElement(_.default.Item, {
    value: "other"
  }, "Other Dropdown item"), _react.default.createElement(_.default.Item, {
    value: "active"
  }, "Active Dropdown item"), _react.default.createElement(_.default.Item, {
    value: "other 2"
  }, "Other Dropdown item"), _react.default.createElement(_.default.Divider, null), _react.default.createElement(_.default.Item, {
    value: "divider"
  }, "With divider")))));
}).add('Controlled component', function () {
  return _react.default.createElement(Wrapper, null);
}).add('Controlled component Hoverable', function () {
  return _react.default.createElement(Wrapper, {
    hoverable: true,
    color: "dark"
  });
});
//# sourceMappingURL=dropdown.story.js.map