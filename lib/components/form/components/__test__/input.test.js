"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _input = _interopRequireDefault(require("../input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Input component', function () {
  it('Should exist', function () {
    expect(_input.default).toMatchSnapshot();
  });
  it('Should have input classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_input.default, null));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should concat classname in props with Bulma classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_input.default, {
      className: "other-class this-is-a-test"
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should use inline styles', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_input.default, {
      style: {
        height: 250
      }
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be type email and a with success colors', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_input.default, {
      color: "success",
      type: "email"
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be large and readOnly', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_input.default, {
      readOnly: true,
      size: "large"
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be disabled with placeholder and value', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_input.default, {
      value: "TEST",
      disabled: true,
      placeholder: "hello tests"
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
});
//# sourceMappingURL=input.test.js.map