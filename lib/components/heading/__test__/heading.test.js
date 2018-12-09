"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Heading component', function () {
  it('Should exist', function () {
    expect(_.default).toMatchSnapshot();
  });
  it('Should have title classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, null, "Test", ' ', _react.default.createElement("a", null, "Give me")));

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
  it('Should be a subtitle with size rendered as P', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      size: 3,
      subtitle: true,
      renderAs: "p"
    }, "Subtitle"));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should not be spaced because is subtitle', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      spaced: true,
      subtitle: true,
      renderAs: "p"
    }, "Subtitle"));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be spaced', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      spaced: true,
      renderAs: "p"
    }, "Subtitle"));

    expect(component.toJSON()).toMatchSnapshot();
  });
});
//# sourceMappingURL=heading.test.js.map