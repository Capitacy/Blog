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
                    } }, _react2.default.createElement('a', null, _react2.default.createElement('div', { className: 'navigate right' })));
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
                    } }, _react2.default.createElement('a', null, _react2.default.createElement('div', { className: 'navigate left' })));
            }
            return q;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }), _react2.default.createElement('title', null, this.props.data.post.title.length > 0 ? this.props.data.post.title : 'Posts', ' - Oshan Shrestha'), _react2.default.createElement('link', { rel: 'stylesheet', href: 'static/build/styles/global.css' }), _react2.default.createElement('link', { href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', rel: 'stylesheet' }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'static/build/styles/post.css' })), _react2.default.createElement('main', null, _react2.default.createElement(_HeroHead2.default, { fullName: 'Oshan Shrestha', slogan: 'A high-school graduate web developer', type: this.props.data.post.title_plain }), _react2.default.createElement('div', { className: 'post-meta' }, _react2.default.createElement('p', { className: 'date-author' }, _react2.default.createElement(_reactFontawesome2.default, { className: 'sm-margin', name: 'calendar' }), this.props.data.post.date.substr(0, 10)), _react2.default.createElement('p', { className: 'cates' }, this.props.data.post.categories != "" ? this.props.data.post.categories.map(function (post, i) {
                return _react2.default.createElement(_link2.default, { href: {
                        pathname: '/categories',
                        query: {
                            s: post.slug
                        }
                    } }, _react2.default.createElement('a', null, _react2.default.createElement('i', { title: post.description }, post.title)));
            }) : _react2.default.createElement(_link2.default, { href: {
                    pathname: '/categories',
                    query: {
                        s: 'uncategorized'
                    }
                } }, _react2.default.createElement('a', null, _react2.default.createElement('i', null, 'Uncategorised'))))), _react2.default.createElement('hr', null), _react2.default.createElement('div', { className: 'post', dangerouslySetInnerHTML: {
                    __html: this.props.data.post.content
                } }), _react2.default.createElement('hr', null), _react2.default.createElement('p', { className: 'tags' }, 'Tags:', this.props.data.post.tags != "" ? this.props.data.post.tags.map(function (post, i) {
                return _react2.default.createElement(_link2.default, { href: { pathname: '/categories', query: { s: post.slug } } }, _react2.default.createElement('a', null, _react2.default.createElement('i', { title: post.description }, '@', post.slug)));
            }) : _react2.default.createElement('i', null, '(empty)'))), this.navCheckNext(), this.navCheckPrev());
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
                                return fetch('http://thisisoshan.co.nf/wp/' + b + '/' + l + '/' + o + '/' + g + '/?json=1');

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