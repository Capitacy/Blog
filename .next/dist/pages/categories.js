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

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _HeroHead = require('../components/HeroHead');

var _HeroHead2 = _interopRequireDefault(_HeroHead);

var _BlogPost = require('../components/BlogPost');

var _BlogPost2 = _interopRequireDefault(_BlogPost);

require('isomorphic-fetch');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);

        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
    }

    (0, _createClass3.default)(_class, [{
        key: 'titleCategory',
        value: function titleCategory(props) {

            return this.props.data.category.title == "Uncategorized" ? 'Uncategorized' : 'Category: ' + this.props.data.category.title;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }), _react2.default.createElement('title', null, this.titleCategory() + ' | Oshan Shrestha'), _react2.default.createElement('link', { rel: 'stylesheet', href: 'static/build/styles/global.css' }), _react2.default.createElement('link', { href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', rel: 'stylesheet' }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'static/build/styles/post.css' }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'static/build/styles/cates.css' })), _react2.default.createElement('main', null, _react2.default.createElement(_HeroHead2.default, { fullName: 'Oshan Shrestha', slogan: 'A high-school graduate web developer', type: this.titleCategory() }), _react2.default.createElement('div', { className: 'post-meta' }, _react2.default.createElement('p', { className: 'date-author' }, _react2.default.createElement(_reactFontawesome2.default, { className: 'sm-margin', name: 'file-text-o' }), this.props.data.category.description), _react2.default.createElement('p', { className: 'cates' }, _react2.default.createElement(_reactFontawesome2.default, { className: 'sm-margin', name: 'files-o' }), this.props.data.category.post_count)), this.props.data.posts.map(function (post, i) {
                return _react2.default.createElement(_BlogPost2.default, { key: i, slug: post.slug, title: post.title, content: post.excerpt, date: post.date.substring(0, 11), category: post.categories });
            })));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
                var s = _ref.query.s;
                var ctch, data;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return fetch('http://thisisoshan.co.nf/wp/category/' + s + '/?json=1');

                            case 2:
                                ctch = _context.sent;
                                _context.next = 5;
                                return ctch.json();

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