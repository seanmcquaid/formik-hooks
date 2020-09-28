import React from 'react';
import { useFormik } from 'formik';

const UseFormik = () => {
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return ();
};

export default UseFormik;
