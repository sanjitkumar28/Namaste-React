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
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(reactRoot);
