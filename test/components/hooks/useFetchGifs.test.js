import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifts } from "../../../src/hooks/useFetchGifts";

describe("Prueba a hook useFetchGifs", () => {
  test("debe regresar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifts("Saitama"));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("debe retornar arreglo de imagnes e isLoading en false", async () => {
    const { result } = renderHook(() => useFetchGifts("Saitama"));
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
