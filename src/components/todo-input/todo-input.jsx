import { useRef } from 'react';
import { v4 } from 'uuid';

export const TodoInput = ({ todos, setTodos }) => {
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
      localStorage.setItem('todos', JSON.stringify([newTodo, ...todos]));
      inputRef.current.value = null;
      return;
    }

    alert('Minimum 3 character');
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
