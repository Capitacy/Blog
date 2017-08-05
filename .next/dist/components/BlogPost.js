"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\oshan\\Documents\\Projects\\Blog\\components\\BlogPost.js";


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
            }, this.props.title), _react2.default.createElement("p", { dangerouslySetInnerHTML: {
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
            }, "Uncategorised"))), _react2.default.createElement("hr", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            })));
        }
    }]);

    return _class;
}(_react.Component);

exports.default = _class;