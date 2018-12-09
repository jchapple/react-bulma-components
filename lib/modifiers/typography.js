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
    textSize: _propTypes.default.oneOf([1, 2, 3, 4, 5, 6]),
    textAlignment: _propTypes.default.oneOf(['centered', 'justified', 'left', 'right']),
    textTransform: _propTypes.default.oneOf(['capitalized', 'lowercase', 'uppercase']),
    textWeight: _propTypes.default.oneOf(['light', 'normal', 'semibold', 'bold']),
    italic: _propTypes.default.bool
  },
  defaultProps: {
    textSize: undefined,
    textAlignment: undefined,
    textTransform: undefined,
    italic: undefined,
    textWeight: undefined
  },
  classnames: function classnames(props) {
    var _classnames2;

    return (0, _classnames3.default)((_classnames2 = {}, _defineProperty(_classnames2, "has-text-".concat(props.textAlignment), props.textAlignment), _defineProperty(_classnames2, "has-text-weight-".concat(props.textWeight), props.textWeight), _defineProperty(_classnames2, "is-size-".concat(props.textSize), props.textSize), _defineProperty(_classnames2, "is-".concat(props.textTransform), props.textTransform), _defineProperty(_classnames2, 'is-italic', props.italic), _classnames2));
  },
  clean: function clean(_ref) {
    var textWeight = _ref.textWeight,
        textTransform = _ref.textTransform,
        italic = _ref.italic,
        textSize = _ref.textSize,
        textAlignment = _ref.textAlignment,
        props = _objectWithoutProperties(_ref, ["textWeight", "textTransform", "italic", "textSize", "textAlignment"]);

    return props;
  }
};
exports.default = _default;
//# sourceMappingURL=typography.js.map