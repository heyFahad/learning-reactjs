import React from 'react';

const validation = (props) => {
    let validationMessage = <p>Text long enough</p>;
    if (props.textLength < 5) {
        validationMessage = <p>Text too short</p>
    }

    return (
        <div>
            {validationMessage}
            {/* <p>{
                props.textLength >= 5 ? "Text long enough" : "Text too short"
            }</p> */}
        </div>
    );
}

export default validation;
