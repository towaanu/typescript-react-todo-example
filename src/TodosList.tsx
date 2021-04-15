import { Todo } from './types'; // import the Todo type
import TodoItem from './TodoItem'; // TodoItem is the component used to display one todo on the screen

/*
 * We define our Props type
 * It is used to define the props our TodosList will take in parameter
 * onTodoClick is optional
 */
interface Props {
    todos: Array<Todo>,
    onTodoClick?: (todo: Todo) => void
}

/*
 * The TodosList component.
 * We are using our Props type to tell typescript "This component uses the Props type for its parameter".
 * This way, when we use our component, typescript is able to tell you if we try to use a non existing property. 
 * Or if we try to give a bad type to a props.
 */
function TodosList({todos, onTodoClick}: Props) {
    return (
    /* 
     * Now we can use todos and the onTodoClick
     * if we try to write : `todos.foo`, typescript can tell us that an array of todos has no "foo" property
     * Same things apply to onTodoClick. If we try to call onTodoClick like this : onTodoClick(10)
     * Typescript is able to say "10 is not a todo, onTodoClick takes a todo as a parameter not a number"
     */
	<ul>
	    { todos.map(todo => <TodoItem key={todo.id} onTodoClick={onTodoClick} todo={todo} />) }
	</ul>
    )
}

export default TodosList
