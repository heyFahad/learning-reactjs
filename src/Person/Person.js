import React from 'react';
import classes from './Person.css';

const person = (props) => {
    // Let's construct an example error in our this component, just to demostrate the use of Error Boundaries (a new feature added in React 16+) in React applications
    const random = Math.random();
    if (random >= 0.75) {
        throw new Error("Some went wrong!");
    }

    return (
        <div className={classes.Person}>
            <p onClick={props.clickEventHandler}>
                This is <span id="person_name" className={classes.dynamic_content}>{props.name}</span> here, and I'm <span id="person_age" className={classes.dynamic_content}>{props.age}</span> years old!
            </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.nameChanged} value={props.name}/>
        </div>
    );
}

export default person;
