import React from 'react';
import './App.css';
import UseField from './containers/UseField';
import UseFormik from './containers/UseFormik';
import UseFormikContext from './containers/UseFormikContext';
import EnhancedForm from './containers/WithFormik';

const App = () => (
  <>
    <UseFormik />
    <UseField />
    <UseFormikContext />
    <EnhancedForm />
  </>
);

export default App;
