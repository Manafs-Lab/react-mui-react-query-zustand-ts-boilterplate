import { create } from "zustand";

type CartState = {
	cart: any;
	addToCart: (item: any) => void;
	deleteFromCart: (id: any) => void;
};

export const useCart = create<CartState>((set) => ({
	cart: [],
	addToCart: (item) =>
		set((state) => ({
			cart: [
				...state.cart,
				{ id: item.id, name: item.title, price: item.price, quantity: 1 },
			],
		})),
	deleteFromCart: (id) =>
		set((state) => ({
			cart: state.cart.filter((item: any) => item.id !== id),
		})),
}));
