"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

var _constants = _interopRequireDefault(require("../../../constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Tag component', function () {
  it('Should exist', function () {
    expect(_.default).toMatchSnapshot();
  });
  it('Should expose Tag Group', function () {
    expect(_.default.Group).toMatchSnapshot();
  });
  it('Should have tag classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, null, "Tag name"));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should concat classname in props with Bulma classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      className: "other-class this-is-a-test"
    }, "Tag name"));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should use inline styles', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      style: {
        width: 250
      }
    }, "Tag name"));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be Large', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      size: "large"
    }, "Tag Large"));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be group tags', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default.Group, {
      gapless: true
    }, _react.default.createElement(_.default, null, "Tag 1"), _react.default.createElement(_.default, null, "Tag 2")));

    expect(component.toJSON()).toMatchSnapshot();
  });
  [null].concat(Object.keys(_constants.default.COLORS).map(function (key) {
    return _constants.default.COLORS[key];
  })).map(function (color) {
    return it("Should use use color ".concat(color), function () {
      var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
        color: color
      }, "tag", color));

      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=tag.test.js.map