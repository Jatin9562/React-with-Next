import {render,screen, fireEvent} from "@testing-library/react"
import Button from './Button'


describe('Button component', ()=>{
test("renders without crashing", ()=>{
    render(<Button/>)
})

test("should render label correctly", ()=>{
    const {getByTestId}= render(<Button buttonName="Login" />);
    expect(getByTestId('button').textContent).toBe('Login'); 
 })

test("should be disabled", ()=>{
    const{getByTestId} = render(<Button/>);
    // expect(getByTestId("button").closest('button')).toHaveAttribute('disabled');
    expect(getByTestId("button").disabled).toBeTruthy();
})

test("button should have secondary styling ",()=>{
    const{getByTestId}= render(<Button variant='secondary'/>);
    const buttonL= getByTestId('button');
    expect(buttonL.className).toBe('button secondary') 
})
// test('button click event works correctly', () => {
//     const handleC = jest.fn();

//     const { getByTestId } = render(<Button handleButton={handleC} />);
//     const buttonEl = getByTestId('button');

//     expect(handleC).toHaveBeenCalledTimes(0);

//     fireEvent.click(buttonEl);

//     expect(handleC).toHaveBeenCalledTimes(1);
// });
})
