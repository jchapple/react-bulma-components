"use strict";

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Link = function Link(_ref) {
  var to = _ref.to,
      children = _ref.children;
  return _react.default.createElement("a", {
    href: to
  }, children);
};

Link.propTypes = {
  to: _propTypes.default.string.isRequired,
  children: _propTypes.default.node.isRequired
};
describe('Button component', function () {
  it('Should exist', function () {
    expect(_.default).toMatchSnapshot();
  });
  it('Should expose Button Group', function () {
    expect(_.default.Group).toMatchSnapshot();
  });
  it('Should be a default Button', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, null));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be an anchor button', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      renderAs: "a",
      href: "https://github.com/couds/react-bulma-components"
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be a Primary Button', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      color: "primary"
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be a Large Primary Button', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      color: "primary",
      size: "large"
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should render as a static Button', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      isStatic: true,
      color: "primary"
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should render as a html button', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      renderAs: "button",
      color: "danger"
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should render as a React element link with to prop', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      renderAs: Link,
      to: "http://google.com",
      color: "danger"
    }, "TEST"));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should render be disabled', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      disabled: true
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be a submit form button', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      submit: true
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be a reset form button', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      reset: true
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have a Click listener', function () {
    var onClick = jest.fn();
    var component = (0, _enzyme.shallow)(_react.default.createElement(_.default, {
      onClick: onClick
    }));
    component.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it('Should have no dispatch click handler if disabled', function () {
    var onClick = jest.fn();
    var component = (0, _enzyme.shallow)(_react.default.createElement(_.default, {
      disabled: true,
      onClick: onClick
    }));
    component.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(0);
  });
  it('Should have a call default onClick is no listener is set', function () {
    var spy = jest.spyOn(_.default.defaultProps, 'onClick');
    var component = (0, _enzyme.shallow)(_react.default.createElement(_.default, null));
    component.simulate('click');
    component.simulate('click');
    expect(spy).toHaveBeenCalledTimes(2);

    _.default.defaultProps.onClick.mockRestore();
  });
  it('Should forward ref', function () {
    var testRef = _react.default.createRef();

    (0, _enzyme.mount)(_react.default.createElement(_.default, {
      ref: testRef
    }));
    expect(testRef.current).not.toBeNull();
  });
  describe('Button Group component', function () {
    it('Should be a default list of buttons', function () {
      var component = _reactTestRenderer.default.create(_react.default.createElement(_.default.Group, null, _react.default.createElement(_.default, null, "test 0"), _react.default.createElement(_.default, null, "test 1")));

      expect(component).toMatchSnapshot();
    });
    it('Should concat class names in props with Bulma class name', function () {
      var component = _reactTestRenderer.default.create(_react.default.createElement(_.default.Group, {
        className: "super-class-1 dope-class-2"
      }, _react.default.createElement(_.default, null, "test 0"), _react.default.createElement(_.default, null, "test 1")));

      expect(component.toJSON()).toMatchSnapshot();
    });
    it('Should group buttons together', function () {
      var component = _reactTestRenderer.default.create(_react.default.createElement(_.default.Group, {
        hasAddons: true
      }, _react.default.createElement(_.default, null, "test 1"), _react.default.createElement(_.default, null, "test 2")));

      expect(component.toJSON()).toMatchSnapshot();
    });
    it('Should be centered', function () {
      var component = _reactTestRenderer.default.create(_react.default.createElement(_.default.Group, {
        position: "centered"
      }, _react.default.createElement(_.default, null, "test 0"), _react.default.createElement(_.default, null, "test 1")));

      expect(component.toJSON()).toMatchSnapshot();
    });
    it('Should align to the right', function () {
      var component = _reactTestRenderer.default.create(_react.default.createElement(_.default.Group, {
        position: "right"
      }, _react.default.createElement(_.default, null, "test 0"), _react.default.createElement(_.default, null, "test 1")));

      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=button.test.js.map