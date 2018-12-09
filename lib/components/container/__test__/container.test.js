"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Container component', function () {
  it('Should have container classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, null, _react.default.createElement("p", {
      className: "bd-notification is-success"
    }, _react.default.createElement("p", null, "Default"), _react.default.createElement("p", null, "Container"))));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have helper classnames', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      paddingless: true,
      responsive: {
        widescreen: {
          display: {
            value: 'block',
            only: true
          }
        },
        touch: {
          display: {
            value: 'flex'
          }
        },
        desktop: {
          hide: {
            value: true
          }
        }
      }
    }, _react.default.createElement("p", {
      className: "bd-notification is-success"
    }, _react.default.createElement("p", null, "Default"), _react.default.createElement("p", null, "Container"))));

    expect(component.toJSON()).toMatchSnapshot();
  });
});
//# sourceMappingURL=container.test.js.map