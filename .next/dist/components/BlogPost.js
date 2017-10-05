"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require("next\\node_modules\\babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("next\\node_modules\\babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("next\\node_modules\\babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("next\\node_modules\\babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("next\\node_modules\\babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "D:\\Blog\\components\\BlogPost.js";


var _class = function (_Component) {
    (0, _inherits3.default)(_class, _Component);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);

        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
    }

    (0, _createClass3.default)(_class, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement("div", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 6
                }
            }, _react2.default.createElement("div", { className: "blog-content", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            }, _react2.default.createElement("div", { className: "blog-post", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            }, _react2.default.createElement("a", { href: this.props.urlPath, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            }, this.props.title)), _react2.default.createElement("p", { dangerouslySetInnerHTML: {
                    __html: this.props.content
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            }), _react2.default.createElement("div", { className: "category", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, _react2.default.createElement("div", { className: "cate-date", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, this.props.date), this.props.category != "" ? this.props.category.map(function (post, i) {
                return _react2.default.createElement("p", { key: i, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17
                    }
                }, post.title);
            }) : _react2.default.createElement("p", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, "Uncategorised")))));
        }
    }]);

    return _class;
}(_react.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEJsb2dQb3N0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcHMiLCJ1cmxQYXRoIiwidGl0bGUiLCJfX2h0bWwiLCJjb250ZW50IiwiZGF0ZSIsImNhdGVnb3J5IiwibWFwIiwicG9zdCIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FHSCxBQUNMO21DQUNBLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFBSTtBQUFKO0FBQUEsK0JBQUksY0FBQSxPQUFHLE1BQU0sS0FBQSxBQUFLLE1BQWQsQUFBb0I7OEJBQXBCO2dDQUFBLEFBQThCO0FBQTlCO29CQUE4QixBQUFLLE1BRDNDLEFBQ0ksQUFBSSxBQUF5QyxBQUM3Qyw4Q0FBRzs0QkFDUyxLQUFBLEFBQUssTUFEakIsQUFBNEIsQUFDTDtBQURLLEFBQ3hCOzs4QkFESjtnQ0FGSixBQUVJLEFBSUE7QUFKQTtnQ0FJQSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQTRCO0FBQTVCO29CQUE0QixBQUFLLE1BRHJDLEFBQ0ksQUFBdUMsQUFFbkMsWUFBQSxBQUFLLE1BQUwsQUFBVyxZQUFYLEFBQXVCLFVBQUssQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixJQUFJLFVBQUEsQUFBUyxNQUFULEFBQWUsR0FBRyxBQUFFO3VDQUFPLGNBQUEsT0FBRyxLQUFILEFBQVE7a0NBQVI7b0NBQUEsQUFBWTtBQUFaO2lCQUFBLE9BQVAsQUFBTyxBQUFpQixBQUFZO0FBQTVHLEFBQTRCLGFBQUEsb0JBQW9GLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxhQUFBLEVBWnBJLEFBQ0EsQUFDSSxBQUNJLEFBTUksQUFHd0gsQUFRdkk7Ozs7O0FBdEJ3QixBIiwiZmlsZSI6IkJsb2dQb3N0LmpzIiwic291cmNlUm9vdCI6IkQ6L0Jsb2cifQ==