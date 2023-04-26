/* eslint-disable no-unused-vars */
import React from 'react';
import AuthentificationForm from '../components/forms/AuthentificationForm';
import RegistrationForm from '../components/forms/RegistrationForm';
import ExitButton from '../UI/ExitButton';

export default function AuthModule() {
  return (
    <div>
      <AuthentificationForm />
      <RegistrationForm />
      <ExitButton />
    </div>
  );
}
