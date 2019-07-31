import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
    const customInlineStyle = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
        // media queries require that we wrap our whole application in 'StyleRoot' component provided by 'Radium'.
        // For applying my media query like this (by using Radium), I also wrapped my App in StyleRoot in the render method of App.js file.
    };

    return (
        <div className="Person" style={customInlineStyle}>
            <p onClick={props.clickEventHandler}>
                This is <span id="person-name" className="dynamic-content">{props.name}</span> here, and I'm <span id="person-age" className="dynamic-content">{props.age}</span> years old!
            </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.nameChanged} value={props.name}/>
        </div>
    );
}

export default Radium(person);