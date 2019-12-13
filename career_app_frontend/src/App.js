import React, {Component} from 'react';
import './App.css';
import CategoryList from './components/CategoryList';

class App extends Component {

  state={
    careers: [],
    categorys: [],
    items: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/careers')
    .then(res => res.json())
    .then(data => this.setState({
      careers: data
    }))

    fetch('http://localhost:3000/categorys')
    .then(res => res.json())
    .then(cats => this.setState({
      categorys: cats
    }))
  }


  render(){
  return (
    <div className="App">
      <div className="Container">
        <CategoryList categorys={this.state.categorys}/>
      </div>
    </div>
  );
}
}

export default App;
