"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      currentImage: _this.props.images[0]
    };
    return _this;
  }

  _createClass(App, [{
    key: "getClickedEntry",
    value: function getClickedEntry(img) {
      this.setState({
        currentImage: img
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          null,
          React.createElement(ImageView, { image: this.state.currentImage })
        ),
        React.createElement(
          "div",
          null,
          React.createElement(ImageList, { getImg: this.getClickedEntry.bind(this), images: this.props.images })
        )
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;

/*
   <div>
          <ImageView image={this.state.currentImage}/> 
        </div>
*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiY3VycmVudEltYWdlIiwiaW1hZ2VzIiwiaW1nIiwic2V0U3RhdGUiLCJnZXRDbGlja2VkRW50cnkiLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBLDBHQUNaQSxLQURZOztBQUdsQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsb0JBQWMsTUFBS0YsS0FBTCxDQUFXRyxNQUFYLENBQWtCLENBQWxCO0FBREgsS0FBYjtBQUhrQjtBQU1uQjs7OztvQ0FFZUMsRyxFQUFLO0FBQ25CLFdBQUtDLFFBQUwsQ0FBYztBQUNaSCxzQkFBY0U7QUFERixPQUFkO0FBR0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsOEJBQUMsU0FBRCxJQUFXLE9BQU8sS0FBS0gsS0FBTCxDQUFXQyxZQUE3QjtBQURGLFNBREY7QUFJRTtBQUFBO0FBQUE7QUFDRSw4QkFBQyxTQUFELElBQVcsUUFBUSxLQUFLSSxlQUFMLENBQXFCQyxJQUFyQixDQUEwQixJQUExQixDQUFuQixFQUFvRCxRQUFRLEtBQUtQLEtBQUwsQ0FBV0csTUFBdkU7QUFERjtBQUpGLE9BREY7QUFVRDs7OztFQTFCZUssTUFBTUMsUzs7QUE4QnhCQyxPQUFPWCxHQUFQLEdBQWFBLEdBQWI7O0FBR0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGN1cnJlbnRJbWFnZTogdGhpcy5wcm9wcy5pbWFnZXNbMF1cbiAgICB9O1xuICB9XG5cbiAgZ2V0Q2xpY2tlZEVudHJ5KGltZykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY3VycmVudEltYWdlOiBpbWdcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8SW1hZ2VWaWV3IGltYWdlPXt0aGlzLnN0YXRlLmN1cnJlbnRJbWFnZX0vPiBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEltYWdlTGlzdCBnZXRJbWc9e3RoaXMuZ2V0Q2xpY2tlZEVudHJ5LmJpbmQodGhpcyl9IGltYWdlcz17dGhpcy5wcm9wcy5pbWFnZXN9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxud2luZG93LkFwcCA9IEFwcDtcblxuXG4vKlxuICAgPGRpdj5cbiAgICAgICAgICA8SW1hZ2VWaWV3IGltYWdlPXt0aGlzLnN0YXRlLmN1cnJlbnRJbWFnZX0vPiBcbiAgICAgICAgPC9kaXY+XG4qLyJdfQ==