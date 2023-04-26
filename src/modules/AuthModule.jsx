/* eslint-disable no-unused-vars */
import React from 'react'
import AuthentificationForm from '../components/AuthentificationForm'
import RegistrationForm from '../components/RegistrationForm'
import ExitButton from '../UI/ExitButton'

export default function AuthModule () {
  return (
    <div>
      <AuthentificationForm />
      <RegistrationForm />
      <ExitButton />
    </div>
  )
}
