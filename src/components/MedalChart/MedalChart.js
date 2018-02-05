import React from 'react';
import './MedalChart.css';

// get medal info
const getMedal = (medalObj) => {
    return {
        total: medalObj.n_Total,
        gold: medalObj.n_Gold,
        silver: medalObj.n_Silver,
        bronze: medalObj.n_Bronze
    }
}

const medalChart = (props) => {
    const unit = 'px'
    const max = props.max
    const barWidth = Math.round((props.width / 4) - 4);

    // circle radius and space for circle
    const r = barWidth / 2;    
    const circleSpace = r * 2.5


    const medals = getMedal(props.medals)
    const bars = Object.keys(medals).map((medal, idx) => {

        const gHeight = Math.round((medals[medal] / max) * props.height)
        const gx = Math.round((idx * barWidth) + idx);
        const gy = Math.round(props.height - gHeight - circleSpace);        
        
        const cx = Math.round(gx + (barWidth / 2))
        const cy = props.height - r;

        const textX = cx;
        const textY = cy;

        return (
            <g className="medal" key={idx}>
                <rect
                    className={medal}
                    height={gHeight + unit}
                    width={barWidth + unit}
                    x={gx + unit}
                    y={gy + unit}>
                </rect>
                <circle
                    className={medal}                
                    cx={cx + unit}
                    cy={cy + unit}
                    r={r + unit}>
                </circle>
                <text
                    textAnchor="middle"
                    x={textX + unit}
                    y={textY + unit}
                    dy="0.25em">
                    {medals[medal]}
                </text>
            </g>
        )
    })
    
    return (
    <svg
        width={ props.width + unit }
        height={ props.height + unit }
        viewBox={'0 0 ' + props.width + ' ' + props.height}>
        <title>{ props.title }</title>
        {bars}
    </svg>
)}

export default medalChart;