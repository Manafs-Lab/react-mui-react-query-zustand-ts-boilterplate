import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "wouter";

const Navbar = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					<Link href="/">
						<Button color="inherit">My Shop</Button>
					</Link>
				</Typography>
				<Box>
					<Link href="/">
						<Button color="inherit" startIcon={<HomeIcon />}>
							Home
						</Button>
					</Link>
					<Link href="/cart">
						<Button color="inherit" startIcon={<ShoppingCartIcon />}>
							Cart
						</Button>
					</Link>
					<Link href="/dashboard">
						<Button color="inherit" startIcon={<DashboardIcon />}>
							Dashboard
						</Button>
					</Link>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
