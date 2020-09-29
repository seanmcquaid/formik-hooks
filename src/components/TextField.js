import React from 'react';
import { useField } from 'formik';
import Label from './Label';
import Input from './Input';

const TextField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);

  return (
    <>
      <Label>
        {label}
        <Input {...field} {...props} />
      </Label>
      {meta.touched && meta.error && <div>{meta.error}</div>}
    </>
  );
};

export default TextField;
