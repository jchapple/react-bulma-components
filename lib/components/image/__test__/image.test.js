"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Image component', function () {
  it('Should exist', function () {
    expect(_.default).toMatchSnapshot();
  });
  it('Should have image classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      src: "http://mydomain.com/image"
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be square', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      size: "square",
      src: "http://mydomain.com/image"
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be rounded', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      rounded: true,
      src: "http://mydomain.com/image"
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be 32x32', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      size: 32,
      src: "http://mydomain.com/image"
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have use default image if error encounter', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_.default, {
      src: "http://mydomain.com/image",
      fallback: "http://mydomain.com/default"
    }));
    var image = component.find('img');
    image.simulate('error');
    expect(component.find('img').props()).toHaveProperty('src', 'http://mydomain.com/default');
  });
  it('Should update src', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_.default, {
      src: "http://mydomain.com/image"
    }));
    component.setProps({
      src: 'http://mydomain.com/other'
    });
    expect(component.find('img').props()).toHaveProperty('src', 'http://mydomain.com/other');
  });
  it('Should NOT update src', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_.default, {
      src: "http://mydomain.com/image"
    }));
    component.setProps({
      alt: 'change prop'
    });
    expect(component.find('img').props()).toHaveProperty('src', 'http://mydomain.com/image');
  });
});
//# sourceMappingURL=image.test.js.map