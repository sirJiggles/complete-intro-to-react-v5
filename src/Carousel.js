// People can se pics of animals
import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };

  // take in set of props do some filtering then pass them to the component
  // this is a good way to handle derived state
  // is a nice way to abstract some of the logic into this little handler
  static getDerivedStateFromProps({ media }) {
    // default image
    let photos = ["http://placecorgi.com/600/600"];
    if (media.length) {
      photos = media.map(({ large }) => large);
    }
    // return what we want to be merged into the state (on this component)
    return photos;
  }

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handleClickIndex}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
