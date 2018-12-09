"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _element = _interopRequireDefault(require("react-bulma-components/lib/components/element"));

var _addonKnobs = require("@storybook/addon-knobs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Element', module).add('Default', function () {
  return _react.default.createElement(_element.default, {
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
  }, "Custom Element to use Bulma helper");
});
//# sourceMappingURL=element.story.js.map