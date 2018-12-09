"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _enzyme = require("enzyme");

var _checkbox = _interopRequireDefault(require("../checkbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Checkbox component', function () {
  it('Should Exists', function () {
    expect(_checkbox.default).toMatchSnapshot();
  });
  it('Should have checkbox classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_checkbox.default, null, "Text"));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should change value on change event', function () {
    var spy = jest.fn();
    var component = (0, _enzyme.shallow)(_react.default.createElement(_checkbox.default, {
      onChange: spy
    }, "Text"));
    component.find('input').simulate('change');
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('Should set input checked if checked', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_checkbox.default, {
      checked: true
    }));
    expect(component.find('input').is('[checked]')).toBe(true);
  });
});
//# sourceMappingURL=checkbox.test.js.map