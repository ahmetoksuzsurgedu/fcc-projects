import { useState } from 'react';
import './App.css';

function App() {

const [dispUp, setDispUp] = useState('0')
const [dispDown, setDispDown] = useState('0')

const nmbrClicked = (btnValue) => {
  const operators = '+-*/'; 
  const secondLastChar = dispUp.slice(-2,-1);
  const lastChar = dispUp.slice(-1);

  // if btnValue is an operator
  if (isNaN(btnValue) && btnValue !== '=' && btnValue !== '.' && btnValue !== 'AC') {

    // if clicked btn is -
    if (btnValue === '-') {  
      if (dispUp === '0') {              
            setDispUp(btnValue.toString())               
            setDispDown(btnValue.toString()); 
        } else if (lastChar !== '-' && !dispUp.toString().includes('=')) {
                    setDispUp(preDispU => preDispU+btnValue.toString());
                    setDispDown(btnValue.toString());                  
          } else {
          if (!operators.includes(secondLastChar) && secondLastChar !== '' && secondLastChar !== ' ') {
          if (!dispUp.toString().includes('=')){
            setDispUp(preDispU => preDispU+' '+btnValue.toString());
            } else {
            setDispUp(dispDown+btnValue.toString());
          }
          setDispDown(btnValue.toString());      
        } else {}
            }
    // if clicked btn is NOT - , other operators
    } else {    
      if (!operators.includes(dispUp[dispUp.length-1]) && btnValue !== '-') { 
        if (dispUp.toString().includes('=')) {
        setDispUp(dispDown + btnValue.toString());
        } else {
        setDispUp(preDispU => preDispU + btnValue.toString());
        }
        setDispDown(btnValue.toString());
      } else {
        if (!operators.includes(secondLastChar)) {
          setDispUp(dispUp.slice(0, dispUp.length - 1) + btnValue.toString());
          setDispDown(btnValue.toString());
        } else {
          setDispUp(dispUp.slice(0, dispUp.length - 2) + btnValue.toString());
          setDispDown(btnValue.toString());
        }
      }
      }   

    }// if btnValue is =
   else if (btnValue === '=') {
    if (!dispUp.toString().includes('=')) {
      let result =dispUp.toString();
      // if last character is an operator, throw it.
      if (operators.includes(result.slice(-1))) {
        result = result.slice(0,result.length-1)
      }
      result = result.trim();
      if (operators.includes(result.slice(-1))) {
        result = result.slice(0,result.length-1)
      }
    // setDispUp(result.toString()); 
      // eslint-disable-next-line
      setDispUp(result + btnValue.toString() + parseFloat(eval(result).toFixed(5)).toString());
      // eslint-disable-next-line
      setDispDown(parseFloat(eval(result).toFixed(5)).toString());
    } else {}

    }  // if it is .
 else if (btnValue === '.') {
  if (dispDown === '0') {
    setDispUp(preDispU => preDispU+btnValue.toString());
    setDispDown(preDispD => preDispD+btnValue.toString());
    } else {
      if (operators.includes(dispDown)) {
        setDispUp(preDispU => preDispU+ '0' + btnValue.toString());
        setDispDown(preDispD => preDispD+ '0' + btnValue.toString());
      } else {
              if (!dispDown.toString().includes('.') && !dispUp.toString().includes('=')) {
                setDispUp(preDispU => preDispU + btnValue.toString());
                setDispDown(preDispD => preDispD + btnValue.toString());
              } else if (!dispDown.toString().includes('.')) {
                setDispUp(dispDown + btnValue.toString());
                setDispDown(preDispD => preDispD+btnValue.toString());
              }
            }
  }
}   // if btnValue is AC
 else if (btnValue === 'AC') {
    setDispUp('0');
    setDispDown('0');
  } // if btnValue is a number
  else {
      if (dispUp === '0') {
        setDispUp(btnValue.toString());
        setDispDown(btnValue.toString());  
      } else {
        if (!operators.includes(dispDown)) {
          setDispUp(preDispU => preDispU+btnValue.toString());
          setDispDown(preDispD => preDispD+btnValue.toString());
        } else {
          setDispUp(preDispU => preDispU+btnValue.toString());
          setDispDown(preDispD => btnValue.toString());
        }
      }
    }

} // close for fnc nmbrClicked

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