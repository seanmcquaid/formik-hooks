import { useEffect } from 'react';
import { useFormikContext } from 'formik';

const GrabFormikContext = () => {
  const { values, submitForm } = useFormikContext();

  useEffect(() => {
    if (values.lastName.length >= 6) {
      submitForm();
    }
  }, [values, submitForm]);

  return null;
};

export default GrabFormikContext;
