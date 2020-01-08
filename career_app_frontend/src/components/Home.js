import React, { Component } from 'react'
import NavBar from './NavBar'
import SearchBar from './SearchBar'
import {  Card, Segment, Divider, Dropdown, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Home extends Component {

    state = {
        careers: [],
        categorys: [],
        displayCareers: [],
        states: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/careers', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.token}`
            }
        })
            .then(res => res.json())
            // .then(console.log)
            .then(cars => {
                // console.log(cars)
                let newArr = []
                cars.forEach(c => newArr.push(c.categorys[0].title))
                let updatedArr = Array.from(new Set(newArr))
                let nut = updatedArr.map((s,i) => {
                    return {text: s, value: s}
                })
                this.setState({
                    careers: cars,
                    categorys: updatedArr,
                    displayCareers: cars,
                    states: nut
                }, () => console.log('logging after setting state', this.state.categorys))
            })
    }

    // item = () => {
    //     this.props.history.push('/about')
    // }

    searchCar = (e) => {
        // console.log(e.target.value)
        let filtered = this.state.careers.filter((x) => x.name.toLowerCase().includes(e.target.value.toLowerCase()) )
        // console.log(filtered);
        this.setState({
          displayCareers: filtered
        })
      }
    

    filterCats = (e, data) => {
        // console.log(data.value);
        // console.log(this.state.careers);
        // console.log(this.state.careers.filter(car => car.categorys[0].title === data.value))
        // this.state.careers.forEach(c => console.log(c.categorys[0].title))
        // data.preventDefault()
        this.setState({
          displayCareers: this.state.careers.filter(car => car.categorys[0].title === data.value)
        })
      }

      sortByName = () => {
        // debugger
        let cars = this.state.displayCareers.sort((a,b) => a.name > b.name ? 1 : -1 )
        this.setState({
          displayCareers: cars
        })
      }

      resetState = () => {
          this.setState({
              displayCareers: this.state.careers
          })
      }

      

    render() {
        // console.log(this.state.careers)
        return (

            <div>
                {localStorage.token ?
                    <Segment style={{ minHeight: '100vh', paddingLeft: 70, paddingRight: 70 }} inverted>
                        <div>
                            <NavBar history={this.props.history} />
                            <Divider />
                            <div className= 'filter-container' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <SearchBar textAlign="center" categories={this.state.categorys} search={this.searchCar} />
                            <Button style={{float: 'right'}} primary onClick={() => this.sortByName()}>Sort Alphabetically</Button>
                            <Button style={{float: 'right'}}inverted onClick={() => this.resetState()}>reset</Button>
                            <Dropdown style={{float: 'right'}} placeholder='Filter by Categories' search selection options={this.state.states} onChange={this.filterCats}/>

                            </div>
                            {/* <h2 style={{textAlign: 'left'}}>Filter by Category:</h2> */}
                            
                            
                            {console.log(this.state.careers)}
                        </div>
                        <Divider/>
                        {this.state.careers? 
                        
                            this.state.displayCareers.map((car) => <Card inverted relaxed >
                           
                            <Link to={{
                                pathname: '/items',
                                state: {
                                    career: car,
                                    // items: this.state.careers.items.filter(item => item.career_id === car.id)
                                }
                            }}><Card.Content header={car.name}/></Link></Card>)
                            
                        
                            :
                            <h1>empty</h1>
                        }

    


                    </Segment>
                    :
                    this.props.history.push('/login')}
            </div>
        )
    }
}

export default Home