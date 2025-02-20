export interface ICategory {
  name: string;
}

export interface IAddCategoryProps {
  onAddCategory: (name: string) => void;
}