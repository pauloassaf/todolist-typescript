import {useContext} from 'react';
import {TodoContext} from './TodoContext';

export const useTodo = () => {
    const context = useContext(TodoContext)

    if(!context) {
        throw new Error('UseTodo must be used within a TodoProvider')
    }

    return context
}