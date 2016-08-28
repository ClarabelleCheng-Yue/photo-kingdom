class ImageView extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='image'>
        <img src={this.props.image.url}/>
      </div>
    );
  }
}

window.ImageView = ImageView;