import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onToggleDone, onDelete }) {
  return (
    <div>
      {tasks.length === 0 && <div>No tasks yet</div>}
      {tasks.map(t => <TaskItem key={t.taskId} task={t} onToggleDone={onToggleDone} onDelete={onDelete} />)}
    </div>
  );
}
