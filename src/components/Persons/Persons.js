import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
    console.log('[Persons.js] is rendering now.');
    return (
        <div>
            {
                props.personsArray.map((person, index) => {
                    return (
                        <Person
                            key={person.id}
                            name={person.name}
                            age={person.age}
                            clickEventHandler={() => props.clicked(index)}
                            nameChanged={(event) => props.changed(event, person.id)} />
                    );
                })
            }
        </div>
    );
}

export default persons;
