webpackJsonp([20],{

/***/ 3169:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CourseBlocksAll = exports.CourseBlocksHoc = exports.CourseBlocksCsf = undefined;

var _jquery = __webpack_require__(36);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(41);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ContentContainer = __webpack_require__(1629);

var _ContentContainer2 = _interopRequireDefault(_ContentContainer);

var _CourseBlocksTools = __webpack_require__(3324);

var _CourseBlocksTools2 = _interopRequireDefault(_CourseBlocksTools);

var _CourseBlocksInternationalGradeBands = __webpack_require__(3876);

var _CourseBlocksInternationalGradeBands2 = _interopRequireDefault(_CourseBlocksInternationalGradeBands);

var _Notification = __webpack_require__(691);

var _ProtectedStatefulDiv = __webpack_require__(657);

var _ProtectedStatefulDiv2 = _interopRequireDefault(_ProtectedStatefulDiv);

var _locale = __webpack_require__(23);

var _locale2 = _interopRequireDefault(_locale);

var _urlHelpers = __webpack_require__(677);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CourseBlocksCsf = exports.CourseBlocksCsf = function (_Component) {
  _inherits(CourseBlocksCsf, _Component);

  function CourseBlocksCsf() {
    _classCallCheck(this, CourseBlocksCsf);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  CourseBlocksCsf.prototype.render = function render() {
    if (this.props.showModern) {
      return _react2.default.createElement(CourseBlocksCsfModern, null);
    } else {
      return _react2.default.createElement(CourseBlocksCsfLegacy, null);
    }
  };

  return CourseBlocksCsf;
}(_react.Component);

CourseBlocksCsf.propTypes = {
  showModern: _react.PropTypes.bool.isRequired
};

var CourseBlocksCsfModern = function (_Component2) {
  _inherits(CourseBlocksCsfModern, _Component2);

  function CourseBlocksCsfModern() {
    _classCallCheck(this, CourseBlocksCsfModern);

    return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
  }

  CourseBlocksCsfModern.prototype.componentDidMount = function componentDidMount() {
    (0, _jquery2.default)('#coursea-2017').appendTo(_reactDom2.default.findDOMNode(this.refs.coursea)).show();
    (0, _jquery2.default)('#courseb-2017').appendTo(_reactDom2.default.findDOMNode(this.refs.courseb)).show();
    (0, _jquery2.default)('#coursec-2017').appendTo(_reactDom2.default.findDOMNode(this.refs.coursec)).show();
    (0, _jquery2.default)('#coursed-2017').appendTo(_reactDom2.default.findDOMNode(this.refs.coursed)).show();
    (0, _jquery2.default)('#coursee-2017').appendTo(_reactDom2.default.findDOMNode(this.refs.coursee)).show();
    (0, _jquery2.default)('#coursef-2017').appendTo(_reactDom2.default.findDOMNode(this.refs.coursef)).show();
    (0, _jquery2.default)('#pre-express-2017').appendTo(_reactDom2.default.findDOMNode(this.refs.pre_express)).show();
    (0, _jquery2.default)('#express-2017').appendTo(_reactDom2.default.findDOMNode(this.refs.express)).show();
  };

  CourseBlocksCsfModern.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _ContentContainer2.default,
        {
          heading: _locale2.default.courseBlocksCsfExpressHeading(),
          description: _locale2.default.courseBlocksCsfExpressDescription()
        },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'pre_express' }),
          _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'express' })
        )
      ),
      _react2.default.createElement(
        _ContentContainer2.default,
        {
          heading: _locale2.default.courseBlocksCsfYoungHeading(),
          description: _locale2.default.courseBlocksCsfYoungDescription()
        },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'coursea' }),
          _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'courseb' })
        )
      ),
      _react2.default.createElement(
        _ContentContainer2.default,
        {
          heading: _locale2.default.courseBlocksCsfOlderHeading(),
          description: _locale2.default.courseBlocksCsfOlderDescription()
        },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'coursec' }),
          _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'coursed' }),
          _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'coursee' }),
          _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'coursef' })
        )
      ),
      _react2.default.createElement(_Notification.NotificationResponsive, {
        type: 'bullhorn',
        notice: _locale2.default.courseBlocksLegacyNotificationHeading(),
        details: _locale2.default.courseBlocksLegacyNotificationBody(),
        detailsLinkText: _locale2.default.courseBlocksLegacyNotificationDetailsLinkText(),
        detailsLink: 'https://docs.google.com/document/d/1MVDfbEzr0o9DqaOYmOOYpsQPTfXUFvCx4Xs9uixrdBE/edit?usp=sharing',
        detailsLinkNewWindow: true,
        dismissible: false,
        buttons: [{
          text: _locale2.default.courseBlocksLegacyNotificationButtonCourses14(),
          link: (0, _urlHelpers.pegasus)("/educate/curriculum/cs-fundamentals-international"),
          newWindow: true
        }, {
          text: _locale2.default.courseBlocksLegacyNotificationButtonCoursesAccelerated(),
          link: "/s/20-hour",
          newWindow: true
        }]
      })
    );
  };

  return CourseBlocksCsfModern;
}(_react.Component);

var CourseBlocksCsfLegacy = function (_Component3) {
  _inherits(CourseBlocksCsfLegacy, _Component3);

  function CourseBlocksCsfLegacy() {
    _classCallCheck(this, CourseBlocksCsfLegacy);

    return _possibleConstructorReturn(this, _Component3.apply(this, arguments));
  }

  CourseBlocksCsfLegacy.prototype.componentDidMount = function componentDidMount() {
    (0, _jquery2.default)('#course1').appendTo(_reactDom2.default.findDOMNode(this.refs.course1)).show();
    (0, _jquery2.default)('#course2').appendTo(_reactDom2.default.findDOMNode(this.refs.course2)).show();
    (0, _jquery2.default)('#course3').appendTo(_reactDom2.default.findDOMNode(this.refs.course3)).show();
    (0, _jquery2.default)('#course4').appendTo(_reactDom2.default.findDOMNode(this.refs.course4)).show();
  };

  CourseBlocksCsfLegacy.prototype.render = function render() {
    return _react2.default.createElement(
      _ContentContainer2.default,
      {
        heading: _locale2.default.csf(),
        description: _locale2.default.csfDescription(),
        link: '/home/#recent-courses',
        linkText: _locale2.default.viewMyRecentCourses()
      },
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'course1' }),
        _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'course2' }),
        _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'course3' }),
        _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'course4' })
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'twenty_hour' }),
        _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'unplugged' })
      )
    );
  };

  return CourseBlocksCsfLegacy;
}(_react.Component);

var CourseBlocksHoc = exports.CourseBlocksHoc = function (_Component4) {
  _inherits(CourseBlocksHoc, _Component4);

  function CourseBlocksHoc() {
    _classCallCheck(this, CourseBlocksHoc);

    return _possibleConstructorReturn(this, _Component4.apply(this, arguments));
  }

  CourseBlocksHoc.prototype.componentDidMount = function componentDidMount() {
    (0, _jquery2.default)('#hero').appendTo(_reactDom2.default.findDOMNode(this.refs.hero)).show();
    (0, _jquery2.default)('#starwars').appendTo(_reactDom2.default.findDOMNode(this.refs.starwars)).show();
    (0, _jquery2.default)('#frozen').appendTo(_reactDom2.default.findDOMNode(this.refs.frozen)).show();
    (0, _jquery2.default)('#hourofcode').appendTo(_reactDom2.default.findDOMNode(this.refs.hourofcode)).show();
    (0, _jquery2.default)('#flappy').appendTo(_reactDom2.default.findDOMNode(this.refs.flappy)).show();
    (0, _jquery2.default)('#infinity').appendTo(_reactDom2.default.findDOMNode(this.refs.infinity)).show();
    (0, _jquery2.default)('#playlab').appendTo(_reactDom2.default.findDOMNode(this.refs.playlab)).show();
    (0, _jquery2.default)('#artist').appendTo(_reactDom2.default.findDOMNode(this.refs.artist)).show();
  };

  CourseBlocksHoc.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'hero' }),
        _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'starwars' }),
        _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'frozen' }),
        _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'hourofcode' })
      ),
      this.props.rowCount > 1 && _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'flappy' }),
          _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'infinity' }),
          _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'playlab' }),
          _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'artist' })
        )
      )
    );
  };

  return CourseBlocksHoc;
}(_react.Component);

CourseBlocksHoc.propTypes = {
  rowCount: _react.PropTypes.number.isRequired
};

var CourseBlocksAll = exports.CourseBlocksAll = function (_Component5) {
  _inherits(CourseBlocksAll, _Component5);

  function CourseBlocksAll() {
    _classCallCheck(this, CourseBlocksAll);

    return _possibleConstructorReturn(this, _Component5.apply(this, arguments));
  }

  CourseBlocksAll.prototype.componentDidMount = function componentDidMount() {
    (0, _jquery2.default)('.csf-courses-header').appendTo(_reactDom2.default.findDOMNode(this.refs.csfCoursesHeader)).show();
  };

  CourseBlocksAll.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(CourseBlocksCsf, { showModern: this.props.showModernElementaryCourses }),
      _react2.default.createElement(
        _ContentContainer2.default,
        {
          heading: _locale2.default.teacherCourseHoc(),
          description: _locale2.default.teacherCourseHocDescription(),
          linkText: _locale2.default.teacherCourseHocLinkText(),
          link: (0, _urlHelpers.pegasus)('/hourofcode/overview')
        },
        _react2.default.createElement(CourseBlocksHoc, { rowCount: 1 })
      ),
      !this.props.isEnglish && _react2.default.createElement(_CourseBlocksInternationalGradeBands2.default, null),
      _react2.default.createElement(_CourseBlocksTools2.default, {
        isEnglish: this.props.isEnglish
      })
    );
  };

  return CourseBlocksAll;
}(_react.Component);

CourseBlocksAll.propTypes = {
  isEnglish: _react.PropTypes.bool.isRequired,
  showModernElementaryCourses: _react.PropTypes.bool.isRequired
};

/***/ }),

/***/ 3170:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Code for the Course/Tools Explorer.  Include it once on the page and it will
// handle both CourseExplorer and ToolsExplorer on the same page.

var detailRowShowing = -1;
var toolShowingIndex = -1;

var courseShowingIndex = -1;

module.exports.initCourseExplorer = function () {
  $('.tool').click(function () {
    var row = $(this).data('row');
    var index = $(this).data('index');

    if (toolShowingIndex === -1) {
      $('.detailrow-' + row).slideDown();
      $('.toolsextra-' + index).fadeIn();
      detailRowShowing = row;
      toolShowingIndex = index;
    } else if (toolShowingIndex === index) {
      $('.detailrow-' + detailRowShowing).slideUp();
      $('.toolsextra-' + index).fadeOut();
      detailRowShowing = -1;
      toolShowingIndex = -1;
    } else if (detailRowShowing === row) {
      $('.toolsextra-' + toolShowingIndex).fadeOut();
      $('.toolsextra-' + index).fadeIn();
      toolShowingIndex = index;
    } else {
      $('.detailrow-' + detailRowShowing).slideUp();
      $('.toolsextra-' + toolShowingIndex).fadeOut();
      $('.detailrow-' + row).slideDown();
      $('.toolsextra-' + index).fadeIn();
      detailRowShowing = row;
      toolShowingIndex = index;
    }
  });

  $('.tool_arrow_box_close').click(function () {
    $('.detailrow').slideUp();
    toolShowingIndex = -1;
  });

  $('.course.breakable').click(function () {
    var courseIndex = $(this).attr("data-courseindex");

    // Show the arrows as inline-block instead of .show()'s default inline
    // so that we can apply margin to the top.

    if (courseShowingIndex === -1) {
      $('.courseextra-' + courseIndex).slideDown('slow');
      $('.course-' + courseIndex + ' .arrow-down').hide();
      $('.course-' + courseIndex + ' .arrow-up').css('display', 'inline-block');
      courseShowingIndex = courseIndex;
    } else if (courseShowingIndex === courseIndex) {
      $('.courseextra-' + courseIndex).slideUp('slow');
      $('.course-' + courseIndex + ' .arrow-down').css('display', 'inline-block');
      $('.course-' + courseIndex + ' .arrow-up').hide();
      courseShowingIndex = -1;
    } else {
      $('.courseextra-' + courseShowingIndex).slideUp('slow');
      $('.course-' + courseShowingIndex + ' .arrow-down').css('display', 'inline-block');
      $('.course-' + courseShowingIndex + ' .arrow-up').hide();
      $('.courseextra-' + courseIndex).slideDown('slow');
      $('.course-' + courseIndex + ' .arrow-down').hide();
      $('.course-' + courseIndex + ' .arrow-up').css('display', 'inline-block');
      courseShowingIndex = courseIndex;
    }
  });

  $('.arrow_box_close').click(function () {
    var courseIndex = $(this).attr("data-courseindex");
    $('.courseextra-' + courseIndex).slideUp();
    $('.course-' + courseIndex + ' .arrow-down').css('display', 'inline-block');
    $('.course-' + courseIndex + ' .arrow-up').hide();
    courseShowingIndex = -1;
  });
};

/***/ }),

/***/ 3324:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _radium = __webpack_require__(54);

var _radium2 = _interopRequireDefault(_radium);

var _ContentContainer = __webpack_require__(1629);

var _ContentContainer2 = _interopRequireDefault(_ContentContainer);

var _ResourceCard = __webpack_require__(2499);

var _ResourceCard2 = _interopRequireDefault(_ResourceCard);

var _ResourceCardResponsiveContainer = __webpack_require__(2496);

var _ResourceCardResponsiveContainer2 = _interopRequireDefault(_ResourceCardResponsiveContainer);

var _locale = __webpack_require__(23);

var _locale2 = _interopRequireDefault(_locale);

