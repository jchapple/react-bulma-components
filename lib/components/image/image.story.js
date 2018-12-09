"use strict";

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _react2 = require("@storybook/react");

var _image = _interopRequireDefault(require("react-bulma-components/lib/components/image"));

var _constants = _interopRequireDefault(require("./constants"));

var _table = _interopRequireDefault(require("react-bulma-components/lib/components/table"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Image', module).add('Default', function () {
  return _react.default.createElement("div", {
    style: {
      width: 320
    }
  }, _react.default.createElement(_image.default, {
    rounded: (0, _addonKnobs.boolean)('rounded', false),
    src: "http://bulma.io/images/placeholders/640x480.png",
    size: "3by2"
  }));
}).add('Fixed Square', function () {
  return _react.default.createElement(_table.default, null, _react.default.createElement("thead", null, _react.default.createElement("tr", null, _react.default.createElement("th", null), _react.default.createElement("th", null, "Size"), _react.default.createElement("th", null, "Image"), _react.default.createElement("th", null))), _react.default.createElement("tbody", null, _constants.default.SIZES.filter(function (size) {
    return typeof size === 'number';
  }).map(function (size) {
    return _react.default.createElement("tr", {
      key: size
    }, _react.default.createElement("td", null), _react.default.createElement("td", {
      style: {
        width: 100
      }
    }, size), _react.default.createElement("td", {
      style: {
        width: 128
      }
    }, _react.default.createElement(_image.default, {
      src: "https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest?cb=20170330235552&format=original",
      size: size
    })), _react.default.createElement("td", null));
  })));
}).add('Responsive images with ratios', function () {
  return _react.default.createElement(_table.default, null, _react.default.createElement("thead", null, _react.default.createElement("tr", null, _react.default.createElement("th", null), _react.default.createElement("th", null, "Size"), _react.default.createElement("th", null, "Image"), _react.default.createElement("th", null))), _react.default.createElement("tbody", null, _constants.default.SIZES.filter(function (size) {
    return typeof size === 'string';
  }).map(function (size) {
    return _react.default.createElement("tr", {
      key: size
    }, _react.default.createElement("td", null), _react.default.createElement("td", {
      style: {
        width: 100
      }
    }, size), _react.default.createElement("td", {
      style: {
        width: 128
      }
    }, _react.default.createElement(_image.default, {
      src: "https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest?cb=20170330235552&format=original",
      size: size
    })), _react.default.createElement("td", null));
  })));
});
//# sourceMappingURL=image.story.js.map