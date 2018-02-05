import React from 'react';
import './MedalChart.css';


const medalChart = (props) => {
    const unit = 'px'
    const max = props.max
    const barWidth = Math.round((props.width / 4) - 4);
    const r = barWidth / 2;    
    const circleSpace = r * 2.5

    const bars = Object.keys(props.medals).map((medal, idx) => {

        const gHeight = Math.round((props.medals[medal] / max) * props.height)
        const gX = Math.round((idx * barWidth) + idx);
        const gy = Math.round(props.height - gHeight - circleSpace);        

        
        const cx = Math.round(gX + (barWidth / 2))
        const cy = props.height - r;

        const textX = cx;
        const textY = cy;

        return (
            <g className="medal" key={idx}>
                <rect
                    className={medal}
                    height={gHeight + unit}
                    width={barWidth + unit}
                    x={gX + unit}
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
                    {props.medals[medal]}
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