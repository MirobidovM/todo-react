import { showAlert } from '../../utils/alert';
import { setItem } from '../../utils/storage-services';

export const TodoItem = ({ todo, todos, setTodos, setAlert }) => {
  const handleDeleteTodo = (id) => {
    const filtredTodo = todos.filter((todo) => todo.id !== id);
    setTodos(filtredTodo);
    showAlert(setAlert);
    setItem('todos', filtredTodo);
  };

  const handleEditTodo = (evt) => {
    const editInput = evt.target.closest('.item-todo').querySelector('.title');

    editInput.readOnly = false;
    editInput.style.border = '1px solid #000';
    editInput.focus();
  };

  const handleSave = (evt, id) => {
    if (evt.keyCode === 13) {
      todos.forEach((todo, i) => {
        if (todo.id === id) {
          todos[i].title = evt.target.value;
        }
      });
      setTodos([...todos]);
      setItem('todos', [...todos]);
      evt.target.readOnly = true;
      evt.target.style.border = 'none';
    }
  };

  return (
    <li className="d-flex w-100 align-items-center p-2 border-bottom item-todo">
      <input type="checkbox" name="" id="" />
      <input
        className="title"
        defaultValue={todo.title}
        readOnly
        style={{ border: 'none', outline: 'none' }}
        onKeyUp={(evt) => handleSave(evt, todo.id)}
      />
      <div className="ms-auto">
        <button onClick={handleEditTodo} className="btn btn-success">
          Edit
        </button>
        <button
          className="btn btn-danger ms-3"
          onClick={() => handleDeleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};
