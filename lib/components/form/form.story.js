"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _form = require("react-bulma-components/lib/components/form");

var _button = _interopRequireDefault(require("react-bulma-components/lib/components/button"));

var _icon = _interopRequireDefault(require("react-bulma-components/lib/components/icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* eslint-disable react/no-multi-comp */
var HoC = function HoC(Component) {
  var Controlled =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Controlled, _React$Component);

    function Controlled() {
      var _getPrototypeOf2;

      var _temp, _this;

      _classCallCheck(this, Controlled);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Controlled)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
        value: ''
      }, _this.onChange = function (evt) {
        _this.setState({
          value: evt.target.value
        });
      }, _temp));
    }

    _createClass(Controlled, [{
      key: "render",
      value: function render() {
        return _react.default.createElement(Component, _extends({
          onChange: this.onChange,
          value: this.state.value
        }, this.props));
      }
    }]);

    return Controlled;
  }(_react.default.Component);

  Controlled.displayName = 'Select';
  return Controlled;
};

var HoCCheckbox = function HoCCheckbox(Component) {
  var Controlled =
  /*#__PURE__*/
  function (_React$Component2) {
    _inherits(Controlled, _React$Component2);

    function Controlled() {
      var _getPrototypeOf3;

      var _temp2, _this2;

      _classCallCheck(this, Controlled);

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _possibleConstructorReturn(_this2, (_temp2 = _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(Controlled)).call.apply(_getPrototypeOf3, [this].concat(args))), _this2.state = {
        checked: false
      }, _this2.onChange = function (evt) {
        _this2.setState({
          checked: evt.target.checked
        });
      }, _temp2));
    }

    _createClass(Controlled, [{
      key: "render",
      value: function render() {
        return _react.default.createElement(Component, _extends({
          onChange: this.onChange,
          checked: this.state.checked
        }, this.props));
      }
    }]);

    return Controlled;
  }(_react.default.Component);

  Controlled.displayName = 'Checkbox';
  return Controlled;
};

var RadioGroup =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(RadioGroup, _React$Component3);

  function RadioGroup() {
    var _getPrototypeOf4;

    var _temp3, _this3;

    _classCallCheck(this, RadioGroup);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _possibleConstructorReturn(_this3, (_temp3 = _this3 = _possibleConstructorReturn(this, (_getPrototypeOf4 = _getPrototypeOf(RadioGroup)).call.apply(_getPrototypeOf4, [this].concat(args))), _this3.state = {
      selected: null
    }, _this3.onChange = function (evt) {
      _this3.setState({
        selected: evt.target.value
      });
    }, _temp3));
  }

  _createClass(RadioGroup, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_form.Control, null, _react.default.createElement(_form.Radio, {
        onChange: this.onChange,
        checked: this.state.selected === 'Yes',
        value: "Yes",
        name: "question"
      }, "Yes"), _react.default.createElement(_form.Radio, {
        onChange: this.onChange,
        checked: this.state.selected === 'No',
        value: "No",
        name: "question"
      }, "No"));
    }
  }]);

  return RadioGroup;
}(_react.default.Component);
/* eslint-enable react/no-multi-comp */


