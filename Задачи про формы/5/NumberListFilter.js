import React, { useState } from 'react';

const NumberListFilter = () => {
  const [numberInput, setNumberInput] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [numbers, setNumbers] = useState([1, 13, 6, 52, 4, 14]);

  const handleChange = (event) => {
    setNumberInput(event.target.value);
  };

  const handleAddNumber = () => {
    if (numberInput !== '') {
      setNumbers([...numbers, parseInt(numberInput)]);
      setNumberInput('');
    }
  };

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  const filterNumbers = () => {
    if (filterType === 'even') {
      return numbers.filter(num => num % 2 === 0);
    } else if (filterType === 'odd') {
      return numbers.filter(num => num % 2 !== 0);
    } else {
      return numbers;
    }
  };

  return (
    <div>
      <input type="text" value={numberInput} onChange={handleChange} />
      <button onClick={handleAddNumber}>+</button>
      <select value={filterType} onChange={handleFilterChange}>
        <option value="all">Все</option>
        <option value="even">Четные</option>
        <option value="odd">Нечетные</option>
      </select>
      <ul>
        {filterNumbers().map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumberListFilter;
