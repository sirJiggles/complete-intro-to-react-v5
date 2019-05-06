import React from "react";

const Details = props => {
  return <pre>{JSON.stringify(props, null, 4)}</pre>;
  // return <h1>hi!</h1>;
};

export default Details;
