import create from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { cartListData } from "../../mock/cartData";

export const storeCart = create(
  persist(
    (set, get) => ({
      cartlist: cartListData,
      totalPrice: 0,
      toggleCartlist: (product) =>
        set((state) => {
          const isProductInCart = state.cartlist.some(
            (item) => item.id === product.id
          );

          return {
            cartlist: isProductInCart
              ? state.cartlist.filter((item) => item.id !== product.id)
              : [...state.cartlist, { ...product, quantity: 1 }],
          };
        }),
      getQuantity: (productId) => {
        const item = get().cartlist.find((item) => item.id === productId);
        return item ? item.quantity : 0;
      },
      setQuantity: (productId, quantity) => {
        set((state) => {
          if (quantity <= 0) {
            return {
              cartlist: state.cartlist.filter((item) => item.id !== productId),
            };
          } else {
            return {
              cartlist: state.cartlist.map((item) =>
                item.id === productId ? { ...item, quantity } : item
              ),
            };
          }
        });
        get().calculateTotalPrice();
      },
      calculateTotalPrice: () =>
        set(() => {
          const total = get().cartlist.reduce(
            (sum, item) => sum + item.precio * item.quantity,
            0
          );
          return { totalPrice: total };
        }),
      clear: () => set(() => ({ cartlist: [] })),
    }),
    {
      name: "cartlist",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
