import { withFormik } from 'formik';
import React from 'react';
import Form from '../components/Form';
import Input from '../components/Input';

const ExampleForm = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
}) => (
  <Form onSubmit={handleSubmit}>
    <Input
      type='text'
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.name}
      name='name'
    />
    {errors.name && touched.name && <div>{errors.name}</div>}
  </Form>
);

const EnhancedForm = withFormik({
  mapPropsToValues: () => ({ name: '' }),
  validate: (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Required';
    }

    return errors;
  },
  handleSubmit: (values) => {
    console.log(values);
  },
  displayName: 'BasicFormExample',
})(ExampleForm);

export default EnhancedForm;
