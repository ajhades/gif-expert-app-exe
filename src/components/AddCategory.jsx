import { useState } from "react";
export const AddCategory = ({ onAddCategory }) => {
  const [name, setName] = useState("");

  const onChange = (event) => {
    setName(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (name.trim().length <= 1) return;
    onAddCategory(name);
    // setCategories((categories) => [...categories, name]);
    setName("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Nombre"
        value={name}
        onChange={onChange}
      />
    </form>
  );
};
