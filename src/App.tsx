import { Container } from "./components/layout/container/Container";
import Header from "./components/header/Header";
import TodoList from "./components/todo-list/TodoList";
import TodoBuilder from "./components/todo-builder/TodoBuilder";
import Footer from "./components/footer/Footer";
import "./index.css";
import "simplebar-react/dist/simplebar.min.css";

const App = () => {
  return (
    <Container>
      <Header />
      <TodoBuilder />
      <TodoList />
      <Footer />
    </Container>
  );
};

export default App;
