export interface ICategory {
  name: string;
}

export interface IAddCategoryProps {
  /**
   * Callback function to add a category.
   * @param name - The name of the category to add.
   */
  onAddCategory: (name: string) => void;
}