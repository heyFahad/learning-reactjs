import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

// A Class-based Component (App)
class App extends Component {
  state = {
    userInput: ""
  }

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value});
  }

  switchPersonsHandler = () => {
    // console.log("Was clicked!");
    // DON'T DO LIKE THIS: this.state.persons[0].name = "Bunty";
    this.setState({
      persons: [
        { id: this.state.persons[1].id, name: this.state.persons[1].name, age: this.state.persons[1].age },
        { id: this.state.persons[0].id, name: this.state.persons[0].name, age: this.state.persons[0].age }
      ]
    });
  }

  nameChangedHandler = (event, personId) => {
    // First, find the index of the person whose name is being changed
    const personIndex = this.state.persons.findIndex((person) => {
      return person.id === personId;
    });

    // Then, fetch the actual person object by using the 'Spread' operator (as we don't want to mutate the state)
    const updatedPerson = {...this.state.persons[personIndex]};

    // Update the person's name in this separate Person object and then reflect that change in a separate personsArray
    updatedPerson.name = event.target.value;
    const personsArray = [...this.state.persons];
    personsArray[personIndex] = updatedPerson;

    // Finally, update the actually 'state' so that React can re-render the DOM
    this.setState({
      persons: personsArray
    });
  }

  deletePersonHandler = (personIndex) => {
    // const personsArray = this.state.persons.slice();
    // An alternative to using the 'slice()' method is using the 'Spread' operator (...) as follows
    const personsArray = [...this.state.persons];
    personsArray.splice(personIndex, 1);

    // update the actual state to re-render the DOM
    this.setState({persons: personsArray});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.inputChangedHandler}/>
        <p>Length of the entered input is: {this.state.userInput.length}</p>
      </div>
    );
  }

  /* render() {
    const buttonStyle = {
      display: 'inline',
      backgroundColor: 'deepskyblue',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      margin: 'auto 16px'
    };

    let personsData = null;

    if (this.state.showPersons) {
      personsData = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return (
                <Person
                key = {person.id}
                name = {person.name}
                age = {person.age}
                clickEventHandler = {this.deletePersonHandler.bind(this, index)}
                nameChanged = {(event) => this.nameChangedHandler(event, person.id)} />
              );
            })
          }
        </div>
      );
    }

    // console.log(this.state);
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button
          style = {buttonStyle}
          onClick = {this.switchPersonsHandler}>
            Switch Persons
        </button>
        <button
          style={buttonStyle}
          onClick={this.togglePersonsHandler}>
            {this.state.showPersons ? "Hide Persons" : "Show Persons"}
        </button>
        {personsData}
      </div>
    );
  } */
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

  const switchPersonsHandler = () => {
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
      <button onClick={switchPersonsHandler}>Switch Names and Ages</button>
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
