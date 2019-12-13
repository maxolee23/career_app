import React, {Component} from 'react'
import Category from './Category'

class CategoryList extends Component {
    

    render(){
        console.log(this.props.categorys)
        return(
            <div className="cat-container">
                {this.props.categorys.map((cat) => <ul><Category cat={cat.title}/></ul> )}
            </div>
        )
    }
}


export default CategoryList