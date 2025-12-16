"use client";

export default function TaskList({ tasks, toggleComplete, deleteTask }) {
  return (
    <div className="card task-list p-4 border rounded shadow">
      <h3 className="text-lg font-semibold mb-2">My Tasks</h3>

      {tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`flex justify-between items-center p-2 border-b ${
                task.completed ? "line-through text-gray-400" : ""
              }`}
            >
              <span>{task.title}</span>
              <div className="flex gap-2">
                {toggleComplete && (
                  <button
                    onClick={() => toggleComplete(task.id)}
                    className="text-sm bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                  >
                    {task.completed ? "Undo" : "Done"}
                  </button>
                )}
                {deleteTask && (
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-sm bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
