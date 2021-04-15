import {useState} from 'react';
import {NewTodo} from './types';

interface Props {
    /*
     * onNewTodoSubmit is a callbacl called when the addTodo form is submitted
     * It takes the new todo as a parameter
     */ 
    onNewTodoSubmit?: (newTodo: NewTodo) => void
}

function AddTodo({onNewTodoSubmit}: Props) {
    
    /*
     * useState to store the label of the newTodo
     * As you can see we did not precise the type of useState ( useState<string> )
     * However, since useState takes a string as a default parameter ( useState("") ).
     * Typescript knows that label is a string and setLabel takes a string as a parameter.
     */ 
    const [label, setLabel] = useState("");

    function handleSubmit(e: React.FormEvent) {
	e.preventDefault();
	
	if(!label) return;

	if(onNewTodoSubmit){
	    onNewTodoSubmit({
		    label,
		    isDone: false
		})
	}

	setLabel("")

    }

    function handleLabelChange(e: React.ChangeEvent<HTMLInputElement>) {
	setLabel(e.target.value)
    }

    return (
	    <form onSubmit={handleSubmit}>
		<input type="text" name="label" onChange={handleLabelChange} value={label} />
		<button type="submit"> Add todo </button>
	    </form>
    )
}

export default AddTodo
