"use strict";

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Menu component', function () {
  it('Should Exist', function () {
    expect(_.default).toMatchSnapshot();
  });
  it('Should have menu classnames', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, null, _react.default.createElement(_.default.List, {
      title: "General"
    }, _react.default.createElement(_.default.List.Item, null, "Dashboard"), _react.default.createElement(_.default.List.Item, null, "Customer"))));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should concat Menu.List to display as submenus', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, null, _react.default.createElement(_.default.List, {
      title: "General"
    }, _react.default.createElement(_.default.List.Item, null, "Dashboard"), _react.default.createElement(_.default.List.Item, null, _react.default.createElement(_.default.List.Item, {
      active: true
    }, _react.default.createElement(_.default.List, {
      title: "Manage Your Team"
    }, _react.default.createElement(_.default.List.Item, null, "Members"), _react.default.createElement(_.default.List.Item, {
      active: true
    }, "Plugins"), _react.default.createElement(_.default.List.Item, null, "Add a member")))))));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should accept a react Element as renderAs prop', function () {
    // eslint-disable-next-line react/prop-types
    var Custom = function Custom(props) {
      return _react.default.createElement("span", props, "Custom", props.children);
    };

    Custom.propTypes = {
      children: _propTypes.default.node.isRequired
    };

    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, null, _react.default.createElement(_.default.List, {
      title: "General"
    }, _react.default.createElement(_.default.List.Item, {
      renderAs: Custom
    }, "Dashboard"), _react.default.createElement(_.default.List.Item, {
      renderAs: Custom
    }, "Customer"))));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should render custom item child', function () {
    // eslint-disable-next-line react/prop-types
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, null, _react.default.createElement(_.default.List, {
      title: "General"
    }, _react.default.createElement(_.default.List.Item, null, _react.default.createElement("p", null, "Custom children 1")), _react.default.createElement(_.default.List.Item, null, _react.default.createElement("a", null, "Custom children 2")))));

    expect(component.toJSON()).toMatchSnapshot();
  });
});
//# sourceMappingURL=menu.test.js.map