import React from "react";

export default function TaskItem({ task, onToggleDone, onDelete }) {
  return (
    <div style={{ padding:8, borderBottom:"1px solid #ddd" }}>
      <input type="checkbox" checked={task.status==="completed"} onChange={() => onToggleDone(task)} />
      <strong style={{ marginLeft: 8 }}>{task.title}</strong>
      <div>{task.description}</div>
      <button onClick={() => onDelete(task.taskId)}>Delete</button>
    </div>
  );
}
