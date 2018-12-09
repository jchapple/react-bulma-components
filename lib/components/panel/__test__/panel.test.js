"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Panel component', function () {
  it('Should Exist', function () {
    expect(_.default).toMatchSnapshot();
  });
  it('Should have box classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, null, _react.default.createElement(_.default.Header, null, "repositories"), _react.default.createElement(_.default.Block, null, _react.default.createElement("div", null, "Control")), _react.default.createElement(_.default.Tabs, {
      className: "panel-tabs"
    }, _react.default.createElement(_.default.Tabs.Tab, {
      active: true
    }, "all"), _react.default.createElement(_.default.Tabs.Tab, null, "public"), _react.default.createElement(_.default.Tabs.Tab, null, "private"), _react.default.createElement(_.default.Tabs.Tab, null, "sources"), _react.default.createElement(_.default.Tabs.Tab, null, "forks")), _react.default.createElement(_.default.Block, {
      renderAs: "a",
      active: true
    }, _react.default.createElement(_.default.Icon, null, _react.default.createElement("i", {
      className: "fa fa-bars"
    })), "bulma"), _react.default.createElement(_.default.Block, {
      renderAs: "label",
      className: "panel-block"
    }, _react.default.createElement("input", {
      type: "checkbox"
    }), "remember me"), _react.default.createElement(_.default.Block, null, _react.default.createElement("button", {
      type: "button"
    }, "reset all filters"))));

    expect(component.toJSON()).toMatchSnapshot();
  });
});
//# sourceMappingURL=panel.test.js.map