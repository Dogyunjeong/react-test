import React from 'react'

import SportStatus from './SportStatus/SportStatus';

const sportList = (props) => {
    const list = props.sport.map((obj, idx) => {
        
        return (
            <SportStatus
                key={idx}
                name={obj.name}
                short={obj.short}
                max={obj.max}
                height={250}
                width={250}
                medals={obj.medals}
                medalList={obj.medalList}/>
        )
    })
    return (
        <div className="row">
            {list}
        </div>
    )
}

export default sportList