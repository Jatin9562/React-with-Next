import React, { Component } from 'react'
// import './Card.css'

export class CardComponent extends Component {
 
    render() {
        return (
            <>
                <div data-testid='card' className={this.props.cardClass} style={{ backgroundColor: this.props.cardColor }}>
                    {this.props.cardText}
                </div>
                <style jsx>{`
                .Cardclass{
                    height: 300px;
                    width: 250px;
                    border-radius: 15px;
                    color: white;
                    text-align: left;
                    font-size: 25px;
                    padding: 15px;
                    font-style: normal;
                    
                    }
                    
                    
                    .small{
                        height: 150px;
                        width: 150px;
                    }
                    
                    .medium{
                        height: 300px;
                        width: 300px;
                    }
                    
                    .large{
                        height: 400px;
                        width: 350px;
                    }
                    
                    
                
                
                `
                }



                </style>
            </>
        )
    }
}

export default CardComponent
