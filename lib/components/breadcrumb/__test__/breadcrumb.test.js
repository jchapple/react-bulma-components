"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Breadcrumb component', function () {
  it('Should be a Breadcrumb', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      items: [{
        url: '/',
        name: 'Home'
      }, {
        url: '/section',
        name: 'Section'
      }, {
        url: '/detail',
        name: 'Details',
        active: true
      }]
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  [null, 'arrow', 'dot', 'bullet', 'succeeds'].map(function (separator) {
    return it("should use separator ".concat(separator), function () {
      var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
        separator: separator,
        items: [{
          name: 'Storybook',
          url: '#1'
        }, {
          name: 'Breadcrumb',
          url: '#2'
        }, {
          name: 'Breadcrumb Types',
          url: '#3',
          active: true
        }]
      }));

      expect(component.toJSON()).toMatchSnapshot();
    });
  });
  it('Should use inline style and custom size', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      style: {
        marginTop: 10
      },
      size: "large",
      items: [{
        url: '/',
        name: 'Home'
      }, {
        url: '/section',
        name: 'Section'
      }, {
        url: '/detail',
        name: 'Details',
        active: true
      }]
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
});
//# sourceMappingURL=breadcrumb.test.js.map