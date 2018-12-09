"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames3 = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  propTypes: {
    clearfix: _propTypes.default.bool,
    pull: _propTypes.default.oneOf([undefined, 'right', 'left']),
    marginless: _propTypes.default.bool,
    paddingless: _propTypes.default.bool,
    overlay: _propTypes.default.bool,
    clipped: _propTypes.default.bool,
    radiusless: _propTypes.default.bool,
    shadowless: _propTypes.default.bool,
    unselectable: _propTypes.default.bool,
    invisible: _propTypes.default.bool,
    hidden: _propTypes.default.bool
  },
  defaultProps: {
    clearfix: undefined,
    pull: undefined,
    marginless: undefined,
    paddingless: undefined,
    overlay: undefined,
    clipped: undefined,
    radiusless: undefined,
    shadowless: undefined,
    unselectable: undefined,
    invisible: undefined,
    hidden: undefined
  },
  classnames: function classnames(props) {
    var _classnames2;

    return (0, _classnames3.default)((_classnames2 = {
      'is-clearfix': props.clearfix
    }, _defineProperty(_classnames2, "is-pulled-".concat(props.pull), props.pull), _defineProperty(_classnames2, 'is-marginless', props.marginless), _defineProperty(_classnames2, 'is-paddingless', props.paddingless), _defineProperty(_classnames2, 'is-overlay', props.overlay), _defineProperty(_classnames2, 'is-clipped', props.clipped), _defineProperty(_classnames2, 'is-radiusless', props.radiusless), _defineProperty(_classnames2, 'is-shadowless', props.shadowless), _defineProperty(_classnames2, 'is-unselectable', props.unselectable), _defineProperty(_classnames2, 'is-invisible', props.invisible), _defineProperty(_classnames2, 'is-hidden', props.hidden), _classnames2));
  },
  clean: function clean(_ref) {
    var hidden = _ref.hidden,
        clearfix = _ref.clearfix,
        paddingless = _ref.paddingless,
        pull = _ref.pull,
        marginless = _ref.marginless,
        overlay = _ref.overlay,
        clipped = _ref.clipped,
        radiusless = _ref.radiusless,
        shadowless = _ref.shadowless,
        unselectable = _ref.unselectable,
        invisible = _ref.invisible,
        props = _objectWithoutProperties(_ref, ["hidden", "clearfix", "paddingless", "pull", "marginless", "overlay", "clipped", "radiusless", "shadowless", "unselectable", "invisible"]);

    return props;
  }
};
exports.default = _default;
//# sourceMappingURL=helpers.js.map