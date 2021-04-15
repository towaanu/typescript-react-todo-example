import styles from './App.module.css';
import {v4 as uuidv4} from 'uuid';
import { Todo, NewTodo } from './types';
import { useState } from 'react';
import TodosList from './TodosList';
import AddTodo from './AddTodo';

function App() {
    
   /*
   * With useState<Todo[]>, typescript knows: 
   * - todos is an Array of todos 
   * - setTodos takes an array of todos as parameter
   */
  const [todos, setTodos] = useState<Todo[]>([
    {id: uuidv4(), label: "Cleaning", isDone: true},
    {id: uuidv4(), label: "Cooking", isDone: false}
  ])

  function toggleTodo(todo: Todo) {
      setTodos(todos.map(
	  t => t.id === todo.id ? {...t, isDone: !t.isDone} : t
      ))
  }

  function addTodo(newTodo: NewTodo) {
     /*
     * If we try to pass a non todos array, typescript will tell us
     */
    setTodos([...todos, {
	...newTodo,
	id: uuidv4()
    }]) 
  }

  return (
    <div className={styles['App']}>
	{/* Since useState is typed, typescript knows that we are passing a todos array in TodosList */}
	<TodosList onTodoClick={toggleTodo} todos={todos} />
	<AddTodo onNewTodoSubmit={addTodo} />
    </div>
  );
}

export default App
