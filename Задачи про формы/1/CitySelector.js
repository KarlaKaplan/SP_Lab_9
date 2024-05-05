import React, { useState } from 'react';

const CitySelector = () => {
  const [selectedCity, setSelectedCity] = useState('');

  const cities = ['Рио-де-Жанейро', 'Сан-Паулу', 'Бразилиа', 'Сальвадор'];

  const handleChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div>
      <select value={selectedCity} onChange={handleChange}>
        <option value="">Выберите город</option>
        {cities.map((city, index) => (
          <option key={index} value={city}>{city}</option>
        ))}
      </select>
      {selectedCity !== 'Рио-де-Жанейро' && <p>Нет, это не Рио-де-Жанейро!</p>}
    </div>
  );
};

export default CitySelector;
