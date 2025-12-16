export default function TaskList({ tasks }) {
  console.log("TASK LIST RENDER", tasks); // 👈 ADD THIS

  return (
    <div className="card task-list">
      <h3>My Tasks</h3>

      {tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
