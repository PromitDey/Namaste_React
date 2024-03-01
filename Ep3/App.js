import React, { Component } from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <h1>Hi, I'm Title</h1>;
};

//React Component
const HeadingComponent = () => {
  return (
    <div>
      {Title()}
      <h1 className="heading">Namaste React using Funcitonal Component 🚀</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />); //we can render React Component like this
