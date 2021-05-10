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
                if(temp[first]<=temp[second])
                {
                    resolve(true);
                }
                else
                {
                    const [val] = temp.splice(second,1);
                    temp.splice(first,0,val);
                    this.setState({
                        numbers: [...temp],
                        activeBars:[first+1,second+1]
                    },() => {
                        resolve(false);
                    })
                }
            })
        },timing.DURATION);
    })
}


async function sortNumbers(start,end)
{
    if(start>=end)
        return "done";
    let mid = start + Number.parseInt((end-start)/2);
    await sortNumbers.call(this,start,mid);
    await sortNumbers.call(this,mid+1,end);
    let i=start,j=mid+1;
    while(i<=mid && j<=end)
    {
        const result = await swapper.call(this,i,j);
        if(result)
            i++;
        else
        {
            i++;
            j++;
            mid++;
        }
        continue;
    }
}




export default function sortHelper(buttonHolderDivRef)
{
    hider(buttonHolderDivRef);
    this.setState({
        sortingComplete:false
    },async () => {
        await sortNumbers.call(this,0,this.state.numbers.length-1);
        this.setState({
            activeBars: [],
            sortingComplete:true
        },() => {
            shower(buttonHolderDivRef);
        });
    })

}