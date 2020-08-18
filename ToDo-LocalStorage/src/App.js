import React, { useState, useEffect } from 'react';
import {Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Todos from './Components/Todos';
import TodoForm from './Components/TodoForm';

const App = () => {

  const [todos, setTodos] = useState([]);

  return(
    <Container fluid>
      <h1>Todo with Local Storage</h1>
      <Todos todos={todos} markComplete={markComplete} />
      <TodoForm addTodos={addTodos} />
    </Container>
  );

}

export default App;