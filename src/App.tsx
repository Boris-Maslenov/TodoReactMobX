import { Container } from "./components/layout/container/Container";
import { TodoList } from "./components/todo-list/TodoList";
import "./index.css";

function App() {
  return (
    <Container>
      <TodoList />
    </Container>
  );
}

export default App;
