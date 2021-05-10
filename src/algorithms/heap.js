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

async function sortHeap()
{
    for(let i=this.state.numbers.length-1;i>0;i--)
    {
        await swapper.call(this,i,0);
        console.log(this.state.numbers[0]);
        let index = 0;
        let nextIndex = 0;
        let firstChild = getFirstChild.call(this,index);
        let secondChild = getSecondChild.call(this,index);
        while(index<i)
        {
            const temp = [...this.state.numbers];
            if(firstChild!==-1 && firstChild<i)
            {
                if(temp[firstChild]>temp[nextIndex])
                    nextIndex=firstChild;
            }
            if(secondChild!==-1 && secondChild<i)
            {
                if(temp[secondChild]>temp[nextIndex])
                    nextIndex=secondChild;
            }
            if(nextIndex===index)
                break;
            await swapper.call(this,index,nextIndex);
            index = nextIndex;
            firstChild = getFirstChild.call(this,index);
            secondChild = getSecondChild.call(this,index);
        }
    }
}

async function makeHeap()
{
    const temp = [...this.state.numbers];
    for(let i=0;i<temp.length;i++)
    {
        let index = i;
        let parent = getParent(index);
        while(parent !== index)
        {
            const result = await swapper.call(this,parent,index);
            if(result)
                break;
            index=parent;
            parent=getParent(index);
        }
    }
    return " ";
}


function getFirstChild(i)
{
    let l = this.state.numbers.length;
    if(2*i+1<l)
        return 2*i+1;
    return -1;
}

function getSecondChild(i)
{
    let l = this.state.numbers.length;
    if(2*i+2<l)
        return 2*i+2;
    return -1;
}


function getParent(i){
    return Number.parseInt((i-1)/2);
}

export default function heap(buttonHolderDivRef) {

    hider(buttonHolderDivRef);
    this.setState({
        sortingComplete:false,
        activeBars: []
    },async () => {
        makeHeap.call(this)
            .then(result => {
                return sortHeap.call(this);
            })
            .then(result => {
                this.setState({
                    activeBars: [],
                    sortingComplete:true
                },() => {
                    shower(buttonHolderDivRef);
                });
            })
            .catch(err => console.log(err));
    });
}