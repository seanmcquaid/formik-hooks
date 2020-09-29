import React from 'react';
import { Form, Formik } from 'formik';
import Button from '../components/Button';
import TextField from '../components/TextField';

const UseField = () => (
  <div>
    <h1>My Form</h1>
    <Formik
      initialValues={{
        email: '',
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(props) => (
        <Form>
          <TextField name='email' type='email' label='Email' />
          <Button type='submit'>Submit</Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default UseField;
