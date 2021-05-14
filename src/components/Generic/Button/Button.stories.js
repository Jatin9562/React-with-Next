import React, { Children } from 'react'
import Button from './Button'
import { actions } from '@storybook/addon-actions';
import Center from '../Form/Center'
// import results from '../../../../.jest-test-results.json'

export default{
    title:"Button",
    component: Button,
    decorators:[story =><Center>{story()}</Center>],
    argTypes: { onClick: { action: 'clicked' } },
};



const Template =args =><Button {...args}/>

export const PrimaryA= Template.bind({})

PrimaryA.args={
    buttonName:'Login',
    variant:'primary',
}

export const SecondaryA= Template.bind({})

SecondaryA.args={
    buttonName:'Login',
    variant:'secondary',

}

export const SuccessA= Template.bind({})

SuccessA.args={
    buttonName:"Login",
    variant:'success'
}

export const DangerA= Template.bind({})

DangerA.args={
    buttonName:"Login",
    variant:'danger'
}


