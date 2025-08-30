import React, { useState } from "react";

export default function AddTaskForm({ onCreate }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onCreate({ title, description });
    setTitle(""); setDescription("");
  };

  return (
    <form onSubmit={submit}>
      <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" />
      <input value={description} onChange={e=>setDescription(e.target.value)} placeholder="Description" />
      <button type="submit">Add</button>
    </form>
  );
}
