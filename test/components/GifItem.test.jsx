import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe("Prueba de <GiftItem />", () => {
  const title = "HxH";
  const url = "https://media0.giphy.com/media/2y98KScHKeaQM/giphy.gif";
  test("debe hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
  test("debe mostrar la imagen con url y alt", () => {
    render(<GifItem title={title} url={url} />);

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });
  test("debe mostrar el título", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
