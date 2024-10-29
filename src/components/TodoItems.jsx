import React, { useState, useEffect, useCallback } from "react";

const TodoItems = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = useCallback(() => {
    if (inputValue.trim()) {
      const newTask = { id: Date.now(), text: inputValue, completed: false };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setInputValue("");
    } else {
      alert("Please enter a task.");
    }
  }, [inputValue]);

  const toggleTaskCompletion = useCallback((taskId) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  useEffect(() => {
    const timers = tasks
      .filter((task) => task.completed)
      .map((task) =>
        setTimeout(() => {
          setTasks((currentTasks) => currentTasks.filter((t) => t.id !== task.id));
        }, 3000)
      );

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [tasks]);

  return (
    <>
    {tasks.length === 0 && (
      <div className="pt-0 bg-white h-[530px]  rounded-lg  max-w-md mx-auto mt-8">
      {/* Input Field */}
      {tasks.length === 0 && (
        <div className="pl-4 h-12 flex items-center mb-2 border-b border-b-[#d0e5f9]">
          <button
            onClick={addTask}
            className="text-gray-500 text-2xl mr- hover:text-blue-500"
            aria-label="Add task"
          >
            +
          </button>
          <input
            type="text"
            placeholder="Add task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
            className="flex-grow px-4 py-2 focus:outline-none text-left"
          />
        </div>
      )}

      {/* Task List */}
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="h-12 flex items-center py-1 border-b border-[#d0e5f9]">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
              className="mr-3 h-5 w-5 appearance-none border border-black bg-white checked:bg-white checked:border-black checked:before:content-['✓'] before:text-black before:flex before:items-center before:justify-center"
              aria-label={`Toggle completion for ${task.text}`}
            />
            <span
              className={`flex-grow text-lg whitespace-pre-wrap ${
                task.completed ? "line-through text-gray-500" : "text-black"
              }`}
            >
              {task.text}
            </span>
          </li>
        ))}

        {/* Empty Placeholder */}
        {tasks.length === 0 &&
          Array(8)
            .fill(null)
            .map((_, index) => (
              <li
                key={index}
                className="flex items-center py-1 h-12 border-b border-[#d0e5f9]"
              ></li>
            ))}
      </ul>

      
    </div>)}

    {tasks.length > 0 && (
      <div className="pt-0 bg-white rounded-lg border-b  h max-h-[530px] border-b-[#d0e5f9] max-w-md mx-auto mt-8">
      {/* Input Field */}
      

      {/* Task List */}
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="ml-0 h-[48px] pl-4 flex items-center py-1 border-b border-[#d0e5f9] w-[328px]  left-3">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
              className=" mr-3 h-5 w-5 appearance-none border border-black bg-white checked:bg-white checked:border-black  checked:before:content-['✓'] before:text-black before:flex before:items-center before:justify-center"
              aria-label={`Toggle completion for ${task.text}`}
            />
            <span
              className={`flex-grow text-lg whitespace-pre-wrap ${
                task.completed ? "line-through text-gray-500" : "text-black"
              }`}
            >
              {task.text}
            </span>
          </li>
        ))}        
      </ul>

      {/* Additional Input Field at Bottom */}
      {tasks.length > 0 && (
        <div className="flex items-center mt-2 mb-0 ">
          <button
            onClick={addTask}
            className="pl-4 text-gray-500 text-2xl  hover:text-blue-500"
            aria-label="Add task"
          >
            +
          </button>
          <input
            type="text"
            placeholder="Add task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
            className="flex-grow px-4 py-2 border-none focus:outline-none text-left  border-b rounded-2xl"
          />
        </div>
      )}
    </div>)}
    </>
  );
};

export default TodoItems;
