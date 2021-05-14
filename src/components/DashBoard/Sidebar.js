import React from 'react'
// import './CSS/Sidebar.css'
import { SidebarData } from './SidebarData'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';



function Sidebar() {
    return (
        <div >
            <div className="container">
              
                    <div className="SidebarNav">
                        <div className="row">
                            <div className="Image" style={{ padding: "60px" }}>
                                <img className="Image" src="steve.jpg" alt="Profile" />

                            </div>


                            <div className="text-align-center" style={{ padding: "30px" }} >
                                <h5>Anand Agarwal <ArrowRightAltIcon /></h5>
                                <p>anand.agarwal@gmail.com</p>


                            </div>

                        </div>

                        <ul className="SidebarList">
                            {SidebarData.map((val, key) => {
                                return (
                                    <li key={key}
                                        className="row" onClick={() => {
                                            window.location.pathname = val.link;
                                        }}>

                                        {/* <div id="icon">
                                            {val.Icon}
                                        </div> */}
                                        <div id="title">
                                            <b>{val.title}</b>
                                        </div>

                                    </li>
                                )
                            })}
                        </ul>




                    </div>
                  
                
            </div>
            <style jsx>{`
            .SidebarNav {
                height: 754px;
                width: 300px;
                background-color: rgb(43, 46, 53);
                border-radius: 30px;
                color: white;
            }
            
            .SidebarList{
                padding: 50px;
                height: auto;
                width: 100%;
                
                
            }
            
            .SidebarList .row{
                width: 100%;
                height: 50px;
                list-style-type: none;
                display: flex;
                flex-direction: row;
                margin: 0%;
                justify-content: center;
                align-items: center;
                font-family:Arial, Helvetica, sans-serif;
                /* border: 1px solid black;
                border-radius: 10px;  */
            }
            .SidebarList .row:hover{
                cursor: pointer;
                background-color:black;
            }
            
            .row #icon{
                flex: 30%;
                display: grid;
                place-items: center;
            }
            
            .row #title{
                flex: 70%;
                display: grid;
              
            
            }
            
            .SidebarNav .Image{
                border-radius: 100px;
                height: 70px;
                width: 70px;
              
            }
            
            .SidebarNav .Image:hover{
                height: 80px;
                width: 80px;
            }
            
            @media (max-width:768px){
                .SidebarNav{
                    height: auto;
                    width: auto;
                    background-color: black;
                
                }
                .SidebarList{
                    padding: 5px;
                    height: auto;
                    width: auto;
               
                }
            
            }
            
            @media (min-width:1024px) and (max-width:1366px){
                .SidebarNav{
                    height: 100vh;
                }
            }
            `}</style>
        </div>
    )
}

export default Sidebar
