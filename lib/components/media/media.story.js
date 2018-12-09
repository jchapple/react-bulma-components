"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _media = _interopRequireDefault(require("react-bulma-components/lib/components/media"));

var _image = _interopRequireDefault(require("react-bulma-components/lib/components/image"));

var _content = _interopRequireDefault(require("react-bulma-components/lib/components/content"));

var _button = _interopRequireDefault(require("react-bulma-components/lib/components/button"));

var _level = _interopRequireDefault(require("react-bulma-components/lib/components/level"));

var _section = _interopRequireDefault(require("react-bulma-components/lib/components/section"));

var _box = _interopRequireDefault(require("react-bulma-components/lib/components/box"));

var _form = require("react-bulma-components/lib/components/form");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  background: '#e6e6e6',
  width: 64,
  height: 64
};
(0, _react2.storiesOf)('Media', module).add('Default', function () {
  return _react.default.createElement(_section.default, null, _react.default.createElement(_box.default, null, _react.default.createElement(_media.default, null, _react.default.createElement(_media.default.Item, {
    renderAs: "figure",
    position: "left"
  }, _react.default.createElement(_image.default, {
    renderAs: "p",
    size: 64,
    alt: "64x64",
    src: "http://bulma.io/images/placeholders/128x128.png"
  })), _react.default.createElement(_media.default.Item, null, _react.default.createElement(_content.default, null, _react.default.createElement("p", null, _react.default.createElement("strong", null, "John Smith"), " ", _react.default.createElement("small", null, "@johnsmith"), " ", _react.default.createElement("small", null, "31m"), _react.default.createElement("br", null), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.")), _react.default.createElement(_level.default, {
    breakpoint: "mobile"
  }, _react.default.createElement(_level.default.Side, {
    align: "left"
  }, _react.default.createElement(_button.default, {
    link: true
  }, "Like"), _react.default.createElement(_button.default, {
    link: true
  }, "Share")))))));
}).add('Right Media', function () {
  return _react.default.createElement(_section.default, null, _react.default.createElement(_box.default, null, _react.default.createElement(_media.default, null, _react.default.createElement(_media.default.Item, null, _react.default.createElement("p", null, "Lorem Ipsum")), _react.default.createElement(_media.default.Item, {
    renderAs: "figure",
    position: "right"
  }, _react.default.createElement("img", {
    style: style,
    alt: "64x64",
    src: "http://bulma.io/images/placeholders/128x128.png"
  })))));
}).add('Nested', function () {
  return _react.default.createElement(_section.default, null, _react.default.createElement(_box.default, null, _react.default.createElement(_media.default, {
    renderAs: "article"
  }, _react.default.createElement(_media.default.Item, {
    position: "left"
  }, _react.default.createElement(_image.default, {
    src: "http://bulma.io/images/placeholders/128x128.png",
    size: 64,
    renderAs: "p"
  })), _react.default.createElement(_media.default.Item, {
    position: "center"
  }, _react.default.createElement(_content.default, null, _react.default.createElement("p", null, _react.default.createElement("strong", null, "Barbara Middleton"), _react.default.createElement("br", null), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.", _react.default.createElement("br", null), _react.default.createElement("small", null, _react.default.createElement("a", null, "Like"), " \xB7 ", _react.default.createElement("a", null, "Reply"), " \xB7 3 hrs"))), _react.default.createElement(_media.default, null, _react.default.createElement(_media.default.Item, {
    position: "left"
  }, _react.default.createElement(_image.default, {
    src: "http://bulma.io/images/placeholders/128x128.png",
    size: 48,
    renderAs: "p"
  })), _react.default.createElement(_media.default.Item, {
    position: "center"
  }, _react.default.createElement(_content.default, null, _react.default.createElement("p", null, _react.default.createElement("strong", null, "Sean Brown"), _react.default.createElement("br", null), "Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.", _react.default.createElement("br", null), _react.default.createElement("small", null, _react.default.createElement("a", null, "Like"), " \xB7 ", _react.default.createElement("a", null, "Reply"), " \xB7 2 hrs"))), _react.default.createElement(_media.default, null, "Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec massa."), _react.default.createElement(_media.default, null, "Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor."))), _react.default.createElement(_media.default, null, _react.default.createElement(_media.default.Item, {
    position: "left"
  }, _react.default.createElement(_image.default, {
    src: "http://bulma.io/images/placeholders/96x96.png",
    size: 48,
    renderAs: "p"
  })), _react.default.createElement(_media.default.Item, {
    position: "center"
  }, _react.default.createElement(_content.default, null, _react.default.createElement("p", null, _react.default.createElement("strong", null, "Kayli Eunice "), _react.default.createElement("br", null), "Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.", _react.default.createElement("br", null), _react.default.createElement("small", null, _react.default.createElement("a", null, "Like"), " \xB7 ", _react.default.createElement("a", null, "Reply"), " \xB7 2 hrs"))))))), _react.default.createElement(_media.default, {
    renderAs: "article"
  }, _react.default.createElement(_media.default.Item, {
    position: "left"
  }, _react.default.createElement(_image.default, {
    src: "http://bulma.io/images/placeholders/128x128.png",
    size: 64,
    renderAs: "p"
  })), _react.default.createElement(_media.default.Item, {
    position: "center"
  }, _react.default.createElement(_form.Field, null, _react.default.createElement(_form.Control, {
    renderAs: "p"
  }, _react.default.createElement(_form.Textarea, {
    placeholder: "Add a comment..."
  }))), _react.default.createElement(_form.Field, null, _react.default.createElement(_form.Control, {
    renderAs: "p"
  }, _react.default.createElement(_button.default, null, "Post comment")))))));
});
//# sourceMappingURL=media.story.js.map