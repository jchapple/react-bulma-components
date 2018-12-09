"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames2 = _interopRequireDefault(require("classnames"));

var _helpers = _interopRequireDefault(require("./helpers"));

var _responsives = _interopRequireDefault(require("./responsives"));

var _colors = _interopRequireDefault(require("./colors"));

var _typography = _interopRequireDefault(require("./typography"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var compose = function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (args) {
    return fns.reduce(function (arg, fn) {
      return fn(arg);
    }, args);
  };
};

var _default = {
  propTypes: _objectSpread({}, _helpers.default.propTypes, _responsives.default.propTypes, _colors.default.propTypes, _typography.default.propTypes),
  defaultProps: _objectSpread({}, _helpers.default.defaultProps, _responsives.default.defaultProps, _colors.default.defaultProps, _typography.default.defaultProps),
  classnames: function classnames(props) {
    return (0, _classnames2.default)(_helpers.default.classnames(props), _responsives.default.classnames(props), _colors.default.classnames(props), _typography.default.classnames(props));
  },
  clean: function clean(props) {
    return compose(_helpers.default.clean, _responsives.default.clean, _colors.default.clean, _typography.default.clean)(props);
  }
};
exports.default = _default;
//# sourceMappingURL=index.js.map