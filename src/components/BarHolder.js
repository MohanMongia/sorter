import React from 'react';
import Bar from './Bar';
import "./BarHolder.css";


const BarHolder = (props) => {

    let totalBars = props.barsData.length;
    let maxHeight = 0;
    props.barsData.forEach(bar => {
        maxHeight=Math.max(maxHeight,bar);   
    });
    const renderHelper = () => {
        return props.barsData.map((num,index) => {
            const current = (!props.sortingComplete &&  (index===props.activeBars[0] || index===props.activeBars[1] )) ? true : false;
            return (
                <Bar key={index} maxHeight={maxHeight} totalBars={totalBars} sortingComplete={props.sortingComplete} height={num} current={current}/>
            );
        })
    }
    
    return (
        <div className="barHolderDiv">
            {renderHelper()}
        </div>
    )
}

export default BarHolder;