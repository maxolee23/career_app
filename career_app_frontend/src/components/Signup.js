import React, {Component} from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

class Signup extends Component {

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    signUp = (e) => {
        e.preventDefault()
        console.log(this.state.username)
        // debugger
        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "user": {
                    username: this.state.username,
                    password: this.state.password
                }
            })
        }, this.props.history.push('/login'))      
    }

    render(){
        return(
            // <FormTextArea>Sign up</FormTextArea>
            <div style={{padding: '20px'}}>
            <Segment inverted style={{minHeight: '100vh'}}>
                <h1>Register now</h1>
          <Form inverted onSubmit={(e) => this.signUp(e)}>
            <Form.Group widths='equal'>
              <Form.Input fluid label='Username' placeholder='Username' onChange={(e)=> this.handleChange(e)} name="username" type="text"/>
              <Form.Input fluid label='Password' placeholder='Password' onChange={(e)=> this.handleChange(e)} name="password" type="password"/>
            </Form.Group>
            <Button type='submit' onChange={(e)=> this.handleChange(e)} >Sign up</Button>
          </Form>
        </Segment>
        </div>
            // <div>
            //     <h2>Signup</h2>
            //     <form onSubmit={(e) => this.signUp(e)}>
            //         <label>Username</label>
            //         <input onChange={(e)=> this.handleChange(e)} name="username" type="text" />
            //         <label>Password</label>
            //         <input onChange={(e)=> this.handleChange(e)} name="password" type="password" />
            //         <input type="submit"/>
            //     </form>
            // </div>
        )
    }
}

export default Signup