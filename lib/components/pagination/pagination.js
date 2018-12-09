"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _modifiers = _interopRequireDefault(require("../../modifiers"));

var _element = _interopRequireDefault(require("../element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var Pagination =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Pagination, _React$PureComponent);

  function Pagination() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, Pagination);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Pagination)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.goToPage = function (page) {
      return function (evt) {
        evt.preventDefault();
        var onChange = _this.props.onChange;
        onChange(page);
      };
    }, _this.firstPage = function (current, total) {
      var delta = _this.props.delta;

      if (current === 1) {
        return 1;
      }

      var page = current - delta * (current === total ? 2 : 1);
      return page <= 0 ? 1 : page;
    }, _this.lastPage = function (current, total) {
      var delta = _this.props.delta;

      if (current === total) {
        return total;
      }

      var page = current + delta * (current === 1 ? 2 : 1);
      return page > total ? total : page;
    }, _temp));
  }

  _createClass(Pagination, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          innerRef = _this$props.innerRef,
          current = _this$props.current,
          total = _this$props.total,
          next = _this$props.next,
          previous = _this$props.previous,
          showPrevNext = _this$props.showPrevNext,
          delta = _this$props.delta,
          autoHide = _this$props.autoHide,
          className = _this$props.className,
          onChange = _this$props.onChange,
          props = _objectWithoutProperties(_this$props, ["innerRef", "current", "total", "next", "previous", "showPrevNext", "delta", "autoHide", "className", "onChange"]);

      if (total <= 1 && autoHide) {
        return null;
      }

      if (current > total) {
        return null;
      }

      var firstPage = this.firstPage(current, total);
      var lastPage = this.lastPage(current, total);
      return _react.default.createElement(_element.default, _extends({}, props, {
        ref: innerRef,
        className: (0, _classnames.default)('pagination', className),
        "aria-label": "pagination"
      }), showPrevNext && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("a", {
        role: "button",
        tabIndex: 0,
        onClick: current === 1 ? undefined : this.goToPage(current - 1),
        className: "pagination-previous",
        title: "This is the first page",
        disabled: current === 1
      }, previous), _react.default.createElement("a", {
        role: "button",
        tabIndex: 0,
        onClick: current === total ? undefined : this.goToPage(current + 1),
        className: "pagination-next",
        disabled: current === total
      }, next)), delta > 0 && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("ul", {
        className: "pagination-list"
      }, Array(lastPage - firstPage + 1).fill(0).map(function (_, i) {
        return (// eslint-disable-next-line react/no-array-index-key
          _react.default.createElement("li", {
            key: i + firstPage
          }, _react.default.createElement("a", {
            role: "button",
            tabIndex: 0,
            className: (0, _classnames.default)('pagination-link', {
              'is-current': current === i + firstPage
            }),
            onClick: current === firstPage + i ? undefined : _this2.goToPage(firstPage + i),
            "aria-label": "Page ".concat(i + firstPage),
            "aria-current": "page"
          }, i + firstPage))
        );
      }))));
    }
  }]);

  return Pagination;
}(_react.default.PureComponent);

Pagination.propTypes = _objectSpread({}, _modifiers.default.propTypes, {
  innerRef: _propTypes.default.node,

  /** Current page */
  current: _propTypes.default.number,

  /** Total pages in total */
  total: _propTypes.default.number,

  /** Amount og pages to display at the left and right of the current (if delta 2 and current page is 3, the paginator will display pages from 1 to 5) */
  delta: _propTypes.default.number,
  onChange: _propTypes.default.func,

  /** Text of the Next button */
  next: _propTypes.default.node,

  /** Text of the Previous button */
  previous: _propTypes.default.node,
  showPrevNext: _propTypes.default.bool,
  autoHide: _propTypes.default.bool,

  /**
   * Classname of the container of the pagination, this could be used to customize the inner views
   */
  className: _propTypes.default.string
});
Pagination.defaultProps = _objectSpread({}, _modifiers.default.defaultProps, {
  innerRef: undefined,
  total: 1,
  current: 1,
  delta: 1,
  onChange: function onChange() {},
  next: 'Next',
  previous: 'Previous',
  showPrevNext: true,
  autoHide: true,
  className: '',
  renderAs: 'nav'
});

var _default = _react.default.forwardRef(function (props, ref) {
  return _react.default.createElement(Pagination, _extends({
    innerRef: ref
  }, props));
});

exports.default = _default;
//# sourceMappingURL=pagination.js.map