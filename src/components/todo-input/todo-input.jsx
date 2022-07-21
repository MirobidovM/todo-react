import { useRef } from 'react';
import { v4 } from 'uuid';
import { showAlert } from '../../utils/alert';
import { setItem } from '../../utils/storage-services';

export const TodoInput = ({ todos, setTodos, setAlert }) => {
  const inputRef = useRef();

  const handleAddTodo = (evt) => {
    evt.preventDefault();

    if (inputRef.current.value.length > 3) {
      const newTodo = {
        id: v4(),
        title: inputRef.current.value,
        isComplated: false,
      };

      setTodos((prev) => [newTodo, ...prev]);
      setItem('todos', [newTodo, ...todos]);
      showAlert(setAlert);
      inputRef.current.value = null;
      return;
    }

    alert('Minimum 4 character');
  };

  return (
    <form
      className="d-flex align-items-center w-50 mx-auto mt-5 mb-4"
      onSubmit={handleAddTodo}
    >
      <input
        ref={inputRef}
        className="form-control"
        type="text"
        placeholder="Todo..."
      />
      <button className="btn btn-success ms-4" style={{ width: '120px' }}>
        Add Todo
      </button>
    </form>
  );
};
