"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _jsdom = require("jsdom");

var _server = require("react-dom/server");

var _ = _interopRequireWildcard(require(".."));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Navbar component', function () {
  var window;
  var component;
  beforeEach(function () {
    // eslint-disable-next-line
    window = new _jsdom.JSDOM('<!doctype html><html><body><div id="app-root"></div></body></html>').window;
    global.window = window;
    global.document = window.document;
    global.navigator = {
      userAgent: 'node.js'
    };
  });
  afterEach(function () {
    if (component && component.unmount) {
      component.unmount();
    }
  });
  it('Should Exist', function () {
    expect(_.default).toMatchSnapshot();
  });
  it('should render on server side', function () {
    var html = (0, _server.renderToString)(_react.default.createElement(_.default, {
      fixed: "top"
    }));
    expect(html).toMatchSnapshot();
    expect((0, _.getHtmlClasses)()).toMatchSnapshot('top');
  });
  it('Should have Navbar classname', function () {
    component = _reactTestRenderer.default.create(_react.default.createElement(_.default, null, _react.default.createElement(_.default.Brand, null, _react.default.createElement(_.default.Item, {
      renderAs: "a",
      href: "#"
    }, _react.default.createElement("img", {
      src: "/",
      alt: ""
    })), _react.default.createElement(_.default.Burger, {
      className: "trigger-menu"
    })), _react.default.createElement("div", null, "TEST"), _react.default.createElement(_.default.Menu, null, _react.default.createElement(_.default.Container, null, _react.default.createElement(_.default.Item, {
      dropdown: true,
      hoverable: true
    }, _react.default.createElement(_.default.Link, null, "Docs"), _react.default.createElement(_.default.Dropdown, {
      boxed: true
    }, _react.default.createElement(_.default.Item, {
      href: "#"
    }, "Home"), _react.default.createElement(_.default.Divider, null), _react.default.createElement(_.default.Item, {
      href: "#"
    }, "Home")))))));
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should concat Bulma class with classes in props', function () {
    component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      className: "other-class test"
    }));
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should render as an html section', function () {
    component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      renderAs: "section"
    }));
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have custom inline styles', function () {
    component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      style: {
        width: 200,
        zIndex: 1
      }
    }));
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be fixed on top', function () {
    component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      fixed: "top"
    }));
    expect(component.toJSON()).toMatchSnapshot();
  });
});
//# sourceMappingURL=navbar.test.js.map