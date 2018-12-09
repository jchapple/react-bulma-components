"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

describe('Tabs component', function () {
  it('Should Exist', function () {
    expect(_.default).toMatchSnapshot();
  });
  it('Should expose Tab', function () {
    expect(_.default.Tab).toMatchSnapshot();
  });
  it('Should have Tabs classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, null, "Facebook"));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should concat Bulma class with classes in props', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      className: "other-class test"
    }, "Facebook"));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should render as an html section', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      renderAs: "section"
    }, "This should be a section"));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have custom inline styles', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      renderAs: "section",
      style: {
        width: 200,
        zIndex: 1
      }
    }, "This should be a section with custom styles"));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should accept a react Element as renderAs prop', function () {
    // eslint-disable-next-line react/prop-types
    var Custom = function Custom(_ref) {
      var children = _ref.children,
          props = _objectWithoutProperties(_ref, ["children"]);

      return _react.default.createElement("p", props, "Custom", children);
    };

    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      renderAs: Custom
    }, "This should be a p element"));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should render propertly Inside Tabs', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, null, _react.default.createElement(_.default.Tab, null, "Tab 1"), _react.default.createElement(_.default.Tab, null, "Tab 2"), _react.default.createElement(_.default.Tab, null, "Tab 3")));

    expect(component.toJSON()).toMatchSnapshot();
  });
});
//# sourceMappingURL=tabs.test.js.map