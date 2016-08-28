"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageListItem = function (_React$Component) {
  _inherits(ImageListItem, _React$Component);

  function ImageListItem(props) {
    _classCallCheck(this, ImageListItem);

    console.log(props);
    return _possibleConstructorReturn(this, (ImageListItem.__proto__ || Object.getPrototypeOf(ImageListItem)).call(this, props));
  }

  _createClass(ImageListItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "li",
        { onClick: function onClick() {
            _this2.props.getImg(_this2.props.image);
          } },
        this.props.image.description
      );
    }
  }]);

  return ImageListItem;
}(React.Component);

;

window.ImageListItem = ImageListItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvSW1hZ2VMaXN0SXRlbS5qc3giXSwibmFtZXMiOlsiSW1hZ2VMaXN0SXRlbSIsInByb3BzIiwiY29uc29sZSIsImxvZyIsImdldEltZyIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxhOzs7QUFDSix5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQkMsWUFBUUMsR0FBUixDQUFZRixLQUFaO0FBRGlCLHlIQUVYQSxLQUZXO0FBR2xCOzs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSSxTQUFTLG1CQUFNO0FBQUUsbUJBQUtBLEtBQUwsQ0FBV0csTUFBWCxDQUFrQixPQUFLSCxLQUFMLENBQVdJLEtBQTdCO0FBQXFDLFdBQTFEO0FBQTZELGFBQUtKLEtBQUwsQ0FBV0ksS0FBWCxDQUFpQkM7QUFBOUUsT0FERjtBQUdEOzs7O0VBVnlCQyxNQUFNQyxTOztBQVdqQzs7QUFFREMsT0FBT1QsYUFBUCxHQUF1QkEsYUFBdkIiLCJmaWxlIjoiSW1hZ2VMaXN0SXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEltYWdlTGlzdEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgY29uc29sZS5sb2cocHJvcHMpO1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHsgdGhpcy5wcm9wcy5nZXRJbWcodGhpcy5wcm9wcy5pbWFnZSkgfX0+e3RoaXMucHJvcHMuaW1hZ2UuZGVzY3JpcHRpb259PC9saT5cbiAgICApO1xuICB9XG59O1xuXG53aW5kb3cuSW1hZ2VMaXN0SXRlbSA9IEltYWdlTGlzdEl0ZW07XG4iXX0=