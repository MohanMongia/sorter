import React from 'react';
import "./ButtonHolder.css";

const ButtonHolder = (props) => {
    const buttonHolderRef = React.createRef();
    
    return (
        <div className={`buttonHolder`} ref={buttonHolderRef}>
            <button className="styledButton" onClick={() => props.algo.BUBBLE(buttonHolderRef.current)}>Bubble</button>
            <button className="styledButton" onClick={() => props.algo.MERGE(buttonHolderRef.current)}>Merge</button>
            <button className="styledButton" onClick={() => props.algo.HEAP(buttonHolderRef.current)}>Heap</button>
            <button className="styledButton" onClick={() => props.algo.QUICK(buttonHolderRef.current)}>Quick</button>
            <button className="styledButton" onClick={props.randomiseNumberState}>Randomize</button>
        </div>
    )
};

export default ButtonHolder;