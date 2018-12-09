"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _textarea = _interopRequireDefault(require("../textarea"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Textarea component', function () {
  it('Should exist', function () {
    expect(_textarea.default).toMatchSnapshot();
  });
  it('Should have textarea classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_textarea.default, null));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should concat classname in props with Bulma classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_textarea.default, {
      className: "other-class this-is-a-test"
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should use inline styles', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_textarea.default, {
      style: {
        height: 250
      }
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be large with 10 rows and readOnly', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_textarea.default, {
      rows: 10,
      readOnly: true,
      size: "large"
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be disabled with placeholder and value', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_textarea.default, {
      value: "TEST",
      disabled: true,
      placeholder: "hello tests"
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
});
//# sourceMappingURL=textarea.test.js.map