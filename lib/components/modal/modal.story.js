"use strict";

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("@storybook/react");

var _modal = _interopRequireDefault(require("react-bulma-components/lib/components/modal"));

var _image = _interopRequireDefault(require("react-bulma-components/lib/components/image"));

var _media = _interopRequireDefault(require("react-bulma-components/lib/components/media"));

var _button = _interopRequireDefault(require("react-bulma-components/lib/components/button"));

var _content = _interopRequireDefault(require("react-bulma-components/lib/components/content"));

var _section = _interopRequireDefault(require("react-bulma-components/lib/components/section"));

var _level = _interopRequireDefault(require("react-bulma-components/lib/components/level"));

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

var OpenModal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(OpenModal, _React$Component);

  function OpenModal() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, OpenModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(OpenModal)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      show: false
    }, _this.open = function () {
      return _this.setState({
        show: true
      });
    }, _this.close = function () {
      return _this.setState({
        show: false
      });
    }, _temp));
  }

  _createClass(OpenModal, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement(_button.default, {
        onClick: this.open
      }, "Open"), _react.default.createElement(_modal.default, _extends({
        show: this.state.show,
        onClose: this.close
      }, this.props.modal), this.props.children));
    }
  }]);

  return OpenModal;
}(_react.default.Component);

OpenModal.propTypes = {
  modal: _propTypes.default.object,
  children: _propTypes.default.node.isRequired
};
OpenModal.defaultProps = {
  modal: {}
};
(0, _react2.storiesOf)('Modal', module).add('Default', function () {
  return _react.default.createElement(OpenModal, {
    modal: {
      closeOnEsc: false
    }
  }, _react.default.createElement(_modal.default.Content, null, _react.default.createElement(_section.default, {
    style: {
      backgroundColor: 'white'
    }
  }, "Click on the ", '"X"', " button on the top-right button to close the Modal (pass closeOnEsc=false to the modal to avoid closing it with the keyboard)")));
}).add('Close with keyboard', function () {
  return _react.default.createElement(OpenModal, {
    modal: {
      showClose: false
    }
  }, _react.default.createElement(_modal.default.Content, null, _react.default.createElement(_section.default, {
    style: {
      backgroundColor: 'white'
    }
  }, "Press ESC on your keyboard to close this modal, Pass  showClose: false if you want to hide the close button")));
}).add('Close on click outside', function () {
  return _react.default.createElement(OpenModal, {
    modal: {
      closeOnBlur: true,
      showClose: false
    }
  }, _react.default.createElement(_modal.default.Content, null, _react.default.createElement(_section.default, {
    style: {
      backgroundColor: 'white'
    }
  }, "Pass closeOnBlur: true to enable to close the Modal when the user click outside the main modal container")));
}).add('Modal Card', function () {
  return _react.default.createElement(OpenModal, {
    modal: {
      closeOnBlur: true
    }
  }, _react.default.createElement(_modal.default.Card, null, _react.default.createElement(_modal.default.Card.Head, null, _react.default.createElement(_modal.default.Card.Title, null, "Title")), _react.default.createElement(_modal.default.Card.Body, null, _react.default.createElement(_media.default, null, _react.default.createElement(_media.default.Item, {
    renderAs: "figure",
    position: "left"
  }, _react.default.createElement(_image.default, {
    renderAs: "p",
    size: 64,
    alt: "64x64",
    src: "http://bulma.io/images/placeholders/128x128.png"
  })), _react.default.createElement(_media.default.Item, null, _react.default.createElement(_content.default, null, _react.default.createElement("p", null, _react.default.createElement("strong", null, "John Smith"), " ", _react.default.createElement("small", null, "@johnsmith"), " ", _react.default.createElement("small", null, "31m"), _react.default.createElement("br", null), "If the children of the Modal is a card, the close button will be on the Card Head instead than the top-right corner You can also pass showClose = false to Card.Head to hide the close button")), _react.default.createElement(_level.default, {
    breakpoint: "mobile"
  }, _react.default.createElement(_level.default.Side, {
    align: "left"
  }, _react.default.createElement(_button.default, {
    link: true
  }, "Like"), _react.default.createElement(_button.default, {
    link: true
  }, "Share")))))), _react.default.createElement(_modal.default.Card.Foot, {
    style: {
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, _react.default.createElement("p", null, "Lorem Ipsum..."))));
});
//# sourceMappingURL=modal.story.js.map