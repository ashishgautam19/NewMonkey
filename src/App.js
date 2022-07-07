import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  state = {
    progress: 0
  }
  setProgress = (progress)=>{
    this.setState({
      progress : progress})
  }

  render() {
    return (
      <>
      <NavBar/>
      <BrowserRouter>
      <Routes>
      

      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
       />
  
      <Route path="/general" element ={<News setProgress={this.setProgress}  country="in"  category="general"   pageSize={20} />}> </Route>
       {/* <Route exact path="/"><News setProgress={this.setProgress}  country="in"  category="general"   pageSize={20} /> </Route>
      <Route exact path="/sports"><News setProgress={this.setProgress} key="sports"  country="in"  category="sports" pageSize={20}  /> </Route>
      <Route exact path="/health"><News setProgress={this.setProgress} key="health" country="in"  category="health"  pageSize={20} /> </Route>
      <Route exact path="/business"><News setProgress={this.setProgress} key="business" country="in"  category="bussiness" pageSize={20}  /> </Route>
      <Route exact path="/technology"><News setProgress={this.setProgress} key="technology" country="in"  category="technology"  pageSize={20} /> </Route>
      <Route exact path="/general"><News setProgress={this.setProgress} key="general" country="in"  category="general" pageSize={20}  /> </Route>
      <Route exact path="/entertainment"><News setProgress={this.setProgress} key="entertainment" country="in"  category="entertainment" pageSize={20}  /> </Route>
      <Route exact path="/science"><News setProgress={this.setProgress} key="science" country="in"  category="science" pageSize={20}  /> </Route> 
         */}

      {/* <News setProgress={this.setProgress}country="in"  category="sports" /> */}
      </Routes>
      </BrowserRouter>
     </>
    )
  }
}




