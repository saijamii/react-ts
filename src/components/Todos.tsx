import React from "react";
import TodoItem from "./TodoItem";
import Todo from "../models/todo";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((e) => (
        <TodoItem key={e.id} text={e.text} />
      ))}
    </ul>
  );
};

export default Todos;
