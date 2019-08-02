import React, { Component } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import classes from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] is in constructor(props) right now.');
    this.state = {
      persons: [
        { id: "FA15-BSE-058", name: "Muhammad Bilal", age: 21 },
        { id: "FA15-BSE-138", name: "Nazar Abbas", age: 22 },
        { id: "FA15-BSE-145", name: "Fahad Javed", age: 23 }
      ],
      showPersons: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] is in getDerivedStateFromProps(props, state) Lifecycle Hook. ', props);
    return state;   // should return the updated state from this Lifecycle Hook (Lifecycle Method).
  }

  shouldComponentUpdate(nextProps, nextState) {
      console.log('[App.js] is in shouldComponentUpdate(nextProps, nextState) hook.');
      return true;
  }

  switchPersonsHandler = () => {
    this.setState({
      persons: [
        { id: this.state.persons[2].id, name: this.state.persons[2].name, age: this.state.persons[2].age },
        { id: this.state.persons[0].id, name: this.state.persons[0].name, age: this.state.persons[0].age },
        { id: this.state.persons[1].id, name: this.state.persons[1].name, age: this.state.persons[1].age }
      ]
    });
  }

  nameChangedHandler = (event, personId) => {
    // First, find the index of the person whose name is being changed
    const personIndex = this.state.persons.findIndex((person) => {
      return person.id === personId;
    });

    // Then, fetch the actual person object by using the 'Spread' operator (as we don't want to mutate the state)
    const updatedPerson = { ...this.state.persons[personIndex] };

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
    this.setState({ persons: personsArray });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    console.log('[App.js] is in render() method now.');
    let personsData = null;

    if (this.state.showPersons) {
      personsData = <Persons
        personsArray={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          personsArray={this.state.persons}
          showPersons={this.state.showPersons}
          switchPersons={this.switchPersonsHandler}
          togglePersons={this.togglePersonsHandler} />
        {personsData}
      </div>
    );
  }

  componentDidMount() {
    console.log('[App.js] is in componentDidMount() method now.');
  }

  componentDidUpdate() {
    console.log('[App.js] is in componentDidUpdate() hook now.');
}
}

export default App;
