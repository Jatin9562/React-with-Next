import React from 'react'
import {SecondaryA} from '../Button/Button.stories'
import {CheckboxA} from '../Checkbox/Checkbox.stories'
import {InputA} from '../Input/Input.stories'
import {PasswordA} from '../Password/Password.stories'


export default{
    title:'Form',
    
};

export const FormA = () => (
    <>
    <InputA {...InputA.args}/>
    <PasswordA {...PasswordA.args}/>
    <CheckboxA {...CheckboxA.args}/>
    <br/>
    <SecondaryA {...SecondaryA.args}/>

    </>


)