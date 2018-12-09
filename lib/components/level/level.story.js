"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _level = _interopRequireDefault(require("react-bulma-components/lib/components/level"));

var _form = require("react-bulma-components/lib/components/form");

var _heading = _interopRequireDefault(require("react-bulma-components/lib/components/heading"));

var _button = _interopRequireDefault(require("react-bulma-components/lib/components/button"));

var _hero = _interopRequireDefault(require("react-bulma-components/lib/components/hero"));

var _container = _interopRequireDefault(require("react-bulma-components/lib/components/container"));

var _box = _interopRequireDefault(require("react-bulma-components/lib/components/box"));

var _section = _interopRequireDefault(require("react-bulma-components/lib/components/section"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  textAlign: 'center'
};
(0, _react2.storiesOf)('Level', module).addDecorator(function (story) {
  return _react.default.createElement(_hero.default, {
    size: "fullheight"
  }, _react.default.createElement(_hero.default.Head, {
    renderAs: "header"
  }, _react.default.createElement(_container.default, null, story())));
}).add('Default', function () {
  return _react.default.createElement(_section.default, null, _react.default.createElement(_box.default, null, _react.default.createElement(_level.default, {
    renderAs: "nav"
  }, _react.default.createElement(_level.default.Side, {
    align: "left"
  }, _react.default.createElement(_level.default.Item, null, _react.default.createElement(_heading.default, {
    size: 5,
    subtitle: true
  }, _react.default.createElement("strong", null, "123"), " posts")), _react.default.createElement(_level.default.Item, null, _react.default.createElement(_form.Field, {
    kind: "addons"
  }, _react.default.createElement(_form.Control, null, _react.default.createElement(_form.Input, {
    placeholder: "Find a post"
  })), _react.default.createElement(_form.Control, null, _react.default.createElement(_button.default, {
    renderAs: "button"
  }, "Search"))))), _react.default.createElement(_level.default.Side, {
    align: "right"
  }, _react.default.createElement(_level.default.Item, null, _react.default.createElement("strong", null, "All")), _react.default.createElement(_level.default.Item, null, _react.default.createElement("a", null, "Published")), _react.default.createElement(_level.default.Item, null, _react.default.createElement("a", null, "Drafts")), _react.default.createElement(_level.default.Item, null, _react.default.createElement("a", null, "Deleted")), _react.default.createElement(_level.default.Item, null, _react.default.createElement(_button.default, {
    renderAs: "a",
    color: "success"
  }, "New"))))));
}).add('Items Centered', function () {
  return _react.default.createElement(_section.default, null, _react.default.createElement(_box.default, null, _react.default.createElement(_level.default, {
    renderAs: "nav"
  }, _react.default.createElement(_level.default.Item, {
    style: style
  }, _react.default.createElement("div", null, _react.default.createElement(_heading.default, {
    renderAs: "p",
    heading: true
  }, "Tweets"), _react.default.createElement(_heading.default, {
    renderAs: "p"
  }, "3,210"))), _react.default.createElement(_level.default.Item, {
    style: style
  }, _react.default.createElement("div", null, _react.default.createElement(_heading.default, {
    renderAs: "p",
    heading: true
  }, "Following"), _react.default.createElement(_heading.default, {
    renderAs: "p"
  }, "210"))), _react.default.createElement(_level.default.Item, {
    style: style
  }, _react.default.createElement("div", null, _react.default.createElement(_heading.default, {
    renderAs: "p",
    heading: true
  }, "Followers"), _react.default.createElement(_heading.default, {
    renderAs: "p"
  }, "321"))), _react.default.createElement(_level.default.Item, {
    style: style
  }, _react.default.createElement("div", null, _react.default.createElement(_heading.default, {
    renderAs: "p",
    heading: true
  }, "Likes"), _react.default.createElement(_heading.default, {
    renderAs: "p"
  }, "321K"))))));
}).add('With breakpoint', function () {
  return ['mobile', null].map(function (breakpoint) {
    return _react.default.createElement(_section.default, null, _react.default.createElement(_heading.default, null, breakpoint || 'Without breakpoint'), _react.default.createElement(_box.default, null, _react.default.createElement(_level.default, {
      renderAs: "nav",
      breakpoint: breakpoint
    }, _react.default.createElement(_level.default.Item, {
      style: style
    }, _react.default.createElement("div", null, _react.default.createElement(_heading.default, {
      renderAs: "p",
      heading: true
    }, "Tweets"), _react.default.createElement(_heading.default, {
      renderAs: "p"
    }, "3,210"))), _react.default.createElement(_level.default.Item, {
      style: style
    }, _react.default.createElement("div", null, _react.default.createElement(_heading.default, {
      renderAs: "p",
      heading: true
    }, "Following"), _react.default.createElement(_heading.default, {
      renderAs: "p"
    }, "210"))), _react.default.createElement(_level.default.Item, {
      style: style
    }, _react.default.createElement("div", null, _react.default.createElement(_heading.default, {
      renderAs: "p",
      heading: true
    }, "Followers"), _react.default.createElement(_heading.default, {
      renderAs: "p"
    }, "321"))), _react.default.createElement(_level.default.Item, {
      style: style
    }, _react.default.createElement("div", null, _react.default.createElement(_heading.default, {
      renderAs: "p",
      heading: true
    }, "Likes"), _react.default.createElement(_heading.default, {
      renderAs: "p"
    }, "321K"))))));
  });
});
//# sourceMappingURL=level.story.js.map