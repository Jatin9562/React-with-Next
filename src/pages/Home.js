import React, { Component } from 'react'
import Sidebar from '../components/DashBoard/Sidebar'
// import './Home.css'
import Header from '../components/DashBoard/Header'
import Template from '../components/DashBoard/Template'
import { Redirect } from 'react-router'

export class Home extends Component {
    render() {
        if (!localStorage.getItem('username')) {
            return <Redirect to='/' />
        }
        return (

            <div className="Display container-fluid">
                <div >
                    <Sidebar />
                </div>
                <div className="card-main">
                    <Header />
                    <br />
                    <Template />
                </div>
                <style jsx>{`
body{
    /* margin: 20px;
    padding: 20px; */
          
}

.Display{
    display: flex;
    background-color: black;
    width: 100%;
    overflow: hidden;

}

.card-main{
    background-color: rgb(37, 40, 45);
    width:100%;
    margin-top: 20px;
    color: white;
    border-radius: 20px;  
    padding: 30px;
    /* padding-left: 70px; */
    box-sizing: border-box;
}

.group-main{
    width: 100%;
}


@media (max-width:768px){
    .Display{
       flex-direction: column-reverse;
    }
}


@media (min-width:1024px) and (max-width:1366px){
    .Display{
        height: 100vh;
    }
}`}
                </style>
            </div>
        )
    }
}

export default Home
