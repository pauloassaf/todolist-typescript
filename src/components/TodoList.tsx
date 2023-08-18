import {useTodo} from '../context/useTodo';
import styled from 'styled-components';
import {TodoItem} from './TodoItem';

export const TodoList = () => {

    const {todos} = useTodo()

    if (!todos.length) {
        return (
            <NothingStyled>
                <h1 className="container">You have nothing to do!</h1>
            </NothingStyled>
        )
    }

    return (
        <ListStyled>
            {todos.map(todo => (
                <TodoItem todo={todo} key={todo.id} />
            ))}
        </ListStyled>
    )
}

const NothingStyled = styled.div`
    width: 50%;
    padding: 2rem;
    .container{
        border: solid 0.1rem;
        border-radius: 5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        padding: 2rem;
        font-size: 2rem;
        background-color: rgba(0, 0, 0, 0.3);
        color: rgba(255, 255, 255, 0.7);
        border-color: rgba(0,0,0,0.2);
        box-shadow: 0.5rem 0.5rem 0.5rem rgba(255,255,255,0.1);

    }
`;

const ListStyled = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    margin: 1rem;
    overflow: auto;

`;



export default TodoList;