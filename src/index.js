import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import store from "./redux/store";
// redux数据持久化
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './redux/store'





// ReactDOM.render(<BrowserRouter> <Provider store={store}>
//     <App />
// </Provider> </BrowserRouter>, document.querySelector('#root'))



ReactDOM.render(<BrowserRouter> <Provider store={store}><PersistGate loading={null} persistor={persistor}>
    <App />
</PersistGate> </Provider> </BrowserRouter>, document.querySelector('#root'))
