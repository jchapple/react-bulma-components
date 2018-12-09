"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _notification = _interopRequireDefault(require("react-bulma-components/lib/components/notification"));

var _button = _interopRequireDefault(require("react-bulma-components/lib/components/button"));

var _section = _interopRequireDefault(require("react-bulma-components/lib/components/section"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Notification', module).add('Default', function () {
  return _react.default.createElement(_section.default, null, _react.default.createElement(_notification.default, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ", _react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", _react.default.createElement("a", {
    href: "/"
  }, "felis venenatis"), " efficitur. Sit amet, consectetur adipiscing elit", _react.default.createElement(_button.default, {
    remove: true
  })), _react.default.createElement(_notification.default, {
    color: "success"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ", _react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", _react.default.createElement("a", {
    href: "/"
  }, "felis venenatis"), " efficitur. Sit amet, consectetur adipiscing elit", _react.default.createElement(_button.default, {
    remove: true
  })), _react.default.createElement(_notification.default, {
    color: "danger"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ", _react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", _react.default.createElement("a", {
    href: "/"
  }, "felis venenatis"), " efficitur. Sit amet, consectetur adipiscing elit", _react.default.createElement(_button.default, {
    remove: true
  })));
});
//# sourceMappingURL=notification.story.js.map