"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _card = _interopRequireDefault(require("react-bulma-components/lib/components/card"));

var _media = _interopRequireDefault(require("react-bulma-components/lib/components/media"));

var _image = _interopRequireDefault(require("react-bulma-components/lib/components/image"));

var _content = _interopRequireDefault(require("react-bulma-components/lib/components/content"));

var _heading = _interopRequireDefault(require("react-bulma-components/lib/components/heading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Card', module).addDecorator(function (story) {
  return _react.default.createElement("div", {
    style: {
      margin: '0px auto',
      width: 450
    }
  }, story());
}).add('Default', function () {
  return _react.default.createElement(_card.default, null, _react.default.createElement(_card.default.Image, {
    size: "4by3",
    src: "http://bulma.io/images/placeholders/1280x960.png"
  }), _react.default.createElement(_card.default.Content, null, _react.default.createElement(_media.default, null, _react.default.createElement(_media.default.Item, {
    renderAs: "figure",
    position: "left"
  }, _react.default.createElement(_image.default, {
    renderAs: "p",
    size: 64,
    alt: "64x64",
    src: "http://bulma.io/images/placeholders/128x128.png"
  })), _react.default.createElement(_media.default.Item, null, _react.default.createElement(_heading.default, {
    size: 4
  }, "John Smith"), _react.default.createElement(_heading.default, {
    subtitle: true,
    size: 6
  }, "@johnsmith"))), _react.default.createElement(_content.default, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. ", _react.default.createElement("a", null, "@bulmaio"), ".", _react.default.createElement("a", {
    href: "#1"
  }, "#css"), " ", _react.default.createElement("a", {
    href: "#2"
  }, "#responsive"), _react.default.createElement("br", null), _react.default.createElement("time", {
    dateTime: "2016-1-1"
  }, "11:09 PM - 1 Jan 2016"))));
}).add('With Footer actions', function () {
  return _react.default.createElement(_card.default, null, _react.default.createElement(_card.default.Header, null, _react.default.createElement(_card.default.Header.Title, null, "Title")), _react.default.createElement(_card.default.Content, null, _react.default.createElement(_media.default, null, _react.default.createElement(_media.default.Item, {
    renderAs: "figure",
    position: "left"
  }, _react.default.createElement(_image.default, {
    renderAs: "p",
    size: 64,
    alt: "64x64",
    src: "http://bulma.io/images/placeholders/128x128.png"
  })), _react.default.createElement(_media.default.Item, null, _react.default.createElement(_heading.default, {
    size: 4
  }, "John Smith"), _react.default.createElement(_heading.default, {
    subtitle: true,
    size: 6
  }, "@johnsmith"))), _react.default.createElement(_content.default, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. ", _react.default.createElement("a", null, "@bulmaio"), ".", _react.default.createElement("a", {
    href: "#1"
  }, "#css"), " ", _react.default.createElement("a", {
    href: "#2"
  }, "#responsive"), _react.default.createElement("br", null), _react.default.createElement("time", {
    dateTime: "2016-1-1"
  }, "11:09 PM - 1 Jan 2016"))), _react.default.createElement(_card.default.Footer, null, _react.default.createElement(_card.default.Footer.Item, {
    renderAs: "a",
    href: "#Yes"
  }, "Yes"), _react.default.createElement(_card.default.Footer.Item, {
    renderAs: "a",
    href: "#No"
  }, "No"), _react.default.createElement(_card.default.Footer.Item, {
    renderAs: "a",
    href: "#Maybe"
  }, "Maybe")));
});
//# sourceMappingURL=card.story.js.map