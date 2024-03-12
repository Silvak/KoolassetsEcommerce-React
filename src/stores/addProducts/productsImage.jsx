import create from "zustand";

export const storeImages = create((set) => ({
    images: [],
    setImages: (newImages) => set({ images: newImages })
})
)
