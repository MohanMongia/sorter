import hider,{shower} from "../utils/buttonHolderDivDisplay";
import calculateDuration from "../utils/iterationTimeCalculator";

function helper(i,duration) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const originalNumbers = [...this.state.numbers];
            const newNumbers = [...originalNumbers];
            if(newNumbers[i]>newNumbers[i+1])
                [newNumbers[i],newNumbers[i+1]] = [newNumbers[i+1],newNumbers[i]];
            this.setState({
                numbers:newNumbers,
                activeBars:[i,i+1]
            },() => {
                resolve(`iteration for index ${i}`);
            })
        },duration);
    });
}
export default async function sortHelper(buttonHolderDivRef)
{
    let duration = calculateDuration(this.state.numbers.length);
    hider(buttonHolderDivRef);
    const numbers = this.state.numbers;
    this.setState({sortingComplete:false})
    for(let i=0;i<numbers.length-1;i++)
    {
        for(let j=0;j<numbers.length-i-1;j++)
        {
            await helper.call(this,j,duration);
        }
    }
    this.setState({
        sortingComplete:true,
        activeBars:[]
    },() => {
        shower(buttonHolderDivRef);
    });
    
}
