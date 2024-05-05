import React, { useState } from 'react';

const ProfileEditForm = () => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [address, setAddress] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!firstName) {
      errors.firstName = 'Введите имя';
    }

    if (!middleName) {
      errors.middleName = 'Введите отчество';
    }

    if (!lastName) {
      errors.lastName = 'Введите фамилию';
    }

    // Валидация даты рождения (если введена)
    if (birthdate && !/^\d{2}\.\d{2}\.\d{4}$/.test(birthdate)) {
      errors.birthdate = 'Некорректный формат даты (ДД.ММ.ГГГГ)';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Отправка данных формы
      console.log('Данные отправлены:', { firstName, middleName, lastName, birthdate, address });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'firstName') {
      setFirstName(value);
    } else if (name === 'middleName') {
      setMiddleName(value);
    } else if (name === 'lastName') {
      setLastName(value);
    } else if (name === 'birthdate') {
      setBirthdate(value);
    } else if (name === 'address') {
      setAddress(value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Имя:</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleChange}
        />
        {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
      </div>
      <div>
        <label>Отчество:</label>
        <input
          type="text"
          name="middleName"
          value={middleName}
          onChange={handleChange}
        />
        {errors.middleName && <p style={{ color: 'red' }}>{errors.middleName}</p>}
      </div>
      <div>
        <label>Фамилия:</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleChange}
        />
        {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
      </div>
      <div>
        <label>Дата рождения:</label>
        <input
          type="text"
          name="birthdate"
          value={birthdate}
          onChange={handleChange}
          placeholder="ДД.ММ.ГГГГ"
        />
        {errors.birthdate && <p style={{ color: 'red' }}>{errors.birthdate}</p>}
      </div>
      <div>
        <label>Адрес:</label>
        <input
          type="text"
          name="address"
          value={address}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Сохранить</button>
    </form>
  );
};

export default ProfileEditForm;
