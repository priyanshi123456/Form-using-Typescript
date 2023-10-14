import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Spinner } from '@chakra-ui/react'
import Form from './components/Form';

function App() {
  return (
   <main>
  <Spinner h={"34"} color='red.500' />
  <Form/>

   </main>
  );
}

export default App;
