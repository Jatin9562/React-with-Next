import React from 'react'
import Input from './Input'


export default{
    title:'Input', 
    component : Input,
}



const Template=args=><Input {...args}/>


export const InputA = Template.bind({})

InputA.args={
    inputLabel:"Username :",
    placeHolder:"Enter Username",
  
}

export const InputS = Template.bind({})

InputS.args={
    inputLabel:"Username :",
    placeHolder:"Enter Username",
    size:'small'  
}




