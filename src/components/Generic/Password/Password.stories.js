import React from 'react'
import Password from './Password'


export default{
    title:'Password',
    component:Password
}

const Template = args => <Password {...args}/>

export const PasswordA= Template.bind({})

PasswordA.args={
    passwordLabel:'Password :',
    placeHolder:'Enter Password'

}
