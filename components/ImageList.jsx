//List of images
var ImageList = ({images, getImg}) => (
    <ul> 
      { 
        images.map((image, i) =>
          <ImageListItem getImg={getImg} image={image} key={i}/>)
      }
    </ul>
);

ImageList.propType = {
  images: React.PropTypes.array.isRequired
};

window.ImageList = ImageList;