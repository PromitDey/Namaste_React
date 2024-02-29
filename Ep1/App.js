/*
<div id = "parent">
    <div id = "child">
        <h1>I am H1 nested tag</h1>
        <h2>I am H1 nested tag</h2>
    </div>
    <div id = "child2">
        <h1>I am H1 nested tag</h1>
        <h2>I am H1 nested tag</h2>
    </div>
</div>

creating this above nested thing in JS
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {id: "heading1"}, "I am H1 nested tag"),
    React.createElement("h2", {id: "heading2"}, "I am H2 nested tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {id: "heading1"}, "I am H1 nested tag of child2"),
    React.createElement("h2", {id: "heading2"}, "I am H2 nested tag of child2"),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
