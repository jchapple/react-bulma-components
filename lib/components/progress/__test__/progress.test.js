"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

var _constants = _interopRequireDefault(require("../../../constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Progress component', function () {
  it('Should exist', function () {
    expect(_.default).toMatchSnapshot();
  });
  it('Should have notification classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      value: 30,
      max: 100
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should concat classname in props with Bulma classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      value: 30,
      max: 100,
      className: "other-class this-is-a-test"
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should use inline styles', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      value: 30,
      max: 100,
      style: {
        width: 250
      }
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be Large', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      value: 30,
      max: 100,
      size: "large"
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  [null].concat(Object.keys(_constants.default.COLORS).map(function (key) {
    return _constants.default.COLORS[key];
  })).map(function (color) {
    return it("Should use use color ".concat(color), function () {
      var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
        value: 30,
        max: 100,
        color: color
      }));

      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=progress.test.js.map