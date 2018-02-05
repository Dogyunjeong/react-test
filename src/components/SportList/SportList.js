import React from 'react'

import SportStatus from './SportStatus/SportStatus';

const sportList = (props) => {
    const list = props.sportList.map((obj, idx) => {        
        return (
            <SportStatus
                key={idx}
                status={obj}
                max={props.max}
                height={250}
                width={250}/>
        )
    })

    // return component
    return (
        <div className="row">
            {list}
        </div>
    )
}

export default sportList