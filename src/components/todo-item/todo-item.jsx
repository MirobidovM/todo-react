import { showAlert } from '../../utils/alert';

export const TodoItem = ({ todo, todos, setTodos, setAlert }) => {
  const handleDeleteTodo = (id) => {
    const filtredTodo = todos.filter((todo) => todo.id !== id);
    setTodos(filtredTodo);
    showAlert(setAlert);
  };

  const handleEditTodo = (evt) => {
    const editInput = evt.target.closest('.item-todo').querySelector('.title');

    editInput.readOnly = false;
    editInput.style.border = '1px solid #000';
    editInput.focus();
  };

  const handleSave = (evt) => {
    if (evt.keyCode === 13) {
      console.log(evt.target.value);
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
        onKeyUp={handleSave}
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
