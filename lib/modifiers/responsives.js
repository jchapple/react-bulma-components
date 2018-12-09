"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var displays = ['block', 'flex', 'inline', 'inline-block', 'inline-flex'];

var getSizeClassFromProp = function getSizeClassFromProp(sizes) {
  return Object.keys(sizes).reduce(function (classes, size) {
    var _objectSpread2;

    var display = sizes[size].display || {};
    var hide = sizes[size].hide || {};
    var textSize = sizes[size].textSize || {};
    var textAlignment = sizes[size].textAlignment || {};

    var obj = _objectSpread({}, classes, (_objectSpread2 = {}, _defineProperty(_objectSpread2, "is-".concat(display.value, "-").concat(size).concat(display.only ? '-only' : ''), display.value), _defineProperty(_objectSpread2, "is-hidden-".concat(size).concat(hide.only ? '-only' : ''), hide.value), _defineProperty(_objectSpread2, "has-text-".concat(textAlignment.value, "-").concat(size).concat(textAlignment.only ? '-only' : ''), textAlignment.value), _defineProperty(_objectSpread2, "is-size-".concat(textSize.value, "-").concat(size), textSize.value > 0), _objectSpread2));

    return obj;
  }, {});
};

var sizeShape = _propTypes.default.shape({
  display: _propTypes.default.shape({
    value: _propTypes.default.oneOf(displays),
    only: _propTypes.default.bool
  }),
  hide: _propTypes.default.shape({
    value: _propTypes.default.bool,
    only: _propTypes.default.bool
  }),
  textSize: _propTypes.default.shape({
    value: _propTypes.default.oneOf([1, 2, 3, 4, 5, 6])
  }),
  textAlignment: _propTypes.default.shape({
    value: _propTypes.default.oneOf(['centered', 'justified', 'left', 'right']),
    only: _propTypes.default.bool
  })
});

var _default = {
  propTypes: {
    responsive: _propTypes.default.shape({
      mobile: sizeShape,
      tablet: sizeShape,
      desktop: sizeShape,
      widescreen: sizeShape,
      fullhd: sizeShape,
      touch: sizeShape
    })
  },
  defaultProps: {
    responsive: undefined
  },
  classnames: function classnames(props) {
    return (0, _classnames2.default)(_objectSpread({}, getSizeClassFromProp(props.responsive || {})));
  },
  clean: function clean(_ref) {
    var responsive = _ref.responsive,
        hide = _ref.hide,
        props = _objectWithoutProperties(_ref, ["responsive", "hide"]);

    return props;
  }
};
exports.default = _default;
//# sourceMappingURL=responsives.js.map