import { useCart } from "@/features/cart/cart.store";
import truncateString from "@/utils/truncate-string";
import {
	Button,
	Card,
	CardContent,
	CardMedia,
	Grid2 as Grid,
	LinearProgress,
	Typography,
} from "@mui/material";
import { MouseEvent } from "react";
import { useLocation } from "wouter";
import { useGetAllProducts } from "../api/get-all-products";
import { cardContainer } from "../products.css";

const ProductList = () => {
	const [, setLocation] = useLocation();
	const { data, isLoading } = useGetAllProducts();
	const { addToCart } = useCart();
	const handleCardClick = (productId: any) => {
		setLocation(`/products/${productId}`);
	};
	const addToCartHandler = (e: MouseEvent<HTMLButtonElement>, product: any) => {
		e.stopPropagation();
		addToCart(product);
	};
	return (
		<Grid container justifyContent="center" spacing={2}>
			{isLoading ? (
				<LinearProgress />
			) : (
				data?.products.map((product) => (
					<Grid
						size={{ xs: 12, sm: 6, md: 4 }}
						key={product.id}
						className={cardContainer}
						onClick={() => handleCardClick(product.id)}
					>
						<Card variant="outlined">
							<CardMedia
								component="img"
								height="140"
								image={product.thumbnail}
								alt={product.title}
							/>
							<CardContent>
								<Typography variant="h5" component="div">
									{truncateString(product.title, 20)}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									{truncateString(product.description, 30)}
								</Typography>
							</CardContent>
							<Button
								size="small"
								color="primary"
								onClick={(e) => addToCartHandler(e, product)}
							>
								Add to Cart
							</Button>
						</Card>
					</Grid>
				))
			)}
		</Grid>
	);
};

export default ProductList;
