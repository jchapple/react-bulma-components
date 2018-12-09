"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Pagination component', function () {
  it('Pagination Should Exist', function () {
    expect(_.default).toMatchSnapshot();
  });
  it('Should have 3 pages and page 1 active', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      total: 3,
      current: 1
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have 5 pages, page 5 active and display pages 3 to 5', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      total: 5,
      current: 5
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should not display page numbers', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      delta: 0,
      total: 5,
      current: 5
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should not display Previous/Next buttons', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      showPrevNext: false,
      delta: 3,
      total: 5,
      current: 2
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Next button should be disabled', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      total: 3,
      current: 3
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should not render if total pages equals 1', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      total: 1,
      current: 1
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should not render if current page is greater than total pages', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      total: 2,
      current: 3
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should call to onChange event on click on navigation button', function () {
    var onChange = jest.fn();
    var component = (0, _enzyme.mount)(_react.default.createElement(_.default, {
      total: 2,
      current: 1,
      onChange: onChange
    }));
    component.find('a.pagination-next').simulate('click');
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
//# sourceMappingURL=pagination.test.js.map