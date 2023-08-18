import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import TodoProvider from './context/TodoContext';
import {GlobalStyle} from './styles/globalStyle'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <TodoProvider>
      <App />  
    </TodoProvider>
  </React.StrictMode>,
)
