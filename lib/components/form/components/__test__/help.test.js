"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _help = _interopRequireDefault(require("../help"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Help component', function () {
  it('Should exist', function () {
    expect(_help.default).toMatchSnapshot();
  });
  it('Should have help classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_help.default, null, _react.default.createElement("p", {
      className: "bd-notification is-success"
    }, _react.default.createElement("p", null, "Default"), _react.default.createElement("p", null, "Container"))));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should concat classname in props with Bulma classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_help.default, {
      className: "other-class this-is-a-test"
    }, _react.default.createElement("p", null, "Default")));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should use inline styles', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_help.default, {
      style: {
        height: 250
      }
    }, _react.default.createElement("p", null, "Default")));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be displayed as a successful message', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_help.default, {
      color: "success"
    }, _react.default.createElement("p", null, "Default")));

    expect(component.toJSON()).toMatchSnapshot();
  });
});
//# sourceMappingURL=help.test.js.map