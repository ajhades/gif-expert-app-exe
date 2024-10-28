import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en <GifExpertApp />", () => {
  test('debe mostrar el titulo "GifExpertApp"', () => {
    render(<GifExpertApp />);

    expect(screen.getByText("GifExpertApp")).toBeTruthy();
  });
  // test("debe agregar una nueva categoria onAddCategory", () => {
  //   render(<GifExpertApp />);

  // });
});
