"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _field = _interopRequireDefault(require("../field"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Field component', function () {
  it('Should Exists', function () {
    expect(_field.default).toMatchSnapshot();
  });
  it('Should export Label and Body as static properties', function () {
    expect(_field.default.Label).toMatchSnapshot();
    expect(_field.default.Body).toMatchSnapshot();
  });
  it('Should have field classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_field.default, null, _react.default.createElement("p", {
      className: "bd-notification is-success"
    }, _react.default.createElement("p", null, "Default"), _react.default.createElement("p", null, "Container"))));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have field-label classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_field.default.Label, null, _react.default.createElement("p", {
      className: "bd-notification is-success"
    }, _react.default.createElement("p", null, "Default"), _react.default.createElement("p", null, "Container"))));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have field-body classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_field.default.Body, null, _react.default.createElement("p", {
      className: "bd-notification is-success"
    }, _react.default.createElement("p", null, "Default"), _react.default.createElement("p", null, "Container"))));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have field classname with grouped classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_field.default, {
      kind: "group"
    }, _react.default.createElement("p", {
      className: "bd-notification is-success"
    }, _react.default.createElement("p", null, "Default"), _react.default.createElement("p", null, "Container"))));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have field classname with addons classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_field.default, {
      kind: "addons"
    }, _react.default.createElement("p", {
      className: "bd-notification is-success"
    }, _react.default.createElement("p", null, "Default"), _react.default.createElement("p", null, "Container"))));

    expect(component.toJSON()).toMatchSnapshot();
  });
});
//# sourceMappingURL=field.test.js.map