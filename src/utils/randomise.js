export default function randomiseNumberState() {
    let targetSize = Math.floor(Math.random()*100)+6;
    let targetArray = [];
    for(let i=0;i<targetSize;i++)
    {
        targetArray.push(Math.floor(Math.random()*200)+1);
    }
    this.setState({
      numbers:[...targetArray],
      activeBars: [],
      sortingComplete: false
    });
}