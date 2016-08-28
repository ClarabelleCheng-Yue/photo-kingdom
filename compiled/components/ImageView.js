'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageView = function (_React$Component) {
  _inherits(ImageView, _React$Component);

  function ImageView(props) {
    _classCallCheck(this, ImageView);

    return _possibleConstructorReturn(this, (ImageView.__proto__ || Object.getPrototypeOf(ImageView)).call(this, props));
  }

  _createClass(ImageView, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'image' },
        React.createElement('img', { src: this.props.image.url })
      );
    }
  }]);

  return ImageView;
}(React.Component);

window.ImageView = ImageView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvSW1hZ2VWaWV3LmpzeCJdLCJuYW1lcyI6WyJJbWFnZVZpZXciLCJwcm9wcyIsImltYWdlIiwidXJsIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsUzs7O0FBQ0oscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpSEFDWEEsS0FEVztBQUVsQjs7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxPQUFmO0FBQ0UscUNBQUssS0FBSyxLQUFLQSxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLEdBQTNCO0FBREYsT0FERjtBQUtEOzs7O0VBWHFCQyxNQUFNQyxTOztBQWM5QkMsT0FBT04sU0FBUCxHQUFtQkEsU0FBbkIiLCJmaWxlIjoiSW1hZ2VWaWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgSW1hZ2VWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ltYWdlJz5cbiAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMuaW1hZ2UudXJsfS8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbndpbmRvdy5JbWFnZVZpZXcgPSBJbWFnZVZpZXc7Il19