import React from 'react';
import BubbleSort from './algorithms/bubble';
import MergeSort from './algorithms/merge';
import HeapSort from './algorithms/heap';
import QuickSort from "./algorithms/quick";
import randomiseNumberState from "./utils/randomise"
import "./App.css";
import BarHolder from './components/BarHolder';
import ButtonHolder from './components/ButtonHolder';


class App extends React.Component{

  state = {
      numbers : [],
      activeBars : [],
      referenceBar : -1,
      sortingComplete : false
  }

  componentDidMount() {
    randomiseNumberState.call(this,10);
  }

  render()
  {
      const algo = {
        BUBBLE : BubbleSort.bind(this),
        MERGE : MergeSort.bind(this),
        HEAP : HeapSort.bind(this),
        QUICK : QuickSort.bind(this)
      }

      return (
          <div className="appDiv">
              <ButtonHolder algo = {algo} randomiseNumberState = {randomiseNumberState.bind(this)}/>
              <BarHolder referenceBar={this.state.referenceBar} barsData = {this.state.numbers} activeBars = {this.state.activeBars} sortingComplete={this.state.sortingComplete} />
          </div>
      )
  }
}

export default App;