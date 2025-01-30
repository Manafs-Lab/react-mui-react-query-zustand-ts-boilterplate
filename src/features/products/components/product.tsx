import { useCart } from "@/features/cart/cart.store";
import {
	Box,
	Button,
	Card,
	CardMedia,
	Container,
	Grid2 as Grid,
	Typography,
} from "@mui/material";
import { useParams } from "wouter";
import { useGetProduct } from "../api/get-product";

const Product = () => {
	const { id } = useParams();
	const { data: product, isLoading } = useGetProduct(id);
	const { addToCart } = useCart();

	if (isLoading) {
		return <Typography>Loading...</Typography>;
	}

	if (!product) {
		return <Typography>Product not found</Typography>;
	}

	return (
		<Container maxWidth="lg">
			<Grid container spacing={4} alignItems="center">
				<Grid size={{ xs: 12, md: 6 }} alignItems="center">
					<Card elevation={0}>
						<CardMedia
							component="img"
							image={product.images[0]}
							alt={product.title}
							sx={{ objectFit: "contain", width: "40%" }}
						/>
					</Card>
				</Grid>
				<Grid size={{ xs: 12, md: 6 }}>
					<Box>
						<Typography variant="h4" gutterBottom>
							{product.title}
						</Typography>
						<Typography variant="h6" color="text.secondary" gutterBottom>
							${product.price}
						</Typography>
						<Typography variant="body1" component="p">
							{product.description}
						</Typography>
						<Button
							variant="contained"
							color="primary"
							size="large"
							onClick={() => addToCart(product)}
						>
							Add to Cart
						</Button>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Product;
