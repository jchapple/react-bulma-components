"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _label = _interopRequireDefault(require("../label"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Label component', function () {
  it('Should exist', function () {
    expect(_label.default).toMatchSnapshot();
  });
  it('Should have label classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_label.default, null, "Test", ' ', _react.default.createElement("a", null, "Give me")));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should concat classname in props with Bulma classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_label.default, {
      className: "other-class this-is-a-test"
    }, _react.default.createElement("p", null, "Default")));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should use inline styles', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_label.default, {
      style: {
        height: 250
      }
    }, _react.default.createElement("p", null, "Default")));

    expect(component.toJSON()).toMatchSnapshot();
  });
});
//# sourceMappingURL=label.test.js.map