"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Media component', function () {
  it('Should exist', function () {
    expect(_.default).toMatchSnapshot();
  });
  it('Should expose Level Side and Item', function () {
    expect(_.default.Content).toMatchSnapshot();
    expect(_.default.Item).toMatchSnapshot();
  });
  it('Should have media classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, null, _react.default.createElement("img", {
      alt: "placeholder",
      src: "http://bulma.io/images/placeholders/128x128.png"
    })));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should hbe a Media Item', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default.Item, {
      renderAs: "figure",
      position: "left"
    }, _react.default.createElement("img", {
      alt: "placeholder",
      src: "http://bulma.io/images/placeholders/128x128.png"
    })));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should hbe a Media Item Centered', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default.Item, {
      renderAs: "figure",
      position: "center"
    }, _react.default.createElement("img", {
      alt: "placeholder",
      src: "http://bulma.io/images/placeholders/128x128.png"
    })));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be a Media Content', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default.Content, null, _react.default.createElement("p", null, "Lorem Ipsum")));

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
});
//# sourceMappingURL=media.test.js.map