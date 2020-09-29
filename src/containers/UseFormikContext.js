import React from 'react';
import { Field, Form, Formik } from 'formik';
import GrabFormikContext from '../components/GrabFormikContext';

const UseFormikContext = () => (
  <div>
    <h1>Formik Context Example</h1>
    <p>Please enter your last name!</p>
    <Formik
      initialValues={{ lastName: '' }}
      validate={(values) => {
        const errors = {};
        if (values.lastName.length < 5) {
          errors.token = 'You call that a last name?';
        }
        return errors;
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <Field name='lastName' type='text' />
        <GrabFormikContext />
      </Form>
    </Formik>
  </div>
);

export default UseFormikContext;
