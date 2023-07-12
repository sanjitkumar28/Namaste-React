import React from "react";
import ReactDOM from "react-dom/client"

const heading1 = React.createElement("h2", null, "FrontEndFrameworks");
const listitem1 = React.createElement("li", null, "React");
const listitem2 = React.createElement("li", null, "Angular");
const listitem3 = React.createElement("li", null, "Vue");
const unorderdList = React.createElement(
  "ul",
  null,
  listitem1,
  listitem2,
  listitem3
);
const reactRoot = React.createElement("div", null, heading1, unorderdList);
const heading = <div>New heading</div>
const mainHeading = "Welcome to React JS";
const Header = () => {
  return (
    <div id="root">
      {
        mainHeading
      }
      {
        console.log("welcome to ReactJS")
      }
      <h1> Namaste React</h1>
    </div>
  )
}
const element = <div>
  <h1>Hello!</h1>
  <h2>Good to see you here.</h2>
</div>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
