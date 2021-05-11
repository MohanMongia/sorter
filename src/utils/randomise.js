import {numbersArraySize,numbersValue} from "../enums/data";


export default function randomiseNumberState(val) {
    let targetSize;
    if(val===undefined)
    {
      targetSize = Math.floor(Math.random()*(numbersArraySize.MAXSIZE-numbersArraySize.MINSIZE))+numbersArraySize.MINSIZE+1;  
    }
    else
    {
      targetSize = val; 
    }
    let targetArray = [];
    for(let i=0;i<targetSize;i++)
    {
        targetArray.push(Math.floor(Math.random()*(numbersValue.MAXVAL-numbersValue.MINVAL))+numbersValue.MINVAL+1);
    }
    this.setState({
      numbers:[...targetArray],
      activeBars: [],
      sortingComplete: false
    });
}