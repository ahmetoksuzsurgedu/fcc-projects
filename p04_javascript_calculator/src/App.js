import { useState } from 'react';
import './App.css';

function App() {

// #9: In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit =, the correct result should be shown in the element with the id of display.

// #10: When inputting numbers, my calculator should not allow a number to begin with multiple zeros.
// #11: When the decimal element is clicked, a . should append to the currently displayed value; two . in one number should not be accepted.
// #12: I should be able to perform any operation (+, -, *, /) on numbers containing decimal points.
// #13: If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign). For example, if 5 + * 7 = is entered, the result should be 35 (i.e. 5 * 7); if 5 * - 5 = is entered, the result should be -25 (i.e. 5 * (-5)).
// #14: Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation.
// #15: My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like 2 / 7 with reasonable precision to at least 4 decimal places).

const [dispUp, setDispUp] = useState('0')
const [dispDown, setDispDown] = useState('0')

const nmbrClicked = (btnValue) => {
  // console.log(btnValue)
  if (btnValue === 'AC') {
    setDispUp('0');
    setDispDown('0');
  } else {
          // if it is NOT a number
          if (isNaN(btnValue)) {
            // if clicked btn is -
            if (btnValue === '-') {  
              const lastChar = dispUp.slice(-1);
              const secondLastChar = dispUp.slice(-2,-1);
         if (dispUp === '0') {              
                setDispUp(btnValue.toString())               
                setDispDown(btnValue.toString()); 
              } else if (lastChar !== '-') {
                        setDispUp(preDispU => preDispU+btnValue.toString());
                        setDispDown(btnValue.toString());                  
                      } else if (secondLastChar !== '-' && secondLastChar !== '') {
                        setDispUp(preDispU => preDispU+btnValue.toString());
                        setDispDown(btnValue.toString());      
                      }
            // if clicked btn is NOT - // other operators
            } else {
            const operators = ['+','-','*','/'];       
console.log("dispUp" + dispUp,",dispUp.lenhth",dispUp.length,"btnValue",btnValue,"dispUp[dispUp.length-1]",dispUp[dispUp.length-1])
              if (!operators.includes(dispUp[dispUp.length-1]) && btnValue !== '-') {
              
console.log("dispUp if de" + dispUp)
            setDispUp(preDispU => preDispU + btnValue.toString());
            setDispDown(dispUp.slice(0, dispUp.length - 1) + btnValue);
              }
console.log("if sonrasi" + dispUp)
      

            // if (dispUp === '0') {              
            //   setDispUp(btnValue.toString())               
            //   setDispDown(btnValue.toString()); 
            // } else if (operators.includes(btnValue)) {
            //           setDispUp(preDispU => preDispU+btnValue.toString());
            //           setDispDown(btnValue.toString());                  
            //         } else {
            //           const asd = dispUp.slice(0,dispUp.length)
            //           console.log(btnValue +lastChar +":else-lastChar =>:" + dispUp+ asd +dispUp.length)    

            //         }



          }   
          // if it is a number
          } else {
            if (dispUp === '0') {
              setDispUp(btnValue.toString());
              setDispDown(btnValue.toString());  
            } else {
              console.log("number",btnValue)
              console.log("dispDown",dispDown)
              
              const operators = ['+','-','*','/'];       
              if (!operators.includes(dispDown)) {
                setDispUp(preDispU => preDispU+btnValue.toString());
                setDispDown(preDispD => preDispD+btnValue.toString());
              } else {
                setDispUp(preDispU => preDispU+btnValue.toString());
                setDispDown(preDispD => btnValue.toString());
              }
            }
          }
        
}
}
  return (
    <div>
      <div id="js-calc" className="">
        <div id="keypads">
          <button id="equals" className="btn" onClick={() => nmbrClicked("=")}>=</button>
          <button id="zero" className="btn" onClick={() => nmbrClicked(0)} >0</button>
          <button id="one" className="btn" onClick={() => nmbrClicked(1)}>1</button>
          <button id="two" className="btn" onClick={() => nmbrClicked(2)}>2</button>
          <button id="three" className="btn" onClick={() => nmbrClicked(3)}>3</button>
          <button id="four" className="btn" onClick={() => nmbrClicked(4)}>4</button>
          <button id="five" className="btn" onClick={() => nmbrClicked(5)}>5</button>
          <button id="six" className="btn" onClick={() => nmbrClicked(6)}>6</button>
          <button id="seven" className="btn" onClick={() => nmbrClicked(7)}>7</button>
          <button id="eight" className="btn" onClick={() => nmbrClicked(8)}>8</button>
          <button id="nine" className="btn" onClick={() => nmbrClicked(9)}>9</button>
          <button id="add" className="btn" onClick={() => nmbrClicked('+')}>+</button>
          <button id="subtract" className="btn" onClick={() => nmbrClicked('-')}>-</button>
          <button id="multiply" className="btn" onClick={() => nmbrClicked('*')}>*</button>
          <button id="divide" className="btn" onClick={() => nmbrClicked('/')}>/</button>
          <button id="decimal" className="btn" onClick={() => nmbrClicked('.')}>.</button>
          <button id="clear" className="btn" onClick={() => nmbrClicked('AC')}>AC</button>
        </div>
        <div className="display">
            <p className="disp-up" >{dispUp}</p>
            <p id='display' className="disp-down">{dispDown}</p>
        </div>
      </div>
    <p id="author">Designed and Coded by Ahmet Oksuz</p>
    </div>
    
  );
}

export default App;