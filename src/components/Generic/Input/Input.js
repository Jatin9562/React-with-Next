
import Form from 'react-bootstrap/Form'

import React, { Component } from 'react'
// import './Input.css'

export class Input extends Component {
    constructor(props) {
        super(props);
        this.handleChange=this.handleChange.bind(this)
        this.state = {
            username: "",
            formErrorMessage: "",
            userValid:false,
        }
    }

    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({ [name]: value })
        this.validateItem(name, value)
        console.log(this.state.username)
        this.props.parentCallback(this.state.userValid);      
    }


    validateItem = (name, value) => {
        let NewformErrorMessage = this.state.formErrorMessage;
        let NewuserValid= this.state.userValid;
        switch (name) {
            case "username":
                value === "" ? (NewformErrorMessage = " field required") : (value.length <= 4) ?
                    (NewformErrorMessage = "Cannot have less than 4 characters") :
                    NewformErrorMessage = "";
                value==="" ?(NewuserValid= false): (value.length<=4)?
                (NewuserValid=false):
                NewuserValid=true;                
                break;
            default:
                break;
        }
        this.setState({
            formErrorMessage: NewformErrorMessage,
            userValid:NewuserValid
        })

    }

    render() {
        return (
            <div>
                <div className='container' >

                    <Form.Group data-testid='input'>
                        <Form.Label htmlFor='username'>{this.props.inputLabel}</Form.Label>
                        <Form.Control data-testid='inputL'  className={`input ${this.props.size}`} type='text'
                            placeholder={this.props.placeHolder}
                            value={this.state.username} name='username'
                            onChange={(e) => this.handleChange(e)} />
                    </Form.Group>


                    <p className="text-danger">{this.state.formErrorMessage}</p>

                </div>

            </div>
        )
    }
}

export default Input

