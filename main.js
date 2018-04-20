import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router-dom'
import App from './App.jsx';
import About from './About'
import Repos from './Repos'
//import {Home,About,Contact} from './App.jsx';
ReactDOM.render((
   <Router history = {hashHistory}>
      <Route path = "/" component = {App}> 
         {/* <Route path = "/about" component = {About} />
         <Route path = "/repos" component = {Repos} /> */}
      </Route>
   </Router>

	
), document.getElementById('app'),document.body);
