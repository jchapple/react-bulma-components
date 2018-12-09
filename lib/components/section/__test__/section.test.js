"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Section component', function () {
  it('Should exist', function () {
    expect(_.default).toMatchSnapshot();
  });
  it('Should have section classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, null, "Test", ' ', _react.default.createElement("a", {
      href: "/"
    }, "Give me")));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should concat classname in props with Bulma classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      className: "other-class this-is-a-test"
    }, _react.default.createElement("p", null, "Default")));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should use inline styles', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      style: {
        height: 250
      }
    }, _react.default.createElement("p", null, "Default")));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be Large', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      size: "large"
    }, _react.default.createElement("p", null, "Default")));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should render as nav element', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      renderAs: "nav"
    }, _react.default.createElement("p", null, "Default")));

    expect(component.toJSON()).toMatchSnapshot();
  });
});
//# sourceMappingURL=section.test.js.map