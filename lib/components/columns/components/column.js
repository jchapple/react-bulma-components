"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _constants = _interopRequireDefault(require("../constants"));

var _modifiers = _interopRequireDefault(require("../../../modifiers"));

var _element = _interopRequireDefault(require("../../element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var sizes = [null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].concat(Object.keys(_constants.default.SIZES).map(function (key) {
  return _constants.default.SIZES[key];
}));

var Column = _react.default.forwardRef(function (_ref, ref) {
  var _classNames;

  var children = _ref.children,
      className = _ref.className,
      size = _ref.size,
      offset = _ref.offset,
      narrow = _ref.narrow,
      mobile = _ref.mobile,
      tablet = _ref.tablet,
      desktop = _ref.desktop,
      widescreen = _ref.widescreen,
      fullhd = _ref.fullhd,
      touch = _ref.touch,
      props = _objectWithoutProperties(_ref, ["children", "className", "size", "offset", "narrow", "mobile", "tablet", "desktop", "widescreen", "fullhd", "touch"]);

  return _react.default.createElement(_element.default, _extends({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, 'column', (_classNames = {}, _defineProperty(_classNames, "is-".concat(size), size), _defineProperty(_classNames, "is-".concat(touch.size, "-mobile"), touch.size), _defineProperty(_classNames, "is-".concat(mobile.size, "-mobile"), mobile.size), _defineProperty(_classNames, "is-".concat(tablet.size, "-tablet"), tablet.size), _defineProperty(_classNames, "is-".concat(desktop.size, "-desktop"), desktop.size), _defineProperty(_classNames, "is-".concat(widescreen.size, "-widescreen"), widescreen.size), _defineProperty(_classNames, "is-".concat(fullhd.size, "-fullhd"), fullhd.size), _defineProperty(_classNames, "is-offset-".concat(touch.offset, "-mobile"), touch.offset), _defineProperty(_classNames, "is-offset-".concat(mobile.offset, "-mobile"), mobile.offset), _defineProperty(_classNames, "is-offset-".concat(tablet.offset, "-tablet"), tablet.offset), _defineProperty(_classNames, "is-offset-".concat(desktop.offset, "-desktop"), desktop.offset), _defineProperty(_classNames, "is-offset-".concat(widescreen.offset, "-widescreen"), widescreen.offset), _defineProperty(_classNames, "is-offset-".concat(fullhd.offset, "-fullhd"), fullhd.offset), _defineProperty(_classNames, "is-offset-".concat(offset), offset), _defineProperty(_classNames, 'is-narrow', narrow), _defineProperty(_classNames, 'is-narrow-touch', touch.narrow), _defineProperty(_classNames, 'is-narrow-mobile', mobile.narrow), _defineProperty(_classNames, 'is-narrow-tablet', tablet.narrow), _defineProperty(_classNames, 'is-narrow-desktop', desktop.narrow), _defineProperty(_classNames, 'is-narrow-widescreen', widescreen.narrow), _defineProperty(_classNames, 'is-narrow-fullhd', fullhd.narrow), _classNames))
  }), children);
});

Column.propTypes = _objectSpread({}, _modifiers.default.propTypes, {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  style: _propTypes.default.shape({}),

  /**
   * The size of the column. the maximum size of a row is 12
   */
  size: _propTypes.default.oneOf(sizes),

  /**
   * Create horizontal space around Column elements
   */
  offset: _propTypes.default.oneOf(sizes),

  /**
   * If you want a column to only take the space it needs, use the narrow modifier. The other column(s) will fill up the remaining space.
   */
  narrow: _propTypes.default.bool,

  /**
   * Size, Offset and Narrow props for Mobile devices (Up to 768px)
   */
  touch: _propTypes.default.shape({
    size: _propTypes.default.oneOf(sizes),
    offset: _propTypes.default.oneOf(sizes),
    narrow: _propTypes.default.bool
  }),

  /**
   * Size, Offset and Narrow props for Mobile devices (Up to 768px)
   */
  mobile: _propTypes.default.shape({
    size: _propTypes.default.oneOf(sizes),
    offset: _propTypes.default.oneOf(sizes),
    narrow: _propTypes.default.bool
  }),

  /**
   * Size, Offset and Narrow props for Tablet devices (Between 769px and 1023px)
   */
  tablet: _propTypes.default.shape({
    size: _propTypes.default.oneOf(sizes),
    offset: _propTypes.default.oneOf(sizes),
    narrow: _propTypes.default.bool
  }),

  /**
  * Size, Offset and Narrow props for Desktop devices (Between 1024px and 1215px)
  */
  desktop: _propTypes.default.shape({
    size: _propTypes.default.oneOf(sizes),
    offset: _propTypes.default.oneOf(sizes),
    narrow: _propTypes.default.bool
  }),

  /**
  * Size, Offset and Narrow props for WideScreen devices (Between 1216px and 1407px)
  */
  widescreen: _propTypes.default.shape({
    size: _propTypes.default.oneOf(sizes),
    offset: _propTypes.default.oneOf(sizes),
    narrow: _propTypes.default.bool
  }),

  /**
  * Size, Offset and Narrow props for FullHD devices (1408px and above)
  */
  fullhd: _propTypes.default.shape({
    size: _propTypes.default.oneOf(sizes),
    offset: _propTypes.default.oneOf(sizes),
    narrow: _propTypes.default.bool
  })
});
Column.defaultProps = _objectSpread({}, _modifiers.default.defaultProps, {
  children: undefined,
  className: '',
  style: {},
  size: undefined,
  offset: undefined,
  narrow: undefined,
  mobile: {
    size: undefined,
    offset: undefined,
    narrow: undefined
  },
  touch: {
    size: undefined,
    offset: undefined,
    narrow: undefined
  },
  tablet: {
    size: undefined,
    offset: undefined,
    narrow: undefined
  },
  desktop: {
    size: undefined,
    offset: undefined,
    narrow: undefined
  },
  widescreen: {
    size: undefined,
    offset: undefined,
    narrow: undefined
  },
  fullhd: {
    size: undefined,
    offset: undefined,
    narrow: undefined
  }
});
var _default = Column;
exports.default = _default;
//# sourceMappingURL=column.js.map