var _urlHelpers = __webpack_require__(677);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CourseBlocksTools = function (_Component) {
  _inherits(CourseBlocksTools, _Component);

  function CourseBlocksTools() {
    var _temp, _this, _ret;

    _classCallCheck(this, CourseBlocksTools);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.cards = [{
      heading: _locale2.default.courseBlocksToolsAppLab(),
      description: _locale2.default.courseBlocksToolsAppLabDescription(),
      path: 'applab'
    }, {
      heading: _locale2.default.courseBlocksToolsGameLab(),
      description: _locale2.default.courseBlocksToolsGameLabDescription(),
      path: 'gamelab'
    }, {
      heading: _locale2.default.courseBlocksToolsWebLab(),
      description: _locale2.default.courseBlocksToolsWebLabDescription(),
      path: 'weblab'
    }, {
      heading: _locale2.default.courseBlocksToolsWidgets(),
      description: _locale2.default.courseBlocksToolsWidgetsDescription(),
      path: 'widgets'
    }, {
      heading: _locale2.default.courseBlocksToolsInspire(),
      description: _locale2.default.courseBlocksToolsInspireDescription(),
      path: 'inspire'
    }, {
      heading: _locale2.default.courseBlocksToolsVideo(),
      description: _locale2.default.courseBlocksToolsVideoDescription(),
      path: 'videos'
    }], _temp), _possibleConstructorReturn(_this, _ret);
  }

  CourseBlocksTools.prototype.render = function render() {
    var isEnglish = this.props.isEnglish;


    var headingText = isEnglish ? _locale2.default.courseBlocksToolsTitleTeacher() : _locale2.default.courseBlocksToolsTitleNonEn();

    return _react2.default.createElement(
      _ContentContainer2.default,
      {
        heading: headingText,
        description: _locale2.default.standaloneToolsDescription()
      },
      _react2.default.createElement(
        _ResourceCardResponsiveContainer2.default,
        null,
        this.cards.map(function (card, cardIndex) {
          return _react2.default.createElement(_ResourceCard2.default, {
            key: cardIndex,
            title: card.heading,
            description: card.description,
            buttonText: _locale2.default.learnMore(),
            link: (0, _urlHelpers.pegasus)('/' + card.path)
          });
        })
      )
    );
  };

  return CourseBlocksTools;
}(_react.Component);

CourseBlocksTools.propTypes = {
  isEnglish: _react.PropTypes.bool.isRequired
};
exports.default = (0, _radium2.default)(CourseBlocksTools);
module.exports = exports['default'];

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

module.exports = $;

/***/ }),

/***/ 3873:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(216);
__webpack_require__(217);
module.exports = __webpack_require__(3874);


/***/ }),

/***/ 3874:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(36);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(41);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(37);

var _Courses = __webpack_require__(3875);

var _Courses2 = _interopRequireDefault(_Courses);

var _courseExplorer = __webpack_require__(3170);

var _redux = __webpack_require__(850);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(showCourses);

function showCourses() {
  // Initialize the non-React Course/Tool Explorer component code.
  (0, _courseExplorer.initCourseExplorer)();

  var script = document.querySelector('script[data-courses]');
  var coursesData = JSON.parse(script.dataset.courses);
  var isEnglish = coursesData.english;
  var isTeacher = coursesData.teacher;
  var linesCount = coursesData.linescount;
  var studentsCount = coursesData.studentscount;
  var codeOrgUrlPrefix = coursesData.codeorgurlprefix;
  var signedOut = coursesData.signedout;
  var showInitialTips = !coursesData.initialtipsdismissed;
  var userId = coursesData.userid;
  var modernElementaryCoursesAvailable = coursesData.modernelementarycoursesavailable;

  _reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: (0, _redux.getStore)() },
    _react2.default.createElement(_Courses2.default, {
      isEnglish: isEnglish,
      isTeacher: isTeacher,
      linesCount: linesCount,
      studentsCount: studentsCount,
      codeOrgUrlPrefix: codeOrgUrlPrefix,
      isSignedOut: signedOut,
      showInitialTips: showInitialTips,
      userId: userId,
      modernElementaryCoursesAvailable: modernElementaryCoursesAvailable
    })
  ), document.getElementById('courses-container'));
}

/***/ }),

/***/ 3875:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = __webpack_require__(36);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(41);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _HeaderBanner = __webpack_require__(2440);

var _HeaderBanner2 = _interopRequireDefault(_HeaderBanner);

var _CourseBlocks = __webpack_require__(3169);

var _CoursesTeacherEnglish = __webpack_require__(3877);

var _CoursesTeacherEnglish2 = _interopRequireDefault(_CoursesTeacherEnglish);

var _CoursesStudentEnglish = __webpack_require__(3879);

var _CoursesStudentEnglish2 = _interopRequireDefault(_CoursesStudentEnglish);

var _ProtectedStatefulDiv = __webpack_require__(657);

var _ProtectedStatefulDiv2 = _interopRequireDefault(_ProtectedStatefulDiv);

var _TwoColumnActionBlock = __webpack_require__(1997);

var _Button = __webpack_require__(113);

var _Button2 = _interopRequireDefault(_Button);

var _locale = __webpack_require__(23);

var _locale2 = _interopRequireDefault(_locale);

var _styleConstants = __webpack_require__(596);

var _styleConstants2 = _interopRequireDefault(_styleConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  content: {
    width: '100%',
    maxWidth: _styleConstants2.default['content-width'],
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};

var Courses = function (_Component) {
  _inherits(Courses, _Component);

  function Courses() {
    _classCallCheck(this, Courses);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Courses.prototype.componentDidMount = function componentDidMount() {
    // The components used here are implemented in legacy HAML/CSS rather than React.
    (0, _jquery2.default)('#flashes').appendTo(_reactDom2.default.findDOMNode(this.refs.flashes)).show();
  };

  Courses.prototype.render = function render() {
    var _props = this.props,
        isEnglish = _props.isEnglish,
        isTeacher = _props.isTeacher,
        isSignedOut = _props.isSignedOut,
        userId = _props.userId,
        showInitialTips = _props.showInitialTips,
        modernElementaryCoursesAvailable = _props.modernElementaryCoursesAvailable;

    var headingText = isTeacher ? _locale2.default.coursesHeadingTeacher() : _locale2.default.coursesHeadingStudent();
    var subHeadingText = _locale2.default.coursesHeadingSubText({ linesCount: this.props.linesCount, studentsCount: this.props.studentsCount });
    var headingDescription = isSignedOut ? _locale2.default.coursesHeadingDescription() : null;
    var showSpecialTeacherAnnouncement = false;

    return _react2.default.createElement(
      'div',
      { style: styles.content },
      _react2.default.createElement(
        _HeaderBanner2.default,
        {
          headingText: headingText,
          subHeadingText: subHeadingText,
          description: headingDescription,
          short: !isSignedOut
        },
        isSignedOut && _react2.default.createElement(_Button2.default, {
          href: '/users/sign_up',
          color: _Button2.default.ButtonColor.gray,
          text: _locale2.default.createAccount()
        })
      ),
      _react2.default.createElement(_ProtectedStatefulDiv2.default, {
        ref: 'flashes'
      }),
      isEnglish && isTeacher && _react2.default.createElement(
        'div',
        null,
        showSpecialTeacherAnnouncement && _react2.default.createElement(_TwoColumnActionBlock.SpecialAnnouncementActionBlock, null),
        _react2.default.createElement(_CoursesTeacherEnglish2.default, {
          isSignedOut: isSignedOut,
          showInitialTips: showInitialTips,
          userId: userId
        })
      ),
      isEnglish && !isTeacher && _react2.default.createElement(_CoursesStudentEnglish2.default, null),
      !isEnglish && _react2.default.createElement(_CourseBlocks.CourseBlocksAll, {
        isEnglish: false,
        showModernElementaryCourses: modernElementaryCoursesAvailable
      })
    );
  };

  return Courses;
}(_react.Component);

Courses.propTypes = {
  isEnglish: _react.PropTypes.bool.isRequired,
  isTeacher: _react.PropTypes.bool.isRequired,
  isSignedOut: _react.PropTypes.bool.isRequired,
  linesCount: _react.PropTypes.string.isRequired,
  studentsCount: _react.PropTypes.string.isRequired,
  showInitialTips: _react.PropTypes.bool.isRequired,
  userId: _react.PropTypes.number,
  modernElementaryCoursesAvailable: _react.PropTypes.bool.isRequired
};
exports.default = Courses;
module.exports = exports['default'];

/***/ }),

/***/ 3876:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _ContentContainer = __webpack_require__(1629);

var _ContentContainer2 = _interopRequireDefault(_ContentContainer);

var _CourseBlocksGradeBands = __webpack_require__(3168);

var _CourseBlocksGradeBands2 = _interopRequireDefault(_CourseBlocksGradeBands);

var _locale = __webpack_require__(23);

var _locale2 = _interopRequireDefault(_locale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CourseBlocksInternationalGradeBands = function (_Component) {
  _inherits(CourseBlocksInternationalGradeBands, _Component);

  function CourseBlocksInternationalGradeBands() {
    var _temp, _this, _ret;

    _classCallCheck(this, CourseBlocksInternationalGradeBands);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.cards = [{
      linkId: 'course-block-international-grade-band-4-10',
      linkClass: 'linktag',
      heading: _locale2.default.courseBlocksInternationalGradeBandsElementary(),
      description: _locale2.default.courseBlocksInternationalGradeBandsElementaryDescription(),
      path: '/educate/curriculum/elementary-school'
    }, {
      linkId: 'course-block-international-grade-band-10-14',
      linkClass: 'linktag',
      heading: _locale2.default.courseBlocksInternationalGradeBandsMiddle(),
      description: _locale2.default.courseBlocksInternationalGradeBandsMiddleDescription(),
      path: '/educate/curriculum/middle-school'
    }, {
      linkId: 'course-block-international-grade-band-12-18',
      linkClass: 'linktag',
      heading: _locale2.default.courseBlocksInternationalGradeBandsHigh(),
      description: _locale2.default.courseBlocksInternationalGradeBandsHighDescription(),
      path: '/educate/curriculum/high-school'
    }], _temp), _possibleConstructorReturn(_this, _ret);
  }

  CourseBlocksInternationalGradeBands.prototype.render = function render() {
    return _react2.default.createElement(
      _ContentContainer2.default,
      {
        heading: _locale2.default.courseBlocksInternationalGradeBandsContainerHeading(),
        description: _locale2.default.courseBlocksInternationalGradeBandsContainerDescription()
      },
      _react2.default.createElement(_CourseBlocksGradeBands2.default, {
        cards: this.cards
      })
    );
  };

  return CourseBlocksInternationalGradeBands;
}(_react.Component);

exports.default = CourseBlocksInternationalGradeBands;
module.exports = exports['default'];

/***/ }),

/***/ 3877:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = __webpack_require__(36);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(41);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ContentContainer = __webpack_require__(1629);

var _ContentContainer2 = _interopRequireDefault(_ContentContainer);

var _UiTips = __webpack_require__(3321);

var _UiTips2 = _interopRequireDefault(_UiTips);

var _TwoColumnActionBlock = __webpack_require__(1997);

var _CourseBlocks = __webpack_require__(3169);

var _CourseBlocksTools = __webpack_require__(3324);

var _CourseBlocksTools2 = _interopRequireDefault(_CourseBlocksTools);

var _CourseBlocksTeacherGradeBands = __webpack_require__(3878);

var _CourseBlocksTeacherGradeBands2 = _interopRequireDefault(_CourseBlocksTeacherGradeBands);

var _ProtectedStatefulDiv = __webpack_require__(657);

var _ProtectedStatefulDiv2 = _interopRequireDefault(_ProtectedStatefulDiv);

var _locale = __webpack_require__(23);

var _locale2 = _interopRequireDefault(_locale);

var _urlHelpers = __webpack_require__(677);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This is the main content for the Courses page for a teacher using English,
 * though it may also be shown for a signed-out user using English.
 */
var CoursesTeacherEnglish = function (_Component) {
  _inherits(CoursesTeacherEnglish, _Component);

  function CoursesTeacherEnglish() {
    _classCallCheck(this, CoursesTeacherEnglish);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  CoursesTeacherEnglish.prototype.componentDidMount = function componentDidMount() {
    // The components used here are implemented in legacy HAML/CSS rather than React.
    (0, _jquery2.default)('.courseexplorer').appendTo(_reactDom2.default.findDOMNode(this.refs.courseExplorer)).show();
  };

  CoursesTeacherEnglish.prototype.render = function render() {
    var _props = this.props,
        isSignedOut = _props.isSignedOut,
        showInitialTips = _props.showInitialTips,
        userId = _props.userId;

    return _react2.default.createElement(
      'div',
      null,
      !isSignedOut && _react2.default.createElement(_UiTips2.default, {
        userId: userId,
        tipId: "teacher_courses",
        showInitialTips: showInitialTips,
        tips: [{
          type: "initial",
          position: { top: 0, left: 0, position: "relative" },
          text: _locale2.default.coursesUiTipsTeacherCourses(),
          arrowDirection: "down",
          scrollTo: ".courseexplorer"
        }]
      }),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _ContentContainer2.default,
          {
            heading: _locale2.default.courseExplorerHeading(),
            description: _locale2.default.courseExplorerDescription(),
            link: '/home/#recent-courses',
            linkText: _locale2.default.viewMyRecentCourses()
          },
          _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'courseExplorer' })
        ),
        _react2.default.createElement(_CourseBlocksTeacherGradeBands2.default, null),
        _react2.default.createElement(
          _ContentContainer2.default,
          {
            heading: _locale2.default.teacherCourseHoc(),
            description: _locale2.default.teacherCourseHocDescription(),
            linkText: _locale2.default.teacherCourseHocLinkText(),
            link: (0, _urlHelpers.pegasus)('/hourofcode/overview'),
            showLink: true
          },
          _react2.default.createElement(_CourseBlocks.CourseBlocksHoc, { rowCount: 1 })
        ),
        _react2.default.createElement(_CourseBlocksTools2.default, {
          isEnglish: true
        }),
        _react2.default.createElement(_TwoColumnActionBlock.AdministratorResourcesActionBlock, null)
      )
    );
  };

  return CoursesTeacherEnglish;
}(_react.Component);

