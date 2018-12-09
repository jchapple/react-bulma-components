"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Columns component', function () {
  it('Should have columns classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, null, _react.default.createElement(_.default.Column, null, "1"), _react.default.createElement(_.default.Column, null, "2"), _react.default.createElement(_.default.Column, null, "3")));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have columns one column half width and 3 other as default', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, null, _react.default.createElement(_.default.Column, {
      size: "half"
    }, "1"), _react.default.createElement(_.default.Column, null, "2"), _react.default.createElement(_.default.Column, null, "3"), _react.default.createElement(_.default.Column, null, "4")));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should render as paragraph', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      renderAs: "p"
    }, _react.default.createElement(_.default.Column, {
      renderAs: "p",
      size: "half"
    }, "1"), _react.default.createElement(_.default.Column, {
      renderAs: "p"
    }, "2"), _react.default.createElement(_.default.Column, {
      renderAs: "p"
    }, "3"), _react.default.createElement(_.default.Column, {
      renderAs: "p"
    }, "4")));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have columns one column half width, other narrow and 2 other as default', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, null, _react.default.createElement(_.default.Column, {
      size: "half"
    }, "1"), _react.default.createElement(_.default.Column, {
      narrow: true
    }, "2"), _react.default.createElement(_.default.Column, null, "3"), _react.default.createElement(_.default.Column, null, "4")));

    expect(component.toJSON()).toMatchSnapshot();
  });
});
//# sourceMappingURL=columns.test.js.map