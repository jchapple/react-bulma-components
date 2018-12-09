"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Box component', function () {
  it('Should Exist', function () {
    expect(_.default).toMatchSnapshot();
  });
  it('Should have box classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, null));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should concat Bulma class with classes in props', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      className: "other-class test"
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should render as an html section', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      renderAs: "section"
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have custom inline styles', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      renderAs: "section",
      style: {
        width: 200,
        zIndex: 1
      }
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
});
//# sourceMappingURL=loader.test.js.map