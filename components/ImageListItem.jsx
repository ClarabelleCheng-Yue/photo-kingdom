class ImageListItem extends React.Component{
  constructor(props) {
    console.log(props);
    super(props);
  }

  render() {
    return (
      <li onClick={() => { this.props.getImg(this.props.image) }}>{this.props.image.description}</li>
    );
  }
};

window.ImageListItem = ImageListItem;
