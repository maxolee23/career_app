import React, {Component} from 'react'
import Category from './Category'
import NavBar from './NavBar'
import { List, Segment, Divider } from 'semantic-ui-react'

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
        console.log('hi')
        // debugger
        return(
            
            <div>
               {localStorage.token?
                <Segment style={{paddingLeft: 70, paddingRight: 70}} inverted>
                    <NavBar history={this.props.history}/>
                    <Divider/>
                    
                    <div className="cat-container">
                <h2>Select a category:</h2>
                
                <List inverted relaxed>
                {this.state.categorys.map((cat) => <List.Item><List.Content><List.Header><Category careers={cat.careers} category={cat}/></List.Header></List.Content></List.Item>)}
                </List>
                </div>
                </Segment>
                            
                :
                this.props.history.push('/login')}
                </div>                

           
            
            )
            
        








                    {/* <div>
                 {localStorage.token? */}
            {/* //     <div>
            //         <NavBar history={this.props.history}/>
            //         <div className="cat-container">
            //     <h1>Select a category:</h1>
            //     {this.state.categorys.map((cat) => <ul><Category careers={cat.careers} category={cat}/></ul> )}
            //     </div>
            //     </div>
            //     :
            //     this.props.history.push('/login')}
            // </div> */}

           
                
                
            
    }
}


export default CategoryList