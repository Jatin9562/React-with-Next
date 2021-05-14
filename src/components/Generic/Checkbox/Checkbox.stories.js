import React, { Component } from 'react'
import Checkbox from './Checkbox'
import Center from '../Form/Center'

export default{
    title:'Checkbox',
    component: Checkbox,
    decorators:[story =><Center>{story()}</Center>],
};

const Template =args => <Checkbox {...args}/>

export const CheckboxA = Template.bind({})

CheckboxA.args={
    checkboxLabel:' Remember Me'
}

export const CheckboxS = Template.bind({})

CheckboxS.args={
    checkboxLabel:' Remember Me',
    size:'small'
}

export const CheckboxM = Template.bind({})

CheckboxM.args={
    checkboxLabel:' Remember Me',
    size:'med'
}

export const CheckboxL = Template.bind({})

CheckboxL.args={
    checkboxLabel:' Remember Me',
    size:'big'
}



