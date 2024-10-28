import { useState } from "react";
import { AddCategory } from "./AddCategory";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Marvel", "Naruto"]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);
  };
  return (
    <>
      <h1> GifExpertApp</h1>
      <AddCategory onAddCategory={onAddCategory} />
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};