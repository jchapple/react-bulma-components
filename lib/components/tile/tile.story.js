"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _tile = _interopRequireDefault(require("react-bulma-components/lib/components/tile"));

var _heading = _interopRequireDefault(require("react-bulma-components/lib/components/heading"));

var _image = _interopRequireDefault(require("react-bulma-components/lib/components/image"));

var _section = _interopRequireDefault(require("react-bulma-components/lib/components/section"));

var _box = _interopRequireDefault(require("react-bulma-components/lib/components/box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Tile', module).add('Default', function () {
  return _react.default.createElement(_section.default, null, _react.default.createElement(_box.default, null, _react.default.createElement(_tile.default, {
    kind: "ancestor"
  }, _react.default.createElement(_tile.default, {
    size: 8,
    vertical: true
  }, _react.default.createElement(_tile.default, null, _react.default.createElement(_tile.default, {
    kind: "parent",
    vertical: true
  }, _react.default.createElement(_tile.default, {
    renderAs: "article",
    kind: "child",
    notification: true,
    color: "primary"
  }, _react.default.createElement(_heading.default, null, "Vertical..."), _react.default.createElement(_heading.default, {
    subtitle: true
  }, "Top tile")), _react.default.createElement(_tile.default, {
    renderAs: "article",
    kind: "child",
    notification: true,
    color: "warning"
  }, _react.default.createElement(_heading.default, null, "Tiles..."), _react.default.createElement(_heading.default, {
    subtitle: true
  }, "Bottom Tile..."))), _react.default.createElement(_tile.default, {
    kind: "parent"
  }, _react.default.createElement(_tile.default, {
    renderAs: "article",
    kind: "child",
    notification: true,
    color: "info"
  }, _react.default.createElement(_heading.default, null, "Middle Tile..."), _react.default.createElement(_heading.default, {
    subtitle: true
  }, "With image Tile..."), _react.default.createElement(_image.default, {
    size: "4by3",
    src: "http://bulma.io/images/placeholders/640x480.png"
  })))), _react.default.createElement(_tile.default, {
    kind: "parent"
  }, _react.default.createElement(_tile.default, {
    renderAs: "article",
    kind: "child",
    notification: true,
    color: "danger"
  }, _react.default.createElement(_heading.default, null, "Wide tile"), _react.default.createElement(_heading.default, {
    subtitle: true
  }, "Aligned with the right tile"), _react.default.createElement("div", {
    className: "content"
  })))), _react.default.createElement(_tile.default, {
    kind: "parent"
  }, _react.default.createElement(_tile.default, {
    renderAs: "article",
    kind: "child",
    notification: true,
    color: "success"
  }, _react.default.createElement("div", {
    className: "content"
  }, _react.default.createElement(_heading.default, null, "Tall tile"), _react.default.createElement(_heading.default, {
    subtitle: true
  }, "With even more content"), _react.default.createElement("div", {
    className: "content"
  })))))));
});
//# sourceMappingURL=tile.story.js.map