import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi } from "vitest";
import { FavoriteButton } from "./FavoriteButton";
import type { Product } from "@/entities/product-card/model/types";

// Mock product data
const mockProduct: Product = {
  id: "1",
  name: "Test Product",
  category: "Test Category",
  price: 100,
  image: "test.jpg",
  description: "Test description",
};

describe("FavoriteButton", () => {
  test("renders correctly and calls toggle function on click", async () => {
    // 1. Setup
    const user = userEvent.setup();
    const toggleFavoriteMock = vi.fn();

    // 2. Render
    render(
      <FavoriteButton
        product={mockProduct}
        isFavorite={false}
        toggleFavorite={toggleFavoriteMock}
      />
    );

    // 3. Assert initial state
    const button = screen.getByRole("button", { name: /В обране/i });
    expect(button).toBeInTheDocument();

    // 4. Act
    await user.click(button);

    // 5. Assert after action
    expect(toggleFavoriteMock).toHaveBeenCalledTimes(1);
    expect(toggleFavoriteMock).toHaveBeenCalledWith("1");
  });

  test("renders correctly when isFavorite is true", () => {
    const toggleFavoriteMock = vi.fn();

    render(
      <FavoriteButton
        product={mockProduct}
        isFavorite={true}
        toggleFavorite={toggleFavoriteMock}
      />
    );

    const button = screen.getByRole("button", {
      name: /Видалити з обраних/i,
    });
    expect(button).toBeInTheDocument();
  });
});
