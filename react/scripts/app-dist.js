'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Saludar(props) {
	return React.createElement(
		'h1',
		null,
		'Hola ',
		props.name
	);
}

ReactDOM.render(React.createElement(Saludar, { name: 'Marcelo' }), document.getElementById('app'));

var Button = function (_React$Component) {
	_inherits(Button, _React$Component);

	function Button() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Button);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this), _this.state = { counter: 0 }, _this.handleClick = function () {
			_this.setState(function (prevState) {
				return {
					counter: prevState.counter + 1
				};
			});
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Button, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'button',
				{ onClick: this.handleClick },
				this.state.counter
			);
		}
	}]);

	return Button;
}(React.Component);

ReactDOM.render(React.createElement(Button, null), document.getElementById('prueba1'));