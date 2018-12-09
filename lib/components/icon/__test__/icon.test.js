"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Icon component', function () {
  it('Should Exist', function () {
    expect(_.default).toMatchSnapshot();
  });
  it('Should have box classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      icon: "bars"
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should concat Bulma class with classes in props', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      icon: "bars",
      className: "other-class"
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
});
//# sourceMappingURL=icon.test.js.map