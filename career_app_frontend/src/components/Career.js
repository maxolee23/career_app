import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, Segment, Divider } from 'semantic-ui-react'
import NavBar from './NavBar'

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

    render() {
        // console.log('props in Career', this.state.careers)
        // console.log(this.props.location.state.category.careers)
        // debugger
        return (
            <div>
                {localStorage.token ?
                    <Segment style={{minHeight: '100vh', paddingLeft: 70, paddingRight: 70}} inverted>
                        <NavBar history={this.props.history}/>
                        <Divider />
                        <h1>{this.props.location.state.category.title}</h1>
                        
                        <List inverted relaxed>
                            <h2>{this.props.location.state.category.careers.map((car) =>
                                <Link to={{
                                    pathname: '/items',
                                    state: {
                                        career: car,
                                        items: this.props.location.state.category.items.filter(item => item.career_id === car.id)
                                    }
                                }}> <List.Item><List.Content><List.Header>{car.name}</List.Header></List.Content></List.Item></Link>
                            )}
                            </h2>
                        </List>

                    </Segment>
                    :
                    this.props.history.push('/login')}
            </div>






            // <div>
            // <h1>{this.props.location.state.category.title}</h1>
            // <h3>{this.props.location.state.category.careers.map((car) => 
            // <li>
            //     <Link to={{
            //         pathname: '/items', 
            //         state: {
            //             career: car,
            //             items: this.props.location.state.category.items.filter(item => item.career_id === car.id)
            //         }
            //     }}>{car.name}</Link></li>
            // )}</h3>
            // </div>
        )
    }



}


export default Career
