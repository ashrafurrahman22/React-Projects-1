import React, { useEffect, useState } from 'react';
import Todo from '../todo/Todo.js';
import './Todos.css'

const Todos = () => { 

        const [todos, setTodos] = useState([])
        useEffect(()=> {
            fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res=> res.json())
            .then(data=> setTodos(data))
        }, [])

    return (
        <div>
           {/* <h2 className='heading'>Hello from todos</h2> */}
           <div className='todos'>
                
           {
               todos.map(todo=> <Todo todo={todo}></Todo> )
           }

        </div>
            </div>
    );
};

export default Todos;