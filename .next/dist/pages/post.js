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

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _HeroHead = require('../components/HeroHead');

var _HeroHead2 = _interopRequireDefault(_HeroHead);

require('isomorphic-fetch');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Blog\\pages\\post.js?entry';


var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);

        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
    }

    (0, _createClass3.default)(_class, [{
        key: 'navCheckNext',
        value: function navCheckNext(props) {
            var r = "";
            if (this.props.data.previous_url) {
                return _react2.default.createElement(_link2.default, { href: {
                        pathname: '/post',
                        query: {
                            b: this.props.data.previous_url.substr(30, 4),
                            l: this.props.data.previous_url.substr(35, 2),
                            o: this.props.data.previous_url.substr(38, 2),
                            g: this.props.data.previous_url.substr(41, this.props.data.previous_url.length - 42)
                        }
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                    }
                }, _react2.default.createElement('a', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 30
                    }
                }, _react2.default.createElement('div', { className: 'navigate right', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 30
                    }
                })));
            }
            return r;
        }
    }, {
        key: 'navCheckPrev',
        value: function navCheckPrev(props) {
            var q = "";
            if (this.props.data.next_url) {
                return _react2.default.createElement(_link2.default, { href: {
                        pathname: '/post',
                        query: {
                            b: this.props.data.next_url.substr(30, 4),
                            l: this.props.data.next_url.substr(35, 2),
                            o: this.props.data.next_url.substr(38, 2),
                            g: this.props.data.next_url.substr(41, this.props.data.next_url.length - 42)
                        }
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 37
                    }
                }, _react2.default.createElement('a', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 47
                    }
                }, _react2.default.createElement('div', { className: 'navigate left', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 47
                    }
                })));
            }
            return q;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }), _react2.default.createElement('title', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, this.props.data.post.title.length > 0 ? this.props.data.post.title : 'Posts', ' - Oshan Shrestha'), _react2.default.createElement('link', { rel: 'stylesheet', href: 'static/build/styles/global.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }), _react2.default.createElement('link', { href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', rel: 'stylesheet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'static/build/styles/post.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            })), _react2.default.createElement('main', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, _react2.default.createElement(_HeroHead2.default, { fullName: 'Oshan Shrestha', slogan: 'A high-school graduate web developer', type: this.props.data.post.title_plain, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }), _react2.default.createElement('div', { className: 'post-meta', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, _react2.default.createElement('p', { className: 'date-author', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement(_reactFontawesome2.default, { className: 'sm-margin', name: 'calendar', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }), this.props.data.post.date.substr(0, 10)), _react2.default.createElement('p', { className: 'cates', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, this.props.data.post.categories != "" ? this.props.data.post.categories.map(function (post, i) {
                return _react2.default.createElement(_link2.default, { href: {
                        pathname: '/categories',
                        query: {
                            s: post.slug
                        }
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 72
                    }
                }, _react2.default.createElement('a', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 77
                    }
                }, _react2.default.createElement('i', { title: post.description, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 77
                    }
                }, post.title)));
            }) : _react2.default.createElement(_link2.default, { href: {
                    pathname: '/categories',
                    query: {
                        s: 'uncategorized'
                    }
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, _react2.default.createElement('i', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, 'Uncategorised'))))), _react2.default.createElement('hr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }), _react2.default.createElement('div', { className: 'post', dangerouslySetInnerHTML: {
                    __html: this.props.data.post.content
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }), _react2.default.createElement('hr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }), _react2.default.createElement('p', { className: 'tags', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }, 'Tags:', this.props.data.post.tags != "" ? this.props.data.post.tags.map(function (post, i) {
                return _react2.default.createElement(_link2.default, { href: { pathname: '/categories', query: { s: post.slug } }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 97
                    }
                }, _react2.default.createElement('a', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 97
                    }
                }, _react2.default.createElement('i', { title: post.description, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 97
                    }
                }, '@', post.slug)));
            }) : _react2.default.createElement('i', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }, '(empty)'))), this.navCheckNext(), this.navCheckPrev());
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
                var _ref$query = _ref.query,
                    b = _ref$query.b,
                    l = _ref$query.l,
                    o = _ref$query.o,
                    g = _ref$query.g;
                var res, data;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return fetch('http://localhost/wordpress/wp/' + b + '/' + l + '/' + o + '/' + g + '/?json=1');

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

            function getInitialProps(_x) {
                return _ref2.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwb3N0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSGVhZCIsIkxpbmsiLCJGb250QXdlc29tZSIsIkhlcm9IZWFkIiwicHJvcHMiLCJyIiwiZGF0YSIsInByZXZpb3VzX3VybCIsInBhdGhuYW1lIiwicXVlcnkiLCJiIiwic3Vic3RyIiwibCIsIm8iLCJnIiwibGVuZ3RoIiwicSIsIm5leHRfdXJsIiwicG9zdCIsInRpdGxlIiwidGl0bGVfcGxhaW4iLCJkYXRlIiwiY2F0ZWdvcmllcyIsIm1hcCIsImkiLCJzIiwic2x1ZyIsImRlc2NyaXB0aW9uIiwiX19odG1sIiwiY29udGVudCIsInRhZ3MiLCJuYXZDaGVja05leHQiLCJuYXZDaGVja1ByZXYiLCJmZXRjaCIsInJlcyIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBV2lCLEEsT0FBTyxBQUNoQjtnQkFBSSxJQUFKLEFBQVEsQUFDUjtnQkFBSSxLQUFBLEFBQUssTUFBTCxBQUFXLEtBQWYsQUFBb0IsY0FBYyxBQUM5Qjt1Q0FBTyxBQUFDLGdDQUFLO2tDQUNULEFBQ2MsQUFDVjs7K0JBQ08sS0FBQSxBQUFLLE1BQUwsQUFBVyxLQUFYLEFBQWdCLGFBQWhCLEFBQTZCLE9BQTdCLEFBQW9DLElBRHBDLEFBQ0EsQUFBd0MsQUFDM0M7K0JBQUcsS0FBQSxBQUFLLE1BQUwsQUFBVyxLQUFYLEFBQWdCLGFBQWhCLEFBQTZCLE9BQTdCLEFBQW9DLElBRnBDLEFBRUEsQUFBd0MsQUFDM0M7K0JBQUcsS0FBQSxBQUFLLE1BQUwsQUFBVyxLQUFYLEFBQWdCLGFBQWhCLEFBQTZCLE9BQTdCLEFBQW9DLElBSHBDLEFBR0EsQUFBd0MsQUFDM0M7K0JBQUcsS0FBQSxB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