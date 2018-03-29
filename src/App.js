import React, { Component } from 'react';
import axios from 'axios';
import HeatMap from 'react-heatmap-grid';
import './App.css'
class App extends Component {
  state={
    x:[],
    y:[],
    grid:[]
  }
  componentWillMount(){
   let self = this;
  axios.get('/gridData.json')
  .then(res=>{
    self.setState({
      x:res.data.apis,
      y:res.data.times,
      grid:res.data.data
    })
 }).catch(err=>console.log(err))
}
render() {
  return (
    <div >
    <div className='container'>
    <HeatMap
    background='green'
    xLabels={this.state.x}
    yLabels={this.state.y}
    data={this.state.grid}
    />
    </div>
    </div>
    );
}
}
export default App;
