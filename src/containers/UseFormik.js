import React from 'react';
import { useFormik } from 'formik';
import Form from '../components/Form';
import Label from '../components/Label';
import Input from '../components/Input';
import Button from '../components/Button';

const UseFormik = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Label>Name</Label>
      <Input
        name='name'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <Button type='submit'>Submit</Button>
    </Form>
  );
};

export default UseFormik;
