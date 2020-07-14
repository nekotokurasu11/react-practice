import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Tag from './components/Tag.js'
import TagCss from './components/TagCss.js'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <div><h1>Hello, world!</h1></div>
      </Route>
      <Route exact path="/tag">
        <Tag />
      </Route>
      <Route exact path="/tagcss">
        <TagCss />
      </Route>
    </Switch>
  </Router>
);


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
