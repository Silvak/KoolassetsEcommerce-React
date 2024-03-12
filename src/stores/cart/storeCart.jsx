import create from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const storeCart = create((set, get) => ({
  cartlist: [],
  cartlistBackup: [],
  totalPrice: 0,
  subtotal: 0,
  shipping: 100,
  discount: 20,
  taxes: 21,
  toggleCartlist: (product) =>
    set((state) => {
      const isProductInCart = state.cartlist.some(
        (item) => item.id === product.id
      );

      if (isProductInCart && state.cartlistBackup.length === 2) {
        state.cartlistBackup.shift();
      }

      let updatedCartlistBackup = !isProductInCart
        ? state.cartlistBackup.filter((item) => item.id !== product.id)
        : [...state.cartlistBackup, product];

      let updatedCartlist = isProductInCart
        ? state.cartlist.filter((item) => item.id !== product.id)
        : [...state.cartlist, { ...product, quantity: 1 }];

      return {
        cartlist: updatedCartlist,
        cartlistBackup: updatedCartlistBackup,
      };
    }),
  isInCart: (product) => get().cartlist.some((prod) => prod.id === product.id),
  getQuantity: (productId) => {
    const item = get().cartlist.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  },
  setQuantity: (productId, quantity) => {
    set((state) => {
      return {
        cartlist: state.cartlist.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        ),
      };
    });
    get().calculateTotalPrice();
  },
  calculateTotalPrice: () =>
    set((state) => {
      // Calcular el descuento y los impuestos
      const discountAmount = (state.subtotal * state.discount) / 100;
      const taxAmount = (state.subtotal * state.taxes) / 100;

      const total =
        state.subtotal + state.shipping - discountAmount + taxAmount;

      return {
        totalPrice: total,
      };
    }),
  calculateSubTotalPrice: () =>
    set((state) => {
      const subTotalPrice = state.cartlist.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      return { subtotal: subTotalPrice };
    }),
}));

// persist(
//    {
//      name: "cartlist",
//      storage: createJSONStorage(() => sessionStorage),
//    }
// )
