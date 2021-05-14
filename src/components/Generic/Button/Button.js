import React, { Component } from 'react'

import { Redirect } from 'react-router-dom';
// import './Button.css'


export class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonRedirect: false,

        }
    }

    handleClick = (e) => {
        this.setState({ buttonRedirect: true })
    }

    render() {
        if (this.state.buttonRedirect) {

            return <Redirect to="/dash" push />
        }
        return (
            <div className='container' >
                <button data-testid='button' type="submit" disabled={!this.props.buttonCall} className={`button ${this.props.variant}`}
                    onClick={this.handleClick}>{this.props.buttonName}</button>
                <style jsx>
                    {`
                    
.button {
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    border-radius: 30px;
  }
  
  .primary {background-color: #008CBA; } /* Blue */
  .secondary {background-color:black;  width: 150px;} /* Gray */
  .success {background-color: #4CAF50; ;width: 200px} /* Green */
  .danger {background-color: #f44336; width: 250px} /* Red */
                    
                    
                    
                    `}</style>
            </div>
        )
    }
}

export default Button