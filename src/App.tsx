import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("React"), new Todo("TypeScript")];
  console.log(todos,"todos")
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
