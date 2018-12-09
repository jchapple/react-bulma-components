"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _control = _interopRequireDefault(require("../control"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Control component', function () {
  it('Should exist', function () {
    expect(_control.default).toMatchSnapshot();
  });
  it('Should have control classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_control.default, null, _react.default.createElement("p", {
      className: "bd-notification is-success"
    }, _react.default.createElement("p", null, "Default"), _react.default.createElement("p", null, "Container"))));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should concat classname in props with Bulma classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_control.default, {
      className: "other-class this-is-a-test"
    }, _react.default.createElement("p", null, "Default")));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should use inline styles', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_control.default, {
      style: {
        height: 250
      }
    }, _react.default.createElement("p", null, "Default")));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should render as a html section element', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_control.default, {
      renderAs: "section"
    }, _react.default.createElement("p", null, "Default")));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be fullwidth, loading and size = large', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_control.default, {
      fullwidth: true,
      loading: true,
      size: "large"
    }, _react.default.createElement("p", null, "Default")));

    expect(component.toJSON()).toMatchSnapshot();
  });
});
//# sourceMappingURL=control.test.js.map