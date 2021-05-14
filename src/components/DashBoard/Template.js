import React, { Component } from 'react'
import Card from '../Generic/Card/CardComponent'
// import './CSS/CardGrid.css'
import axios from 'axios';



export class Template extends Component {
    state = {
        cardArray: []
    }

    componentDidMount() {

        axios.get('./data.json')
            .then(res => {
                console.log("axios call successfull")
                const cardArray = res.data;
                this.setState({ cardArray: cardArray })
            })
            .catch(err => {
                console.log('error')
                console.log(err);
            })
    }

    // cardArray = [
    //     { key: "k1", cardClass: 'grid1', cardColor: 'rgb(67, 104, 86)', cardText: "Your limitation it's only your imagination.", },
    //     { key: "k2", cardClass: 'grid2',  cardColor: 'rgb(47, 55, 120)', cardText: "Great things never come from comfort zones..", },
    //     { key: "k3", cardClass: "grid3", cardColor: 'rgb(232, 157, 200)', cardText: "Dream it. Wish it. Do it.", },
    //     { key: "k4", cardClass: "grid4", cardColor: 'rgb(142, 148, 146)', cardText: "Stay Focused.", },
    // ]



    render() {
        return (

            <div className="grid-main">
                {
                    this.state.cardArray.map(card => {
                        return <Card key={card.key} cardClass={card.cardClass} cardText={card.cardText} cardColor={card.cardColor} />
                    })
                }

                <style jsx>{`
                .grid-main{
                    width: 100%;
                    /* height: 100%; */
                    color: white;
                    font-size: 25px;
                    
                
                    display: grid;
                    grid-template-rows: repeat(2,250px);
                    grid-template-columns: 350px 250px 250px;
                    
                    grid-column-gap: 30px;
                    grid-row-gap: 30px;
                }
                .grid-main div{
                    text-align: left;
                    border-radius: 10px;
                    padding: 20px;
                    
                }
                
                .grid1{
                
                    grid-row: 1/3;
                }
                
                .grid2{
                    grid-row: 1/2;
                    grid-column: 2/3;
                
                }
                
                .grid3{
                    grid-row: 1/2;
                    grid-column: 3/4;
                }
                
                .grid4{
                    grid-column: 2/4;
                    grid-row: 2/3;
                }
                
                
                @media (max-width:768px){
                    .grid-main{
                        grid-template-rows: repeat(4,300px);
                        grid-template-columns: 300px;
                        font-size: 15px;
                    }
                
                    .grid1{
                
                        grid-row: 1/2;
                        grid-column: 1/3;
                    }
                    
                    .grid2{
                        grid-row: 2/3;
                        grid-column: 1/3; 
                    }
                    
                    .grid3{
                        grid-row: 3/4;
                        grid-column: 1/3;
                     
                    }
                    
                    .grid4{
                        grid-row: 4/5;
                        grid-column: 1/3;
                    }
                
                }
                /* row:3,200
                column:200,200 */
                @media (min-width:769px) and (max-width:1100px){
                    .grid-main{
                        grid-template-rows: repeat(3,250px);   
                        grid-template-columns: 280px 280px;
                        font-size: 15px;
                        
                    }
                
                    .grid1{
                
                        grid-row: 1/3;
                        grid-column: 1/2;
                    }
                    
                    .grid2{
                        grid-row: 1/2;
                        grid-column: 2/3;
                       
                    
                    }
                    
                    .grid3{
                        grid-row: 2/3;
                        grid-column: 2/3;
                     
                    }
                    
                    .grid4{
                        grid-row: 3/4;
                        grid-column: 1/3;
                    }
                
                }
                
                @media (max-width:450px){
                    .grid-main{
                        grid-template-rows: repeat(4,250px);
                        grid-template-columns: 200px;
                        font-size: 15px;
                    }
                
                    .grid1{
                
                        grid-row: 1/2;
                        grid-column: 1/3;
                    }
                    
                    .grid2{
                        grid-row: 2/3;
                        grid-column: 1/3; 
                    }
                    
                    .grid3{
                        grid-row: 3/4;
                        grid-column: 1/3;
                     
                    }
                    
                    .grid4{
                        grid-row: 4/5;
                        grid-column: 1/3;
                    }
                
                }
                
                @media (min-width:0px) and (max-width:320px){
                    .grid-main{
                        grid-template-rows: repeat(4,230px);
                        grid-template-columns: 150px;
                        font-size: 10px;
                    }
                
                    .grid1{
                
                        grid-row: 1/2;
                        grid-column: 1/3;
                    }
                    
                    .grid2{
                        grid-row: 2/3;
                        grid-column: 1/3; 
                    }
                    
                    .grid3{
                        grid-row: 3/4;
                        grid-column: 1/3;
                     
                    }
                    
                    .grid4{
                        grid-row: 4/5;
                        grid-column: 1/3;
                    }
                
                }  
                `}</style>

            </div>
        )
    }
}

export default Template
