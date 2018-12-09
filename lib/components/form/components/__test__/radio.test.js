"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _radio = _interopRequireDefault(require("../radio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Radio component', function () {
  it('Should exist', function () {
    expect(_radio.default).toMatchSnapshot();
  });
  it('Should have radio classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_radio.default, {
      name: "test"
    }, "Test", ' ', _react.default.createElement("a", null, "Give me")));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should concat classname in props with Bulma classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_radio.default, {
      name: "test",
      className: "other-class this-is-a-test"
    }, _react.default.createElement("p", null, "Default")));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should use inline styles', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_radio.default, {
      name: "test",
      style: {
        height: 250
      }
    }, _react.default.createElement("p", null, "Default")));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be disabled, checked and with value', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_radio.default, {
      name: "test",
      value: "TEST",
      checked: true,
      disabled: true
    }, _react.default.createElement("p", null, "Default")));

    expect(component.toJSON()).toMatchSnapshot();
  });
});
//# sourceMappingURL=radio.test.js.map