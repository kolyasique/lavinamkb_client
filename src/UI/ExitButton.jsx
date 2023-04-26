/* eslint-disable no-unused-vars */
import React from 'react';

export default function ExitButton() {
  const handleExit = (e) => {
    e.preventDefault();

    const url = 'http://localhost:6622/auth/signout';
    fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      // .then((worker) => {
      //   setWorkers((prev) => [...prev, worker]);
      // })
      .catch(console.error);
  };
  return (
    <button type="button" onClick={handleExit}>Выхти</button>
  );
}
