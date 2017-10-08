'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('next\\node_modules\\babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next\\node_modules\\babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next\\node_modules\\babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next\\node_modules\\babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next\\node_modules\\babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Blog\\components\\BlogPost.js';


var _class = function (_Component) {
    (0, _inherits3.default)(_class, _Component);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);

        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
    }

    (0, _createClass3.default)(_class, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            }, _react2.default.createElement('div', { className: 'blog-content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            }, _react2.default.createElement('div', { className: 'blog-post', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            }, _react2.default.createElement(_link2.default, { prefetch: true, href: {
                    pathname: '/post',
                    query: {
                        y: this.props.date.substr(0, 4),
                        m: this.props.date.substr(5, 2),
                        d: this.props.date.substr(8, 2),
                        s: this.props.slug
                    },
                    asPath: '/post/2017'
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }, this.props.title))), _react2.default.createElement('p', { dangerouslySetInnerHTML: {
                    __html: this.props.content
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }), _react2.default.createElement('div', { className: 'category', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement('div', { className: 'cate-date', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, this.props.date), this.props.category != "" ? this.props.category.map(function (post, i) {
                return _react2.default.createElement('p', { key: i, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 31
                    }
                }, post.title);
            }) : _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, 'Uncategorised')))));
        }
    }]);

    return _class;
}(_react.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEJsb2dQb3N0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGluayIsInBhdGhuYW1lIiwicXVlcnkiLCJ5IiwicHJvcHMiLCJkYXRlIiwic3Vic3RyIiwibSIsImQiLCJzIiwic2x1ZyIsImFzUGF0aCIsInRpdGxlIiwiX19odG1sIiwiY29udGVudCIsImNhdGVnb3J5IiwibWFwIiwicG9zdCIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQUdNLEFBQ0w7bUNBQ0EsY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFJO0FBQUo7QUFBQSwrQkFBSSxBQUFDLGdDQUFLLFVBQU4sTUFBZTs4QkFDZixBQUNjLEFBQ1Y7OzJCQUNPLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBWCxBQUFnQixPQUFoQixBQUF1QixHQUR2QixBQUNBLEFBQTBCLEFBQzdCOzJCQUFHLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBWCxBQUFnQixPQUFoQixBQUF1QixHQUZ2QixBQUVBLEFBQTBCLEFBQzdCOzJCQUFHLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBWCxBQUFnQixPQUFoQixBQUF1QixHQUh2QixBQUdBLEFBQTBCLEFBQzdCOzJCQUFHLEtBQUEsQUFBSyxNQU5oQixBQUVXLEFBSVcsQUFFbEI7QUFOTyxBQUNIOzRCQUpSLEFBQ0EsQUFRWTtBQVJaLEFBQ0k7OEJBRko7Z0NBQUEsQUFXRztBQVhIOytCQVdHLGNBQUE7OzhCQUFBO2dDQUFBLEFBQUk7QUFBSjtBQUFBLG9CQUFJLEFBQUssTUFacEIsQUFDSSxBQUFJLEFBV0csQUFBZSxBQUN0QiwrQ0FBRzs0QkFFUyxLQUFBLEFBQUssTUFGakIsQUFDSSxBQUNtQjtBQURuQixBQUNBOzs4QkFGSjtnQ0FiSixBQWFJLEFBTUE7QUFOQTtnQ0FNQSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQTRCO0FBQTVCO29CQUE0QixBQUFLLE1BRHJDLEFBQ0ksQUFBdUMsQUFFbkMsWUFBQSxBQUFLLE1BQUwsQUFBVyxZQUFYLEFBQXVCLFVBQUssQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixJQUFJLFVBQUEsQUFBUyxNQUFULEFBQWUsR0FBRyxBQUFFO3VDQUFPLGNBQUEsT0FBRyxLQUFILEFBQVE7a0NBQVI7b0NBQUEsQUFBWTtBQUFaO2lCQUFBLE9BQVAsQUFBTyxBQUFpQixBQUFZO0FBQTVHLEFBQTRCLGFBQUEsb0JBQW9GLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxhQUFBLEVBekJwSSxBQUNBLEFBQ0ksQUFDSSxBQW1CSSxBQUd3SCxBQVF2STs7Ozs7QUFuQ3dCLEEiLCJmaWxlIjoiQmxvZ1Bvc3QuanMiLCJzb3VyY2VSb290IjoiRDovQmxvZyJ9