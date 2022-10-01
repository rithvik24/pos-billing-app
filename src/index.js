import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore'

const store = configureStore()
console.log(store.getState())
store.subscribe(() => {
    console.log(store.getState())
})

ReactDOM.render(<App/>,document.getElementById('root'))