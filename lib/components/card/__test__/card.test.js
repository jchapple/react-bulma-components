"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Card component', function () {
  it('Should have card classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, null, "Card Content"));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have card-image classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default.Image, {
      size: "4by3",
      src: "http://bulma.io/images/placeholders/1280x960.png"
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have card-content classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default.Content, null, "Content"));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have card-header\'s classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, null, _react.default.createElement(_.default.Header, null, _react.default.createElement(_.default.Header.Title, null, "Title"), _react.default.createElement(_.default.Header.Icon, null, _react.default.createElement("i", {
      className: "icon"
    })))));

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have card-footer\'s classname', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, null, _react.default.createElement(_.default.Footer, null, _react.default.createElement(_.default.Footer.Item, null, "Yes"), _react.default.createElement(_.default.Footer.Item, null, "No"))));

    expect(component.toJSON()).toMatchSnapshot();
  });
});
//# sourceMappingURL=card.test.js.map