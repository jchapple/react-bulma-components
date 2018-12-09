"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _content = _interopRequireDefault(require("./components/content"));

var _card = _interopRequireDefault(require("./components/card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var KEYCODES = {
  ESCAPE: 27
};

var Modal =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Modal, _PureComponent);

  function Modal() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Modal)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.portalElement = null, _this.state = {}, _this.getDocument = function () {
      if (_this.props.document) {
        return _this.props.document;
      }

      if (typeof document !== 'undefined') {
        return document;
      }

      return null;
    }, _this.handleKeydown = function (e) {
      if (e.keyCode === KEYCODES.ESCAPE && _this.props.show) {
        _this.props.onClose();
      }
    }, _temp));
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var closeOnEsc = this.props.closeOnEsc;
      var doc = this.getDocument();
      this.portalElement = doc.createElement('div');
      this.portalElement.setAttribute('class', 'modal-container');
      doc.body.appendChild(this.portalElement); // eslint-disable-next-line

      if (closeOnEsc) {
        doc.addEventListener('keydown', this.handleKeydown);
      }

      this.forceUpdate();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var doc = this.getDocument();
      var closeOnEsc = this.props.closeOnEsc;

      if (closeOnEsc && doc) {
        doc.removeEventListener('keydown', this.handleKeydown);
      }

      this.portalElement.remove();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          innerRef = _this$props.innerRef,
          closeOnBlur = _this$props.closeOnBlur,
          show = _this$props.show,
          className = _this$props.className;

      if (!this.getDocument() || !this.portalElement || !show) {
        return null;
      }

      var children = this.props.children;
      var isCard;

      try {
        isCard = _react.default.Children.only(children).type.toString().indexOf('ModalCard') !== -1;
      } catch (e) {
        isCard = false;
      }

      var showClose = !isCard && this.props.showClose;

      if (isCard) {
        children = _react.default.cloneElement(children, {
          onClose: this.props.onClose
        });
      }

      return _reactDom.default.createPortal(_react.default.createElement("div", {
        ref: innerRef,
        className: (0, _classnames.default)('modal', className, {
          'is-active': show
        })
      }, _react.default.createElement("div", {
        role: "presentation",
        className: "modal-background",
        onClick: closeOnBlur ? this.props.onClose : null
      }), children, showClose && _react.default.createElement("button", {
        type: "button",
        onClick: this.props.onClose,
        className: "modal-close is-large",
        "aria-label": "close"
      })), this.portalElement);
    }
  }]);

  return Modal;
}(_react.PureComponent);

Modal.propTypes = {
  innerRef: _propTypes.default.node,
  show: _propTypes.default.bool.isRequired,
  onClose: _propTypes.default.func.isRequired,
  closeOnEsc: _propTypes.default.bool,
  closeOnBlur: _propTypes.default.bool,
  showClose: _propTypes.default.bool,
  children: _propTypes.default.node.isRequired,
  document: _propTypes.default.object,
  className: _propTypes.default.string
};
Modal.defaultProps = {
  innerRef: undefined,
  closeOnEsc: true,
  showClose: true,
  closeOnBlur: false,
  className: '',
  // Expose mount point for testing
  document: null
};

var ModalRef = _react.default.forwardRef(function (props, ref) {
  return _react.default.createElement(Modal, _extends({
    innerRef: ref
  }, props));
});

ModalRef.Content = _content.default;
ModalRef.Card = _card.default;
var _default = ModalRef;
exports.default = _default;
//# sourceMappingURL=modal.js.map