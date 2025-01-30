import PrivateRoute from "@/components/layouts/private-route";
import { LOGIN_ROUTE } from "@/config/constant";
import { Route, Switch, Router as WouterRouter } from "wouter";
import Cart from "./routes/cart";
import Dashboard from "./routes/dashboard";
import Landing from "./routes/landing";
import LoginPage from "./routes/login";
import ProductDetails from "./routes/product-details";
import Signup from "./routes/signup";

const AppRouter = () => {
	return (
		<WouterRouter>
			<Switch>
				<Route path="/" component={Landing} />
				<Route path="/products/:id" component={ProductDetails} />
				<PrivateRoute path="/cart" component={Cart} />
				<Route path={LOGIN_ROUTE} component={LoginPage} />
				<Route path="/auth/signup" component={Signup} />
				<PrivateRoute path="/dashboard" component={Dashboard} />
			</Switch>
		</WouterRouter>
	);
};

export default AppRouter;
