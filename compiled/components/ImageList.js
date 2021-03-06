"use strict";

//List of images
var ImageList = function ImageList(_ref) {
  var images = _ref.images;
  var getImg = _ref.getImg;
  return React.createElement(
    "ul",
    null,
    images.map(function (image, i) {
      return React.createElement(ImageListItem, { getImg: getImg, image: image, key: i });
    })
  );
};

ImageList.propType = {
  images: React.PropTypes.array.isRequired
};

window.ImageList = ImageList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvSW1hZ2VMaXN0LmpzeCJdLCJuYW1lcyI6WyJJbWFnZUxpc3QiLCJpbWFnZXMiLCJnZXRJbWciLCJtYXAiLCJpbWFnZSIsImkiLCJwcm9wVHlwZSIsIlJlYWN0IiwiUHJvcFR5cGVzIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0EsSUFBSUEsWUFBWSxTQUFaQSxTQUFZO0FBQUEsTUFBRUMsTUFBRixRQUFFQSxNQUFGO0FBQUEsTUFBVUMsTUFBVixRQUFVQSxNQUFWO0FBQUEsU0FDWjtBQUFBO0FBQUE7QUFFSUQsV0FBT0UsR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBUUMsQ0FBUjtBQUFBLGFBQ1Qsb0JBQUMsYUFBRCxJQUFlLFFBQVFILE1BQXZCLEVBQStCLE9BQU9FLEtBQXRDLEVBQTZDLEtBQUtDLENBQWxELEdBRFM7QUFBQSxLQUFYO0FBRkosR0FEWTtBQUFBLENBQWhCOztBQVNBTCxVQUFVTSxRQUFWLEdBQXFCO0FBQ25CTCxVQUFRTSxNQUFNQyxTQUFOLENBQWdCQyxLQUFoQixDQUFzQkM7QUFEWCxDQUFyQjs7QUFJQUMsT0FBT1gsU0FBUCxHQUFtQkEsU0FBbkIiLCJmaWxlIjoiSW1hZ2VMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9MaXN0IG9mIGltYWdlc1xudmFyIEltYWdlTGlzdCA9ICh7aW1hZ2VzLCBnZXRJbWd9KSA9PiAoXG4gICAgPHVsPiBcbiAgICAgIHsgXG4gICAgICAgIGltYWdlcy5tYXAoKGltYWdlLCBpKSA9PlxuICAgICAgICAgIDxJbWFnZUxpc3RJdGVtIGdldEltZz17Z2V0SW1nfSBpbWFnZT17aW1hZ2V9IGtleT17aX0vPilcbiAgICAgIH1cbiAgICA8L3VsPlxuKTtcblxuSW1hZ2VMaXN0LnByb3BUeXBlID0ge1xuICBpbWFnZXM6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG59O1xuXG53aW5kb3cuSW1hZ2VMaXN0ID0gSW1hZ2VMaXN0OyJdfQ==