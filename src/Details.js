import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

class Details extends React.Component {
  state = { loading: true };

  componentDidMount() {
    // throw new Error("test error boundary!");
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}. ${
          animal.contact.address.state
        }`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false
      });
    }, console.error);
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading</h1>;
    }

    const { animal, breed, location, description, name, media } = this.state;
    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>{`Adopt ${name}`}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

// we need to make a higher order component that wraps boundary here, the reason
// is because if we just wrap it round details above it will not catch the errors for
// the class that it is actually IN. so we wrap with a function export that function
// and boom we have the higher oder component and a way around it!
export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      {/* pass the props through here */}
      <Details {...props} />
    </ErrorBoundary>
  );
}
