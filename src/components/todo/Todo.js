import React from 'react';
import './Todo.css'


const Todo = (props) => {
    console.log(props.todo)
    return (
        <div className='todosDiv'>
            <h6>Id: {props.todo.id}</h6>
            <h5>Username: {props.todo.title}</h5>
        </div>
    );
};

export default Todo;