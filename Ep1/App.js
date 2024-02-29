import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {id: "heading1"}, "Less GOooooo "),
    React.createElement("h2", {id: "heading2"}, "I am H2 nested tag ."),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {id: "heading1"}, "I am H1 nested tag of child2"),
    React.createElement("h2", {id: "heading2"}, "I am H2 nested tag of child2"),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
