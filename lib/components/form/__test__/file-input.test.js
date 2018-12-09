"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _enzyme = require("enzyme");

var _jsdom = require("jsdom");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Dropdown component', function () {
  beforeEach(function () {
    // eslint-disable-next-line
    global.window = new _jsdom.JSDOM('<body><div id="app-root"></div></body>').window;
  });
  it('Should Exist', function () {
    expect(_.InputFile).toMatchSnapshot();
  });
  it('Should render file input tree', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.InputFile, {
      onChange: function onChange() {}
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should call onChange with file data', function () {
    var onChange = jest.fn();
    var component = (0, _enzyme.shallow)(_react.default.createElement(_.InputFile, {
      className: "input-file",
      value: "",
      style: {
        width: 400
      },
      onChange: onChange
    }));
    component.find('.input-file .file-input').simulate('change', {
      target: {
        files: [{
          name: 'dummyValue.something'
        }]
      }
    });
    expect(component.state('filename')).toBe('dummyValue.something');
    expect(onChange).toBeCalled();
  });
  it('should call onChange without file data', function () {
    var onChange = jest.fn();
    var component = (0, _enzyme.shallow)(_react.default.createElement(_.InputFile, {
      className: "input-file",
      value: "",
      style: {
        width: 400
      },
      onChange: onChange
    }));
    component.find('.input-file .file-input').simulate('change', {
      target: {
        files: []
      }
    });
    expect(component.state('filename')).toBe(undefined);
    expect(onChange).toBeCalled();
  });
});
//# sourceMappingURL=file-input.test.js.map