import React, { Component } from 'react'

import Button from '../Generic/Button/Button'
import Checkbox from '../Generic/Checkbox/Checkbox'
import Password from '../Generic/Password/Password'
import Input from '../Generic/Input/Input'
import Form from 'react-bootstrap/Form'
// import './Login.css'



export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: false,
            PasswordData: false,
            buttonActive: false
        }
        this.handleCallback = this.handleCallback.bind(this);
    }

    handleCallback = (childData) => {
        this.setState({ userData: childData })
    }

    handlePassword = (PassData) => {
        this.setState({ PasswordData: PassData })
        if (this.state.userData && this.state.PasswordData) {
            this.setState({ buttonActive: true })
        }
    }

    render() {
        if (this.state.buttonActive) {
            localStorage.setItem('username', this.state.userData)
        } else {
            localStorage.removeItem('username')
        }


        return (
            <div className='main'>

                <div className="card parent">
                    <div className="account">
                        <h1 data-testid='header'>Account Login</h1>
                        {/* {JSON.stringify(this.state)} */}

                    </div>
                    <Form className='form' data-testid='formL'>
                        <div>
                            <Input parentCallback={this.handleCallback} inputLabel="Username :" placeHolder="Enter Username" />

                            <Password passwordCallback={this.handlePassword} passwordLabel="Password :" placeHolder="Enter Password" />
                        </div>
                        <div className='checkbox' >
                            <Checkbox checkboxLabel="Remember Me" />
                        </div>
                        <div className='button'>
                            <Button buttonCall={this.state.buttonActive} buttonName="Login" variant="secondary" />
                        </div>
                    </Form>
                </div>
                <style jsx>{`
                .main{
                    display: flex;
                    justify-content: center;
                   
                  }
                  
                  
                  .parent{
                      width: 30rem;
                      box-shadow: 10px 10px 5px grey;
                      border: 1px solid black;
                      margin-top: 80px;
                      box-sizing: border-box;
                  }
                  
                  .account{
                      margin: 50px;
                      align-self: center;
                  
                  }
                  .form{
                    display: flex;
                    flex-direction: column;
                  }
                  .checkbox{
                    align-self: center;
                  }
                  
                  
                  .button{
                    margin-bottom: 3px;
                  }
                  
                  @media (max-width:500px){
                    .parent{
                      width: 20rem;
                    }
                  }
                  
                  @media (max-width:300px){
                    .parent{
                      width: 15rem;
                    }
                  }
                `
                }
                </style>
            </div>


        )
    }
}

export default Login
