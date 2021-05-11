import React from 'react';
import './Bar.css';
import {barHeight} from "../enums/data";

const Bar = (props) => {

    const style = {
        "height" : `${(props.height/props.maxHeight)*barHeight.MAXVAL}px`,
        "width" : `${100/props.totalBars}%`,
        "maxWidth" : "80px",
    }

    return (
        <div className={`bar ${props.current && !props.sortingComplete ?"activeBar":""} ${props.sortingComplete?"greenBar":""}  ${props.referenceBar?"referenceBar":""}`} style={style}>
                {/* {props.height} */}
        </div>
    )
}

export default Bar;
