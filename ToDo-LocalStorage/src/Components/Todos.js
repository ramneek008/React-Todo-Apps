import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import {FaCheckDouble} from 'react-icons/fa';

const todos = ({todos, markComplete}) => {
    return(
        <ListGroup className="mt-5 mb-2 items" style={{position:'inherit', width:'60%', margin:'5px auto'}}>
            {todos.map(todo => (
                <ListGroupItem key={todo.id}>
                    {todo.todoString}
                    <span className="float-right" onClick={() => markComplete(todo.id)}>
                        <FaCheckDouble />
                    </span>
                </ListGroupItem>
            ))}
        </ListGroup>
    );
};

export default todos;