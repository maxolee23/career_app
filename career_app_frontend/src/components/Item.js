import React, { Component } from 'react'
// import { List } from 'semantic-ui-react'
// import {Link} from 'react-router-dom'
import { List, Segment, Divider } from 'semantic-ui-react'
import NavBar from './NavBar'

const dummy = [
    {
        "jobtitle": "Java Developer",
        "company": "XYZ Corp.,",
        "city": "Austin",
        "state": "TX",
        "country": "US",
        "formattedLocation": "Austin, TX",
        "source": "Dice",
        "date": "Mon, 02 Aug 2017 16:21:00 GMT",
        "snippet": "Java jAva java",
        "url": "http://www.indeed.com/viewjob?jk=12345&indpubnum=8343699265155203",
        "onmousedown": "indeed_clk(this, '0000');",
        "latitude": 30.27127,
        "longitude": -97.74103,
        "jobkey": "12345",
        "sponsored": false,
        "expired": false,
        "indeedApply": true,
        "formattedLocationFull": "Austin, TX",
        "formattedRelativeTime": "11 hours ago"
    }
]

class Item extends Component {
    state = {
        data: dummy
    }

    componentDidMount() {

        //1 construct url with job title (this.props.location.state.career.name) and Houston, TX as location
        //2 fetch url
        //3 after u get response, get json of response and then get "results" key from json
        //4 set the results as this.state.data
    }

    render() {
        console.log('props in Career', this.props.location.state)
        return (
            <div>
                <div>
                    {localStorage.token ?
                        <Segment style={{ minHeight: '100vh', paddingLeft: 70, paddingRight: 70 }} inverted>
                            <NavBar history={this.props.history} />
                            <Divider />

                            <h1>{this.props.location.state.career.name}</h1>
                            <List inverted relaxed bulleted>
                                <h4>{this.props.location.state.items.map((item) =>
                                    <List.Item><List.Content><List.Header>{item.name}</List.Header></List.Content></List.Item>)}</h4>
                            </List>
                        </Segment>
                        :
                        this.props.history.push('/login')}
                </div>
                <div className="job-container">
                
                {this.state.data.map((data) => data.company)}
               </div>

            </div>
            
                
            )
    }



}


export default Item
