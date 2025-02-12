import PublicLayout from "@/components/layouts/public-layout";
import ProductList from "@/features/products/components/product-list";

const Landing = () => {
	return (
		<PublicLayout>
			<ProductList />
		</PublicLayout>
	);
};

export default Landing;
