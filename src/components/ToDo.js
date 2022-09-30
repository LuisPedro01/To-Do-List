import React from "react";
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close"

export default function Todo({todo, toggleComplete, removeTodo}) {
    function handleChecboxClick(){
        toggleComplete(todo.id);
    }

    function handleRemoveClick(){
        removeTodo(todo.id);
    }
  return (
    <ListItem style={{dispaly: "flex"}}>
      <Checkbox checked={todo.completed} onClick={handleChecboxClick}/>
      <Typography variant="body1" style={{textDecoration: todo.completed ? "line-through" : null}}>{todo.task}</Typography>
      <IconButton onClick={handleRemoveClick}><CloseIcon/></IconButton>
    </ListItem>
  );
}
