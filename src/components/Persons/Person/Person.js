import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';

class Person extends Component {
    constructor(props) {
        super(props);
        this.InputElementRef = React.createRef();
    }

    render() {
        console.log('[Person.js] is rendering...');
        return (
            <div className={classes.Person}>
                <p onClick={this.props.clickEventHandler}>
                    This is <span id="person_name" className={classes.dynamicContent}>{this.props.name}</span> here, and I'm <span id="person_age" className={classes.dynamicContent}>{this.props.age}</span> years old!
                </p>
                <p>{this.props.children}</p>
                <input
                    ref={this.InputElementRef}
                    type="text"
                    onChange={this.props.nameChanged}
                    value={this.props.name} />
            </div>
        );
    }

    componentDidMount() {
        this.InputElementRef.current.focus();
    }
}

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    clickEventHandler: PropTypes.func,
    nameChanged: PropTypes.func
};

export default Person;
