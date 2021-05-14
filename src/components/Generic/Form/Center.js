import React from 'react'
// import './Center.css'

function Center(props) {
    return (
        <div className="center">{props.children}
        
        <style jsx>{`
        .center{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        `
        }


        </style>
        </div>
    )
}

export default Center
