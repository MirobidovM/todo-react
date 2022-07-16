import { TodoItem } from '../todo-item';

export const TodoList = ({ todos, setTodos }) => {
  return (
    <ul className="list-unstyled w-50 mx-auto border">
      <li>count: {todos.length}</li>
      {todos.map((todo) => (
        <TodoItem todos={todos} setTodos={setTodos} todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};
