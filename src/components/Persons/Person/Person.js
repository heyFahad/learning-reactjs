import React from 'react';
import classes from './Person.css';

const person = (props) => {
    console.log('[Person.js] is rendering...');
    return (
        <div className={classes.Person}>
            <p onClick={props.clickEventHandler}>
                This is <span id="person_name" className={classes.dynamicContent}>{props.name}</span> here, and I'm <span id="person_age" className={classes.dynamicContent}>{props.age}</span> years old!
            </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.nameChanged} value={props.name}/>
        </div>
    );
}

export default person;
