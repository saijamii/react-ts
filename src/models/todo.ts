class Todo {
  id: number;
  text: string;
  constructor(todoText: string) {
    this.text = todoText;
    this.id = Date.now();
  }
}

export default Todo;
