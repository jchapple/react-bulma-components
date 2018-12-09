"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _jsdom = require("jsdom");

var _server = require("react-dom/server");

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Modal component', function () {
  var window;
  var component;
  beforeEach(function () {
    // eslint-disable-next-line
    window = new _jsdom.JSDOM().window;
    global.window = window;
    global.document = window.document;
  });
  afterEach(function () {
    if (component && component.unmount) {
      component.unmount();
    }

    window = undefined;
    global.window = undefined;
    global.document = undefined;
  });
  it('Should Exist', function () {
    expect(_.default).toMatchSnapshot();
  });
  it('Should expose Content and Card\'s types', function () {
    expect(_.default.Content).toMatchSnapshot();
    expect(_.default.Card).toMatchSnapshot();
    expect(_.default.Card.Title).toMatchSnapshot();
    expect(_.default.Card.Head).toMatchSnapshot();
    expect(_.default.Card.Body).toMatchSnapshot();
    expect(_.default.Card.Foot).toMatchSnapshot();
  });
  it('Should render modal-card-head', function () {
    var onClose = jest.fn();
    component = (0, _enzyme.mount)(_react.default.createElement(_.default.Card, {
      onClose: onClose
    }, _react.default.createElement(_.default.Card.Head, {
      onClose: onClose
    }, _react.default.createElement(_.default.Card.Title, null, "Modal Title"))));
    component.find('.delete').simulate('click');
    expect(onClose).toHaveBeenCalledTimes(1);
  });
  it('Should open the modal', function () {
    var onClose = jest.fn(function () {
      component.setProps({
        show: false
      });
    });
    component = (0, _enzyme.mount)(_react.default.createElement(_.default, {
      document: window.document,
      show: false,
      onClose: onClose
    }, _react.default.createElement(_.default.Card, null, _react.default.createElement(_.default.Card.Head, null, _react.default.createElement(_.default.Card.Title, null, "Modal Title")))));
    expect(window.document.querySelector('div.modal.is-active')).toBeNull();
    component.setProps({
      show: true
    });
    expect(window.document.querySelector('div.modal.is-active')).toMatchSnapshot();
  });
  it('Should close the modal', function () {
    var onClose = jest.fn(function () {
      component.setProps({
        show: false
      });
    });
    component = (0, _enzyme.mount)(_react.default.createElement(_.default, {
      document: window.document,
      show: true,
      onClose: onClose
    }, _react.default.createElement(_.default.Card, null, _react.default.createElement(_.default.Card.Head, {
      onClose: onClose
    }, _react.default.createElement(_.default.Card.Title, null, "Modal Title")))));
    var modal = window.document.querySelector('div.modal.is-active');
    expect(modal).toMatchSnapshot();
    modal.querySelector('.delete').click();
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(window.document.querySelector('div.modal.is-active')).toBeNull();
  });
  it('Should close the modal on ESC key press', function () {
    var onClose = jest.fn(function () {
      component.setProps({
        show: false
      });
    });
    component = (0, _enzyme.mount)(_react.default.createElement(_.default, {
      document: window.document,
      show: true,
      onClose: onClose
    }, _react.default.createElement(_.default.Card, null, _react.default.createElement(_.default.Card.Head, null, _react.default.createElement(_.default.Card.Title, null, "Modal Title")))));
    var modal = window.document.querySelector('div.modal.is-active');
    expect(modal).toMatchSnapshot();
    var event = new window.KeyboardEvent('keydown', {
      keyCode: 27
    });
    window.document.dispatchEvent(event);
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(window.document.querySelector('div.modal.is-active')).toBeNull();
  });
  it('Should not close the modal on ESC key press', function () {
    var onClose = jest.fn(function () {
      component.setProps({
        show: false
      });
    });
    component = (0, _enzyme.mount)(_react.default.createElement(_.default, {
      closeOnEsc: false,
      document: window.document,
      show: true,
      onClose: onClose
    }, _react.default.createElement(_.default.Card, null, _react.default.createElement(_.default.Card.Head, null, _react.default.createElement(_.default.Card.Title, null, "Modal Title")))));
    var modal = window.document.querySelector('div.modal.is-active');
    expect(modal).toMatchSnapshot();
    var event = new window.KeyboardEvent('keydown', {
      keyCode: 27
    });
    window.document.dispatchEvent(event);
    expect(onClose).not.toHaveBeenCalled();
    expect(modal).not.toBe(null);
  });
  it('Should not close the modal on other than ESC key press', function () {
    var onClose = jest.fn(function () {
      component.setProps({
        show: false
      });
    });
    component = (0, _enzyme.mount)(_react.default.createElement(_.default, {
      closeOnEsc: true,
      document: window.document,
      show: true,
      onClose: onClose
    }, _react.default.createElement(_.default.Card, null, _react.default.createElement(_.default.Card.Head, null, _react.default.createElement(_.default.Card.Title, null, "Modal Title")), _react.default.createElement(_.default.Card.Body, null, "Body"), _react.default.createElement(_.default.Card.Foot, null, "Footer"))));
    var modal = window.document.querySelector('div.modal.is-active');
    expect(modal).toMatchSnapshot();
    var event = new window.KeyboardEvent('keydown', {
      keyCode: 23
    });
    window.document.dispatchEvent(event);
    expect(onClose).not.toHaveBeenCalled();
    expect(modal).not.toBe(null);
  });
  it('Should render any child type', function () {
    // eslint-disable-next-line no-console
    var onClose = jest.fn();
    component = (0, _enzyme.mount)(_react.default.createElement(_.default, {
      document: window.document,
      show: true,
      onClose: onClose
    }, _react.default.createElement("div", null, "CHILDREN"), _react.default.createElement("div", null, "CHILDREN")));
    expect(window.document.querySelector('div.modal.is-active')).toMatchSnapshot();
  });
  it('Should no try to reopen if other prop change', function () {
    var onClose = jest.fn();
    component = (0, _enzyme.mount)(_react.default.createElement(_.default, {
      document: window.document,
      show: true,
      onClose: onClose
    }, _react.default.createElement(_.default.Content, null, "Content")));
    component.setProps({
      randomProp: 'test'
    });
    expect(window.document.querySelector('div.modal.is-active')).toMatchSnapshot();
  });
  it('Should close the modal if clicked on background', function () {
    var onClose = jest.fn(function () {
      component.setProps({
        show: false
      });
    });
    component = (0, _enzyme.mount)(_react.default.createElement(_.default, {
      document: window.document,
      show: true,
      onClose: onClose,
      closeOnBlur: true
    }, _react.default.createElement(_.default.Content, null, "Content")));
    var modal = window.document.querySelector('div.modal.is-active');
    expect(modal).toMatchSnapshot();
    modal.querySelector('div.modal-background').click();
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(window.document.querySelector('div.modal.is-active')).toBeNull();
  });
  it('Should not close the modal if clicked on background', function () {
    var onClose = jest.fn(function () {
      component.setProps({
        show: false
      });
    });
    component = (0, _enzyme.mount)(_react.default.createElement(_.default, {
      closeOnBlur: false,
      document: window.document,
      show: true,
      onClose: onClose
    }, _react.default.createElement(_.default.Content, null, "Content")));
    var modal = window.document.querySelector('div.modal.is-active');
    expect(modal).toMatchSnapshot();
    modal.querySelector('div.modal-background').click();
    expect(onClose).not.toHaveBeenCalled();
    expect(window.document.querySelector('div.modal.is-active')).toMatchSnapshot();
  });
  it('Should not show close button', function () {
    var onClose = jest.fn(function () {
      component.setProps({
        show: false
      });
    });
    component = (0, _enzyme.mount)(_react.default.createElement(_.default, {
      showClose: false,
      document: window.document,
      show: true,
      onClose: onClose
    }, _react.default.createElement(_.default.Content, null, "Content")));
    var modal = window.document.querySelector('div.modal.is-active');
    expect(modal).toMatchSnapshot();
  });
  it('Should render empty because no document on scope', function () {
    component = (0, _server.renderToString)(_react.default.createElement(_.default, {
      show: true,
      onClose: function onClose() {}
    }, _react.default.createElement(_.default.Content, null, "Content")));
    expect(component).toMatchSnapshot();
  });
});
//# sourceMappingURL=modal.test.js.map