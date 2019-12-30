import React, {Component} from 'react';
import './App.css';
import CategoryList from './components/CategoryList';
import Login from './components/Login';
import Signup from './components/Signup'
import Career from './components/Career';
import Item from './components/Item';
import About from './components/About';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';
// import NavBar from './components/NavBar'

class App extends Component {

  render(){
    console.log(this.props.history)
  return (
    <BrowserRouter>
    <Switch>
    <Route path='/login' component={Login} history={this.props.history}/>

    <Route path='/signup' component={Signup}/>
    {/* <Route path='/categorys' render={() => <CategoryList history={this.history}/>}/> */}
    <Route path='/categorys' component={CategoryList} history={this.props.history}/>
    <Route path='/careers' component={Career}/>
    <Route path='/items' component={Item}/>
    <Route path='/about' component={About}/>
    </Switch>
    </BrowserRouter>
  );
}
}

export default App;
