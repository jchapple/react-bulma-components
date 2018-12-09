"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _footer = _interopRequireDefault(require("react-bulma-components/lib/components/footer"));

var _container = _interopRequireDefault(require("react-bulma-components/lib/components/container"));

var _content = _interopRequireDefault(require("react-bulma-components/lib/components/content"));

var _hero = _interopRequireDefault(require("react-bulma-components/lib/components/hero"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Footer', module).add('Default', function () {
  return _react.default.createElement(_hero.default, {
    size: "fullheight"
  }, _react.default.createElement(_hero.default.Head, {
    renderAs: "header"
  }), _react.default.createElement(_hero.default.Body, null), _react.default.createElement(_hero.default.Footer, null, _react.default.createElement(_footer.default, null, _react.default.createElement(_container.default, null, _react.default.createElement(_content.default, {
    style: {
      textAlign: 'center'
    }
  }, _react.default.createElement("p", null, _react.default.createElement("strong", null, "Bulma"), " by ", _react.default.createElement("a", {
    href: "http://jgthms.com"
  }, "Jeremy Thomas"), ". The source code is licensed", _react.default.createElement("a", {
    href: "http://opensource.org/licenses/mit-license.php"
  }, "MIT"), ". The website content is licensed ", _react.default.createElement("a", {
    href: "http://creativecommons.org/licenses/by-nc-sa/4.0/"
  }, "CC BY NC SA 4.0"), "."))))));
});
//# sourceMappingURL=footer.story.js.map