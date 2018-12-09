"use strict";

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Helper proptypes', function () {
  test('Should have paddingless and clearfix classes', function () {
    expect(_.default.classnames({
      clearfix: true,
      paddingless: true
    })).toMatchSnapshot();
  });
  test('Should have text helpers', function () {
    expect(_.default.classnames({
      textColor: 'success',
      textAlignment: 'centered',
      italic: true,
      textTransform: 'uppercase',
      textWeight: 'bold'
    })).toMatchSnapshot();
  });
  test('Should have responsive modifier flex-tablet-only and block-widescreen', function () {
    expect(_.default.classnames({
      responsive: {
        tablet: {
          display: {
            value: 'flex',
            only: true
          }
        },
        widescreen: {
          display: {
            value: 'block'
          }
        }
      }
    })).toMatchSnapshot();
  });
  test('Should have hidden modifier tablet-only and widescreen', function () {
    expect(_.default.classnames({
      responsive: {
        tablet: {
          hide: {
            value: true,
            only: true
          }
        },
        widescreen: {
          hide: {
            value: true
          }
        }
      }
    })).toMatchSnapshot();
  });
  test('Should have alignment responsive modifiers', function () {
    expect(_.default.classnames({
      responsive: {
        tablet: {
          textAlignment: {
            value: 'centered',
            only: true
          }
        },
        widescreen: {
          textAlignment: {
            value: 'left'
          }
        }
      }
    })).toMatchSnapshot();
  });
  test('Should have text color success', function () {
    expect(_.default.classnames({
      textColor: 'success'
    })).toMatchSnapshot();
  });
  test('Should have background color success', function () {
    expect(_.default.classnames({
      backgroundColor: 'success'
    })).toMatchSnapshot();
  });
});
//# sourceMappingURL=modifiers.test.js.map