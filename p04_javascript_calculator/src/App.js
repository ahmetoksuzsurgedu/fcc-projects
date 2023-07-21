import { useState } from 'react';
import './App.css';

function App() {

const [dispUp, setDispUp] = useState('0')
const [dispDown, setDispDown] = useState('0')

const nmbrClicked = (btnValue) => {
  const operators = '+-*/'; 
  const secondLastChar = dispUp.slice(-2,-1);
  const lastChar = dispUp.slice(-1);

  if (btnValue === 'AC') {
    setDispUp('0');
    setDispDown('0');
  } else {
          // if it is NOT a number & . & =
          if (isNaN(btnValue) && btnValue !== '=' && btnValue !== '.') {

            // if clicked btn is -
            if (btnValue === '-') {  
              if (dispUp === '0') {              
                    setDispUp(btnValue.toString())               
                    setDispDown(btnValue.toString()); 
                  } else if (lastChar !== '-' && !dispUp.includes('=')) {
                            setDispUp(preDispU => preDispU+btnValue.toString());
                            setDispDown(btnValue.toString());                  
                          } else {
                            if (!operators.includes(secondLastChar) && secondLastChar !== '') {
                            if (!dispUp.includes('=')){
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
                if (dispUp.includes('=')) {
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
          // if it is =
          } else if (btnValue === '=') {
            if (!dispUp.includes('=')) {
              let result =''
              setDispUp(operators.includes(lastChar) ? result= dispUp.slice(0,dispUp.length - 1 ) : result = dispUp);
              // eslint-disable-next-line
              setDispUp(preDispU => preDispU + btnValue.toString() + Number.parseFloat(eval(result)));
              // eslint-disable-next-line
              setDispDown(Number.parseFloat(eval(result)));
            } else {}
          // if it is .
        } else if (btnValue === '.') {
          if (dispDown === '0') {
            setDispUp(preDispU => preDispU+btnValue.toString());
            setDispDown(preDispD => preDispD+btnValue.toString());
            } else if (operators.includes(dispDown)) {
              setDispUp(preDispU => preDispU+ '0' + btnValue.toString());
              setDispDown(preDispD => preDispD+ '0' + btnValue.toString());
            } else {
              if (!isNaN(dispDown)) {
                 if (!dispUp.includes('=') && !dispDown.includes('.')) {
                setDispUp(preDispU => preDispU+btnValue.toString());
                setDispDown(preDispD => preDispD+btnValue.toString());
              } else {}
            } else {}
          }

          // if it is a number
        } else {
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