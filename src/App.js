import React from 'react';
import './App.css';
import UseField from './containers/UseField';
import UseFormik from './containers/UseFormik';
import UseFormikContext from './containers/UseFormikContext';

const App = () => (
  <>
    <UseFormik />
    <UseField />
    <UseFormikContext />
  </>
);

export default App;
