
import './App.css'
import { useState } from 'react';


const Calculator: React.FC = () => {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);

  const total = num1 + num2;
  const soustraction=num1-num2;
  const multiplication=num1*num2;
  const division=num1/num2;
const divStyle: React.CSSProperties = {
    border: '1px solid black', // Shorthand works
    padding: '20px',
    margin:'100px',
    // Individual properties use camelCase
    borderStyle: 'solid', 
    borderWidth: '3px',
    borderColor: 'blue' 
  };
  return (
    <div style={divStyle}>
      <h2>Calculator</h2>
<div >
      <label>Entrer le premier nombre:<input
        type="text"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
        placeholder="Enter first number"
      /></label></div>

     <div> <label>Entrer le deuxieme nombre:<input
        type="text"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
        placeholder="Enter second number"
      /></label>
      </div>

      <h3>Total: {total}</h3>
      <h3> Difference:{soustraction}</h3>
      <h3>Produit:{multiplication}</h3>
      <h3>Division:{division}</h3>
    </div>
  );
};

export default Calculator;