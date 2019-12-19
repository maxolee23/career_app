import React, {Component} from 'react'
import Category from './Category'
import NavBar from './NavBar'

class CategoryList extends Component {

    state={
        categorys: []
      }
    

    componentDidMount(){
        fetch('http://localhost:3000/categorys',{
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${localStorage.token}`
            }})
            .then(res => res.json())
            .then(cats => this.setState({
              categorys: cats
            }))
            }

    render(){
        // console.log(this.state.categorys)
        console.log(this.history)
        // debugger
        return(
            <div>
                {localStorage.token?
                <div>
                    <NavBar history={this.props.history}/>
                    <div className="cat-container">
                <h1>Select a category:</h1>
                {this.state.categorys.map((cat) => <ul><Category careers={cat.careers} category={cat}/></ul> )}
                </div>
                </div>
                :
                this.props.history.push('/login')}
            </div>
        )
           
                
                
            
    }
}


export default CategoryList