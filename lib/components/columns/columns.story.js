"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _columns = _interopRequireDefault(require("react-bulma-components/lib/components/columns"));

var _box = _interopRequireDefault(require("react-bulma-components/lib/components/box"));

var _heading = _interopRequireDefault(require("react-bulma-components/lib/components/heading"));

var _constants = _interopRequireDefault(require("./constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Columns', module).add('Basic', function () {
  return _react.default.createElement(_columns.default, null, _react.default.createElement(_columns.default.Column, null, _react.default.createElement("p", {
    className: "bd-notification is-success"
  }, "First Column")), _react.default.createElement(_columns.default.Column, null, _react.default.createElement("p", {
    className: "bd-notification is-info"
  }, "Second Column")), _react.default.createElement(_columns.default.Column, null, _react.default.createElement("p", {
    className: "bd-notification is-warning"
  }, "Third Column")), _react.default.createElement(_columns.default.Column, null, _react.default.createElement("p", {
    className: "bd-notification is-warning"
  }, "Fourth Column")));
}).add('Sizes by name', function () {
  return _react.default.createElement("div", null, Object.keys(_constants.default.SIZES).map(function (size) {
    return _react.default.createElement(_columns.default, {
      key: size
    }, _react.default.createElement(_columns.default.Column, {
      size: _constants.default.SIZES[size]
    }, _react.default.createElement("p", {
      className: "bd-notification is-success"
    }, _constants.default.SIZES[size])), _react.default.createElement(_columns.default.Column, null, _react.default.createElement("p", {
      className: "bd-notification is-info"
    }, "Auto")));
  }));
}).add('Sizes by 12 Columns', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_columns.default, null, _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-success"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-info"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-warning"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-danger"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-white"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-light"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-dark"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-black"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-dark"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-light"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-white"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-danger"
  }, "size-1"))), _react.default.createElement(_columns.default, null, _react.default.createElement(_columns.default.Column, {
    size: 2
  }, _react.default.createElement("p", {
    className: "bd-notification is-success"
  }, "size-2")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-warning"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-danger"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-white"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-light"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-dark"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-black"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-dark"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-light"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-white"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-danger"
  }, "size-1"))), _react.default.createElement(_columns.default, null, _react.default.createElement(_columns.default.Column, {
    size: 3
  }, _react.default.createElement("p", {
    className: "bd-notification is-success"
  }, "size-3")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-danger"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-white"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-light"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-dark"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-black"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-dark"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-light"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-white"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-danger"
  }, "size-1"))), _react.default.createElement(_columns.default, null, _react.default.createElement(_columns.default.Column, {
    size: 4
  }, _react.default.createElement("p", {
    className: "bd-notification is-success"
  }, "size-4")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-white"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-light"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-dark"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-black"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-dark"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-light"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-white"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-danger"
  }, "size-1"))), _react.default.createElement(_columns.default, null, _react.default.createElement(_columns.default.Column, {
    size: 5
  }, _react.default.createElement("p", {
    className: "bd-notification is-success"
  }, "size-5")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-light"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-dark"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-black"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-dark"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-light"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-white"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-danger"
  }, "size-1"))), _react.default.createElement(_columns.default, null, _react.default.createElement(_columns.default.Column, {
    size: 6
  }, _react.default.createElement("p", {
    className: "bd-notification is-success"
  }, "size-6")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-dark"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-black"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-dark"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-light"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-white"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-danger"
  }, "size-1"))), _react.default.createElement(_columns.default, null, _react.default.createElement(_columns.default.Column, {
    size: 7
  }, _react.default.createElement("p", {
    className: "bd-notification is-success"
  }, "size-7")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-black"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-dark"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-light"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-white"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-danger"
  }, "size-1"))), _react.default.createElement(_columns.default, null, _react.default.createElement(_columns.default.Column, {
    size: 8
  }, _react.default.createElement("p", {
    className: "bd-notification is-success"
  }, "size-8")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-dark"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-light"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-white"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-danger"
  }, "size-1"))), _react.default.createElement(_columns.default, null, _react.default.createElement(_columns.default.Column, {
    size: 9
  }, _react.default.createElement("p", {
    className: "bd-notification is-success"
  }, "size-9")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-light"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-white"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-danger"
  }, "size-1"))), _react.default.createElement(_columns.default, null, _react.default.createElement(_columns.default.Column, {
    size: 10
  }, _react.default.createElement("p", {
    className: "bd-notification is-success"
  }, "size-10")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-white"
  }, "size-1")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-danger"
  }, "size-1"))), _react.default.createElement(_columns.default, null, _react.default.createElement(_columns.default.Column, {
    size: 11
  }, _react.default.createElement("p", {
    className: "bd-notification is-success"
  }, "size-11")), _react.default.createElement(_columns.default.Column, {
    size: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-danger"
  }, "size-1"))), _react.default.createElement(_columns.default, null, _react.default.createElement(_columns.default.Column, {
    size: 12
  }, _react.default.createElement("p", {
    className: "bd-notification is-success"
  }, "size-12"))));
}).add('With Offset', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_columns.default, {
    mobile: true
  }, _react.default.createElement(_columns.default.Column, {
    size: "half",
    offset: "one-quarter"
  }, _react.default.createElement("p", {
    className: "bd-notification is-info"
  }, "size half", _react.default.createElement("br", null), "offset one-quarter"))), _react.default.createElement(_columns.default, {
    mobile: true
  }, _react.default.createElement(_columns.default.Column, {
    size: 4,
    offset: 8
  }, _react.default.createElement("p", {
    className: "bd-notification is-info"
  }, "size 4", _react.default.createElement("br", null), "offset 8"))), _react.default.createElement(_columns.default, {
    mobile: true
  }, _react.default.createElement(_columns.default.Column, {
    size: 11,
    offset: 1
  }, _react.default.createElement("p", {
    className: "bd-notification is-info"
  }, "size 11", _react.default.createElement("br", null), "offset 1"))));
}).add('Narrow', function () {
  return _react.default.createElement(_columns.default, null, _react.default.createElement(_columns.default.Column, {
    narrow: true
  }, _react.default.createElement(_box.default, {
    style: {
      width: 200
    }
  }, _react.default.createElement(_heading.default, {
    size: 5,
    renderAs: "p"
  }, "Narrow column"), _react.default.createElement(_heading.default, {
    subtitle: true,
    renderAs: "p"
  }, "This column is only 200px wide."))), _react.default.createElement(_columns.default.Column, null, _react.default.createElement(_box.default, null, _react.default.createElement(_heading.default, {
    size: 5,
    renderAs: "p"
  }, "Flexible column"), _react.default.createElement(_heading.default, {
    subtitle: true,
    renderAs: "p"
  }, "This column will take up the remaining space available."))));
}).add('Responsive', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_box.default, null, _react.default.createElement(_heading.default, {
    size: 5,
    renderAs: "p"
  }, "Mobile"), _react.default.createElement(_columns.default, {
    breakpoint: "mobile"
  }, _react.default.createElement(_columns.default.Column, null, _react.default.createElement("p", {
    className: "bd-notification is-success"
  }, "First Column")), _react.default.createElement(_columns.default.Column, null, _react.default.createElement("p", {
    className: "bd-notification is-info"
  }, "Second Column")), _react.default.createElement(_columns.default.Column, null, _react.default.createElement("p", {
    className: "bd-notification is-warning"
  }, "Third Column")), _react.default.createElement(_columns.default.Column, null, _react.default.createElement("p", {
    className: "bd-notification is-warning"
  }, "Fourth Column")))), _react.default.createElement(_box.default, null, _react.default.createElement(_heading.default, {
    renderAs: "p",
    size: 5
  }, "Tablet"), _react.default.createElement(_columns.default, {
    breakpoint: "tablet"
  }, _react.default.createElement(_columns.default.Column, null, _react.default.createElement("p", {
    className: "bd-notification is-success"
  }, "First Column")), _react.default.createElement(_columns.default.Column, null, _react.default.createElement("p", {
    className: "bd-notification is-info"
  }, "Second Column")), _react.default.createElement(_columns.default.Column, null, _react.default.createElement("p", {
    className: "bd-notification is-warning"
  }, "Third Column")), _react.default.createElement(_columns.default.Column, null, _react.default.createElement("p", {
    className: "bd-notification is-warning"
  }, "Fourth Column")))), _react.default.createElement(_box.default, null, _react.default.createElement(_heading.default, {
    renderAs: "p",
    size: 5
  }, "Desktop"), _react.default.createElement(_columns.default, {
    breakpoint: "desktop"
  }, _react.default.createElement(_columns.default.Column, null, _react.default.createElement("p", {
    className: "bd-notification is-success"
  }, "First Column")), _react.default.createElement(_columns.default.Column, null, _react.default.createElement("p", {
    className: "bd-notification is-info"
  }, "Second Column")), _react.default.createElement(_columns.default.Column, null, _react.default.createElement("p", {
    className: "bd-notification is-warning"
  }, "Third Column")), _react.default.createElement(_columns.default.Column, null, _react.default.createElement("p", {
    className: "bd-notification is-warning"
  }, "Fourth Column")))));
}).add('Different column size per breakpoint', function () {
  return _react.default.createElement(_columns.default, {
    breakpoint: "mobile"
  }, _react.default.createElement(_columns.default.Column, {
    mobile: {
      size: 'three-quarters'
    },
    tablet: {
      size: 'two-thirds'
    },
    desktop: {
      size: 'half'
    },
    widescreen: {
      size: 'one-third'
    },
    fullhd: {
      size: 'one-quarter'
    }
  }, _react.default.createElement("p", {
    className: "bd-notification is-success"
  }, "is-three-quarters-mobile", _react.default.createElement("br", null), "is-two-thirds-tablet", _react.default.createElement("br", null), "is-half-desktop is-one-third-widescreen is-one-quarter-fullhd")), _react.default.createElement(_columns.default.Column, {
    className: "column"
  }, _react.default.createElement("p", {
    className: "bd-notification is-info"
  }, "1")), _react.default.createElement(_columns.default.Column, {
    className: "column"
  }, _react.default.createElement("p", {
    className: "bd-notification is-warning"
  }, "1")));
}).add('Nested', function () {
  return _react.default.createElement(_columns.default, null, _react.default.createElement(_columns.default.Column, {
    size: "half"
  }, _react.default.createElement("p", {
    className: "bd-notification is-success"
  }, "First Column"), _react.default.createElement(_columns.default, null, _react.default.createElement(_columns.default.Column, {
    size: "one-third"
  }, _react.default.createElement("p", {
    className: "bd-notification is-info"
  }, "First Nested Column")), _react.default.createElement(_columns.default.Column, null, _react.default.createElement("p", {
    className: "bd-notification is-warning"
  }, "Second Nested Column (auto)")))), _react.default.createElement(_columns.default.Column, {
    size: "half"
  }, _react.default.createElement("p", {
    className: "bd-notification is-success"
  }, "Second Column"), _react.default.createElement(_columns.default, null, _react.default.createElement(_columns.default.Column, {
    size: "half"
  }, _react.default.createElement("p", {
    className: "bd-notification is-info"
  }, "First Nested Column (Half)")), _react.default.createElement(_columns.default.Column, {
    size: "one-quarter"
  }, _react.default.createElement("p", {
    className: "bd-notification is-warning"
  }, "Second Nested Column (one-quarter)")), _react.default.createElement(_columns.default.Column, null, _react.default.createElement("p", {
    className: "bd-notification is-warning"
  }, "Third Nested Column (auto)")))));
}).add('gapless columns', function () {
  return _react.default.createElement(_columns.default, {
    gapless: true
  }, _react.default.createElement(_columns.default.Column, null, _react.default.createElement("p", {
    className: "bd-notification is-success"
  }, " First Column")), _react.default.createElement(_columns.default.Column, null, _react.default.createElement("p", {
    className: "bd-notification is-info"
  }, " Middle Column")), _react.default.createElement(_columns.default.Column, null, _react.default.createElement("p", {
    className: "bd-notification is-warning"
  }, " Last Column")));
});
//# sourceMappingURL=columns.story.js.map