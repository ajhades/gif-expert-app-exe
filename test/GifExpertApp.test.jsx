import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en <GifExpertApp />", () => {
  test('debe mostrar el titulo "GifExpertApp"', () => {
    render(<GifExpertApp />);

    expect(screen.getByText("GifExpertApp")).toBeTruthy();
  });
  test("debe agregar una nueva categoria", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: "Dragon Ball" } });
    fireEvent.submit(form);

    expect(screen.getByText("Dragon Ball")).toBeTruthy();
  });

  test("no debe agregar una categoria existente", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: "Superman" } });
    fireEvent.submit(form);

    fireEvent.input(input, { target: { value: "Superman" } });
    fireEvent.submit(form);

    const items = screen.getAllByText("Superman");
    expect(items.length).not.toBeGreaterThan(1);
  });
});
