import React from 'react';

const medalist = (props) => {
    return (
        <li className="list-group-item">{props.name} ({props.gender}) in {props.event}</li>
    )
}

export default medalist