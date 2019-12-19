import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Career extends Component {

    // state={
    //     careers: []
    // }

    // componentDidMount(){
    //     fetch('http://localhost:3000/careers',{
    //         method: 'GET',
    //         headers: {
    //           'Authorization': `Bearer ${localStorage.token}`
    //         }})
    //         .then(res => res.json())
    //         .then(cars => this.setState({
    //           careers: cars
    //         }))
    //         }
        
        render () {
            // console.log('props in Career', this.state.careers)
            return(
                
                <div>
                <h1>{this.props.location.state.category.title}</h1>
                <h3>{this.props.location.state.category.careers.map((car) => 
                <li>
                    <Link to={{
                        pathname: '/items', 
                        state: {
                            career: car,
                            items: this.props.location.state.category.items.filter(item => item.career_id === car.id)
                        }
                    }}>{car.name}</Link></li>
                )}</h3>
                </div>
            )
        }
        

    
}


export default Career
