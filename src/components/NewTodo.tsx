import React, { useRef } from "react";

const NewTodo: React.FC = () => {
  const todoInputRef = useRef<HTMLInputElement>(null);
  const onFinish = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onFinish}>
      <label>Todo Text</label>
      <input type="text" id="text" ref={todoInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
