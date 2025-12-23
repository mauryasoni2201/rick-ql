import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCharacterFavoriteStore = create(
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
            name: 'character-favorites',
        },
    ),
);

export default useCharacterFavoriteStore;
