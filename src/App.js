import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({
      progress: progress
    })
  }

  render() {
    return (
      <>
        <Router>
          <NavBar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
           <switch><Route exact path="/"><News setProgress={this.setProgress} country="in" category="general" pageSize={20} /> </Route></switch>
          <switch><Route exact path="/sports"><News setProgress={this.setProgress} key="sports" country="in" category="sports" pageSize={20} /> </Route></switch>
          <switch><Route exact path="/health"><News setProgress={this.setProgress} key="health" country="in" category="health" pageSize={20} /> </Route></switch>
          <switch><Route exact path="/business"><News setProgress={this.setProgress} key="business" country="in" category="bussiness" pageSize={20} /> </Route></switch>
          <switch><Route exact path="/technology"><News setProgress={this.setProgress} key="technology" country="in" category="technology" pageSize={20} /> </Route></switch>
          <switch><Route exact path="/general"><News setProgress={this.setProgress} key="general" country="in" category="general" pageSize={20} /> </Route></switch>
          <switch><Route exact path="/entertainment"><News setProgress={this.setProgress} key="entertainment" country="in" category="entertainment" pageSize={20} /></Route>           </switch>
          <switch><Route exact path="/science"><News setProgress={this.setProgress} key="science" country="in" category="science" pageSize={20} /> </Route></switch>
        </Router>

      </>
    )
  }
}




