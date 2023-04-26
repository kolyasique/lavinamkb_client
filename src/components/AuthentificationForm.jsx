// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const formInitialState = {
  login: '',
  password: '',
};

export default function AuthentificationForm() {
  const [form, setForm] = useState(formInitialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = 'http://localhost:6622/auth/signin';
    fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      // .then((worker) => {
      //   setWorkers((prev) => [...prev, worker]);
      // })
      .catch(console.error);
    setForm(formInitialState);
  };
  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Введите логин" name="login" value={form.login} onChange={handleInput} />
      <input type="password" placeholder="Введите пароль" name="password" value={form.password} onChange={handleInput} />
      <button type="submit"> Войти </button>
    </form>
  );
}
