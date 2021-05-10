import {timing} from "../enums/data";
import hider,{shower} from "../utils/buttonHolderDivDisplay";

function swapper(first,second)
{
    return  new Promise((resolve,reject) => {
        setTimeout(() => {
            const temp = [...this.state.numbers];
            this.setState({
                activeBars:[first,second]
            },() => {
                if(temp[first]>=temp[second])
                {
                    resolve(true);
                }
                else
                {
                    [temp[first],temp[second]] = [temp[second],temp[first]];
                    this.setState({
                        numbers: [...temp],
                    },() => {
                        resolve(false);
                    })
                }
            })
        },timing.DURATION);
    })
}


async function helper(start,end) {
    if(start === end)
        return "";
    let pivot = end;
    let finalPivotPosition = start;
    let index = start;
    while(index<pivot)
    {
        if(this.state.numbers[index]<=this.state.numbers[pivot])
        {
            await swapper.call(this,index,index);
            index++;
            finalPivotPosition=Math.max(finalPivotPosition,index);
        }
        else
        {
            while(finalPivotPosition<pivot &&  this.state.numbers[finalPivotPosition]>this.state.numbers[pivot])
            {
                finalPivotPosition++;
            }
            if(finalPivotPosition===pivot)
            {
                break;
            }
            await swapper.call(this,index,finalPivotPosition);
            index++;
        }
    }
    if(index === pivot)
    {
        await helper.call(this,start,index-1);
    }
    else{
        await swapper.call(this,index,pivot);
        await helper.call(this,start,index-1);
        await helper.call(this,index+1,end);
    }
    return "";

}

export default function quick(buttonHolderDivRef) {
    hider(buttonHolderDivRef);
    this.setState({
        sortingComplete:false,
        activeBars: []
    },async () => {
        await helper.call(this,0,this.state.numbers.length-1)
        this.setState({
            activeBars: [],
            sortingComplete:true
        },() => {
            shower(buttonHolderDivRef);
        });
    });
}