CoursesTeacherEnglish.propTypes = {
  isSignedOut: _react.PropTypes.bool.isRequired,
  showInitialTips: _react.PropTypes.bool.isRequired,
  userId: _react.PropTypes.number
};
exports.default = CoursesTeacherEnglish;
module.exports = exports['default'];

/***/ }),

/***/ 3878:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _ContentContainer = __webpack_require__(1629);

var _ContentContainer2 = _interopRequireDefault(_ContentContainer);

var _CourseBlocksGradeBands = __webpack_require__(3168);

var _CourseBlocksGradeBands2 = _interopRequireDefault(_CourseBlocksGradeBands);

var _locale = __webpack_require__(23);

var _locale2 = _interopRequireDefault(_locale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CourseBlocksTeacherGradeBands = function (_Component) {
  _inherits(CourseBlocksTeacherGradeBands, _Component);

  function CourseBlocksTeacherGradeBands() {
    var _temp, _this, _ret;

    _classCallCheck(this, CourseBlocksTeacherGradeBands);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.cards = [{
      linkId: 'course-block-grade-band-elementary',
      linkClass: 'linktag',
      heading: _locale2.default.courseBlocksGradeBandsElementary(),
      description: _locale2.default.courseBlocksGradeBandsElementaryDescription(),
      path: '/educate/curriculum/elementary-school'
    }, {
      linkId: 'course-block-grade-band-middle',
      linkClass: 'linktag',
      heading: _locale2.default.courseBlocksGradeBandsMiddle(),
      description: _locale2.default.courseBlocksGradeBandsMiddleDescription(),
      path: '/educate/curriculum/middle-school'
    }, {
      linkId: 'course-block-grade-band-high',
      linkClass: 'linktag',
      heading: _locale2.default.courseBlocksGradeBandsHigh(),
      description: _locale2.default.courseBlocksGradeBandsHighDescription(),
      path: '/educate/curriculum/high-school'
    }], _temp), _possibleConstructorReturn(_this, _ret);
  }

  CourseBlocksTeacherGradeBands.prototype.render = function render() {
    return _react2.default.createElement(
      _ContentContainer2.default,
      {
        heading: _locale2.default.courseBlocksGradeBandsContainerHeading(),
        description: _locale2.default.courseBlocksGradeBandsContainerDescription()
      },
      _react2.default.createElement(_CourseBlocksGradeBands2.default, {
        cards: this.cards
      })
    );
  };

  return CourseBlocksTeacherGradeBands;
}(_react.Component);

exports.default = CourseBlocksTeacherGradeBands;
module.exports = exports['default'];

/***/ }),

/***/ 3879:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _ContentContainer = __webpack_require__(1629);

var _ContentContainer2 = _interopRequireDefault(_ContentContainer);

var _TwoColumnActionBlock = __webpack_require__(1997);

var _CourseBlocks = __webpack_require__(3169);

var _CourseBlocksStudentGradeBands = __webpack_require__(3323);

var _CourseBlocksStudentGradeBands2 = _interopRequireDefault(_CourseBlocksStudentGradeBands);

var _locale = __webpack_require__(23);

var _locale2 = _interopRequireDefault(_locale);

var _urlHelpers = __webpack_require__(677);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This is the main content for the Courses page for a student using English,
 * as well as the default for a signed-out user using English.
 */
var CoursesStudentEnglish = function (_Component) {
  _inherits(CoursesStudentEnglish, _Component);

  function CoursesStudentEnglish() {
    _classCallCheck(this, CoursesStudentEnglish);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  CoursesStudentEnglish.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_CourseBlocksStudentGradeBands2.default, {
        showContainer: true,
        hideBottomMargin: false
      }),
      _react2.default.createElement(
        _ContentContainer2.default,
        {
          heading: _locale2.default.teacherCourseHoc(),
          description: _locale2.default.teacherCourseHocDescription(),
          linkText: _locale2.default.teacherCourseHocLinkText(),
          link: (0, _urlHelpers.pegasus)('/hourofcode/overview')
        },
        _react2.default.createElement(_CourseBlocks.CourseBlocksHoc, { rowCount: 1 })
      ),
      _react2.default.createElement(_TwoColumnActionBlock.LocalClassActionBlock, {
        showHeading: true
      })
    );
  };

  return CoursesStudentEnglish;
}(_react.Component);

exports.default = CoursesStudentEnglish;
module.exports = exports['default'];

