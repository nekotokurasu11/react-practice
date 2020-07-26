import React, { Component } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
// import Tag from './components/Tag.js'
// import TagCss from './components/TagCss.js'

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }
handePlusButton = () => {
  // だめです Do not mutate state directly. Use setState()
  // this.state = {count: this.state.count + 1}
  this.setState({count: this.state.count + 1})
}

handeMinusButton = () => {
  this.setState({count: this.state.count - 1})
}

  render() {
    // なぜか二回出てくる…
    console.log("render")
    return (
      <React.Fragment>
        <div>count {this.state.count}</div>
        <button onClick={this.handePlusButton}>+1</button>
        <button onClick={this.handeMinusButton}>-1</button>
      </React.Fragment>
    )
  }
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
