import React from 'react';
import "./ButtonHolder.css";
import {numbersArraySize} from "../enums/data";

const ButtonHolder = (props) => {
    const buttonHolderRef = React.createRef();
    const sliderRef = React.createRef();
    const rangeOnChangeHandler = (e) => {
        const val = e.target.value; 
        props.randomiseNumberState(val);
    }

    return (
        <div ref={buttonHolderRef}>
            <div className={`buttonHolder`}>
                <button className="styledButton" onClick={() => props.algo.BUBBLE(buttonHolderRef.current)}>Bubble</button>
                <button className="styledButton" onClick={() => props.algo.MERGE(buttonHolderRef.current)}>Merge</button>
                <button className="styledButton" onClick={() => props.algo.HEAP(buttonHolderRef.current)}>Heap</button>
                <button className="styledButton" onClick={() => props.algo.QUICK(buttonHolderRef.current)}>Quick</button>
                <button className="styledButton" onClick={() => props.randomiseNumberState(sliderRef.current.value)}>Randomize</button>
            </div>
            <div className="inputHolder">
                <label htmlFor="size">Adjust Array Size : &emsp; </label>
                <input id="size" type="range" ref={sliderRef} min={numbersArraySize.MINSIZE} max={numbersArraySize.MAXSIZE} defaultValue="10" className="slider" onChange={rangeOnChangeHandler} />
            </div>
        </div>
    )
};

export default ButtonHolder;