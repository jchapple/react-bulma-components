"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _modifiers = _interopRequireDefault(require("../../../modifiers"));

var _element = _interopRequireDefault(require("../../element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Tab = _react.default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      active = _ref.active,
      props = _objectWithoutProperties(_ref, ["children", "className", "style", "active"]);

  return _react.default.createElement("li", {
    ref: ref,
    style: style,
    className: (0, _classnames.default)(className, {
      'is-active': active
    })
  }, _react.default.createElement(_element.default, props, children));
});

Tab.propTypes = _objectSpread({}, _modifiers.default.propTypes, {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  style: _propTypes.default.shape({}),
  renderAs: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),
  active: _propTypes.default.bool
});
Tab.defaultProps = _objectSpread({}, _modifiers.default.defaultProps, {
  children: null,
  className: '',
  style: {},
  renderAs: 'a',
  active: false
});
var _default = Tab;
exports.default = _default;
//# sourceMappingURL=tab.js.map