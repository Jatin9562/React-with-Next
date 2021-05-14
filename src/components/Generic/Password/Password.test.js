import {render,screen,getByTestId,fireEvent} from "@testing-library/react"
import Password from './Password'
import userEvent from "@testing-library/user-event";

describe("Password component", () => {
test("should render password label", ()=>{
    const {getByTestId}=render(<Password passwordLabel='Password :'/>);
    // expect(getByTestId('password')).toHaveTextContent('Password :');
    expect(getByTestId('password').textContent).toBe('Password :'); 
    
})


test("Password field should have name", ()=>{
    const {getByTestId} =render(<Password/>);
    const inputNode= getByTestId('passwordL');
    expect(inputNode.getAttribute("name")).toBe("password");
})

})

// test('pass valid password to test input field', () => {
//     const {getByTestId} =render (<Password/>);
//     const inputEq = getByTestId('passwordL');
//     expect(inputEq.value).toBe('');
//     fireEvent.change(inputEq, {
//         target:{
//             value:'jatin@123'
//         }
//     });
//     expect(inputEq.value).toBe('jatin@123');
    
//   });