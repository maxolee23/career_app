import React, { Component} from 'react';
import {Button} from 'semantic-ui-react'
// import './App.css';


class NavBar extends Component {

  home = () => {
    this.props.history.push('/home')
  }

  logout = () => {
    localStorage.clear();
    this.props.history.push('/login')
  }

  about = () => {
    this.props.history.push('/about')
  }

  category = () => {
    this.props.history.push('/categorys')
  }

  render() {
    return (
        <div style={{display: 'flex'}}>
        <h1 style={{width: '55%'}}>FindMyCareer</h1>
      <Button style={{width: '12'}} onClick={() => this.home()}>Home</Button>
      <Button style={{width: '12%' }} onClick = {() => this.about()}>About</Button>
      <Button primary style={{width: '12%'}} onClick = {() => this.category()}>Categories</Button>
        <Button style={{width: '12%'}} align="right" negative onClick={() => this.logout()}>Log Out</Button>
        </div>
    );
  }

}

export default NavBar;