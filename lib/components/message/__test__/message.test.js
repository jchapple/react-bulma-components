"use strict";

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Message component', function () {
  it('Should Exist', function () {
    expect(_.default).toMatchSnapshot();
  });
  it('Should have message classnames', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, null, _react.default.createElement(_.default.Header, null, "Lorem Ipsum"), _react.default.createElement(_.default.Body, null, "Lorem Ipsum")));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should concat Bulma class with classes in props', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      className: "other-class"
    }, _react.default.createElement(_.default.Header, null, "Lorem Ipsum"), _react.default.createElement(_.default.Body, null, "Lorem Ipsum")));

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
    var Custom = function Custom(props) {
      return _react.default.createElement("p", props, "Custom", props.children);
    };

    Custom.propTypes = {
      children: _propTypes.default.node.isRequired
    };

    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      renderAs: Custom
    }, "This should be a p element"));

    expect(component.toJSON()).toMatchSnapshot();
  });
});
//# sourceMappingURL=message.test.js.map