import React, { useState } from 'react';

const NumberSystemConverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedSystem, setSelectedSystem] = useState('10');
  const [result, setResult] = useState('');

  const handleChangeInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const handleChangeSelectedSystem = (event) => {
    setSelectedSystem(event.target.value);
  };

  const convertNumberSystem = () => {
    let parsedValue = parseInt(inputValue, selectedSystem);
    if (!isNaN(parsedValue)) {
      setResult(parsedValue.toString());
    } else {
      setResult('Ошибка ввода');
    }
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChangeInputValue} placeholder="Введите число" />
      <select value={selectedSystem} onChange={handleChangeSelectedSystem}>
        <option value="2">Двоичная</option>
        <option value="8">Восьмеричная</option>
        <option value="10">Десятичная</option>
        <option value="16">Шестнадцатеричная</option>
      </select>
      <button onClick={convertNumberSystem}>Конвертировать</button>
      <input type="text" value={result} readOnly />
    </div>
  );
};

export default NumberSystemConverter;
