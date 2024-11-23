import React from 'react';

function Todolist(props) {
  return (
    <li className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded-md shadow-sm hover:shadow-md transition duration-200">
  <span className="text-gray-800">{props.item}</span>
  <div className="space-x-3">
    <button
      className="text-green-500 hover:text-green-700"
      onClick={() => props.editItem(props.index)}
    >
      <i className="fa-solid fa-pen-to-square"></i>
    </button>
    <button
      className="text-red-500 hover:text-red-700"
      onClick={() => props.deleteItem(props.index)}
    >
      <i className="fa-solid fa-trash-can"></i>
    </button>
  </div>
</li>

  );
}

export default Todolist;