var SelectControlled = HoC(_form.Select);
var CheckboxControlled = HoCCheckbox(_form.Checkbox);
(0, _react2.storiesOf)('Form', module).addDecorator(function (story) {
  return _react.default.createElement("div", {
    style: {
      margin: 50
    }
  }, story());
}).add('Default', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_form.Field, null, _react.default.createElement(_form.Label, null, "Name"), _react.default.createElement(_form.Control, null, _react.default.createElement(_form.Input, {
    placeholder: "Text input"
  }))), _react.default.createElement(_form.Field, null, _react.default.createElement(_form.Label, null, "Username"), _react.default.createElement(_form.Control, null, _react.default.createElement(_form.Input, {
    color: "success",
    type: "text",
    placeholder: "Text input",
    value: "bulma"
  })), _react.default.createElement(_form.Help, {
    color: "success"
  }, "This username is available")), _react.default.createElement(_form.Field, null, _react.default.createElement(_form.Label, null, "Email"), _react.default.createElement(_form.Control, null, _react.default.createElement(_form.Input, {
    color: "danger",
    type: "email",
    placeholder: "Email input",
    value: "hello@"
  })), _react.default.createElement(_form.Help, {
    color: "danger"
  }, "This email is invalid")), _react.default.createElement(_form.Field, null, _react.default.createElement(_form.Label, null, "With Icons"), _react.default.createElement(_form.Control, {
    iconLeft: true,
    iconRight: true
  }, _react.default.createElement(_form.Input, {
    color: "success",
    type: "email",
    placeholder: "I have icons"
  }), _react.default.createElement(_icon.default, {
    align: "left",
    icon: "bars"
  }), _react.default.createElement(_icon.default, {
    align: "right",
    icon: "bars"
  })), _react.default.createElement(_form.Help, {
    color: "danger"
  }, "This email is invalid")), _react.default.createElement(_form.Field, null, _react.default.createElement(_form.Label, null, "Subject"), _react.default.createElement(_form.Control, null, _react.default.createElement(SelectControlled, null, _react.default.createElement("option", null, "Select dropdown"), _react.default.createElement("option", null, "With options")))), _react.default.createElement(_form.Field, null, _react.default.createElement(_form.Label, null, "Message"), _react.default.createElement(_form.Control, null, _react.default.createElement(_form.Textarea, {
    placeholder: "Textarea"
  }))), _react.default.createElement(_form.Field, null, _react.default.createElement(_form.Label, null, "File"), _react.default.createElement(_form.Control, null, _react.default.createElement(_form.InputFile, {
    icon: _react.default.createElement(_icon.default, {
      icon: "upload"
    }),
    boxed: true,
    placeholder: "Textarea"
  }))), _react.default.createElement(_form.Field, null, _react.default.createElement(_form.Control, null, _react.default.createElement(CheckboxControlled, null, "I agree to the ", _react.default.createElement("a", {
    href: "#agree"
  }, "terms and conditions")))), _react.default.createElement(_form.Field, null, _react.default.createElement(RadioGroup, null)), _react.default.createElement(_form.Field, {
    kind: "group"
  }, _react.default.createElement(_form.Control, null, _react.default.createElement(_button.default, {
    type: "primary"
  }, "Submit")), _react.default.createElement(_form.Control, null, _react.default.createElement(_button.default, {
    color: "link"
  }, "Cancel"))));
}).add('Handle Multiple inputs', function () {
  /* eslint-disable react/no-multi-comp */
  var MultiInputHandler =
  /*#__PURE__*/
  function (_PureComponent) {
    _inherits(MultiInputHandler, _PureComponent);

    function MultiInputHandler() {
      var _getPrototypeOf5;

      var _temp4, _this4;

      _classCallCheck(this, MultiInputHandler);

      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _possibleConstructorReturn(_this4, (_temp4 = _this4 = _possibleConstructorReturn(this, (_getPrototypeOf5 = _getPrototypeOf(MultiInputHandler)).call.apply(_getPrototypeOf5, [this].concat(args))), _this4.state = {
        email: '',
        name: '',
        password: '',
        comment: '',
        gender: '',
        question: null,
        termsAccepted: false
      }, _this4.onChange = function (evt) {
        var value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;

        _this4.setState(_defineProperty({}, evt.target.name, value));
      }, _temp4));
    }

    _createClass(MultiInputHandler, [{
      key: "render",
      value: function render() {
        var _this$state = this.state,
            email = _this$state.email,
            name = _this$state.name,
            password = _this$state.password,
            comment = _this$state.comment,
            gender = _this$state.gender,
            question = _this$state.question,
            termsAccepted = _this$state.termsAccepted;
        return _react.default.createElement("div", null, _react.default.createElement(_form.Field, null, _react.default.createElement(_form.Label, null, "Email"), _react.default.createElement(_form.Control, null, _react.default.createElement(_form.Input, {
          onChange: this.onChange,
          name: "email",
          type: "email",
          placeholder: "Email input",
          value: email
        }))), _react.default.createElement(_form.Field, null, _react.default.createElement(_form.Label, null, "Name"), _react.default.createElement(_form.Control, null, _react.default.createElement(_form.Input, {
          onChange: this.onChange,
          name: "name",
          type: "text",
          placeholder: "Name input",
          value: name
        }))), _react.default.createElement(_form.Field, null, _react.default.createElement(_form.Label, null, "Password"), _react.default.createElement(_form.Control, null, _react.default.createElement(_form.Input, {
          onChange: this.onChange,
          name: "password",
          type: "password",
          placeholder: "Password",
          value: password
        }))), _react.default.createElement(_form.Field, null, _react.default.createElement(_form.Label, null, "Gender"), _react.default.createElement(_form.Control, null, _react.default.createElement(_form.Select, {
          onChange: this.onChange,
          name: "gender",
          value: gender
        }, _react.default.createElement("option", {
          value: ""
        }, "Select"), _react.default.createElement("option", {
          value: "male"
        }, "Male"), _react.default.createElement("option", {
          value: "female"
        }, "Female"), _react.default.createElement("option", {
          value: "other"
        }, "Other?")))), _react.default.createElement(_form.Field, null, _react.default.createElement(_form.Label, null, "Message"), _react.default.createElement(_form.Control, null, _react.default.createElement(_form.Textarea, {
          name: "comment",
          value: comment,
          onChange: this.onChange,
          placeholder: "Textarea"
        }))), _react.default.createElement(_form.Field, null, _react.default.createElement(_form.Label, null, "Do you undertood how to use me?"), _react.default.createElement(_form.Control, null, _react.default.createElement(_form.Radio, {
          onChange: this.onChange,
          checked: question === 'Yes',
          value: "Yes",
          name: "question"
        }, "Yes"), _react.default.createElement(_form.Radio, {
          onChange: this.onChange,
          checked: question === 'No',
          value: "No",
          name: "question"
        }, "No"))), _react.default.createElement(_form.Field, null, _react.default.createElement(_form.Control, null, _react.default.createElement(_form.Checkbox, {
          name: "termsAccepted",
          onChange: this.onChange,
          checked: termsAccepted
        }, "I agree to the ", _react.default.createElement("a", {
          href: "#agree"
        }, "terms and conditions")))), _react.default.createElement("pre", null, _react.default.createElement("code", null, JSON.stringify(this.state, null, 2))));
      }
    }]);

    return MultiInputHandler;
  }(_react.PureComponent);

  return _react.default.createElement(MultiInputHandler, null);
});
//# sourceMappingURL=form.story.js.map