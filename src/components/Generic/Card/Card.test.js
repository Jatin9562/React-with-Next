import {render,screen} from "@testing-library/react"
import Card from './CardComponent'

describe('Card component', ()=>{
    test("renders without crashing", ()=>{
        render(<Card/>)
    })

    test('should render Card Text', () => {
        const {getByTestId}= render(<Card cardText='Card Text'/>);
        // expect(getByTestId('card')).toHaveTextContent('Card Text');
        expect(getByTestId('card').textContent).toBe('Card Text');  
    })
    
    test('should render cardclass and card color properly',()=>{
        const {getByTestId}= render(<Card cardClass='Cardclass' cardColor='red'/>);
        const cardR = getByTestId('card');
        expect(cardR.className).toBe('Cardclass');
        expect(cardR.style.backgroundColor).toBe('red');
    })
})


