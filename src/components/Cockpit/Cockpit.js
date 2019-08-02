import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    console.log('[Cockpit.js] is now rendering!');
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

export default cockpit;
