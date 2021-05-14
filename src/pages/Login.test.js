import {render, getByTestId} from "@testing-library/react"
import Login from './Login'


describe('Login component', ()=>{
    test("renders Login component without crashing", ()=>{
        render(<Login/>)
    })


test('render login header', ()=>{
    const {getByTestId}= render(<Login/>);
    // expect(getByTestId('header')).toHaveTextContent('Account Login')
    expect(getByTestId('header').textContent).toBe('Account Login'); 
})

})

