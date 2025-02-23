import React from "react";
import { useState } from "react";
import { IAddCategoryProps } from "../interfaces";

export const AddCategory = ({ onAddCategory }: IAddCategoryProps) => {
  const [name, setName] = useState<string>("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentName = event.target.value as string;
    setName(currentName);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement> | unknown) => {
    if (event instanceof Event) {
      event.preventDefault();
      if (name.trim().length <= 1) return;
      
      onAddCategory(name);
      setName("");
    }
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
