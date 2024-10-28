import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifts } from "../../src/hooks/useFetchGifts";
jest.mock("../../src/hooks/useFetchGifts");

describe("Pruebas en <GifGrid />", () => {
  const category = "Spiderman";
  test("debe mostrar el loading inicialmente", () => {
    useFetchGifts.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);

    expect(screen.getByText("... Cargando ...")).toBeTruthy;
    expect(screen.getByText(category)).toBeTruthy;
  });

  test("debe mostrar imagenes al usar useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        url: "https://example.com/image.jpg",
        title: "Spiderman",
      },
      {
        id: "DEF",
        url: "https://example.com/image1.jpg",
        title: "Venom",
      },
    ];
    useFetchGifts.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBeGreaterThan(0);
  });
});
