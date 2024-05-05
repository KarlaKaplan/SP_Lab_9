import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const handleChangeNum1 = (event) => {
    setNum1(event.target.value);
  };

  const handleChangeNum2 = (event) => {
    setNum2(event.target.value);
  };

  const handleChangeOperator = (event) => {
    setOperator(event.target.value);
  };

  const calculateResult = () => {
    let calculatedResult;
    switch (operator) {
      case '+':
        calculatedResult = parseFloat(num1) + parseFloat(num2);
        break;
      case '-':
        calculatedResult = parseFloat(num1) - parseFloat(num2);
        break;
      case '*':
        calculatedResult = parseFloat(num1) * parseFloat(num2);
        break;
      case '/':
        calculatedResult = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        calculatedResult = '';
    }
    setResult(calculatedResult);
  };

  return (
    <div>
      <input type="number" value={num1} onChange={handleChangeNum1} />
      <select value={operator} onChange={handleChangeOperator}>
        <option value="">Выберите действие</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" value={num2} onChange={handleChangeNum2} />
      <button onClick={calculateResult}>=</button>
      <span>{result}</span>
    </div>
  );
};

export default Calculator;
