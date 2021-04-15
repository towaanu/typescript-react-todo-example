import { Todo } from "./types"

interface Props {
    todo: Todo
    onTodoClick?: (todo: Todo) => void
}

function TodoItem({todo, onTodoClick}: Props) {
    
    function handleClick() {
	if(onTodoClick) {
	    onTodoClick(todo)
	}
    }

    return ( <li onClick={handleClick} > {todo.label} {todo.isDone ? "✔" : "✘"} </li> )
}

export default TodoItem
