import React, {Component, Fragment} from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
// import NavBar from './NavBar'

class Login extends Component {
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    login = (e) => {
        e.preventDefault()
    //    console.log(this.state.username)
        fetch('http://localhost:3000/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(res => res.json())
        .then(userInfo => {
            console.log(userInfo)
            localStorage.setItem("token", userInfo.token)
            if(userInfo.token){
                this.props.history.push('/categorys')
            }
        })
    }

    signupBtn = () => {
        this.props.history.push('/signup')
    }

        


    render(){
        return(
            <div>
            <Segment inverted>
          <Form inverted onSubmit={(e) => this.login(e)}>
            <Form.Group widths='equal'>
              <Form.Input fluid label='Username' placeholder='Username' onChange={(e)=> this.handleChange(e)} name="username" type="text"/>
              <Form.Input fluid label='Password' placeholder='Password' />
            </Form.Group>
            <Form.Checkbox label='I agree to the Terms and Conditions' />
            <Button type='submit' onChange={(e)=> this.handleChange(e)} >Submit</Button>
          </Form>
        </Segment>

        <Fragment>
        <Button positive onClick={()=> this.signupBtn()}>Sign up</Button>
        </Fragment>
        </div>
            // <div>
            //     <h2>Login</h2>
            //     <form onSubmit={(e) => this.login(e)}>
            //         <label>Username</label>
            //         <input onChange={(e)=> this.handleChange(e)} name="username" type="text" />
            //         <label>Password</label>
            //         <input name="password" type="password"/>
            //         <input onChange={(e)=> this.handleChange(e)} type="submit"/>
            //     </form>
            // </div>
        
        )
    }
}

export default Login 