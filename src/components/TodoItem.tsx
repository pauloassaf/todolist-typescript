import {useState, useRef, useEffect} from 'react';
import { motion } from 'framer-motion'
import styled from "styled-components"
import {Todo} from "../context/TodoContext";
import {useTodo} from '../context/useTodo';
import {toast} from 'react-hot-toast';
import {check, xmark, repeat, trash, pen} from '../styles/icons';


export const TodoItem = (props: { todo : Todo }) => {
    
    const { todo } = props

    const [editingTodoText, setEditingTodoText] = useState <string> ('')
    const [editingTodoId, setEditingTodoId] = useState <string | null> (null)

    const { deleteTodo, editTodo, updateTodoStatus } = useTodo()

    const editInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (editingTodoId !== null && editInputRef.current) {
            editInputRef.current.focus()
        }   
    }, [editingTodoId])

    const handleEdit = (todoId: string, todoText: string) => {
        setEditingTodoId(todoId)
        setEditingTodoText(todoText)
        
        if (editInputRef.current) {
            editInputRef.current.focus()
        }
    }

    const handleUpdate = (todoId: string) => {
        if (editingTodoText.trim() !== '') {
            editTodo(todoId, editingTodoText)
            setEditingTodoId(null)
            setEditingTodoText('')
            toast.success("Todo update sucessfully!")
        } else {
            toast.error("Todo field cannot be empty")
        }
    }

    const handleDelete = (todoId: string) => {
        deleteTodo(todoId)
        toast.success('Todo deleted sucessfully')
    }

    const handleStatusUpdate = (todoId: string) => {
        updateTodoStatus(todoId)
        console.log(todo.status)
        toast.success("Todo status updated sucessfully!")
    }


    
    return (
        <ItemStyled>
            {editingTodoId === todo.id ? (
                <div className="update-con">
                    <input
                        className="input"
                        ref={editInputRef}
                        type='text'
                        value={editingTodoText}
                        onChange={e => setEditingTodoText(e.target.value)}
                    />
                    <button className="update" onClick={() => handleUpdate(todo.id)}>Update</button>
                </div>
            ) : (
                <div className='item-con'>
                    <div className='text-con'>
                        {todo.status === 'undone' ? (
                            <div className="undone-con">
                                <div>
                                    <span>{todo.text}</span>
                                </div>
                                <div>
                                    <span className="icon">{xmark}</span>    
                                </div>
                            </div>
                            ) : (
                                <div className="completed-con">
                                    <div>
                                        <span className="text-completed">{todo.text}</span>
                                    </div>
                                    <div>
                                        <span className="icon">{check}</span>
                                    </div>
                                </div>
                            )}
                    </div>
                    <div className='buttons-con'>
                        <div>
                            <button className='button' onClick={() => handleStatusUpdate(todo.id)}>
                                {todo.status === 'undone' ? (
                                    <span>{repeat} Mark Completed</span>
                                ) : (
                                    <span>{repeat} Mark Undone</span>
                                )}
                            </button>     
                        </div>
                        <div>
                            <button className='button' onClick={() => handleEdit(todo.id, todo.text)}>{pen} Edit</button>
                        </div>
                        <div>
                            <button className='button delete' onClick={() => handleDelete(todo.id)}>{trash} Delete</button>  
                        </div>
                    </div>
                </div>
            )}
        </ItemStyled> 
    )
}

const ItemStyled = styled(motion.div)`
    box-shadow: 0.5rem 0.5rem 1rem rgba(255,255,255,0.1);
    width: 90%;
    height: auto;
    padding: 0.5rem;
    border: solid 0.1rem;
    border-color: rgba(0,0,0,0.1);
    border-radius: 1rem;
    background-color: rgba(0, 0, 0, 0.3);
    margin: 0.5rem;
    font-size: 1.5rem;
    .update-con {
        display: flex;
        justify-content: space-between;
    }
    .input {
        padding: 1rem;
        background-color: rgba(0,0,0, 0.3);
        border: solid 0.1rem;
        border-radius: 1rem;
        text-align: center;
        width: 60%;
        color: red;
        margin: 0.5rem;
        border-color: rgba(255,255,255,0.1);
    }
    .update {
        padding: 1rem;
        background-color: rgba(0, 0, 0, 0.2);
        color: red;
        border: solid 0.1rem;
        border-radius: 1rem;
        padding: 1rem;
        width: 15%;
        margin: 0.5rem;
    }
    .item-con {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .text-con {
        padding: 0.5rem;
    }
    .buttons-con{
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .undone-con {
        display: flex;
        justify-content: space-between;
    }
    .completed-con {
        display: flex;
        justify-content: space-between;
    }
    .icon {
        font-size: 1.5rem;
        padding: 0.5rem;
        margin: 0.5rem;
    }
    .text-completed {
        text-decoration: line-through;
    }
    .button{
        background-color: rgba(0, 0, 0, 0.2);
        color: white;
        border: solid 0.1rem;
        border-radius: 0.5rem;
        border-color: white;
        padding: 0.5rem;
        width: auto;
        height: auto;
        margin: 0.5rem;
    }
    .delete {
        color: red;

    }

`;