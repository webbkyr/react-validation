import React from 'react';
import './Registration.css'
import Header from './Header';
import { reduxForm, Field } from 'redux-form';

export class Registration extends React.Component {
  
  render() {
    return (
      <div>
      <Header />
      <form id='regform'>
        <label for='username'>Username</label>
        <Field name='username' id='username' type='text' component='input' />
        <label for='email'>Email address</label>
        <Field name='email' id='email' type='email' component='input' />

      </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'registration'
})(Registration);