import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ChakraProvider,extendTheme} from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = extendTheme({
  colors: {
    cpdark:'#EDAC33',
    csdark:'#202E4E',
    cplite:'#ffd336',
    cpnormal:'#ffc636',
    cslite:'#3f5b9a',
    csnormal:'#2f4474'
  },
})
root.render(
  <React.StrictMode>
    <ChakraProvider  theme={theme}>
      <App />
    </ChakraProvider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
