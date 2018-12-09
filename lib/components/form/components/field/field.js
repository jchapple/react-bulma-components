"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _fieldLabel = _interopRequireDefault(require("./field-label"));

var _fieldBody = _interopRequireDefault(require("./field-body"));

var _modifiers = _interopRequireDefault(require("../../../../modifiers"));

var _element = _interopRequireDefault(require("../../../element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Field = function Field(_ref) {
  var _classnames;

  var className = _ref.className,
      align = _ref.align,
      multiline = _ref.multiline,
      horizontal = _ref.horizontal,
      kind = _ref.kind,
      props = _objectWithoutProperties(_ref, ["className", "align", "multiline", "horizontal", "kind"]);

  var k = null;

  if (kind === 'addons') {
    k = 'has-addons';
  } else if (kind === 'group') {
    k = 'is-grouped';
  }

  return _react.default.createElement(_element.default, _extends({}, props, {
    className: (0, _classnames2.default)('field', className, (_classnames = {}, _defineProperty(_classnames, "".concat(k), k), _defineProperty(_classnames, "".concat(k, "-").concat(align), k && align), _defineProperty(_classnames, "".concat(k, "-multiline"), k === 'is-grouped' && multiline), _defineProperty(_classnames, 'is-horizontal', horizontal), _classnames))
  }));
};

Field.Label = _fieldLabel.default;
Field.Body = _fieldBody.default;
Field.propTypes = _objectSpread({}, _modifiers.default.propTypes, {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  style: _propTypes.default.shape({}),
  renderAs: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),
  align: _propTypes.default.oneOf(['centered', 'right']),
  kind: _propTypes.default.oneOf(['addons', 'group']),
  multiline: _propTypes.default.bool,
  horizontal: _propTypes.default.bool
});
Field.defaultProps = _objectSpread({}, _modifiers.default.defaultProps, {
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
  align: null,
  kind: null,
  multiline: false,
  horizontal: false
});
var _default = Field;
exports.default = _default;
//# sourceMappingURL=field.js.map