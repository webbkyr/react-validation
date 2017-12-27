import React from 'react';
import { reduxForm, Field } from 'redux-form';

export class Registration extends React.Component {
  
  render() {
    return (
      <form>
        <label for='username'>Username</label>
        <Field name='username' id='username' type='text' component='input' />
        <label for='email'>Email address</label>
        <Field name='email' id='email' type='email' component='input' />

      </form>
    )
  }
}

export default reduxForm({
  form: 'registration'
})(Registration);