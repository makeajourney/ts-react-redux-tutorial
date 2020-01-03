import React from 'react';
import './TodoItem.css'
import { Todo } from '../modules/todos';
import useTodoActions from '../hooks/useTodoActions';

type TodoItemProps = {
    todo: Todo;
};

function TodoItem({ todo }: TodoItemProps) {
    const { onToggle, onRemove } = useTodoActions(todo.id);

    // TODO: Implement onToggle / onRemove with custom hook
    return (
        <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
            <span className="text" onClick={onToggle}>{todo.text}</span>
            <span className="remove" onClick={onRemove}>(X)</span>
        </li>
    );
}

export default TodoItem;
