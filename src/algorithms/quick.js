import calculateDuration from "../utils/iterationTimeCalculator";
import hider,{shower} from "../utils/buttonHolderDivDisplay";

function swapper(first,second,pivot,duration)
{
    return  new Promise((resolve,reject) => {
        setTimeout(() => {
            const temp = [...this.state.numbers];
            this.setState({
                activeBars:[first,second],
                referenceBar:pivot
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
        },duration);
    })
}


async function helper(start,end,duration) {
    if(start >= end)
        return "";
    let pivot = end;
    let finalPivotPosition = start;
    let index = start;
    while(index<pivot)
    {
        if(this.state.numbers[index]<=this.state.numbers[pivot])
        {
            await swapper.call(this,index,index,pivot,duration);
            index++;
            finalPivotPosition=Math.max(finalPivotPosition,index);
        }
        else
        {
            while(finalPivotPosition<pivot &&  this.state.numbers[finalPivotPosition]>this.state.numbers[pivot])
            {
                await swapper.call(this,finalPivotPosition,pivot,pivot,duration);
                finalPivotPosition++;
            }
            if(finalPivotPosition===pivot)
            {
                console.log(this.state.numbers[finalPivotPosition]);
                break;
            }
            await swapper.call(this,finalPivotPosition,index,pivot,duration);
            index++;
        }
    }
    if(index === pivot)
    {
        await helper.call(this,start,pivot-1,duration);
    }
    else
    {
        await swapper.call(this,pivot,index,pivot,duration);
        await helper.call(this,start,index-1,duration);
        await helper.call(this,index+1,end,duration);
    }
    return "";

}

export default function quick(buttonHolderDivRef) {
    let duration = calculateDuration(this.state.numbers.length)
    hider(buttonHolderDivRef);
    this.setState({
        sortingComplete:false,
        activeBars: []
    },async () => {
        await helper.call(this,0,this.state.numbers.length-1,duration)
        this.setState({
            activeBars: [],
            sortingComplete:true,
            referenceBar:-1
        },() => {
            shower(buttonHolderDivRef);
        });
    });
}