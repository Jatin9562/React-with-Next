import React from 'react'
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import SendIcon from '@material-ui/icons/Send';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const SidebarData=[
    {
        title:"Motivation",
        Icon:<FitnessCenterIcon/>,
        link:"./dash"
    },
    {
        title:"Productivity",
        Icon:<AccessTimeIcon/>,
        link:"./dash"
    },
    {
        title:"Design",
        Icon:<BorderColorIcon/>,
        link:"./dash"
    },
    {
        title:"Study",
        Icon:<SendIcon/>,
        link:"/dash"
    },
    {
        title:"Logout",
        Icon:<ExitToAppIcon/>,
        link:"/"
    },
    
    
]