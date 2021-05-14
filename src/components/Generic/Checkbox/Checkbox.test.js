import {fireEvent,render,screen} from "@testing-library/react"

import userEvent from "@testing-library/user-event";
import Checkbox from './Checkbox'


describe('Card component', ()=>{
  test("renders without crashing", ()=>{
    render(<Checkbox/>)
})

test("should render label correctly", ()=>{
  const {getByTestId}=render(<Checkbox checkboxLabel='Remember Me'/>);
  // expect(getByTestId('checkbox-label')).toHaveTextContent('Remember Me');
  expect(getByTestId('checkbox-label').textContent).toBe('Remember Me'); 
})

// test('toggle element by selecting checkbox', () => {
//   render(<Checkbox/>);
//   const cbEq = screen.getByTestId("checkbox");
//   userEvent.click(cbEq);
//   expect(cbEq).toBeChecked();
//   userEvent.click(cbEq);
//   expect(cbEq).not.toBeChecked();
// })
test('toggle element by selecting checkbox', () => {
  const {getByTestId}=render(<Checkbox/>);
  const cbEq = getByTestId("checkbox");
  expect(cbEq.checked).toBeFalsy();
  userEvent.click(cbEq);
  expect(cbEq.checked).toBeTruthy();
  userEvent.click(cbEq);
  expect(cbEq.checked).toBeFalsy();
})

})
