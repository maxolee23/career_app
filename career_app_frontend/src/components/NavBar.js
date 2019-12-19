import React, { Component} from 'react';
import {Button} from 'semantic-ui-react'
// import './App.css';


class NavBar extends Component {

  logout = () => {
    localStorage.clear();
    this.props.history.push('/login')
  }

  render() {
    return (
        <div>
        <h1>CareerFinder</h1>
        <Button align="right" negative onClick={() => this.logout()}>Log Out</Button>
        </div>
    );
  }

}

export default NavBar;