import { useState } from "react";
import PropTypes from "prop-types";
export const AddCategory = ({ onAddCategory }) => {
  const [name, setName] = useState("");

  const onChange = ({ target }) => {
    setName(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (name.trim().length <= 1) return;
    // setCategories((categories) => [...categories, name]);
    setName("");
    onAddCategory(name);
  };
  return (
    <form onSubmit={onSubmit} aria-label="form">
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

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired,
};
