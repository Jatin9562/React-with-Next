import {fireEvent, render,screen} from "@testing-library/react"
import Input from './Input'
import userEvent from "@testing-library/user-event";

describe('Input component', () => {
    test("renders without crashing", ()=>{
        render(<Input/>)
    })

test("should render label correctly", ()=>{
    const {getByTestId}=render(<Input inputLabel='Username :' />);
    // expect(getByTestId('input')).toHaveTextContent('Username :')
    expect(getByTestId('input').textContent).toBe('Username :'); 
})

test("input field should have name", ()=>{
    const {getByTestId} =render(<Input/>);
    const inputNode= getByTestId('inputL');
    expect(inputNode.getAttribute("name")).toBe("username");
})

})




// test('pass valid input to test input field', () => {
//     const {getByTestId} =render (<Input/>);
//     const inputEq = getByTestId('inputL');
//     expect(inputEq.value).toBe('');
//     fireEvent.change(inputEq, {
//         target:{
//             value:'jatin'
//         }

//     });
//     expect(inputEq.value).toBe('jatin');
    
//   });





