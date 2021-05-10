import React from 'react';
import './Bar.css';

const Bar = (props) => {

    const style = {
        "height" : `${(props.height/props.maxHeight)*700}px`,
        "width" : `${100/props.totalBars}%`,
        "maxWidth" : "20px"
    }

    return (
        <div className={`bar ${props.current && !props.sortingComplete ?"activeBar":""} ${props.sortingComplete?"greenBar":""}`} style={style}>
                {/* {props.height} */}
        </div>
    )
}

export default Bar;
