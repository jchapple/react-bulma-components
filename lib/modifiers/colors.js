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

// const colors = ['white', 'black', 'light', 'dark', 'primary', 'info', 'link', 'success', 'warning', 'danger', 'black-bis', 'black-ter', 'grey-darker', 'grey-dark', 'grey', 'grey-light', 'grey-lighter', 'white-ter', 'white-bis'];
var _default = {
  propTypes: {
    textColor: _propTypes.default.string,
    backgroundColor: _propTypes.default.string
  },
  defaultProps: {
    textColor: undefined,
    backgroundColor: undefined
  },
  classnames: function classnames(props) {
    var _classnames2;

    return (0, _classnames3.default)((_classnames2 = {}, _defineProperty(_classnames2, "has-text-".concat(props.textColor), props.textColor), _defineProperty(_classnames2, "has-background-".concat(props.backgroundColor), props.backgroundColor), _classnames2));
  },
  clean: function clean(_ref) {
    var textColor = _ref.textColor,
        backgroundColor = _ref.backgroundColor,
        props = _objectWithoutProperties(_ref, ["textColor", "backgroundColor"]);

    return props;
  }
};
exports.default = _default;
//# sourceMappingURL=colors.js.map