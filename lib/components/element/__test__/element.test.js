"use strict";

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Element component', function () {
  it('Should Exist', function () {
    expect(_.default).toMatchSnapshot();
  });
  it('Should have helpers classnames', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      textColor: "white",
      pull: "left"
    }, "Facebook"));

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
//# sourceMappingURL=element.test.js.map