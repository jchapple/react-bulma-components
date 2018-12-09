"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Content component', function () {
  it('Should have content classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, null, _react.default.createElement("p", {
      className: "bd-notification is-success"
    }, _react.default.createElement("p", null, "Default"), _react.default.createElement("p", null, "Container"))));

    expect(component.toJSON()).toMatchSnapshot();
  });
});
//# sourceMappingURL=content.test.js.map