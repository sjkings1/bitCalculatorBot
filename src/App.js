import React from 'react';
import './App.css';
import CalculatorApp from './components/CalculatorApp'
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {

  return (

    <React.Fragment>

      <Provider store={store}>

        <CalculatorApp />

      </Provider>

    </React.Fragment>

  );
}

export default App;
