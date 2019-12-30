import React, { Component } from 'react'
import NavBar from './NavBar'
import { Segment, Divider } from 'semantic-ui-react'

class About extends Component {
    render() {
        return(
        <div>
            <Segment style={{minHeight: '100vh', paddingLeft: 70, paddingRight: 70}} inverted>
            <div>
                <NavBar history={this.props.history} />
                <Divider/>
            </div>
            <p>FindMyCareer was created to help college and high school students figure out what their ideal career path should be.</p>
            </Segment>
        </div>
        )
    }
}


export default About