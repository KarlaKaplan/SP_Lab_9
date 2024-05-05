import React, { useState, useEffect } from 'react';

const AgeInSeconds = () => {
  const [birthdate, setBirthdate] = useState('');
  const [ageInSeconds, setAgeInSeconds] = useState(0);

  const calculateAgeInSeconds = (birthdate) => {
    const birthdateObj = new Date(birthdate);
    const now = new Date();
    const ageInSeconds = Math.floor((now - birthdateObj) / 1000);
    setAgeInSeconds(ageInSeconds);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      calculateAgeInSeconds(birthdate);
    }, 1000);

    return () => clearInterval(timer);
  }, [birthdate]);

  const handleChange = (event) => {
    setBirthdate(event.target.value);
  };

  return (
    <div>
      <input type="date" value={birthdate} onChange={handleChange} />
      <p>Вы прожили: {ageInSeconds} секунд.</p>
    </div>
  );
};

export default AgeInSeconds;
