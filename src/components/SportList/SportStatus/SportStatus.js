import React from 'react'

import MedalChart from '../../MedalChart/MedalChart';
import Medalist from '../../Medalist/Medalist';

const medalListFN = (medalist, idx) => {
    return (
        <Medalist
            key={idx}
            name={medalist.name}
            gender={medalist.gender}
            event={medalist.event}/>
    )
}
const sportStatus = (props) => {
    const goldMedalList = props.medalList.goldMedalList.map(medalListFN)
    const silverMedalList = props.medalList.silverMedalList.map(medalListFN)
    const bronzeMedalList = props.medalList.bronzeMedalList.map(medalListFN)

    
    return (
        <div className="xs-6 top-buffer">
            <h5>{props.name} ({props.short})</h5>
            <MedalChart
                max={props.max}
                height={props.height}
                width={props.height}
                medals={props.medals} />
            <p>Golden MedalList</p>
            <ul className="list-group">
                {goldMedalList}
            </ul>
            <p>Sliver MedalList</p>
            <ul className="list-group">
                {silverMedalList}
            </ul>
            <p>Bronze MedalList</p>
            <ul className="list-group">
                {bronzeMedalList}
            </ul>
        </div>

    )
}

export default sportStatus;