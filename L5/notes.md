#### L5 Notes ###

1. We can name our file Header.js or Header.jsx both are almost same.Same goes for Typescript files also.
2. export -->
  2.1 export const Header=()=>{}.  ===> import {Header} from [filepath]
  2.2 const Header=()=>{} export default Header ===>  import Header or any name u like from [filepath]
  2.3 import * from [filepath]
  import * as p from "./src/Header";
  <p.Header/> [if we want to put inside the other component]
  we can only export one component as default. 

3. Every component in react maintains the state and we can put all the variable in the state. Every time if we need to create a local variable in react we use state variable. state==> variable in react that keep changing.

4. At the end of day Hooks are normal function which are provided to us by facebook developers. State variables are react variables. 1 way data binding input element react. when we update input it does work.

5.   useState==>normal function (hook) which returns two things

const [searchText,setSearchText]=useState();  [variable name,function to update the variable]

if we want to pass any default value we can pass it inside useState("js") like this.

6. Everytime we want our variable to be with sync with UI we will use state variable. if we change our local variable react will not know we have changed our variable and it will not re-render the component and old value will be display in ui.