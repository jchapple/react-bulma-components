"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _enzyme = require("enzyme");

var _jsdom = require("jsdom");

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Dropdown component', function () {
  beforeEach(function () {
    // eslint-disable-next-line
    global.window = new _jsdom.JSDOM('<body><div id="app-root"></div></body>').window;
  });
  it('Should Exist', function () {
    expect(_.default).toMatchSnapshot();
  });
  it('Should have dropdown classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      value: "value",
      onChange: function onChange() {}
    }, _react.default.createElement(_.default.Item, {
      value: "value"
    }, "Item")));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should add listener do document on mount', function () {
    var app = global.window.document.querySelector('#app-root');
    global.window.document.addEventListener = jest.fn();
    var component = (0, _enzyme.mount)(_react.default.createElement(_.default, {
      value: "value",
      onChange: function onChange() {}
    }, _react.default.createElement(_.default.Item, {
      value: "value"
    }, "Item")), {
      attachTo: app
    });
    expect(window.document.addEventListener).toHaveBeenCalled();
    component.unmount();
  });
  it('Should concat Bulma class with classes in props', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      value: "value",
      className: "other-class",
      onChange: function onChange() {}
    }, _react.default.createElement(_.default.Item, {
      value: "value"
    }, "Item")));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have custom inline styles', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      value: "value",
      style: {
        width: 400
      },
      onChange: function onChange() {}
    }, _react.default.createElement(_.default.Item, {
      value: "value"
    }, "Item")));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have divider', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      value: "value",
      style: {
        width: 400
      },
      onChange: function onChange() {}
    }, _react.default.createElement(_.default.Item, {
      value: "value"
    }, "Item"), _react.default.createElement(_.default.Divider, null), _react.default.createElement(_.default.Item, {
      value: "other"
    }, "Other")));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be right-aligned when using "right" prop', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      right: true
    }, _react.default.createElement(_.default.Item, {
      value: "value"
    }, "Item"), _react.default.createElement(_.default.Item, {
      value: "other"
    }, "Other")));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should also be right-aligned when using "align" prop', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      align: "right"
    }, _react.default.createElement(_.default.Item, {
      value: "value"
    }, "Item"), _react.default.createElement(_.default.Item, {
      value: "other"
    }, "Other")));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should appear above the dropdown button', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      up: true
    }, _react.default.createElement(_.default.Item, {
      value: "value"
    }, "Item"), _react.default.createElement(_.default.Item, {
      value: "other"
    }, "Other")));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should open the Dropdown', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_.default, {
      value: "value",
      style: {
        width: 400
      },
      onChange: function onChange() {}
    }, _react.default.createElement(_.default.Item, {
      value: "value"
    }, "Item"), _react.default.createElement(_.default.Divider, null), _react.default.createElement(_.default.Item, {
      value: "other"
    }, "Other")));
    expect(component.state('open')).toBe(false);
    component.find('.dropdown-trigger').simulate('click');
    expect(component.state('open')).toBe(true);
  });
  it('Should open the Dropdown and prevent default event (not to navigate if a link is on the dropdown trigger)', function () {
    var preventDefault = jest.fn();
    var component = (0, _enzyme.shallow)(_react.default.createElement(_.default, {
      value: "value",
      style: {
        width: 400
      },
      onChange: function onChange() {}
    }, _react.default.createElement(_.default.Item, {
      value: "value"
    }, "Item"), _react.default.createElement(_.default.Divider, null), _react.default.createElement(_.default.Item, {
      value: "other"
    }, "Other")));
    expect(component.state('open')).toBe(false);
    component.find('.dropdown-trigger').simulate('click', {
      preventDefault: preventDefault
    });
    expect(preventDefault).toHaveBeenCalled();
    expect(component.state('open')).toBe(true);
  });
  it('Should change the value', function () {
    var onChange = jest.fn();
    var component = (0, _enzyme.shallow)(_react.default.createElement(_.default, {
      value: "",
      hoverable: true,
      style: {
        width: 400
      },
      onChange: onChange
    }, _react.default.createElement(_.default.Item, {
      value: "value"
    }, "Item")));
    component.find('.dropdown-trigger').simulate('click');
    component.find(_.default.Item).simulate('click');
    expect(onChange).toHaveBeenCalledWith('value');
    expect(component.state('open')).toBe(false);
  });
  it('Should close on select', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_.default, null, _react.default.createElement(_.default.Item, {
      value: "value"
    }, "Item")));
    component.find('.dropdown-trigger').simulate('click');
    component.find(_.default.Item).simulate('click');
    expect(component.state('open')).toBe(false);
  });
  it('Should close the dropdown', function () {
    var onChange = jest.fn();
    var component = (0, _enzyme.shallow)(_react.default.createElement(_.default, {
      value: "",
      style: {
        width: 400
      },
      onChange: onChange
    }, _react.default.createElement(_.default.Item, {
      value: "value"
    }, "Item")));
    component.find('.dropdown-trigger').simulate('click');
    component.find(_.default.Item).simulate('click', {
      path: []
    });
    expect(component.state('open')).toBe(false);
  });
});
//# sourceMappingURL=dropdown.test.js.map