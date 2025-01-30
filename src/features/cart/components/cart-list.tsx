import DeleteIcon from "@mui/icons-material/Delete";
import {
	Box,
	Button,
	Container,
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemText,
	Paper,
	Typography,
} from "@mui/material";
import React from "react";
import { useCart } from "../cart.store";

const CartList = () => {
	const { cart, deleteFromCart } = useCart();

	const calculateTotal = () => {
		return cart
			.reduce((total: any, item: any) => total + item.price * item.quantity, 0)
			.toFixed(2);
	};

	return (
		<Container maxWidth="md">
			<Box sx={{ my: 4 }}>
				<Typography variant="h4" component="h1" gutterBottom>
					Your Cart
				</Typography>
				<Paper elevation={3}>
					<List>
						{cart.map((item: any, index: number) => (
							<React.Fragment key={item.id}>
								<ListItem
									secondaryAction={
										<>
											<Typography variant="body2" sx={{ mr: 2 }}>
												${(item.price * item.quantity).toFixed(2)}
											</Typography>
											<IconButton
												edge="end"
												aria-label="delete"
												onClick={() => deleteFromCart(item.id)}
											>
												<DeleteIcon />
											</IconButton>
										</>
									}
								>
									<ListItemText
										primary={item.name}
										secondary={`Quantity: ${item.quantity}`}
									/>
								</ListItem>
								{index < cart.length - 1 && <Divider />}
							</React.Fragment>
						))}
					</List>
				</Paper>
				<Box
					sx={{
						mt: 2,
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Typography variant="h6">Total: ${calculateTotal()}</Typography>
					<Button variant="contained" color="primary" size="large">
						Checkout
					</Button>
				</Box>
			</Box>
		</Container>
	);
};

export default CartList;
