import React, { Children } from 'react'
import Card from './CardComponent'

export default{
    title:'Card',
    component:Card,
    argTypes:{
        cardColor: {control: 'color'},
        cardClass:{control:{
            type: 'radio',
            options:['Cardclass small','Cardclass medium','Cardclass large']
        }}

    }
}


const Template = args=><Card {...args}/>

export const CardA = Template.bind({})

CardA.args={
    cardClass:'Cardclass medium',
    cardColor:'rgb(67, 104, 86)',
    cardText:'Your limitation its only your imagination.'
}




