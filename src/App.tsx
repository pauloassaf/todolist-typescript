import { useState, useRef } from 'react'
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import {Toaster} from 'react-hot-toast';
import styled from 'styled-components';

function App() {

  return (
    <AppStyled>
      <AddTodo />
      <TodoList />
      <Toaster position="bottom-center" />
    </AppStyled>
  )
}

const AppStyled = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  color: white;

`;

export default App
