"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _pagination = _interopRequireDefault(require("react-bulma-components/lib/components/pagination"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Pagination', module).addDecorator(function (story) {
  return _react.default.createElement("div", {
    style: {
      margin: 50
    }
  }, story());
}).add('Default', function () {
  return _react.default.createElement(_pagination.default, {
    current: 3,
    total: 5,
    delta: 1
  });
}).add('Without page number', function () {
  return _react.default.createElement(_pagination.default, {
    current: 3,
    total: 5,
    delta: 0
  });
}).add('Without prev/next button', function () {
  return _react.default.createElement(_pagination.default, {
    showPrevNext: false,
    current: 3,
    total: 5,
    delta: 1
  });
});
//# sourceMappingURL=pagination.story.js.map