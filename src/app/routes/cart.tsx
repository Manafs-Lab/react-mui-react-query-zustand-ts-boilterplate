import AuthenticatedLayout from "@/components/layouts/authenticated-layout";
import CartList from "@/features/cart/components/cart-list";

const Cart = () => {
	return (
		<AuthenticatedLayout>
			<CartList />
		</AuthenticatedLayout>
	);
};

export default Cart;
