import React from 'react';
import './Person.css'
    
const person = ( props ) => {
    return (
        <div className="Person">
            <h1 onClick={props.myclick}>大家好</h1>
            <p>我是{ props.name },来自{ props.school }</p>
            <input type="text" onChange={ props.changed } defaultValue={ props.name } />
        </div>
    );
}

export default person;