import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

// A Class-based Component (App)
class App extends Component {
  state = {
    persons: [
      { name: "Fahad Javed", age: 23 },
      { name: "Muhammad Bilal", age: 22 }
    ],
    showPersons: false
  }

  switchNamesAndAgesHandler = () => {
    // console.log("Was clicked!");
    // DON'T DO LIKE THIS: this.state.persons[0].name = "Bunty";
    this.setState({
      persons: [
        { name: this.state.persons[1].name, age: this.state.persons[1].age },
        { name: this.state.persons[0].name, age: this.state.persons[0].age }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: this.state.persons[0].age },
        { name: this.state.persons[1].name, age: this.state.persons[1].age }
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'deepskyblue',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    // console.log(this.state);
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button
          style={buttonStyle}
          onClick={this.togglePersonsHandler}>
          {this.state.showPersons ? "Hide Persons" : "Show Persons"}
        </button>
        {this.state.showPersons ?
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              nameChanged={this.nameChangedHandler} />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              clickEventHandler={this.switchNamesAndAgesHandler}>
              My hobby is: CRICKET
          </Person>
          </div> : null
        }
      </div>
    );
  }
}

export default App;

// A Functional App Component managing State of the component using useState() Hook...
/* const App = (props) => {
  const [personsStateArray, setPersonsState] = useState(
    {
      persons: [
        { name: "Fahad Javed", age: 23 },
        { name: "Muhammad Bilal", age: 22 }
      ]
    }
  );

  console.log(personsStateArray);

  const switchNamesAndAgesHandler = () => {
    // console.log("Was clicked!");
    // DON'T DO LIKE THIS: this.state.persons[0].name = "Bunty";
    setPersonsState({
      persons: [
        { name: personsStateArray.persons[1].name, age: personsStateArray.persons[1].age },
        { name: personsStateArray.persons[0].name, age: personsStateArray.persons[0].age }
      ]
    });
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working</p>
      <button onClick={switchNamesAndAgesHandler}>Switch Names and Ages</button>
      <Person name={personsStateArray.persons[0].name} age={personsStateArray.persons[0].age} />
      <Person name={personsStateArray.persons[1].name} age={personsStateArray.persons[1].age}>
        My hobby is: CRICKET
      </Person>
    </div>
  );
} */

// The default App Component created by the setup was as follow...
/* function App() {
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working</p>
      <Person name="Fahad Javed" age="23" />
      <Person name="Muhammad Bilal" age="22">My hobby is: CRICKET</Person>
    </div>
  );
} */
