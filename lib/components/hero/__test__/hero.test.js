"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

var _constants = _interopRequireDefault(require("../../../constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Hero component', function () {
  it('Should exist', function () {
    expect(_.default).toMatchSnapshot();
  });
  it('Should expose Hero head, body and footer', function () {
    expect(_.default.Head).toMatchSnapshot();
    expect(_.default.Body).toMatchSnapshot();
    expect(_.default.Footer).toMatchSnapshot();
  });
  it('Should have hero classname', function () {
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
  it('Should use gradient style', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      color: "primary",
      gradient: true
    }, _react.default.createElement("p", null, "Default")));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should render Hero with hero head, body and footer', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      size: "fullheight",
      color: "primary"
    }, _react.default.createElement(_.default.Head, {
      renderAs: "header"
    }, _react.default.createElement("div", {
      className: "bd-notification is-info"
    }, "Header")), _react.default.createElement(_.default.Body, null, "Body"), _react.default.createElement(_.default.Footer, {
      renderAs: "footer"
    }, _react.default.createElement("div", {
      className: "bd-notification is-danger"
    }, "Footer"))));

    expect(component.toJSON()).toMatchSnapshot();
  });
  [null].concat(Object.keys(_constants.default.COLORS).map(function (key) {
    return _constants.default.COLORS[key];
  })).map(function (color) {
    return it("Should use use color ".concat(color), function () {
      var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
        color: color
      }, _react.default.createElement("p", null, "Default")));

      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=hero.test.js.map