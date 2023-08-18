import React, {useEffect, useRef, useState} from 'react';
import {useTodo} from '../context/useTodo';
import styled from 'styled-components';
import {toast} from 'react-hot-toast';

const AddTodo = () => {

    const [input, setInput] = useState <string> ('')
    
    const inputRef = useRef<HTMLInputElement>(null)

    const {addTodo} = useTodo()

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [])

    const handleSubmission = (e: React.FormEvent) => {
        e.preventDefault()
        if (input.trim() !== '') {
            addTodo(input)
            setInput('')
            toast.success('Todo added sucessfully!')
        } else {
            toast.error('Todo field cannot be empty')
        }
    }

    return (
        <FormStyled>
            <div className="insert-con">
                <input className="input" ref={inputRef} value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="what do you have to do ?"/>
                <button className="button" onClick={handleSubmission}>Submit</button> 
            </div>
        </FormStyled>
    )
}



const FormStyled = styled.div`
    width: 50%;
    .insert-con {
        display: flex;
        align-items: center;
        width: 100%;
        gap: 1rem;
        margin: auto;
        padding: 1rem;

    }
    .input {
        padding: 1rem;
        background-color: rgba(0,0,0, 0.3);
        border: solid 0.1rem;
        border-radius: 1rem;
        text-align: center;
        width: 80%;
        color: white;
    }

    .button {
        padding: 1rem;
        background-color: rgba(0, 0, 0, 0.2);
        color: white;
        border: solid 0.1rem;
        border-radius: 1rem;
        border-color: white;
        padding: 1rem;
        width: 20%;
    }

`;

export default AddTodo