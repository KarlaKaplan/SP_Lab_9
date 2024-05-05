import React, { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!username) {
      errors.username = 'Введите логин';
    } else if (username.length < 6 || username.length > 20) {
      errors.username = 'Логин должен содержать от 6 до 20 символов';
    } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
      errors.username = 'Логин должен содержать только буквы латинского алфавита и цифры';
    }

    if (!password) {
      errors.password = 'Введите пароль';
    }

    if (!confirmPassword) {
      errors.confirmPassword = 'Введите подтверждение пароля';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Пароли не совпадают';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Отправка данных формы
      console.log('Данные отправлены:', { username, password });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Логин:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
      </div>
      <div>
        <label>Пароль:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>
      <div>
        <label>Повтор пароля:</label>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}
      </div>
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default RegistrationForm;
