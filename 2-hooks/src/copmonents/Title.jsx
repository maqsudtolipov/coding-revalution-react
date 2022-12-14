import React from "react";

const Title = (props) => {
  console.log("1-Title");

  return <h1>Title</h1>;
};

export default React.memo(Title);
