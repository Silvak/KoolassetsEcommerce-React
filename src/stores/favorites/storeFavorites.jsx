import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const storeFavorites = create(
    persist(
        (set, get) => ({
            favorites: [],
            toggleFavorite: (product) =>
                set((state) => {
                    // ¿El producto está en favoritos?
                    const isProductInFavorites = state.favorites.some(
                        (item) => item.id === product.id
                    );

                    // Agregar o eliminar el producto de favoritos
                    return {
                        favorites: isProductInFavorites
                            ? state.favorites.filter((item) => item.id !== product.id) // Eliminar
                            : [...state.favorites, product], // Agregar
                    };
                }),
            // Verificar si un producto esta en favoritos
            isFavorite: (product) =>
                get().favorites.some((item) => item.id === product.id),
            clearFavorites: () => set(() => ({ favorites: [] })),
        }),
        {
            name: "favorites",
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);
