"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _modifiers = _interopRequireDefault(require("../../modifiers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Breadcrumb = _react.default.forwardRef(function (_ref, ref) {
  var _classnames;

  var className = _ref.className,
      items = _ref.items,
      renderAs = _ref.renderAs,
      hrefAttr = _ref.hrefAttr,
      separator = _ref.separator,
      size = _ref.size,
      align = _ref.align,
      allProps = _objectWithoutProperties(_ref, ["className", "items", "renderAs", "hrefAttr", "separator", "size", "align"]);

  var Element = renderAs;

  var props = _modifiers.default.clean(allProps);

  return _react.default.createElement("nav", _extends({}, props, {
    ref: ref,
    className: (0, _classnames2.default)('breadcrumb', className, _modifiers.default.classnames(allProps), (_classnames = {}, _defineProperty(_classnames, "has-".concat(separator, "-separator"), separator), _defineProperty(_classnames, "is-".concat(size), size), _defineProperty(_classnames, "is-".concat(align), align), _classnames))
  }), _react.default.createElement("ul", null, items.map(function (item) {
    var p = _defineProperty({}, renderAs === 'a' ? 'href' : hrefAttr, item.url);

    return _react.default.createElement("li", {
      key: item.url,
      className: (0, _classnames2.default)({
        'is-active': item.active
      })
    }, _react.default.createElement(Element, p, item.name));
  })));
});

Breadcrumb.propTypes = _objectSpread({}, _modifiers.default.propTypes, {
  className: _propTypes.default.string,
  style: _propTypes.default.shape({}),
  separator: _propTypes.default.oneOf(['arrow', 'bullet', 'dot', 'succeeds']),
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),
  align: _propTypes.default.oneOf(['right', 'center']),
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    url: _propTypes.default.string.isRequired,
    active: _propTypes.default.bool,
    name: _propTypes.default.node
  })),
  renderAs: _propTypes.default.oneOfType([_propTypes.default.oneOf(['a']), _propTypes.default.func]),
  hrefAttr: _propTypes.default.string
});
Breadcrumb.defaultProps = _objectSpread({}, _modifiers.default.defaultProps, {
  items: [],
  hrefAttr: null,
  separator: null,
  renderAs: 'a',
  className: '',
  style: {},
  size: null,
  align: null
});
var _default = Breadcrumb;
exports.default = _default;
//# sourceMappingURL=breadcrumb.js.map