/***/ })

},[3873]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cnNlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvc3R1ZGlvSG9tZXBhZ2VzL0NvdXJzZUJsb2Nrcy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvdXJzZUV4cGxvcmVyL2NvdXJzZUV4cGxvcmVyLmpzIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvc3R1ZGlvSG9tZXBhZ2VzL0NvdXJzZUJsb2Nrc1Rvb2xzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2l0ZXMvc3R1ZGlvL3BhZ2VzL2NvdXJzZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9zdHVkaW9Ib21lcGFnZXMvQ291cnNlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9zdHVkaW9Ib21lcGFnZXMvQ291cnNlQmxvY2tzSW50ZXJuYXRpb25hbEdyYWRlQmFuZHMuanN4Iiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvc3R1ZGlvSG9tZXBhZ2VzL0NvdXJzZXNUZWFjaGVyRW5nbGlzaC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9zdHVkaW9Ib21lcGFnZXMvQ291cnNlQmxvY2tzVGVhY2hlckdyYWRlQmFuZHMuanN4Iiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvc3R1ZGlvSG9tZXBhZ2VzL0NvdXJzZXNTdHVkZW50RW5nbGlzaC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5Db3Vyc2VCbG9ja3NBbGwgPSBleHBvcnRzLkNvdXJzZUJsb2Nrc0hvYyA9IGV4cG9ydHMuQ291cnNlQmxvY2tzQ3NmID0gdW5kZWZpbmVkO1xuXG52YXIgX2pxdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG52YXIgX2pxdWVyeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9qcXVlcnkpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfQ29udGVudENvbnRhaW5lciA9IHJlcXVpcmUoJy4uL0NvbnRlbnRDb250YWluZXInKTtcblxudmFyIF9Db250ZW50Q29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbnRlbnRDb250YWluZXIpO1xuXG52YXIgX0NvdXJzZUJsb2Nrc1Rvb2xzID0gcmVxdWlyZSgnLi9Db3Vyc2VCbG9ja3NUb29scycpO1xuXG52YXIgX0NvdXJzZUJsb2Nrc1Rvb2xzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvdXJzZUJsb2Nrc1Rvb2xzKTtcblxudmFyIF9Db3Vyc2VCbG9ja3NJbnRlcm5hdGlvbmFsR3JhZGVCYW5kcyA9IHJlcXVpcmUoJy4vQ291cnNlQmxvY2tzSW50ZXJuYXRpb25hbEdyYWRlQmFuZHMnKTtcblxudmFyIF9Db3Vyc2VCbG9ja3NJbnRlcm5hdGlvbmFsR3JhZGVCYW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db3Vyc2VCbG9ja3NJbnRlcm5hdGlvbmFsR3JhZGVCYW5kcyk7XG5cbnZhciBfTm90aWZpY2F0aW9uID0gcmVxdWlyZSgnQGNkby9hcHBzL3RlbXBsYXRlcy9Ob3RpZmljYXRpb24nKTtcblxudmFyIF9Qcm90ZWN0ZWRTdGF0ZWZ1bERpdiA9IHJlcXVpcmUoJy4uL1Byb3RlY3RlZFN0YXRlZnVsRGl2Jyk7XG5cbnZhciBfUHJvdGVjdGVkU3RhdGVmdWxEaXYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUHJvdGVjdGVkU3RhdGVmdWxEaXYpO1xuXG52YXIgX2xvY2FsZSA9IHJlcXVpcmUoJ0BjZG8vbG9jYWxlJyk7XG5cbnZhciBfbG9jYWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvY2FsZSk7XG5cbnZhciBfdXJsSGVscGVycyA9IHJlcXVpcmUoJ0BjZG8vYXBwcy9saWIvdXRpbC91cmxIZWxwZXJzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENvdXJzZUJsb2Nrc0NzZiA9IGV4cG9ydHMuQ291cnNlQmxvY2tzQ3NmID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENvdXJzZUJsb2Nrc0NzZiwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ291cnNlQmxvY2tzQ3NmKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb3Vyc2VCbG9ja3NDc2YpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBDb3Vyc2VCbG9ja3NDc2YucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5zaG93TW9kZXJuKSB7XG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ291cnNlQmxvY2tzQ3NmTW9kZXJuLCBudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvdXJzZUJsb2Nrc0NzZkxlZ2FjeSwgbnVsbCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBDb3Vyc2VCbG9ja3NDc2Y7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5Db3Vyc2VCbG9ja3NDc2YucHJvcFR5cGVzID0ge1xuICBzaG93TW9kZXJuOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxufTtcblxudmFyIENvdXJzZUJsb2Nrc0NzZk1vZGVybiA9IGZ1bmN0aW9uIChfQ29tcG9uZW50Mikge1xuICBfaW5oZXJpdHMoQ291cnNlQmxvY2tzQ3NmTW9kZXJuLCBfQ29tcG9uZW50Mik7XG5cbiAgZnVuY3Rpb24gQ291cnNlQmxvY2tzQ3NmTW9kZXJuKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb3Vyc2VCbG9ja3NDc2ZNb2Rlcm4pO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgQ291cnNlQmxvY2tzQ3NmTW9kZXJuLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICgwLCBfanF1ZXJ5Mi5kZWZhdWx0KSgnI2NvdXJzZWEtMjAxNycpLmFwcGVuZFRvKF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMuY291cnNlYSkpLnNob3coKTtcbiAgICAoMCwgX2pxdWVyeTIuZGVmYXVsdCkoJyNjb3Vyc2ViLTIwMTcnKS5hcHBlbmRUbyhfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcy5yZWZzLmNvdXJzZWIpKS5zaG93KCk7XG4gICAgKDAsIF9qcXVlcnkyLmRlZmF1bHQpKCcjY291cnNlYy0yMDE3JykuYXBwZW5kVG8oX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5jb3Vyc2VjKSkuc2hvdygpO1xuICAgICgwLCBfanF1ZXJ5Mi5kZWZhdWx0KSgnI2NvdXJzZWQtMjAxNycpLmFwcGVuZFRvKF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMuY291cnNlZCkpLnNob3coKTtcbiAgICAoMCwgX2pxdWVyeTIuZGVmYXVsdCkoJyNjb3Vyc2VlLTIwMTcnKS5hcHBlbmRUbyhfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcy5yZWZzLmNvdXJzZWUpKS5zaG93KCk7XG4gICAgKDAsIF9qcXVlcnkyLmRlZmF1bHQpKCcjY291cnNlZi0yMDE3JykuYXBwZW5kVG8oX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5jb3Vyc2VmKSkuc2hvdygpO1xuICAgICgwLCBfanF1ZXJ5Mi5kZWZhdWx0KSgnI3ByZS1leHByZXNzLTIwMTcnKS5hcHBlbmRUbyhfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcy5yZWZzLnByZV9leHByZXNzKSkuc2hvdygpO1xuICAgICgwLCBfanF1ZXJ5Mi5kZWZhdWx0KSgnI2V4cHJlc3MtMjAxNycpLmFwcGVuZFRvKF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMuZXhwcmVzcykpLnNob3coKTtcbiAgfTtcblxuICBDb3Vyc2VCbG9ja3NDc2ZNb2Rlcm4ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIG51bGwsXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX0NvbnRlbnRDb250YWluZXIyLmRlZmF1bHQsXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkaW5nOiBfbG9jYWxlMi5kZWZhdWx0LmNvdXJzZUJsb2Nrc0NzZkV4cHJlc3NIZWFkaW5nKCksXG4gICAgICAgICAgZGVzY3JpcHRpb246IF9sb2NhbGUyLmRlZmF1bHQuY291cnNlQmxvY2tzQ3NmRXhwcmVzc0Rlc2NyaXB0aW9uKClcbiAgICAgICAgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdyb3cnIH0sXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1Byb3RlY3RlZFN0YXRlZnVsRGl2Mi5kZWZhdWx0LCB7IHJlZjogJ3ByZV9leHByZXNzJyB9KSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfUHJvdGVjdGVkU3RhdGVmdWxEaXYyLmRlZmF1bHQsIHsgcmVmOiAnZXhwcmVzcycgfSlcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfQ29udGVudENvbnRhaW5lcjIuZGVmYXVsdCxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRpbmc6IF9sb2NhbGUyLmRlZmF1bHQuY291cnNlQmxvY2tzQ3NmWW91bmdIZWFkaW5nKCksXG4gICAgICAgICAgZGVzY3JpcHRpb246IF9sb2NhbGUyLmRlZmF1bHQuY291cnNlQmxvY2tzQ3NmWW91bmdEZXNjcmlwdGlvbigpXG4gICAgICAgIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAncm93JyB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Qcm90ZWN0ZWRTdGF0ZWZ1bERpdjIuZGVmYXVsdCwgeyByZWY6ICdjb3Vyc2VhJyB9KSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfUHJvdGVjdGVkU3RhdGVmdWxEaXYyLmRlZmF1bHQsIHsgcmVmOiAnY291cnNlYicgfSlcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfQ29udGVudENvbnRhaW5lcjIuZGVmYXVsdCxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRpbmc6IF9sb2NhbGUyLmRlZmF1bHQuY291cnNlQmxvY2tzQ3NmT2xkZXJIZWFkaW5nKCksXG4gICAgICAgICAgZGVzY3JpcHRpb246IF9sb2NhbGUyLmRlZmF1bHQuY291cnNlQmxvY2tzQ3NmT2xkZXJEZXNjcmlwdGlvbigpXG4gICAgICAgIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAncm93JyB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Qcm90ZWN0ZWRTdGF0ZWZ1bERpdjIuZGVmYXVsdCwgeyByZWY6ICdjb3Vyc2VjJyB9KSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfUHJvdGVjdGVkU3RhdGVmdWxEaXYyLmRlZmF1bHQsIHsgcmVmOiAnY291cnNlZCcgfSksXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1Byb3RlY3RlZFN0YXRlZnVsRGl2Mi5kZWZhdWx0LCB7IHJlZjogJ2NvdXJzZWUnIH0pLFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Qcm90ZWN0ZWRTdGF0ZWZ1bERpdjIuZGVmYXVsdCwgeyByZWY6ICdjb3Vyc2VmJyB9KVxuICAgICAgICApXG4gICAgICApLFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX05vdGlmaWNhdGlvbi5Ob3RpZmljYXRpb25SZXNwb25zaXZlLCB7XG4gICAgICAgIHR5cGU6ICdidWxsaG9ybicsXG4gICAgICAgIG5vdGljZTogX2xvY2FsZTIuZGVmYXVsdC5jb3Vyc2VCbG9ja3NMZWdhY3lOb3RpZmljYXRpb25IZWFkaW5nKCksXG4gICAgICAgIGRldGFpbHM6IF9sb2NhbGUyLmRlZmF1bHQuY291cnNlQmxvY2tzTGVnYWN5Tm90aWZpY2F0aW9uQm9keSgpLFxuICAgICAgICBkZXRhaWxzTGlua1RleHQ6IF9sb2NhbGUyLmRlZmF1bHQuY291cnNlQmxvY2tzTGVnYWN5Tm90aWZpY2F0aW9uRGV0YWlsc0xpbmtUZXh0KCksXG4gICAgICAgIGRldGFpbHNMaW5rOiAnaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZG9jdW1lbnQvZC8xTVZEZmJFenIwbzlEcWFPWW1PT1lwc1FQVGZYVUZ2Q3g0WHM5dWl4cmRCRS9lZGl0P3VzcD1zaGFyaW5nJyxcbiAgICAgICAgZGV0YWlsc0xpbmtOZXdXaW5kb3c6IHRydWUsXG4gICAgICAgIGRpc21pc3NpYmxlOiBmYWxzZSxcbiAgICAgICAgYnV0dG9uczogW3tcbiAgICAgICAgICB0ZXh0OiBfbG9jYWxlMi5kZWZhdWx0LmNvdXJzZUJsb2Nrc0xlZ2FjeU5vdGlmaWNhdGlvbkJ1dHRvbkNvdXJzZXMxNCgpLFxuICAgICAgICAgIGxpbms6ICgwLCBfdXJsSGVscGVycy5wZWdhc3VzKShcIi9lZHVjYXRlL2N1cnJpY3VsdW0vY3MtZnVuZGFtZW50YWxzLWludGVybmF0aW9uYWxcIiksXG4gICAgICAgICAgbmV3V2luZG93OiB0cnVlXG4gICAgICAgIH0sIHtcbiAgICAgICAgICB0ZXh0OiBfbG9jYWxlMi5kZWZhdWx0LmNvdXJzZUJsb2Nrc0xlZ2FjeU5vdGlmaWNhdGlvbkJ1dHRvbkNvdXJzZXNBY2NlbGVyYXRlZCgpLFxuICAgICAgICAgIGxpbms6IFwiL3MvMjAtaG91clwiLFxuICAgICAgICAgIG5ld1dpbmRvdzogdHJ1ZVxuICAgICAgICB9XVxuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBDb3Vyc2VCbG9ja3NDc2ZNb2Rlcm47XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG52YXIgQ291cnNlQmxvY2tzQ3NmTGVnYWN5ID0gZnVuY3Rpb24gKF9Db21wb25lbnQzKSB7XG4gIF9pbmhlcml0cyhDb3Vyc2VCbG9ja3NDc2ZMZWdhY3ksIF9Db21wb25lbnQzKTtcblxuICBmdW5jdGlvbiBDb3Vyc2VCbG9ja3NDc2ZMZWdhY3koKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvdXJzZUJsb2Nrc0NzZkxlZ2FjeSk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudDMuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBDb3Vyc2VCbG9ja3NDc2ZMZWdhY3kucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgKDAsIF9qcXVlcnkyLmRlZmF1bHQpKCcjY291cnNlMScpLmFwcGVuZFRvKF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMuY291cnNlMSkpLnNob3coKTtcbiAgICAoMCwgX2pxdWVyeTIuZGVmYXVsdCkoJyNjb3Vyc2UyJykuYXBwZW5kVG8oX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5jb3Vyc2UyKSkuc2hvdygpO1xuICAgICgwLCBfanF1ZXJ5Mi5kZWZhdWx0KSgnI2NvdXJzZTMnKS5hcHBlbmRUbyhfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcy5yZWZzLmNvdXJzZTMpKS5zaG93KCk7XG4gICAgKDAsIF9qcXVlcnkyLmRlZmF1bHQpKCcjY291cnNlNCcpLmFwcGVuZFRvKF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMuY291cnNlNCkpLnNob3coKTtcbiAgICAoMCwgX2pxdWVyeTIuZGVmYXVsdCkoJyN0d2VudHlfaG91cicpLmFwcGVuZFRvKF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMudHdlbnR5X2hvdXIpKS5zaG93KCk7XG4gICAgKDAsIF9qcXVlcnkyLmRlZmF1bHQpKCcjdW5wbHVnZ2VkJykuYXBwZW5kVG8oX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMucmVmcy51bnBsdWdnZWQpKS5zaG93KCk7XG4gIH07XG5cbiAgQ291cnNlQmxvY2tzQ3NmTGVnYWN5LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgX0NvbnRlbnRDb250YWluZXIyLmRlZmF1bHQsXG4gICAgICB7XG4gICAgICAgIGhlYWRpbmc6IF9sb2NhbGUyLmRlZmF1bHQuY3NmKCksXG4gICAgICAgIGRlc2NyaXB0aW9uOiBfbG9jYWxlMi5kZWZhdWx0LmNzZkRlc2NyaXB0aW9uKCksXG4gICAgICAgIGxpbms6ICcvaG9tZS8jcmVjZW50LWNvdXJzZXMnLFxuICAgICAgICBsaW5rVGV4dDogX2xvY2FsZTIuZGVmYXVsdC52aWV3TXlSZWNlbnRDb3Vyc2VzKClcbiAgICAgIH0sXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAncm93JyB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfUHJvdGVjdGVkU3RhdGVmdWxEaXYyLmRlZmF1bHQsIHsgcmVmOiAnY291cnNlMScgfSksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Qcm90ZWN0ZWRTdGF0ZWZ1bERpdjIuZGVmYXVsdCwgeyByZWY6ICdjb3Vyc2UyJyB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1Byb3RlY3RlZFN0YXRlZnVsRGl2Mi5kZWZhdWx0LCB7IHJlZjogJ2NvdXJzZTMnIH0pLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfUHJvdGVjdGVkU3RhdGVmdWxEaXYyLmRlZmF1bHQsIHsgcmVmOiAnY291cnNlNCcgfSlcbiAgICAgICksXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnYnInLCBudWxsKSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdicicsIG51bGwpLFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ3JvdycgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1Byb3RlY3RlZFN0YXRlZnVsRGl2Mi5kZWZhdWx0LCB7IHJlZjogJ3R3ZW50eV9ob3VyJyB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1Byb3RlY3RlZFN0YXRlZnVsRGl2Mi5kZWZhdWx0LCB7IHJlZjogJ3VucGx1Z2dlZCcgfSlcbiAgICAgIClcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBDb3Vyc2VCbG9ja3NDc2ZMZWdhY3k7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG52YXIgQ291cnNlQmxvY2tzSG9jID0gZXhwb3J0cy5Db3Vyc2VCbG9ja3NIb2MgPSBmdW5jdGlvbiAoX0NvbXBvbmVudDQpIHtcbiAgX2luaGVyaXRzKENvdXJzZUJsb2Nrc0hvYywgX0NvbXBvbmVudDQpO1xuXG4gIGZ1bmN0aW9uIENvdXJzZUJsb2Nrc0hvYygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ291cnNlQmxvY2tzSG9jKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50NC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIENvdXJzZUJsb2Nrc0hvYy5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAoMCwgX2pxdWVyeTIuZGVmYXVsdCkoJyNoZXJvJykuYXBwZW5kVG8oX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5oZXJvKSkuc2hvdygpO1xuICAgICgwLCBfanF1ZXJ5Mi5kZWZhdWx0KSgnI3N0YXJ3YXJzJykuYXBwZW5kVG8oX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5zdGFyd2FycykpLnNob3coKTtcbiAgICAoMCwgX2pxdWVyeTIuZGVmYXVsdCkoJyNmcm96ZW4nKS5hcHBlbmRUbyhfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcy5yZWZzLmZyb3plbikpLnNob3coKTtcbiAgICAoMCwgX2pxdWVyeTIuZGVmYXVsdCkoJyNob3Vyb2Zjb2RlJykuYXBwZW5kVG8oX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5ob3Vyb2Zjb2RlKSkuc2hvdygpO1xuICAgICgwLCBfanF1ZXJ5Mi5kZWZhdWx0KSgnI2ZsYXBweScpLmFwcGVuZFRvKF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMuZmxhcHB5KSkuc2hvdygpO1xuICAgICgwLCBfanF1ZXJ5Mi5kZWZhdWx0KSgnI2luZmluaXR5JykuYXBwZW5kVG8oX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5pbmZpbml0eSkpLnNob3coKTtcbiAgICAoMCwgX2pxdWVyeTIuZGVmYXVsdCkoJyNwbGF5bGFiJykuYXBwZW5kVG8oX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5wbGF5bGFiKSkuc2hvdygpO1xuICAgICgwLCBfanF1ZXJ5Mi5kZWZhdWx0KSgnI2FydGlzdCcpLmFwcGVuZFRvKF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMuYXJ0aXN0KSkuc2hvdygpO1xuICB9O1xuXG4gIENvdXJzZUJsb2Nrc0hvYy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgbnVsbCxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdyb3cnIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Qcm90ZWN0ZWRTdGF0ZWZ1bERpdjIuZGVmYXVsdCwgeyByZWY6ICdoZXJvJyB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1Byb3RlY3RlZFN0YXRlZnVsRGl2Mi5kZWZhdWx0LCB7IHJlZjogJ3N0YXJ3YXJzJyB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1Byb3RlY3RlZFN0YXRlZnVsRGl2Mi5kZWZhdWx0LCB7IHJlZjogJ2Zyb3plbicgfSksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Qcm90ZWN0ZWRTdGF0ZWZ1bERpdjIuZGVmYXVsdCwgeyByZWY6ICdob3Vyb2Zjb2RlJyB9KVxuICAgICAgKSxcbiAgICAgIHRoaXMucHJvcHMucm93Q291bnQgPiAxICYmIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2JyJywgbnVsbCksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdicicsIG51bGwpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ3JvdycgfSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfUHJvdGVjdGVkU3RhdGVmdWxEaXYyLmRlZmF1bHQsIHsgcmVmOiAnZmxhcHB5JyB9KSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfUHJvdGVjdGVkU3RhdGVmdWxEaXYyLmRlZmF1bHQsIHsgcmVmOiAnaW5maW5pdHknIH0pLFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Qcm90ZWN0ZWRTdGF0ZWZ1bERpdjIuZGVmYXVsdCwgeyByZWY6ICdwbGF5bGFiJyB9KSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfUHJvdGVjdGVkU3RhdGVmdWxEaXYyLmRlZmF1bHQsIHsgcmVmOiAnYXJ0aXN0JyB9KVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gQ291cnNlQmxvY2tzSG9jO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuQ291cnNlQmxvY2tzSG9jLnByb3BUeXBlcyA9IHtcbiAgcm93Q291bnQ6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbn07XG5cbnZhciBDb3Vyc2VCbG9ja3NBbGwgPSBleHBvcnRzLkNvdXJzZUJsb2Nrc0FsbCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50NSkge1xuICBfaW5oZXJpdHMoQ291cnNlQmxvY2tzQWxsLCBfQ29tcG9uZW50NSk7XG5cbiAgZnVuY3Rpb24gQ291cnNlQmxvY2tzQWxsKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb3Vyc2VCbG9ja3NBbGwpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQ1LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgQ291cnNlQmxvY2tzQWxsLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICgwLCBfanF1ZXJ5Mi5kZWZhdWx0KSgnLmNzZi1jb3Vyc2VzLWhlYWRlcicpLmFwcGVuZFRvKF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMuY3NmQ291cnNlc0hlYWRlcikpLnNob3coKTtcbiAgfTtcblxuICBDb3Vyc2VCbG9ja3NBbGwucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIG51bGwsXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb3Vyc2VCbG9ja3NDc2YsIHsgc2hvd01vZGVybjogdGhpcy5wcm9wcy5zaG93TW9kZXJuRWxlbWVudGFyeUNvdXJzZXMgfSksXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX0NvbnRlbnRDb250YWluZXIyLmRlZmF1bHQsXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkaW5nOiBfbG9jYWxlMi5kZWZhdWx0LnRlYWNoZXJDb3Vyc2VIb2MoKSxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogX2xvY2FsZTIuZGVmYXVsdC50ZWFjaGVyQ291cnNlSG9jRGVzY3JpcHRpb24oKSxcbiAgICAgICAgICBsaW5rVGV4dDogX2xvY2FsZTIuZGVmYXVsdC50ZWFjaGVyQ291cnNlSG9jTGlua1RleHQoKSxcbiAgICAgICAgICBsaW5rOiAoMCwgX3VybEhlbHBlcnMucGVnYXN1cykoJy9ob3Vyb2Zjb2RlL292ZXJ2aWV3JylcbiAgICAgICAgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ291cnNlQmxvY2tzSG9jLCB7IHJvd0NvdW50OiAxIH0pXG4gICAgICApLFxuICAgICAgIXRoaXMucHJvcHMuaXNFbmdsaXNoICYmIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Db3Vyc2VCbG9ja3NJbnRlcm5hdGlvbmFsR3JhZGVCYW5kczIuZGVmYXVsdCwgbnVsbCksXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfQ291cnNlQmxvY2tzVG9vbHMyLmRlZmF1bHQsIHtcbiAgICAgICAgaXNFbmdsaXNoOiB0aGlzLnByb3BzLmlzRW5nbGlzaFxuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBDb3Vyc2VCbG9ja3NBbGw7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5Db3Vyc2VCbG9ja3NBbGwucHJvcFR5cGVzID0ge1xuICBpc0VuZ2xpc2g6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBzaG93TW9kZXJuRWxlbWVudGFyeUNvdXJzZXM6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9zdHVkaW9Ib21lcGFnZXMvQ291cnNlQmxvY2tzLmpzeFxuLy8gbW9kdWxlIGlkID0gMzE2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDIwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBDb2RlIGZvciB0aGUgQ291cnNlL1Rvb2xzIEV4cGxvcmVyLiAgSW5jbHVkZSBpdCBvbmNlIG9uIHRoZSBwYWdlIGFuZCBpdCB3aWxsXG4vLyBoYW5kbGUgYm90aCBDb3Vyc2VFeHBsb3JlciBhbmQgVG9vbHNFeHBsb3JlciBvbiB0aGUgc2FtZSBwYWdlLlxuXG52YXIgZGV0YWlsUm93U2hvd2luZyA9IC0xO1xudmFyIHRvb2xTaG93aW5nSW5kZXggPSAtMTtcblxudmFyIGNvdXJzZVNob3dpbmdJbmRleCA9IC0xO1xuXG5tb2R1bGUuZXhwb3J0cy5pbml0Q291cnNlRXhwbG9yZXIgPSBmdW5jdGlvbiAoKSB7XG4gICQoJy50b29sJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIHZhciByb3cgPSAkKHRoaXMpLmRhdGEoJ3JvdycpO1xuICAgIHZhciBpbmRleCA9ICQodGhpcykuZGF0YSgnaW5kZXgnKTtcblxuICAgIGlmICh0b29sU2hvd2luZ0luZGV4ID09PSAtMSkge1xuICAgICAgJCgnLmRldGFpbHJvdy0nICsgcm93KS5zbGlkZURvd24oKTtcbiAgICAgICQoJy50b29sc2V4dHJhLScgKyBpbmRleCkuZmFkZUluKCk7XG4gICAgICBkZXRhaWxSb3dTaG93aW5nID0gcm93O1xuICAgICAgdG9vbFNob3dpbmdJbmRleCA9IGluZGV4O1xuICAgIH0gZWxzZSBpZiAodG9vbFNob3dpbmdJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgICQoJy5kZXRhaWxyb3ctJyArIGRldGFpbFJvd1Nob3dpbmcpLnNsaWRlVXAoKTtcbiAgICAgICQoJy50b29sc2V4dHJhLScgKyBpbmRleCkuZmFkZU91dCgpO1xuICAgICAgZGV0YWlsUm93U2hvd2luZyA9IC0xO1xuICAgICAgdG9vbFNob3dpbmdJbmRleCA9IC0xO1xuICAgIH0gZWxzZSBpZiAoZGV0YWlsUm93U2hvd2luZyA9PT0gcm93KSB7XG4gICAgICAkKCcudG9vbHNleHRyYS0nICsgdG9vbFNob3dpbmdJbmRleCkuZmFkZU91dCgpO1xuICAgICAgJCgnLnRvb2xzZXh0cmEtJyArIGluZGV4KS5mYWRlSW4oKTtcbiAgICAgIHRvb2xTaG93aW5nSW5kZXggPSBpbmRleDtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLmRldGFpbHJvdy0nICsgZGV0YWlsUm93U2hvd2luZykuc2xpZGVVcCgpO1xuICAgICAgJCgnLnRvb2xzZXh0cmEtJyArIHRvb2xTaG93aW5nSW5kZXgpLmZhZGVPdXQoKTtcbiAgICAgICQoJy5kZXRhaWxyb3ctJyArIHJvdykuc2xpZGVEb3duKCk7XG4gICAgICAkKCcudG9vbHNleHRyYS0nICsgaW5kZXgpLmZhZGVJbigpO1xuICAgICAgZGV0YWlsUm93U2hvd2luZyA9IHJvdztcbiAgICAgIHRvb2xTaG93aW5nSW5kZXggPSBpbmRleDtcbiAgICB9XG4gIH0pO1xuXG4gICQoJy50b29sX2Fycm93X2JveF9jbG9zZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcuZGV0YWlscm93Jykuc2xpZGVVcCgpO1xuICAgIHRvb2xTaG93aW5nSW5kZXggPSAtMTtcbiAgfSk7XG5cbiAgJCgnLmNvdXJzZS5icmVha2FibGUnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNvdXJzZUluZGV4ID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1jb3Vyc2VpbmRleFwiKTtcblxuICAgIC8vIFNob3cgdGhlIGFycm93cyBhcyBpbmxpbmUtYmxvY2sgaW5zdGVhZCBvZiAuc2hvdygpJ3MgZGVmYXVsdCBpbmxpbmVcbiAgICAvLyBzbyB0aGF0IHdlIGNhbiBhcHBseSBtYXJnaW4gdG8gdGhlIHRvcC5cblxuICAgIGlmIChjb3Vyc2VTaG93aW5nSW5kZXggPT09IC0xKSB7XG4gICAgICAkKCcuY291cnNlZXh0cmEtJyArIGNvdXJzZUluZGV4KS5zbGlkZURvd24oJ3Nsb3cnKTtcbiAgICAgICQoJy5jb3Vyc2UtJyArIGNvdXJzZUluZGV4ICsgJyAuYXJyb3ctZG93bicpLmhpZGUoKTtcbiAgICAgICQoJy5jb3Vyc2UtJyArIGNvdXJzZUluZGV4ICsgJyAuYXJyb3ctdXAnKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XG4gICAgICBjb3Vyc2VTaG93aW5nSW5kZXggPSBjb3Vyc2VJbmRleDtcbiAgICB9IGVsc2UgaWYgKGNvdXJzZVNob3dpbmdJbmRleCA9PT0gY291cnNlSW5kZXgpIHtcbiAgICAgICQoJy5jb3Vyc2VleHRyYS0nICsgY291cnNlSW5kZXgpLnNsaWRlVXAoJ3Nsb3cnKTtcbiAgICAgICQoJy5jb3Vyc2UtJyArIGNvdXJzZUluZGV4ICsgJyAuYXJyb3ctZG93bicpLmNzcygnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcbiAgICAgICQoJy5jb3Vyc2UtJyArIGNvdXJzZUluZGV4ICsgJyAuYXJyb3ctdXAnKS5oaWRlKCk7XG4gICAgICBjb3Vyc2VTaG93aW5nSW5kZXggPSAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLmNvdXJzZWV4dHJhLScgKyBjb3Vyc2VTaG93aW5nSW5kZXgpLnNsaWRlVXAoJ3Nsb3cnKTtcbiAgICAgICQoJy5jb3Vyc2UtJyArIGNvdXJzZVNob3dpbmdJbmRleCArICcgLmFycm93LWRvd24nKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XG4gICAgICAkKCcuY291cnNlLScgKyBjb3Vyc2VTaG93aW5nSW5kZXggKyAnIC5hcnJvdy11cCcpLmhpZGUoKTtcbiAgICAgICQoJy5jb3Vyc2VleHRyYS0nICsgY291cnNlSW5kZXgpLnNsaWRlRG93bignc2xvdycpO1xuICAgICAgJCgnLmNvdXJzZS0nICsgY291cnNlSW5kZXggKyAnIC5hcnJvdy1kb3duJykuaGlkZSgpO1xuICAgICAgJCgnLmNvdXJzZS0nICsgY291cnNlSW5kZXggKyAnIC5hcnJvdy11cCcpLmNzcygnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcbiAgICAgIGNvdXJzZVNob3dpbmdJbmRleCA9IGNvdXJzZUluZGV4O1xuICAgIH1cbiAgfSk7XG5cbiAgJCgnLmFycm93X2JveF9jbG9zZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY291cnNlSW5kZXggPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWNvdXJzZWluZGV4XCIpO1xuICAgICQoJy5jb3Vyc2VleHRyYS0nICsgY291cnNlSW5kZXgpLnNsaWRlVXAoKTtcbiAgICAkKCcuY291cnNlLScgKyBjb3Vyc2VJbmRleCArICcgLmFycm93LWRvd24nKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XG4gICAgJCgnLmNvdXJzZS0nICsgY291cnNlSW5kZXggKyAnIC5hcnJvdy11cCcpLmhpZGUoKTtcbiAgICBjb3Vyc2VTaG93aW5nSW5kZXggPSAtMTtcbiAgfSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvdXJzZUV4cGxvcmVyL2NvdXJzZUV4cGxvcmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzMTcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMjAgMTAyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmFkaXVtID0gcmVxdWlyZSgncmFkaXVtJyk7XG5cbnZhciBfcmFkaXVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhZGl1bSk7XG5cbnZhciBfQ29udGVudENvbnRhaW5lciA9IHJlcXVpcmUoJy4uL0NvbnRlbnRDb250YWluZXInKTtcblxudmFyIF9Db250ZW50Q29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbnRlbnRDb250YWluZXIpO1xuXG52YXIgX1Jlc291cmNlQ2FyZCA9IHJlcXVpcmUoJy4vUmVzb3VyY2VDYXJkJyk7XG5cbnZhciBfUmVzb3VyY2VDYXJkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Jlc291cmNlQ2FyZCk7XG5cbnZhciBfUmVzb3VyY2VDYXJkUmVzcG9uc2l2ZUNvbnRhaW5lciA9IHJlcXVpcmUoJy4vUmVzb3VyY2VDYXJkUmVzcG9uc2l2ZUNvbnRhaW5lcicpO1xuXG52YXIgX1Jlc291cmNlQ2FyZFJlc3BvbnNpdmVDb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmVzb3VyY2VDYXJkUmVzcG9uc2l2ZUNvbnRhaW5lcik7XG5cbnZhciBfbG9jYWxlID0gcmVxdWlyZSgnQGNkby9sb2NhbGUnKTtcblxudmFyIF9sb2NhbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9jYWxlKTtcblxudmFyIF91cmxIZWxwZXJzID0gcmVxdWlyZSgnQGNkby9hcHBzL2xpYi91dGlsL3VybEhlbHBlcnMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ291cnNlQmxvY2tzVG9vbHMgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ291cnNlQmxvY2tzVG9vbHMsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENvdXJzZUJsb2Nrc1Rvb2xzKCkge1xuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ291cnNlQmxvY2tzVG9vbHMpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmNhbGwuYXBwbHkoX0NvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLmNhcmRzID0gW3tcbiAgICAgIGhlYWRpbmc6IF9sb2NhbGUyLmRlZmF1bHQuY291cnNlQmxvY2tzVG9vbHNBcHBMYWIoKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBfbG9jYWxlMi5kZWZhdWx0LmNvdXJzZUJsb2Nrc1Rvb2xzQXBwTGFiRGVzY3JpcHRpb24oKSxcbiAgICAgIHBhdGg6ICdhcHBsYWInXG4gICAgfSwge1xuICAgICAgaGVhZGluZzogX2xvY2FsZTIuZGVmYXVsdC5jb3Vyc2VCbG9ja3NUb29sc0dhbWVMYWIoKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBfbG9jYWxlMi5kZWZhdWx0LmNvdXJzZUJsb2Nrc1Rvb2xzR2FtZUxhYkRlc2NyaXB0aW9uKCksXG4gICAgICBwYXRoOiAnZ2FtZWxhYidcbiAgICB9LCB7XG4gICAgICBoZWFkaW5nOiBfbG9jYWxlMi5kZWZhdWx0LmNvdXJzZUJsb2Nrc1Rvb2xzV2ViTGFiKCksXG4gICAgICBkZXNjcmlwdGlvbjogX2xvY2FsZTIuZGVmYXVsdC5jb3Vyc2VCbG9ja3NUb29sc1dlYkxhYkRlc2NyaXB0aW9uKCksXG4gICAgICBwYXRoOiAnd2VibGFiJ1xuICAgIH0sIHtcbiAgICAgIGhlYWRpbmc6IF9sb2NhbGUyLmRlZmF1bHQuY291cnNlQmxvY2tzVG9vbHNXaWRnZXRzKCksXG4gICAgICBkZXNjcmlwdGlvbjogX2xvY2FsZTIuZGVmYXVsdC5jb3Vyc2VCbG9ja3NUb29sc1dpZGdldHNEZXNjcmlwdGlvbigpLFxuICAgICAgcGF0aDogJ3dpZGdldHMnXG4gICAgfSwge1xuICAgICAgaGVhZGluZzogX2xvY2FsZTIuZGVmYXVsdC5jb3Vyc2VCbG9ja3NUb29sc0luc3BpcmUoKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBfbG9jYWxlMi5kZWZhdWx0LmNvdXJzZUJsb2Nrc1Rvb2xzSW5zcGlyZURlc2NyaXB0aW9uKCksXG4gICAgICBwYXRoOiAnaW5zcGlyZSdcbiAgICB9LCB7XG4gICAgICBoZWFkaW5nOiBfbG9jYWxlMi5kZWZhdWx0LmNvdXJzZUJsb2Nrc1Rvb2xzVmlkZW8oKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBfbG9jYWxlMi5kZWZhdWx0LmNvdXJzZUJsb2Nrc1Rvb2xzVmlkZW9EZXNjcmlwdGlvbigpLFxuICAgICAgcGF0aDogJ3ZpZGVvcydcbiAgICB9XSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBDb3Vyc2VCbG9ja3NUb29scy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBpc0VuZ2xpc2ggPSB0aGlzLnByb3BzLmlzRW5nbGlzaDtcblxuXG4gICAgdmFyIGhlYWRpbmdUZXh0ID0gaXNFbmdsaXNoID8gX2xvY2FsZTIuZGVmYXVsdC5jb3Vyc2VCbG9ja3NUb29sc1RpdGxlVGVhY2hlcigpIDogX2xvY2FsZTIuZGVmYXVsdC5jb3Vyc2VCbG9ja3NUb29sc1RpdGxlTm9uRW4oKTtcblxuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgIF9Db250ZW50Q29udGFpbmVyMi5kZWZhdWx0LFxuICAgICAge1xuICAgICAgICBoZWFkaW5nOiBoZWFkaW5nVGV4dCxcbiAgICAgICAgZGVzY3JpcHRpb246IF9sb2NhbGUyLmRlZmF1bHQuc3RhbmRhbG9uZVRvb2xzRGVzY3JpcHRpb24oKVxuICAgICAgfSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfUmVzb3VyY2VDYXJkUmVzcG9uc2l2ZUNvbnRhaW5lcjIuZGVmYXVsdCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdGhpcy5jYXJkcy5tYXAoZnVuY3Rpb24gKGNhcmQsIGNhcmRJbmRleCkge1xuICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfUmVzb3VyY2VDYXJkMi5kZWZhdWx0LCB7XG4gICAgICAgICAgICBrZXk6IGNhcmRJbmRleCxcbiAgICAgICAgICAgIHRpdGxlOiBjYXJkLmhlYWRpbmcsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogY2FyZC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGJ1dHRvblRleHQ6IF9sb2NhbGUyLmRlZmF1bHQubGVhcm5Nb3JlKCksXG4gICAgICAgICAgICBsaW5rOiAoMCwgX3VybEhlbHBlcnMucGVnYXN1cykoJy8nICsgY2FyZC5wYXRoKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIENvdXJzZUJsb2Nrc1Rvb2xzO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuQ291cnNlQmxvY2tzVG9vbHMucHJvcFR5cGVzID0ge1xuICBpc0VuZ2xpc2g6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9yYWRpdW0yLmRlZmF1bHQpKENvdXJzZUJsb2Nrc1Rvb2xzKTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9zdHVkaW9Ib21lcGFnZXMvQ291cnNlQmxvY2tzVG9vbHMuanN4XG4vLyBtb2R1bGUgaWQgPSAzMzI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMjAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfanF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5cbnZhciBfanF1ZXJ5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2pxdWVyeSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF9yZWFjdFJlZHV4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcblxudmFyIF9Db3Vyc2VzID0gcmVxdWlyZSgnQGNkby9hcHBzL3RlbXBsYXRlcy9zdHVkaW9Ib21lcGFnZXMvQ291cnNlcycpO1xuXG52YXIgX0NvdXJzZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ291cnNlcyk7XG5cbnZhciBfY291cnNlRXhwbG9yZXIgPSByZXF1aXJlKCdAY2RvL2FwcHMvY291cnNlRXhwbG9yZXIvY291cnNlRXhwbG9yZXInKTtcblxudmFyIF9yZWR1eCA9IHJlcXVpcmUoJ0BjZG8vYXBwcy9jb2RlLXN0dWRpby9yZWR1eCcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4oMCwgX2pxdWVyeTIuZGVmYXVsdCkoZG9jdW1lbnQpLnJlYWR5KHNob3dDb3Vyc2VzKTtcblxuZnVuY3Rpb24gc2hvd0NvdXJzZXMoKSB7XG4gIC8vIEluaXRpYWxpemUgdGhlIG5vbi1SZWFjdCBDb3Vyc2UvVG9vbCBFeHBsb3JlciBjb21wb25lbnQgY29kZS5cbiAgKDAsIF9jb3Vyc2VFeHBsb3Jlci5pbml0Q291cnNlRXhwbG9yZXIpKCk7XG5cbiAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFtkYXRhLWNvdXJzZXNdJyk7XG4gIHZhciBjb3Vyc2VzRGF0YSA9IEpTT04ucGFyc2Uoc2NyaXB0LmRhdGFzZXQuY291cnNlcyk7XG4gIHZhciBpc0VuZ2xpc2ggPSBjb3Vyc2VzRGF0YS5lbmdsaXNoO1xuICB2YXIgaXNUZWFjaGVyID0gY291cnNlc0RhdGEudGVhY2hlcjtcbiAgdmFyIGxpbmVzQ291bnQgPSBjb3Vyc2VzRGF0YS5saW5lc2NvdW50O1xuICB2YXIgc3R1ZGVudHNDb3VudCA9IGNvdXJzZXNEYXRhLnN0dWRlbnRzY291bnQ7XG4gIHZhciBjb2RlT3JnVXJsUHJlZml4ID0gY291cnNlc0RhdGEuY29kZW9yZ3VybHByZWZpeDtcbiAgdmFyIHNpZ25lZE91dCA9IGNvdXJzZXNEYXRhLnNpZ25lZG91dDtcbiAgdmFyIHNob3dJbml0aWFsVGlwcyA9ICFjb3Vyc2VzRGF0YS5pbml0aWFsdGlwc2Rpc21pc3NlZDtcbiAgdmFyIHVzZXJJZCA9IGNvdXJzZXNEYXRhLnVzZXJpZDtcbiAgdmFyIG1vZGVybkVsZW1lbnRhcnlDb3Vyc2VzQXZhaWxhYmxlID0gY291cnNlc0RhdGEubW9kZXJuZWxlbWVudGFyeWNvdXJzZXNhdmFpbGFibGU7XG5cbiAgX3JlYWN0RG9tMi5kZWZhdWx0LnJlbmRlcihfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICBfcmVhY3RSZWR1eC5Qcm92aWRlcixcbiAgICB7IHN0b3JlOiAoMCwgX3JlZHV4LmdldFN0b3JlKSgpIH0sXG4gICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0NvdXJzZXMyLmRlZmF1bHQsIHtcbiAgICAgIGlzRW5nbGlzaDogaXNFbmdsaXNoLFxuICAgICAgaXNUZWFjaGVyOiBpc1RlYWNoZXIsXG4gICAgICBsaW5lc0NvdW50OiBsaW5lc0NvdW50LFxuICAgICAgc3R1ZGVudHNDb3VudDogc3R1ZGVudHNDb3VudCxcbiAgICAgIGNvZGVPcmdVcmxQcmVmaXg6IGNvZGVPcmdVcmxQcmVmaXgsXG4gICAgICBpc1NpZ25lZE91dDogc2lnbmVkT3V0LFxuICAgICAgc2hvd0luaXRpYWxUaXBzOiBzaG93SW5pdGlhbFRpcHMsXG4gICAgICB1c2VySWQ6IHVzZXJJZCxcbiAgICAgIG1vZGVybkVsZW1lbnRhcnlDb3Vyc2VzQXZhaWxhYmxlOiBtb2Rlcm5FbGVtZW50YXJ5Q291cnNlc0F2YWlsYWJsZVxuICAgIH0pXG4gICksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3Vyc2VzLWNvbnRhaW5lcicpKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaXRlcy9zdHVkaW8vcGFnZXMvY291cnNlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzg3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDIwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2pxdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG52YXIgX2pxdWVyeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9qcXVlcnkpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfSGVhZGVyQmFubmVyID0gcmVxdWlyZSgnLi4vSGVhZGVyQmFubmVyJyk7XG5cbnZhciBfSGVhZGVyQmFubmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0hlYWRlckJhbm5lcik7XG5cbnZhciBfQ291cnNlQmxvY2tzID0gcmVxdWlyZSgnLi9Db3Vyc2VCbG9ja3MnKTtcblxudmFyIF9Db3Vyc2VzVGVhY2hlckVuZ2xpc2ggPSByZXF1aXJlKCcuL0NvdXJzZXNUZWFjaGVyRW5nbGlzaCcpO1xuXG52YXIgX0NvdXJzZXNUZWFjaGVyRW5nbGlzaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db3Vyc2VzVGVhY2hlckVuZ2xpc2gpO1xuXG52YXIgX0NvdXJzZXNTdHVkZW50RW5nbGlzaCA9IHJlcXVpcmUoJy4vQ291cnNlc1N0dWRlbnRFbmdsaXNoJyk7XG5cbnZhciBfQ291cnNlc1N0dWRlbnRFbmdsaXNoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvdXJzZXNTdHVkZW50RW5nbGlzaCk7XG5cbnZhciBfUHJvdGVjdGVkU3RhdGVmdWxEaXYgPSByZXF1aXJlKCcuLi9Qcm90ZWN0ZWRTdGF0ZWZ1bERpdicpO1xuXG52YXIgX1Byb3RlY3RlZFN0YXRlZnVsRGl2MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Byb3RlY3RlZFN0YXRlZnVsRGl2KTtcblxudmFyIF9Ud29Db2x1bW5BY3Rpb25CbG9jayA9IHJlcXVpcmUoJy4vVHdvQ29sdW1uQWN0aW9uQmxvY2snKTtcblxudmFyIF9CdXR0b24gPSByZXF1aXJlKCdAY2RvL2FwcHMvdGVtcGxhdGVzL0J1dHRvbicpO1xuXG52YXIgX0J1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CdXR0b24pO1xuXG52YXIgX2xvY2FsZSA9IHJlcXVpcmUoJ0BjZG8vbG9jYWxlJyk7XG5cbnZhciBfbG9jYWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvY2FsZSk7XG5cbnZhciBfc3R5bGVDb25zdGFudHMgPSByZXF1aXJlKCdAY2RvL2FwcHMvc3R5bGVDb25zdGFudHMnKTtcblxudmFyIF9zdHlsZUNvbnN0YW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHlsZUNvbnN0YW50cyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIHN0eWxlcyA9IHtcbiAgY29udGVudDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgbWF4V2lkdGg6IF9zdHlsZUNvbnN0YW50czIuZGVmYXVsdFsnY29udGVudC13aWR0aCddLFxuICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICBtYXJnaW5SaWdodDogJ2F1dG8nXG4gIH1cbn07XG5cbnZhciBDb3Vyc2VzID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENvdXJzZXMsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENvdXJzZXMoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvdXJzZXMpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBDb3Vyc2VzLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIFRoZSBjb21wb25lbnRzIHVzZWQgaGVyZSBhcmUgaW1wbGVtZW50ZWQgaW4gbGVnYWN5IEhBTUwvQ1NTIHJhdGhlciB0aGFuIFJlYWN0LlxuICAgICgwLCBfanF1ZXJ5Mi5kZWZhdWx0KSgnI2ZsYXNoZXMnKS5hcHBlbmRUbyhfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcy5yZWZzLmZsYXNoZXMpKS5zaG93KCk7XG4gIH07XG5cbiAgQ291cnNlcy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBpc0VuZ2xpc2ggPSBfcHJvcHMuaXNFbmdsaXNoLFxuICAgICAgICBpc1RlYWNoZXIgPSBfcHJvcHMuaXNUZWFjaGVyLFxuICAgICAgICBpc1NpZ25lZE91dCA9IF9wcm9wcy5pc1NpZ25lZE91dCxcbiAgICAgICAgdXNlcklkID0gX3Byb3BzLnVzZXJJZCxcbiAgICAgICAgc2hvd0luaXRpYWxUaXBzID0gX3Byb3BzLnNob3dJbml0aWFsVGlwcyxcbiAgICAgICAgbW9kZXJuRWxlbWVudGFyeUNvdXJzZXNBdmFpbGFibGUgPSBfcHJvcHMubW9kZXJuRWxlbWVudGFyeUNvdXJzZXNBdmFpbGFibGU7XG5cbiAgICB2YXIgaGVhZGluZ1RleHQgPSBpc1RlYWNoZXIgPyBfbG9jYWxlMi5kZWZhdWx0LmNvdXJzZXNIZWFkaW5nVGVhY2hlcigpIDogX2xvY2FsZTIuZGVmYXVsdC5jb3Vyc2VzSGVhZGluZ1N0dWRlbnQoKTtcbiAgICB2YXIgc3ViSGVhZGluZ1RleHQgPSBfbG9jYWxlMi5kZWZhdWx0LmNvdXJzZXNIZWFkaW5nU3ViVGV4dCh7IGxpbmVzQ291bnQ6IHRoaXMucHJvcHMubGluZXNDb3VudCwgc3R1ZGVudHNDb3VudDogdGhpcy5wcm9wcy5zdHVkZW50c0NvdW50IH0pO1xuICAgIHZhciBoZWFkaW5nRGVzY3JpcHRpb24gPSBpc1NpZ25lZE91dCA/IF9sb2NhbGUyLmRlZmF1bHQuY291cnNlc0hlYWRpbmdEZXNjcmlwdGlvbigpIDogbnVsbDtcbiAgICB2YXIgc2hvd1NwZWNpYWxUZWFjaGVyQW5ub3VuY2VtZW50ID0gZmFsc2U7XG5cbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgc3R5bGU6IHN0eWxlcy5jb250ZW50IH0sXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX0hlYWRlckJhbm5lcjIuZGVmYXVsdCxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRpbmdUZXh0OiBoZWFkaW5nVGV4dCxcbiAgICAgICAgICBzdWJIZWFkaW5nVGV4dDogc3ViSGVhZGluZ1RleHQsXG4gICAgICAgICAgZGVzY3JpcHRpb246IGhlYWRpbmdEZXNjcmlwdGlvbixcbiAgICAgICAgICBzaG9ydDogIWlzU2lnbmVkT3V0XG4gICAgICAgIH0sXG4gICAgICAgIGlzU2lnbmVkT3V0ICYmIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9CdXR0b24yLmRlZmF1bHQsIHtcbiAgICAgICAgICBocmVmOiAnL3VzZXJzL3NpZ25fdXAnLFxuICAgICAgICAgIGNvbG9yOiBfQnV0dG9uMi5kZWZhdWx0LkJ1dHRvbkNvbG9yLmdyYXksXG4gICAgICAgICAgdGV4dDogX2xvY2FsZTIuZGVmYXVsdC5jcmVhdGVBY2NvdW50KClcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfUHJvdGVjdGVkU3RhdGVmdWxEaXYyLmRlZmF1bHQsIHtcbiAgICAgICAgcmVmOiAnZmxhc2hlcydcbiAgICAgIH0pLFxuICAgICAgaXNFbmdsaXNoICYmIGlzVGVhY2hlciAmJiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHNob3dTcGVjaWFsVGVhY2hlckFubm91bmNlbWVudCAmJiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfVHdvQ29sdW1uQWN0aW9uQmxvY2suU3BlY2lhbEFubm91bmNlbWVudEFjdGlvbkJsb2NrLCBudWxsKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0NvdXJzZXNUZWFjaGVyRW5nbGlzaDIuZGVmYXVsdCwge1xuICAgICAgICAgIGlzU2lnbmVkT3V0OiBpc1NpZ25lZE91dCxcbiAgICAgICAgICBzaG93SW5pdGlhbFRpcHM6IHNob3dJbml0aWFsVGlwcyxcbiAgICAgICAgICB1c2VySWQ6IHVzZXJJZFxuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIGlzRW5nbGlzaCAmJiAhaXNUZWFjaGVyICYmIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Db3Vyc2VzU3R1ZGVudEVuZ2xpc2gyLmRlZmF1bHQsIG51bGwpLFxuICAgICAgIWlzRW5nbGlzaCAmJiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfQ291cnNlQmxvY2tzLkNvdXJzZUJsb2Nrc0FsbCwge1xuICAgICAgICBpc0VuZ2xpc2g6IGZhbHNlLFxuICAgICAgICBzaG93TW9kZXJuRWxlbWVudGFyeUNvdXJzZXM6IG1vZGVybkVsZW1lbnRhcnlDb3Vyc2VzQXZhaWxhYmxlXG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIENvdXJzZXM7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5Db3Vyc2VzLnByb3BUeXBlcyA9IHtcbiAgaXNFbmdsaXNoOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgaXNUZWFjaGVyOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgaXNTaWduZWRPdXQ6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBsaW5lc0NvdW50OiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzdHVkZW50c0NvdW50OiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzaG93SW5pdGlhbFRpcHM6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICB1c2VySWQ6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICBtb2Rlcm5FbGVtZW50YXJ5Q291cnNlc0F2YWlsYWJsZTogX3JlYWN0LlByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWRcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBDb3Vyc2VzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3N0dWRpb0hvbWVwYWdlcy9Db3Vyc2VzLmpzeFxuLy8gbW9kdWxlIGlkID0gMzg3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDIwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfQ29udGVudENvbnRhaW5lciA9IHJlcXVpcmUoJy4uL0NvbnRlbnRDb250YWluZXInKTtcblxudmFyIF9Db250ZW50Q29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbnRlbnRDb250YWluZXIpO1xuXG52YXIgX0NvdXJzZUJsb2Nrc0dyYWRlQmFuZHMgPSByZXF1aXJlKCcuL0NvdXJzZUJsb2Nrc0dyYWRlQmFuZHMnKTtcblxudmFyIF9Db3Vyc2VCbG9ja3NHcmFkZUJhbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvdXJzZUJsb2Nrc0dyYWRlQmFuZHMpO1xuXG52YXIgX2xvY2FsZSA9IHJlcXVpcmUoJ0BjZG8vbG9jYWxlJyk7XG5cbnZhciBfbG9jYWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvY2FsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENvdXJzZUJsb2Nrc0ludGVybmF0aW9uYWxHcmFkZUJhbmRzID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENvdXJzZUJsb2Nrc0ludGVybmF0aW9uYWxHcmFkZUJhbmRzLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDb3Vyc2VCbG9ja3NJbnRlcm5hdGlvbmFsR3JhZGVCYW5kcygpIHtcbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvdXJzZUJsb2Nrc0ludGVybmF0aW9uYWxHcmFkZUJhbmRzKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5jYWxsLmFwcGx5KF9Db21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5jYXJkcyA9IFt7XG4gICAgICBsaW5rSWQ6ICdjb3Vyc2UtYmxvY2staW50ZXJuYXRpb25hbC1ncmFkZS1iYW5kLTQtMTAnLFxuICAgICAgbGlua0NsYXNzOiAnbGlua3RhZycsXG4gICAgICBoZWFkaW5nOiBfbG9jYWxlMi5kZWZhdWx0LmNvdXJzZUJsb2Nrc0ludGVybmF0aW9uYWxHcmFkZUJhbmRzRWxlbWVudGFyeSgpLFxuICAgICAgZGVzY3JpcHRpb246IF9sb2NhbGUyLmRlZmF1bHQuY291cnNlQmxvY2tzSW50ZXJuYXRpb25hbEdyYWRlQmFuZHNFbGVtZW50YXJ5RGVzY3JpcHRpb24oKSxcbiAgICAgIHBhdGg6ICcvZWR1Y2F0ZS9jdXJyaWN1bHVtL2VsZW1lbnRhcnktc2Nob29sJ1xuICAgIH0sIHtcbiAgICAgIGxpbmtJZDogJ2NvdXJzZS1ibG9jay1pbnRlcm5hdGlvbmFsLWdyYWRlLWJhbmQtMTAtMTQnLFxuICAgICAgbGlua0NsYXNzOiAnbGlua3RhZycsXG4gICAgICBoZWFkaW5nOiBfbG9jYWxlMi5kZWZhdWx0LmNvdXJzZUJsb2Nrc0ludGVybmF0aW9uYWxHcmFkZUJhbmRzTWlkZGxlKCksXG4gICAgICBkZXNjcmlwdGlvbjogX2xvY2FsZTIuZGVmYXVsdC5jb3Vyc2VCbG9ja3NJbnRlcm5hdGlvbmFsR3JhZGVCYW5kc01pZGRsZURlc2NyaXB0aW9uKCksXG4gICAgICBwYXRoOiAnL2VkdWNhdGUvY3VycmljdWx1bS9taWRkbGUtc2Nob29sJ1xuICAgIH0sIHtcbiAgICAgIGxpbmtJZDogJ2NvdXJzZS1ibG9jay1pbnRlcm5hdGlvbmFsLWdyYWRlLWJhbmQtMTItMTgnLFxuICAgICAgbGlua0NsYXNzOiAnbGlua3RhZycsXG4gICAgICBoZWFkaW5nOiBfbG9jYWxlMi5kZWZhdWx0LmNvdXJzZUJsb2Nrc0ludGVybmF0aW9uYWxHcmFkZUJhbmRzSGlnaCgpLFxuICAgICAgZGVzY3JpcHRpb246IF9sb2NhbGUyLmRlZmF1bHQuY291cnNlQmxvY2tzSW50ZXJuYXRpb25hbEdyYWRlQmFuZHNIaWdoRGVzY3JpcHRpb24oKSxcbiAgICAgIHBhdGg6ICcvZWR1Y2F0ZS9jdXJyaWN1bHVtL2hpZ2gtc2Nob29sJ1xuICAgIH1dLCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIENvdXJzZUJsb2Nrc0ludGVybmF0aW9uYWxHcmFkZUJhbmRzLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgX0NvbnRlbnRDb250YWluZXIyLmRlZmF1bHQsXG4gICAgICB7XG4gICAgICAgIGhlYWRpbmc6IF9sb2NhbGUyLmRlZmF1bHQuY291cnNlQmxvY2tzSW50ZXJuYXRpb25hbEdyYWRlQmFuZHNDb250YWluZXJIZWFkaW5nKCksXG4gICAgICAgIGRlc2NyaXB0aW9uOiBfbG9jYWxlMi5kZWZhdWx0LmNvdXJzZUJsb2Nrc0ludGVybmF0aW9uYWxHcmFkZUJhbmRzQ29udGFpbmVyRGVzY3JpcHRpb24oKVxuICAgICAgfSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Db3Vyc2VCbG9ja3NHcmFkZUJhbmRzMi5kZWZhdWx0LCB7XG4gICAgICAgIGNhcmRzOiB0aGlzLmNhcmRzXG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIENvdXJzZUJsb2Nrc0ludGVybmF0aW9uYWxHcmFkZUJhbmRzO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ291cnNlQmxvY2tzSW50ZXJuYXRpb25hbEdyYWRlQmFuZHM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvc3R1ZGlvSG9tZXBhZ2VzL0NvdXJzZUJsb2Nrc0ludGVybmF0aW9uYWxHcmFkZUJhbmRzLmpzeFxuLy8gbW9kdWxlIGlkID0gMzg3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDIwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2pxdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG52YXIgX2pxdWVyeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9qcXVlcnkpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfQ29udGVudENvbnRhaW5lciA9IHJlcXVpcmUoJy4uL0NvbnRlbnRDb250YWluZXInKTtcblxudmFyIF9Db250ZW50Q29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbnRlbnRDb250YWluZXIpO1xuXG52YXIgX1VpVGlwcyA9IHJlcXVpcmUoJ0BjZG8vYXBwcy90ZW1wbGF0ZXMvc3R1ZGlvSG9tZXBhZ2VzL1VpVGlwcycpO1xuXG52YXIgX1VpVGlwczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VaVRpcHMpO1xuXG52YXIgX1R3b0NvbHVtbkFjdGlvbkJsb2NrID0gcmVxdWlyZSgnLi9Ud29Db2x1bW5BY3Rpb25CbG9jaycpO1xuXG52YXIgX0NvdXJzZUJsb2NrcyA9IHJlcXVpcmUoJy4vQ291cnNlQmxvY2tzJyk7XG5cbnZhciBfQ291cnNlQmxvY2tzVG9vbHMgPSByZXF1aXJlKCcuL0NvdXJzZUJsb2Nrc1Rvb2xzJyk7XG5cbnZhciBfQ291cnNlQmxvY2tzVG9vbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ291cnNlQmxvY2tzVG9vbHMpO1xuXG52YXIgX0NvdXJzZUJsb2Nrc1RlYWNoZXJHcmFkZUJhbmRzID0gcmVxdWlyZSgnLi9Db3Vyc2VCbG9ja3NUZWFjaGVyR3JhZGVCYW5kcycpO1xuXG52YXIgX0NvdXJzZUJsb2Nrc1RlYWNoZXJHcmFkZUJhbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvdXJzZUJsb2Nrc1RlYWNoZXJHcmFkZUJhbmRzKTtcblxudmFyIF9Qcm90ZWN0ZWRTdGF0ZWZ1bERpdiA9IHJlcXVpcmUoJy4uL1Byb3RlY3RlZFN0YXRlZnVsRGl2Jyk7XG5cbnZhciBfUHJvdGVjdGVkU3RhdGVmdWxEaXYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUHJvdGVjdGVkU3RhdGVmdWxEaXYpO1xuXG52YXIgX2xvY2FsZSA9IHJlcXVpcmUoJ0BjZG8vbG9jYWxlJyk7XG5cbnZhciBfbG9jYWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvY2FsZSk7XG5cbnZhciBfdXJsSGVscGVycyA9IHJlcXVpcmUoJ0BjZG8vYXBwcy9saWIvdXRpbC91cmxIZWxwZXJzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBtYWluIGNvbnRlbnQgZm9yIHRoZSBDb3Vyc2VzIHBhZ2UgZm9yIGEgdGVhY2hlciB1c2luZyBFbmdsaXNoLFxuICogdGhvdWdoIGl0IG1heSBhbHNvIGJlIHNob3duIGZvciBhIHNpZ25lZC1vdXQgdXNlciB1c2luZyBFbmdsaXNoLlxuICovXG52YXIgQ291cnNlc1RlYWNoZXJFbmdsaXNoID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENvdXJzZXNUZWFjaGVyRW5nbGlzaCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ291cnNlc1RlYWNoZXJFbmdsaXNoKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb3Vyc2VzVGVhY2hlckVuZ2xpc2gpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBDb3Vyc2VzVGVhY2hlckVuZ2xpc2gucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gVGhlIGNvbXBvbmVudHMgdXNlZCBoZXJlIGFyZSBpbXBsZW1lbnRlZCBpbiBsZWdhY3kgSEFNTC9DU1MgcmF0aGVyIHRoYW4gUmVhY3QuXG4gICAgKDAsIF9qcXVlcnkyLmRlZmF1bHQpKCcuY291cnNlZXhwbG9yZXInKS5hcHBlbmRUbyhfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcy5yZWZzLmNvdXJzZUV4cGxvcmVyKSkuc2hvdygpO1xuICB9O1xuXG4gIENvdXJzZXNUZWFjaGVyRW5nbGlzaC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBpc1NpZ25lZE91dCA9IF9wcm9wcy5pc1NpZ25lZE91dCxcbiAgICAgICAgc2hvd0luaXRpYWxUaXBzID0gX3Byb3BzLnNob3dJbml0aWFsVGlwcyxcbiAgICAgICAgdXNlcklkID0gX3Byb3BzLnVzZXJJZDtcblxuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgbnVsbCxcbiAgICAgICFpc1NpZ25lZE91dCAmJiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfVWlUaXBzMi5kZWZhdWx0LCB7XG4gICAgICAgIHVzZXJJZDogdXNlcklkLFxuICAgICAgICB0aXBJZDogXCJ0ZWFjaGVyX2NvdXJzZXNcIixcbiAgICAgICAgc2hvd0luaXRpYWxUaXBzOiBzaG93SW5pdGlhbFRpcHMsXG4gICAgICAgIHRpcHM6IFt7XG4gICAgICAgICAgdHlwZTogXCJpbml0aWFsXCIsXG4gICAgICAgICAgcG9zaXRpb246IHsgdG9wOiAwLCBsZWZ0OiAwLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH0sXG4gICAgICAgICAgdGV4dDogX2xvY2FsZTIuZGVmYXVsdC5jb3Vyc2VzVWlUaXBzVGVhY2hlckNvdXJzZXMoKSxcbiAgICAgICAgICBhcnJvd0RpcmVjdGlvbjogXCJkb3duXCIsXG4gICAgICAgICAgc2Nyb2xsVG86IFwiLmNvdXJzZWV4cGxvcmVyXCJcbiAgICAgICAgfV1cbiAgICAgIH0pLFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBudWxsLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBfQ29udGVudENvbnRhaW5lcjIuZGVmYXVsdCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBoZWFkaW5nOiBfbG9jYWxlMi5kZWZhdWx0LmNvdXJzZUV4cGxvcmVySGVhZGluZygpLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IF9sb2NhbGUyLmRlZmF1bHQuY291cnNlRXhwbG9yZXJEZXNjcmlwdGlvbigpLFxuICAgICAgICAgICAgbGluazogJy9ob21lLyNyZWNlbnQtY291cnNlcycsXG4gICAgICAgICAgICBsaW5rVGV4dDogX2xvY2FsZTIuZGVmYXVsdC52aWV3TXlSZWNlbnRDb3Vyc2VzKClcbiAgICAgICAgICB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Qcm90ZWN0ZWRTdGF0ZWZ1bERpdjIuZGVmYXVsdCwgeyByZWY6ICdjb3Vyc2VFeHBsb3JlcicgfSlcbiAgICAgICAgKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0NvdXJzZUJsb2Nrc1RlYWNoZXJHcmFkZUJhbmRzMi5kZWZhdWx0LCBudWxsKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgX0NvbnRlbnRDb250YWluZXIyLmRlZmF1bHQsXG4gICAgICAgICAge1xuICAgICAgICAgICAgaGVhZGluZzogX2xvY2FsZTIuZGVmYXVsdC50ZWFjaGVyQ291cnNlSG9jKCksXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogX2xvY2FsZTIuZGVmYXVsdC50ZWFjaGVyQ291cnNlSG9jRGVzY3JpcHRpb24oKSxcbiAgICAgICAgICAgIGxpbmtUZXh0OiBfbG9jYWxlMi5kZWZhdWx0LnRlYWNoZXJDb3Vyc2VIb2NMaW5rVGV4dCgpLFxuICAgICAgICAgICAgbGluazogKDAsIF91cmxIZWxwZXJzLnBlZ2FzdXMpKCcvaG91cm9mY29kZS9vdmVydmlldycpLFxuICAgICAgICAgICAgc2hvd0xpbms6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Db3Vyc2VCbG9ja3MuQ291cnNlQmxvY2tzSG9jLCB7IHJvd0NvdW50OiAxIH0pXG4gICAgICAgICksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Db3Vyc2VCbG9ja3NUb29sczIuZGVmYXVsdCwge1xuICAgICAgICAgIGlzRW5nbGlzaDogdHJ1ZVxuICAgICAgICB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1R3b0NvbHVtbkFjdGlvbkJsb2NrLkFkbWluaXN0cmF0b3JSZXNvdXJjZXNBY3Rpb25CbG9jaywgbnVsbClcbiAgICAgIClcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBDb3Vyc2VzVGVhY2hlckVuZ2xpc2g7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5Db3Vyc2VzVGVhY2hlckVuZ2xpc2gucHJvcFR5cGVzID0ge1xuICBpc1NpZ25lZE91dDogX3JlYWN0LlByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHNob3dJbml0aWFsVGlwczogX3JlYWN0LlByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHVzZXJJZDogX3JlYWN0LlByb3BUeXBlcy5udW1iZXJcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBDb3Vyc2VzVGVhY2hlckVuZ2xpc2g7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvc3R1ZGlvSG9tZXBhZ2VzL0NvdXJzZXNUZWFjaGVyRW5nbGlzaC5qc3hcbi8vIG1vZHVsZSBpZCA9IDM4Nzdcbi8vIG1vZHVsZSBjaHVua3MgPSAyMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0NvbnRlbnRDb250YWluZXIgPSByZXF1aXJlKCcuLi9Db250ZW50Q29udGFpbmVyJyk7XG5cbnZhciBfQ29udGVudENvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db250ZW50Q29udGFpbmVyKTtcblxudmFyIF9Db3Vyc2VCbG9ja3NHcmFkZUJhbmRzID0gcmVxdWlyZSgnLi9Db3Vyc2VCbG9ja3NHcmFkZUJhbmRzJyk7XG5cbnZhciBfQ291cnNlQmxvY2tzR3JhZGVCYW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db3Vyc2VCbG9ja3NHcmFkZUJhbmRzKTtcblxudmFyIF9sb2NhbGUgPSByZXF1aXJlKCdAY2RvL2xvY2FsZScpO1xuXG52YXIgX2xvY2FsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2NhbGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDb3Vyc2VCbG9ja3NUZWFjaGVyR3JhZGVCYW5kcyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhDb3Vyc2VCbG9ja3NUZWFjaGVyR3JhZGVCYW5kcywgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ291cnNlQmxvY2tzVGVhY2hlckdyYWRlQmFuZHMoKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb3Vyc2VCbG9ja3NUZWFjaGVyR3JhZGVCYW5kcyk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuY2FsbC5hcHBseShfQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuY2FyZHMgPSBbe1xuICAgICAgbGlua0lkOiAnY291cnNlLWJsb2NrLWdyYWRlLWJhbmQtZWxlbWVudGFyeScsXG4gICAgICBsaW5rQ2xhc3M6ICdsaW5rdGFnJyxcbiAgICAgIGhlYWRpbmc6IF9sb2NhbGUyLmRlZmF1bHQuY291cnNlQmxvY2tzR3JhZGVCYW5kc0VsZW1lbnRhcnkoKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBfbG9jYWxlMi5kZWZhdWx0LmNvdXJzZUJsb2Nrc0dyYWRlQmFuZHNFbGVtZW50YXJ5RGVzY3JpcHRpb24oKSxcbiAgICAgIHBhdGg6ICcvZWR1Y2F0ZS9jdXJyaWN1bHVtL2VsZW1lbnRhcnktc2Nob29sJ1xuICAgIH0sIHtcbiAgICAgIGxpbmtJZDogJ2NvdXJzZS1ibG9jay1ncmFkZS1iYW5kLW1pZGRsZScsXG4gICAgICBsaW5rQ2xhc3M6ICdsaW5rdGFnJyxcbiAgICAgIGhlYWRpbmc6IF9sb2NhbGUyLmRlZmF1bHQuY291cnNlQmxvY2tzR3JhZGVCYW5kc01pZGRsZSgpLFxuICAgICAgZGVzY3JpcHRpb246IF9sb2NhbGUyLmRlZmF1bHQuY291cnNlQmxvY2tzR3JhZGVCYW5kc01pZGRsZURlc2NyaXB0aW9uKCksXG4gICAgICBwYXRoOiAnL2VkdWNhdGUvY3VycmljdWx1bS9taWRkbGUtc2Nob29sJ1xuICAgIH0sIHtcbiAgICAgIGxpbmtJZDogJ2NvdXJzZS1ibG9jay1ncmFkZS1iYW5kLWhpZ2gnLFxuICAgICAgbGlua0NsYXNzOiAnbGlua3RhZycsXG4gICAgICBoZWFkaW5nOiBfbG9jYWxlMi5kZWZhdWx0LmNvdXJzZUJsb2Nrc0dyYWRlQmFuZHNIaWdoKCksXG4gICAgICBkZXNjcmlwdGlvbjogX2xvY2FsZTIuZGVmYXVsdC5jb3Vyc2VCbG9ja3NHcmFkZUJhbmRzSGlnaERlc2NyaXB0aW9uKCksXG4gICAgICBwYXRoOiAnL2VkdWNhdGUvY3VycmljdWx1bS9oaWdoLXNjaG9vbCdcbiAgICB9XSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBDb3Vyc2VCbG9ja3NUZWFjaGVyR3JhZGVCYW5kcy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgIF9Db250ZW50Q29udGFpbmVyMi5kZWZhdWx0LFxuICAgICAge1xuICAgICAgICBoZWFkaW5nOiBfbG9jYWxlMi5kZWZhdWx0LmNvdXJzZUJsb2Nrc0dyYWRlQmFuZHNDb250YWluZXJIZWFkaW5nKCksXG4gICAgICAgIGRlc2NyaXB0aW9uOiBfbG9jYWxlMi5kZWZhdWx0LmNvdXJzZUJsb2Nrc0dyYWRlQmFuZHNDb250YWluZXJEZXNjcmlwdGlvbigpXG4gICAgICB9LFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0NvdXJzZUJsb2Nrc0dyYWRlQmFuZHMyLmRlZmF1bHQsIHtcbiAgICAgICAgY2FyZHM6IHRoaXMuY2FyZHNcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gQ291cnNlQmxvY2tzVGVhY2hlckdyYWRlQmFuZHM7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDb3Vyc2VCbG9ja3NUZWFjaGVyR3JhZGVCYW5kcztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9zdHVkaW9Ib21lcGFnZXMvQ291cnNlQmxvY2tzVGVhY2hlckdyYWRlQmFuZHMuanN4XG4vLyBtb2R1bGUgaWQgPSAzODc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMjAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9Db250ZW50Q29udGFpbmVyID0gcmVxdWlyZSgnLi4vQ29udGVudENvbnRhaW5lcicpO1xuXG52YXIgX0NvbnRlbnRDb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29udGVudENvbnRhaW5lcik7XG5cbnZhciBfVHdvQ29sdW1uQWN0aW9uQmxvY2sgPSByZXF1aXJlKCcuL1R3b0NvbHVtbkFjdGlvbkJsb2NrJyk7XG5cbnZhciBfQ291cnNlQmxvY2tzID0gcmVxdWlyZSgnLi9Db3Vyc2VCbG9ja3MnKTtcblxudmFyIF9Db3Vyc2VCbG9ja3NTdHVkZW50R3JhZGVCYW5kcyA9IHJlcXVpcmUoJy4vQ291cnNlQmxvY2tzU3R1ZGVudEdyYWRlQmFuZHMnKTtcblxudmFyIF9Db3Vyc2VCbG9ja3NTdHVkZW50R3JhZGVCYW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db3Vyc2VCbG9ja3NTdHVkZW50R3JhZGVCYW5kcyk7XG5cbnZhciBfbG9jYWxlID0gcmVxdWlyZSgnQGNkby9sb2NhbGUnKTtcblxudmFyIF9sb2NhbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9jYWxlKTtcblxudmFyIF91cmxIZWxwZXJzID0gcmVxdWlyZSgnQGNkby9hcHBzL2xpYi91dGlsL3VybEhlbHBlcnMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcbiAqIFRoaXMgaXMgdGhlIG1haW4gY29udGVudCBmb3IgdGhlIENvdXJzZXMgcGFnZSBmb3IgYSBzdHVkZW50IHVzaW5nIEVuZ2xpc2gsXG4gKiBhcyB3ZWxsIGFzIHRoZSBkZWZhdWx0IGZvciBhIHNpZ25lZC1vdXQgdXNlciB1c2luZyBFbmdsaXNoLlxuICovXG52YXIgQ291cnNlc1N0dWRlbnRFbmdsaXNoID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENvdXJzZXNTdHVkZW50RW5nbGlzaCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ291cnNlc1N0dWRlbnRFbmdsaXNoKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb3Vyc2VzU3R1ZGVudEVuZ2xpc2gpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBDb3Vyc2VzU3R1ZGVudEVuZ2xpc2gucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIG51bGwsXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfQ291cnNlQmxvY2tzU3R1ZGVudEdyYWRlQmFuZHMyLmRlZmF1bHQsIHtcbiAgICAgICAgc2hvd0NvbnRhaW5lcjogdHJ1ZSxcbiAgICAgICAgaGlkZUJvdHRvbU1hcmdpbjogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9Db250ZW50Q29udGFpbmVyMi5kZWZhdWx0LFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGluZzogX2xvY2FsZTIuZGVmYXVsdC50ZWFjaGVyQ291cnNlSG9jKCksXG4gICAgICAgICAgZGVzY3JpcHRpb246IF9sb2NhbGUyLmRlZmF1bHQudGVhY2hlckNvdXJzZUhvY0Rlc2NyaXB0aW9uKCksXG4gICAgICAgICAgbGlua1RleHQ6IF9sb2NhbGUyLmRlZmF1bHQudGVhY2hlckNvdXJzZUhvY0xpbmtUZXh0KCksXG4gICAgICAgICAgbGluazogKDAsIF91cmxIZWxwZXJzLnBlZ2FzdXMpKCcvaG91cm9mY29kZS9vdmVydmlldycpXG4gICAgICAgIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Db3Vyc2VCbG9ja3MuQ291cnNlQmxvY2tzSG9jLCB7IHJvd0NvdW50OiAxIH0pXG4gICAgICApLFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1R3b0NvbHVtbkFjdGlvbkJsb2NrLkxvY2FsQ2xhc3NBY3Rpb25CbG9jaywge1xuICAgICAgICBzaG93SGVhZGluZzogdHJ1ZVxuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBDb3Vyc2VzU3R1ZGVudEVuZ2xpc2g7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDb3Vyc2VzU3R1ZGVudEVuZ2xpc2g7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvc3R1ZGlvSG9tZXBhZ2VzL0NvdXJzZXNTdHVkZW50RW5nbGlzaC5qc3hcbi8vIG1vZHVsZSBpZCA9IDM4Nzlcbi8vIG1vZHVsZSBjaHVua3MgPSAyMCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN0VEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
