import React, { useEffect, useState } from "react";
import { listTasks, createTask, updateTask, deleteTask } from "./api";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const load = async () => {
    const data = await listTasks();
    setTasks(data.items || []);
  };

  useEffect(() => { load(); }, []);

  const handleCreate = async (payload) => {
    await createTask(payload);
    load();
  };

  const handleToggle = async (task) => {
    const status = task.status === "completed" ? "active" : "completed";
    await updateTask(task.taskId, { status });
    load();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    load();
  };

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: 20 }}>
      <h1>Task Manager</h1>
      <AddTaskForm onCreate={handleCreate} />
      <TaskList tasks={tasks} onToggleDone={handleToggle} onDelete={handleDelete} />
    </div>
  );
}
