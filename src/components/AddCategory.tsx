import { useState } from "react";
import PropTypes from "prop-types";
export const AddCategory = ({ onAddCategory }: { onAddCategory: (name: string) => void }) => {//+
  const [name, setName] = useState("");

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {//+
    setName(target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {//+
    event.preventDefault();
    if (name.trim().length <= 1) return;
    setName("");
    onAddCategory(name);
  };
//+
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