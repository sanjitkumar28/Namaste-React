###
1. React is a library that is specifically designed to interact with DOM for us. From now onwards we don’t update DOM directly instead we’re going to tell react to update the DOM for us. React will take care of rendering and reconciling the element for us through the command we give to react.

2. The React element is just a JavaScript object that describes the DOM element in memory. During the rendering process, React converts the React element to the actual DOM element.

3.  ReactDOM is the middleman that renders the React element in the browser.

4. Call createRoot to create a React root for displaying content inside a browser DOM element.|

5. if we render more than 1 element in root.render it will update the code with the last child that is being rendered