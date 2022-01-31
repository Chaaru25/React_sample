import { fireEvent, render,screen } from '@testing-library/react';
import App from './App';




test('Check the Text Calculator',() =>{
  render(<App/>);

  const Element = screen.getByText(/Calculator/i);
  expect(Element).toBeInTheDocument();
  });


//eval function test
  describe('Calculate Functions', () =>{
   
    it('Add 2 numbers',() =>{
      expect(eval("13+10")).toBe(23);
      expect(eval(200+200)).toBe(400);
    });

    it('Subtract two numbers',() =>{
      expect(eval(25-5)).toBe(20);
      expect(eval(5-25)).toBe(-20);
    });

    it('Multiple 3 Numbers',() =>{
      expect(eval(5*5*5)).toBe(125);
      expect(eval(2*2)).toBe(4);
    });

    it('Divide 2 numbers',() =>{
      expect(eval(25/5)).toBe(5);
      expect(eval(144/4)).toBe(36);
    });

    it('Module of 2 numbers',() =>{
      expect(eval(25%10)).toBe(5);
    });

    it('Infinity',() =>{
      expect(eval(25/0)).toBe(Infinity);
    })
  });

  //clear Button test

  test('clear Button',() =>{
    render(<App/>);
    const clear =screen.getByText('Clear');
    expect(clear).toBeNull;
    
  });
  //Multiple Operation test
  test('Multiple Operators in one expression',() =>{
    render(<App/>);
    
    expect(eval(25*5+10-50)).toBe(85);
    expect(eval(2002*5+100-50)).toBeGreaterThan(10000);
  });

  //Backspace test
  test('Backspace button',() =>{
    render(<App/>);
    const Backspace =screen.getByText('C');
  
    fireEvent.click(Backspace);

  });

 