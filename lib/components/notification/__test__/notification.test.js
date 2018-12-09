"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

var _constants = _interopRequireDefault(require("../../../constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Notification component', function () {
  it('Should exist', function () {
    expect(_.default).toMatchSnapshot();
  });
  it('Should have notification classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, null, _react.default.createElement("img", {
      alt: "placeholder",
      src: "http://bulma.io/images/placeholders/128x128.png"
    })));

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
  it('Should render as Section', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      renderAs: "section"
    }, _react.default.createElement("p", null, "Default")));

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
//# sourceMappingURL=notification.test.js.map