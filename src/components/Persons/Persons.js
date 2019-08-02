import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] is in getDerivedStateFromProps(props, state) Lifecycle Hook. ', props);
    //     return state;   // should return the updated state from this Lifecycle Hook (Lifecycle Method).
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] is in shouldComponentUpdate(nextProps, nextState) hook.');
        return nextProps.personsArray !== this.props.personsArray;
    }

    render() {
        console.log('[Persons.js] is rendering now.');
        return (
            <div>
                {
                    this.props.personsArray.map((person, index) => {
                        return (
                            <Person
                                key={person.id}
                                name={person.name}
                                age={person.age}
                                clickEventHandler={() => this.props.clicked(index)}
                                nameChanged={(event) => this.props.changed(event, person.id)} />
                        );
                    })
                }
            </div>
        );
    }

    componentDidMount() {
        console.log('[Persons.js] is in componentDidMount() method now.');
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] is in getSnapshotBeforeUpdate(prevProps, prevState) hook now.');
        return {message: 'Snapshot before update'}
        // return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] is in componentDidUpdate() hook now.');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] is in componentWillUnmount() hook now.');
    }
}

export default Persons;
