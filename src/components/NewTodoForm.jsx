import { useState } from "react";

export function NewTodoForm({ addTodo }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    addTodo(newItem);

    setNewItem("");
  }
  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          type="text"
          name="item"
          id="item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          // onInput={(e) => setNewItem(e.target.value)}
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
