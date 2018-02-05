import React from 'react'

import MedalChart from '../../MedalChart/MedalChart';
import MedalList from '../../MedalList/MedalList';

const medalListFN = (medalist, idx) => {
    return (
        <MedalList
            key={idx}
            name={medalist.Participant.c_Participant}
            gender={medalist.Gender.c_Name}
            event={medalist.Event.c_Name}/>
    )
}
const sportStatus = (props) => {
    const goldMedalList = props.status.GoldMedalList.map(medalListFN)
    const silverMedalList = props.status.SilverMedalList.map(medalListFN)
    const bronzeMedalList = props.status.BronzeMedalList.map(medalListFN)

    
    return (
        <div className="xs-6 top-buffer">
            <h5>{props.status.Sport.c_Name} ({props.status.Sport.c_Short})</h5>
            <MedalChart
                max={props.max}
                height={props.height}
                width={props.height}
                medals={props.status.Medals} />
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