import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { FavoritesState } from "./types";

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set) => ({
      favorites: [],
      toggleFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.includes(id)
            ? state.favorites.filter((favId) => favId !== id)
            : [...state.favorites, id],
        })),
    }),
    {
      name: "favorites-storage",
    }
  )
);
