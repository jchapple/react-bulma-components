"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _box = _interopRequireDefault(require("react-bulma-components/lib/components/box"));

var _media = _interopRequireDefault(require("react-bulma-components/lib/components/media"));

var _image = _interopRequireDefault(require("react-bulma-components/lib/components/image"));

var _content = _interopRequireDefault(require("react-bulma-components/lib/components/content"));

var _addonKnobs = require("@storybook/addon-knobs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Box', module).add('Default', function () {
  return _react.default.createElement(_box.default, {
    paddingless: (0, _addonKnobs.boolean)('paddingless', false),
    responsive: {
      mobile: {
        display: 'block'
      },
      tablet: {
        display: 'flex'
      },
      desktop: {
        display: 'inline-flex',
        only: true
      },
      widescreen: {
        display: 'inline-block'
      }
    },
    hide: {
      tablet: {
        hide: true,
        only: true
      },
      widescreen: {
        hide: true
      }
    }
  }, _react.default.createElement(_media.default, null, _react.default.createElement(_media.default.Item, {
    renderAs: "figure",
    position: "left"
  }, _react.default.createElement(_image.default, {
    size: 64,
    alt: "64x64",
    src: "http://bulma.io/images/placeholders/128x128.png"
  })), _react.default.createElement(_media.default.Item, null, _react.default.createElement(_content.default, null, _react.default.createElement("p", null, _react.default.createElement("strong", null, "John Smith"), " ", _react.default.createElement("small", null, "@johnsmith"), " ", _react.default.createElement("small", null, "31m"), _react.default.createElement("br", null), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.")))));
});
//# sourceMappingURL=box.story.js.map