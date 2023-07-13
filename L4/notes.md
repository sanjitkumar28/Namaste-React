### Notes ###
1. JSX can have only one parent element.
2. React.Fragment is the component that is exported by React. It is like an empty tag.
<>
</>
<React.Fragment>
</React.Fragment>
Both are the same thing.

3. Props-->Properties 
whenever i say i am passing some props to function component it means i am passing some data to it.  

4. Virtual DOM is representation of actual DOM. It is not actual DOM. It used reconcilation to update the DOM.
It has diff alogrithm which finds out the difference between the tree and update that part of tree only where there is difference and only re-render that part.

5. https://medium.com/javarevisited/react-reconciliation-algorithm-86e3e22c1b40#:~:text=Reconciliation%20is%20the%20process%20by%20which%20React%20updates%20the%20UI,Model)%20to%20update%20the%20UI.

6. Elements Of Different Types
Whenever the root elements have different types, React will tear down the old tree and build the new tree from scratch.

7. DOM Elements Of The Same Type
When comparing two React DOM elements of the same type, React looks at the attributes of both, keeps the same underlying DOM node, and only updates the changed attribute.

8. https://legacy.reactjs.org/docs/reconciliation.html
9. https://legacy.reactjs.org/docs/faq-internals.html
10. The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.

11. https://github.com/acdlite/react-fiber-architecture

12. https://desicoder.hashnode.dev/config-driven-ui

13. 