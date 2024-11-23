import React, { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import Todolist from './components/TodoList';

function App() {
  const [listTodo, setListTodo] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const addList = (inputText) => {
    if (inputText !== '') {
      if (editIndex !== -1) {
        const updatedTodos = [...listTodo];
        updatedTodos[editIndex] = inputText;
        setListTodo(updatedTodos);
        setEditIndex(-1);
      } else {
        setListTodo([...listTodo, inputText]);
      }
    }
  };

  const deleteListItem = (key) => {
    const newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo(newListTodo);
  };

  const editListItem = (key) => {
    setEditIndex(key);
  };

  const deleteAllItems = () => {
    setListTodo([]); // Clear the entire list
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">To-Do List</h1>
        <hr className="border-t-2 border-gray-200" />
        <TodoInput
          addList={addList}
          editValue={editIndex !== -1 ? listTodo[editIndex] : ''}
        />
        <ul className="mt-4 space-y-2">
          {listTodo.map((listItem, i) => {
            return (
              <Todolist
                key={i}
                index={i}
                item={listItem}
                deleteItem={deleteListItem}
                editItem={editListItem}
              />
            );
          })}
        </ul>
        {listTodo.length > 0 && (
          <button
            className="w-full mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-200"
            onClick={deleteAllItems}
          >
            Delete All
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
