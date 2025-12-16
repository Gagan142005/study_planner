export default function TaskList({ tasks }) {
  return (
    <div className="card">
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}
