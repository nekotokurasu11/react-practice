import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
// import Tag from './components/Tag.js'
// import TagCss from './components/TagCss.js'

const App = () => {
// userの情報をまとめる
const profiles =[
  {name : "Taro", age : 10},
  {name : "Hanako", age : 5},
  {name : "NoName" }
]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

User.defaultProps = {
  age: 1
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
