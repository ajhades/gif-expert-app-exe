const { render, screen, fireEvent } = require("@testing-library/react");
const { AddCategory } = require("../../src/components");

describe("Pruebas en <AddCategory />", () => {
  const category = "HxH";
  test("debe cambiar el valor del input", () => {
    render(<AddCategory onAddCategory={() => {}} />);

    const inputField = screen.getByRole("textbox");

    fireEvent.input(inputField, { target: { value: category } });
    expect(inputField.value).toBe(category);
  });

  test("debe llamar onAddCategory si el input tiene valor", () => {
    const onAddCategoryMock = jest.fn();
    render(<AddCategory onAddCategory={onAddCategoryMock} />);
    const inputField = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(inputField, { target: { value: category } });
    fireEvent.submit(form);

    expect(inputField.value).toBe("");

    expect(onAddCategoryMock).toHaveBeenCalled();
    expect(onAddCategoryMock).toHaveBeenCalledTimes(1);
    expect(onAddCategoryMock).toHaveBeenCalledWith(category);
  });

  test("debe no llamar onAddCategory si el input está vacío", () => {
    const onAddCategoryMock = jest.fn();
    render(<AddCategory onAddCategory={onAddCategoryMock} />);
    const form = screen.getByRole("form");

    fireEvent.submit(form);

    expect(onAddCategoryMock).not.toHaveBeenCalled();
  });
});
