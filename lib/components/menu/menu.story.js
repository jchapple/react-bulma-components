"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _menu = _interopRequireDefault(require("react-bulma-components/lib/components/menu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Menu', module).add('Default', function () {
  return _react.default.createElement(_menu.default, null, _react.default.createElement(_menu.default.List, {
    title: "General"
  }, _react.default.createElement(_menu.default.List.Item, null, "Dashboard"), _react.default.createElement(_menu.default.List.Item, null, "Customer")), _react.default.createElement(_menu.default.List, {
    title: "Administration"
  }, _react.default.createElement(_menu.default.List.Item, null, "Team Settings"), _react.default.createElement(_menu.default.List.Item, {
    active: true
  }, _react.default.createElement(_menu.default.List, {
    title: "Manage Your Team"
  }, _react.default.createElement(_menu.default.List.Item, null, "Members"), _react.default.createElement(_menu.default.List.Item, {
    active: true
  }, "Plugins"), _react.default.createElement(_menu.default.List.Item, null, "Add a member"))), _react.default.createElement(_menu.default.List.Item, null, "Invitations"), _react.default.createElement(_menu.default.List.Item, null, "Cloud Storage Environment Settings"), _react.default.createElement(_menu.default.List.Item, null, "Authentication")), _react.default.createElement(_menu.default.List, {
    title: "Transactions"
  }, _react.default.createElement(_menu.default.List.Item, null, "Payments"), _react.default.createElement(_menu.default.List.Item, null, "Transfers"), _react.default.createElement(_menu.default.List.Item, null, "Balance")));
});
//# sourceMappingURL=menu.story.js.map