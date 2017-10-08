'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('next\\node_modules\\babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('next\\node_modules\\babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _HeroHead = require('../components/HeroHead');

var _HeroHead2 = _interopRequireDefault(_HeroHead);

var _BlogPost = require('../components/BlogPost');

var _BlogPost2 = _interopRequireDefault(_BlogPost);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

require('isomorphic-fetch');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Blog\\pages\\index.js?entry';


var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

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
                    lineNumber: 18
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }), _react2.default.createElement('title', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }, 'Blog - Oshan Shrestha'), _react2.default.createElement('link', { rel: 'stylesheet', href: 'static/build/styles/global.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }), _react2.default.createElement('link', { href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', rel: 'stylesheet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            })), _react2.default.createElement('main', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, _react2.default.createElement(_HeroHead2.default, { fullName: 'Oshan Shrestha', slogan: 'A high-school graduate web developer', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }), _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, 'BLOG'), this.props.data.posts.map(function (post, i) {
                return _react2.default.createElement(_BlogPost2.default, { key: i, slug: post.slug, title: post.title, content: post.excerpt, date: post.date.substring(0, 11), category: post.categories, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 31
                    }
                });
            })));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var res, data;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return fetch('http://localhost/wordpress/wp/?json=1');

                            case 2:
                                res = _context.sent;
                                _context.next = 5;
                                return res.json();

                            case 5:
                                data = _context.sent;
                                return _context.abrupt('return', { data: data });

                            case 7:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwiSGVyb0hlYWQiLCJCbG9nUG9zdCIsIkhlYWQiLCJwcm9wcyIsImRhdGEiLCJwb3N0cyIsIm1hcCIsInBvc3QiLCJpIiwic2x1ZyIsInRpdGxlIiwiZXhjZXJwdCIsImRhdGUiLCJzdWJzdHJpbmciLCJjYXRlZ29yaWVzIiwiZmV0Y2giLCJyZXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUDs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQVVhLEFBQ0w7bUNBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSx1REFDVSxNQUFOLEFBQVcsWUFBVyxTQUF0QixBQUE4Qjs4QkFBOUI7Z0NBREosQUFDSSxBQUNBO0FBREE7Z0NBQ0EsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBRkosQUFFSSxBQUVBLGtFQUFNLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCOzhCQUE1QjtnQ0FKSixBQUlJLEFBQ0E7QUFEQTt3REFDTSxNQUFOLEFBQVcsK0VBQThFLEtBQXpGLEFBQTZGOzhCQUE3RjtnQ0FOUixBQUNJLEFBS0ksQUFFSjtBQUZJO2lDQUVKLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMsb0NBQVMsVUFBVixBQUFtQixrQkFBaUIsUUFBcEMsQUFBMkM7OEJBQTNDO2dDQURKLEFBQ0ksQUFDQTtBQURBO2dDQUNBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUZKLEFBRUksQUFFSSxjQUFBLEFBQUssTUFBTCxBQUFXLEtBQVgsQUFBZ0IsTUFBaEIsQUFBc0IsSUFBSSxVQUFBLEFBQVMsTUFBVCxBQUFlLEdBQUcsQUFDeEM7dUNBQU8sQUFBQyxvQ0FBUyxLQUFWLEFBQWUsR0FBRyxNQUFNLEtBQXhCLEFBQTZCLE1BQU0sT0FBTyxLQUExQyxBQUErQyxPQUFPLFNBQVMsS0FBL0QsQUFBb0UsU0FBUyxNQUFNLEtBQUEsQUFBSyxLQUFMLEFBQVUsVUFBVixBQUFvQixHQUF2RyxBQUFtRixBQUF1QixLQUFLLFVBQVUsS0FBekgsQUFBOEg7a0NBQTlIO29DQUFQLEFBQU8sQUFDVjtBQURVO2lCQUFBO0FBZDNCLEFBQ0ksQUFRSSxBQUlRLEFBT25COzs7Ozs7Ozs7Ozs7dUNBMUJxQixNQUFBLEFBQU0sQTs7aUNBQWxCO0E7O3VDQUNhLElBQUEsQUFBSSxBOztpQ0FBakI7QTtpRUFDQyxFQUFFLE1BQUYsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUxjLGdCQUFNLEEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovQmxvZyJ9