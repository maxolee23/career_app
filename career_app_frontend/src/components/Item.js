import React, { Component } from 'react'
// import {Link} from 'react-router-dom'

class Item extends Component {
        
        render () {
            console.log('props in Career', this.props.location.state)
            return(
                
                <div>
        <h1>{this.props.location.state.career.name}</h1>
        <h4>{this.props.location.state.items.map((item) => <li><ul>{item.name}</ul></li>)}</h4>
                </div>
            )
        }
        

    
}


export default Item
