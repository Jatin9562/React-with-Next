import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
// import './Password.css'

export class Password extends Component {
    constructor(props){
        super(props);
    this.state = {
        password: "",
        PassErrorMessage: "",
        PasswordValid:false,
    }
}

    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({ [name]: value })
        this.validateItem(name, value);
        console.log(this.state.password)
        this.props.passwordCallback(this.state.PasswordValid)


    }
    validateItem = (name, value) => {
        let PasswordErrorMessage = this.state.PassErrorMessage;
        let NewPasswordValid= this.state.PasswordValid;
        switch (name) {
            case "password":
                var regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

                value===""? ( PasswordErrorMessage = " field required") : ( !regularExpression.test(value))? 
                ( PasswordErrorMessage = "Password should contain atleast one number and one special character") :
                PasswordErrorMessage = ""

                value===""? (NewPasswordValid=false) : ( !regularExpression.test(value))? 
                (NewPasswordValid=false) :
                NewPasswordValid = true


                break;
               

            default:
                break;
        }
        this.setState({
            PassErrorMessage: PasswordErrorMessage,
            PasswordValid:NewPasswordValid

        })

    }

    render() {
        return (
            <div>
                <div className='container' >                  
                        <Form.Group controlId="formBasicPassword" data-testid='password'>
                            <Form.Label>{this.props.passwordLabel}</Form.Label>
                            <Form.Control data-testid='passwordL' className={`password ${this.props.size}`} type="password" placeholder={this.props.placeHolder}
                            name="password" 
                            value={this.state.password}
                            onChange={(e) => this.handleChange(e)}  />
                        </Form.Group>
                        <p className="text-danger">{this.state.PassErrorMessage}</p>
                </div>





            </div>
        )
    }
}

export default Password
