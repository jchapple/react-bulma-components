"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _select = _interopRequireDefault(require("../select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Select component', function () {
  it('Should exist', function () {
    expect(_select.default).toMatchSnapshot();
  });
  it('Should have select classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_select.default, null, _react.default.createElement("option", null, "1"), _react.default.createElement("option", null, "2"), _react.default.createElement("option", null, "3")));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should concat classname in props with Bulma classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_select.default, {
      className: "other-class this-is-a-test"
    }, _react.default.createElement("option", null, "1"), _react.default.createElement("option", null, "2"), _react.default.createElement("option", null, "3")));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should use inline styles', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_select.default, {
      style: {
        width: '100%'
      }
    }, _react.default.createElement("option", null, "1"), _react.default.createElement("option", null, "2"), _react.default.createElement("option", null, "3")));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be large, red, disabled and multioption', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_select.default, {
      color: "danger",
      size: "large",
      multiple: true,
      disabled: true
    }, _react.default.createElement("option", null, "1"), _react.default.createElement("option", null, "2"), _react.default.createElement("option", null, "3")));

    expect(component.toJSON()).toMatchSnapshot();
  });
});
//# sourceMappingURL=select.test.js.map