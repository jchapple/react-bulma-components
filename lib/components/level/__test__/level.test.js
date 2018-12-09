"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Level component', function () {
  it('Should exist', function () {
    expect(_.default).toMatchSnapshot();
  });
  it('Should expose Level Side and Item', function () {
    expect(_.default.Side).toMatchSnapshot();
    expect(_.default.Item).toMatchSnapshot();
  });
  it('Should have level classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, null, _react.default.createElement(_.default.Item, null, "Item 1"), _react.default.createElement(_.default.Item, null, "Item 2"), _react.default.createElement(_.default.Item, null, "Item 3")));

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
  it('Should render Levels with right and left side', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, null, _react.default.createElement(_.default.Side, null, _react.default.createElement(_.default.Item, null, "Item 1"), _react.default.createElement(_.default.Item, null, "Item 2")), _react.default.createElement(_.default.Side, {
      align: "right"
    }, _react.default.createElement(_.default.Item, null, "Item 3"))));

    expect(component.toJSON()).toMatchSnapshot();
  });
});
//# sourceMappingURL=level.test.js.map