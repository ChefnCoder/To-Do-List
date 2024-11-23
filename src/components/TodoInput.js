import React, { useState, useEffect } from 'react';

function TodoInput(props) {
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    setInputText(props.editValue || ''); // Update input text if editing
  }, [props.editValue]);

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      props.addList(inputText);
      setInputText('');
    }
  };

  return (
    <div className="flex items-center mt-4">
  <input
    type="text"
    className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    placeholder="Enter your todo"
    value={inputText}
    onChange={(e) => {
      setInputText(e.target.value);
    }}
    onKeyDown={handleEnterPress}
  />
  <button
    className={`px-4 py-2 text-white ${
      props.editValue ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'
    } rounded-r-md transition duration-200`}
    onClick={() => {
      props.addList(inputText);
      setInputText('');
    }}
  >
    {props.editValue ? 'Save' : '+'}
  </button>
</div>

  );
}

export default TodoInput;
