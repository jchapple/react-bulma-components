"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _head = _interopRequireDefault(require("./head"));

var _body = _interopRequireDefault(require("./body"));

var _foot = _interopRequireDefault(require("./foot"));

var _title = _interopRequireDefault(require("./title"));

var _modifiers = _interopRequireDefault(require("../../../../modifiers"));

var _element = _interopRequireDefault(require("../../../element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ModalCard = _react.default.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      onClose = _ref.onClose,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "onClose", "children"]);

  return _react.default.createElement(_element.default, _extends({}, props, {
    ref: ref,
    className: (0, _classnames.default)('modal-card', className)
  }), children);
});

ModalCard.Head = _head.default;
ModalCard.Body = _body.default;
ModalCard.Foot = _foot.default;
ModalCard.Title = _title.default;
ModalCard.propTypes = _objectSpread({}, _modifiers.default.propTypes, {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  style: _propTypes.default.shape({}),
  onClose: _propTypes.default.func
});
ModalCard.defaultProps = _objectSpread({}, _modifiers.default.defaultProps, {
  children: null,
  className: '',
  style: {},
  onClose: null
});
var _default = ModalCard;
exports.default = _default;
//# sourceMappingURL=card.js.map