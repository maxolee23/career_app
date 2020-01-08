import React, { Component } from 'react'
import NavBar from './NavBar'
import { Segment, Divider } from 'semantic-ui-react'
import '../App.css';

class About extends Component {
    render() {
        return(
        <div>
            <Segment style={{minHeight: '100vh', paddingLeft: 70, paddingRight: 70}} inverted>
            <div>
                <NavBar history={this.props.history} />
                <Divider/>
            </div>
            <div style={{textAlign: "center"}}>
            <h1>About</h1>
            </div>
            <div style={{textAlign: "center"}}>
            <h5>FindMyCareer was created to help college and high school students figure out what their ideal career path should be.</h5>
            </div>
            <h2>How to use FindMyCareer:</h2>
            <h4>In the home page, use the filter by Category dropdown menu, Sort Alphabetically button, or the search bar to help you find the career you would like to pursue. Clicking on a career will lead you to a page that will tell you the requirements that that career requires for a entry-level hiring.</h4>
            <h2>About me:</h2>
            <h4>I, Max Lee, am a software developer that understands that not everybody wants to stick with the career path that they have chosen as a child. I struggled a lot with wanting to pursue a lot of different careers; so many that I couldn't even decide on one and stick to one. This was my primary motivation for creating this web app: to help other indecisive high school/college students in finding out which career they would like to pursue, while informing them about how much school they would have to go through and what to expect when pursuing their desired career.  </h4>
            </Segment>
        </div>
        )
    }
}


export default About