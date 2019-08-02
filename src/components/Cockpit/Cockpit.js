import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
    useEffect(() => {
        // useEffect() runs for every (component) update and it runs after rendering the component.
        // Thus, we can do all the things that we'd be doing in componentDidMount() or componentDidUpdate() hooks of the class-based components, e.g. send an HTTP request or like that here in this method.
        console.log('[Cockpit.js] is in useEffect()');
    });

    const assignedClasses = [];
    if (props.personsArray.length <= 2) {
        assignedClasses.push(classes.red);  // classes = ['red'];
    }
    if (props.personsArray.length <= 1) {
        assignedClasses.push(classes.bold); // classes = ['red', 'bold'];
    }

    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Clicked;
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button
                onClick={props.switchPersons}>
                Switch Persons
            </button>
            <button
                className={btnClass}
                onClick={props.togglePersons}>
                {props.showPersons ? "Hide Persons" : "Show Persons"}
            </button>
        </div>
    );
}

export default Cockpit;
