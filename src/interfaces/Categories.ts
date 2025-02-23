export interface ICategory {
  name: string;
}

export interface IAddCategoryProps {
  onAddCategory: (name: string) => void;  // 'name' is the parameter for adding a category
}