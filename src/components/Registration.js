import React from 'react';
import './Registration.css'
import Header from './Header';
import { reduxForm, Field } from 'redux-form';

export class Registration extends React.Component {
  onUserSubmit(values) {
    console.log(values);
  }
  render() {
    return (
      <div>
      <Header />
      <form id='regform' onSubmit={e => {
          e.preventDefault();
          console.log('I was submitted!')
        }}>
        <label for='username'>Username</label>
        <Field name='username' id='username' type='text' component='input' />
        <label for='email'>Email address</label>
        <Field name='email' id='email' type='email' component='input' />
        <label for='gender' id='gender'>Select Gender</label>
        <select id='selectgender'>
          <option value ='Male'>Female</option>
          <option value='Female'>Male</option>
          <option value='Gender Fluid'>Gender Fluid</option>
          <option value='Decline'>Decline to Answer</option>
        </select>
        <button type='submit'>Submit</button>
      </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'registration'
})(Registration);