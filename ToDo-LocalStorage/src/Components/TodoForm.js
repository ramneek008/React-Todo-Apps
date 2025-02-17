import React, {useState} from 'react';
import {Form, FormGroup, Input, InputGroup, InputGroupAddon, Button} from 'reactstrap';
import {v4} from 'uuid';

const TodoForm = ({addTodos}) => {

    const [todoString, setTodoString] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if(todoString === ""){
            return alert("Please enter a todo");
        }

        const todo = {
            todoString,
            id: v4()
        }

        addTodos(todo);
        setTodoString("");
    }
    
    return(
        <Form onSubmit={handleSubmit} style={{position:'inherit', width:'60%', margin:'50px auto'}}>
            <FormGroup>
                <InputGroup>
                <Input 
                 type="text"
                 name="todo"
                 id="todo"
                 placeholder="Enter a todo"
                 value={todoString}
                 onChange= {e => setTodoString(e.target.value)}
                 />
                <InputGroupAddon addonType="prepend">
                    <Button
                     color="success"
                     >Add Todo</Button>
                </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TodoForm;