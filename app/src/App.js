import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
// import Tag from './components/Tag.js'
// import TagCss from './components/TagCss.js'

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}


// class App extends Component {
//   render() {
//     // const greeting = "Hi, Tom!";
//     // const dom = <h1 className="foo">{greeting}</h1>
//     // return dom;

//     // return <input type="text" onClick={()=> {console.log("I am clicked")}}/>;
//     return(
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onChange={() => { console.log("I am clicked") }} />
//     </React.Fragment>
//     )
//   }
// }

// const App = () => (
//   <Router>
//     <Switch>
//       <Route exact path="/">
//         <h1>Hello, world!</h1>
//       </Route>
//       <Route exact path="/tag">
//         <Tag />
//       </Route>
//       <Route exact path="/tagcss">
//         <TagCss />
//       </Route>
//     </Switch>
//   </Router>
// );


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
