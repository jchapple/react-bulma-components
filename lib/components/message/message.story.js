"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _message = _interopRequireDefault(require("react-bulma-components/lib/components/message"));

var _button = _interopRequireDefault(require("react-bulma-components/lib/components/button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Message', module).add('Default', function () {
  return _react.default.createElement(_message.default, null, _react.default.createElement(_message.default.Header, null, "Title", _react.default.createElement(_button.default, {
    remove: true
  })), _react.default.createElement(_message.default.Body, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", _react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", _react.default.createElement("a", null, "felis venenatis"), " efficitur. Aenean ac ", _react.default.createElement("em", null, "eleifend lacus"), ", in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem."));
}).add('Color', function () {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_message.default, {
    color: "info"
  }, _react.default.createElement(_message.default.Header, null, "Title", _react.default.createElement(_button.default, {
    remove: true
  })), _react.default.createElement(_message.default.Body, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", _react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", _react.default.createElement("a", null, "felis venenatis"), " efficitur. Aenean ac ", _react.default.createElement("em", null, "eleifend lacus"), ", in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.")), _react.default.createElement(_message.default, {
    color: "danger"
  }, _react.default.createElement(_message.default.Header, null, "Title", _react.default.createElement(_button.default, {
    remove: true
  })), _react.default.createElement(_message.default.Body, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", _react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", _react.default.createElement("a", null, "felis venenatis"), " efficitur. Aenean ac ", _react.default.createElement("em", null, "eleifend lacus"), ", in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.")));
});
//# sourceMappingURL=message.story.js.map