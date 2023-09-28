import { useState } from "react";

export const Form = ({ onSubmit }) => {
  const [item, setItem] = useState("");

  const updateText = (e) => {
    setItem(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (item === "") return;
    onSubmit(item);
    setItem("");
  };

  return (
    <form onSubmit={submitForm}>
      <div>
        <label htmlFor="item">Add todos</label>
        <input type="text" id="item" value={item} onChange={updateText} />
      </div>
      <button>Add</button>
    </form>
  );
};
