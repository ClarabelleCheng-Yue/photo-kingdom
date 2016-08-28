class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currentImage: this.props.images[0]
    };
  }

  getClickedEntry(img) {
    this.setState({
      currentImage: img
    });
  }

  render() {
    return (
      <div>
        <div>
          <ImageView image={this.state.currentImage}/> 
        </div>
        <div>
          <ImageList getImg={this.getClickedEntry.bind(this)} images={this.props.images}/>
        </div>
      </div>
    );
  }

}

window.App = App;


/*
   <div>
          <ImageView image={this.state.currentImage}/> 
        </div>
*/