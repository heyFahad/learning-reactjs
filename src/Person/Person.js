import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.clickEventHandler}>
                This is <span id="person-name" className="dynamic-content">{props.name}</span> here, and I'm <span id="person-age" className="dynamic-content">{props.age}</span> years old!
            </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.nameChanged} value={props.name}/>
        </div>
    );
}

export default person;