import React from 'react';
import BubbleSort from './algorithms/bubble';
import MergeSort from './algorithms/merge';
import HeapSort from './algorithms/heap';
import QuickSort from "./algorithms/quick";

import {numbers} from './enums/data';
import randomiseNumberState from "./utils/randomise"
import "./App.css";
import BarHolder from './components/BarHolder';
import ButtonHolder from './components/ButtonHolder';


class App extends React.Component{

  state = {
      numbers : numbers.NUMBERS,
      activeBars : [],
      sortingComplete : false
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
              <BarHolder barsData = {this.state.numbers} activeBars = {this.state.activeBars} sortingComplete={this.state.sortingComplete} />
          </div>
      )
  }
}

export default App;