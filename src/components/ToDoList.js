import React from 'react'
import Todo from "./ToDo"
import{ List } from "@material-ui/core"

export default function ToDoList({todos, removeTodo, toggleComplete}) {
  return (
    <List>
        {todos.map(todo=> (
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} toggleComplete={toggleComplete}/>
        ))}
    </List>
  )
}
