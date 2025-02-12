import { LOGIN_ROUTE } from "@/config/constant";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Box,
	Button,
	Container,
	Grid2 as Grid,
	Paper,
	TextField,
	Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useLocation } from "wouter";
import { z } from "zod";
import useAuthStore from "../auth.store";

const SignupSchema = z.object({
	firstName: z.string().min(1, "First name is required"),
	lastName: z.string().min(1, "Last name is required"),
	email: z.string().email("Invalid email format"),
	password: z.string().min(8, "Password must be at least 8 characters"),
	confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
});

export type TSignupData = z.infer<typeof SignupSchema>;

const SignupForm = () => {
	const [, setLocation] = useLocation();
	const { signup } = useAuthStore();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TSignupData>({
		resolver: zodResolver(SignupSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	const onSubmit = (data: TSignupData) => {
		signup(data);
		setLocation("/");
	};

	return (
		<Container component="main" maxWidth="xs">
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Paper elevation={3} sx={{ padding: 4, width: "100%" }}>
					<Typography component="h1" variant="h5" align="center" gutterBottom>
						Create an Account
					</Typography>
					<Box
						component="form"
						onSubmit={handleSubmit(onSubmit)}
						noValidate
						sx={{ mt: 3 }}
					>
						<Grid container spacing={2}>
							<Grid size={{ xs: 12, sm: 6 }}>
								<TextField
									autoComplete="given-name"
									required
									fullWidth
									id="firstName"
									label="First Name"
									autoFocus
									error={!!errors.firstName}
									helperText={errors.firstName?.message}
									{...register("firstName")}
								/>
							</Grid>
							<Grid size={{ xs: 12, sm: 6 }}>
								<TextField
									required
									fullWidth
									id="lastName"
									label="Last Name"
									autoComplete="family-name"
									error={!!errors.lastName}
									helperText={errors.lastName?.message}
									{...register("lastName")}
								/>
							</Grid>
							<Grid size={{ xs: 12 }}>
								<TextField
									required
									fullWidth
									id="email"
									label="Email Address"
									autoComplete="email"
									error={!!errors.email}
									helperText={errors.email?.message}
									{...register("email")}
								/>
							</Grid>
							<Grid size={{ xs: 12 }}>
								<TextField
									required
									fullWidth
									label="Password"
									type="password"
									id="password"
									autoComplete="new-password"
									error={!!errors.password}
									helperText={errors.password?.message}
									{...register("password")}
								/>
							</Grid>
							<Grid size={{ xs: 12 }}>
								<TextField
									required
									fullWidth
									label="Confirm Password"
									type="password"
									id="confirmPassword"
									error={!!errors.confirmPassword}
									helperText={errors.confirmPassword?.message}
									{...register("confirmPassword")}
								/>
							</Grid>
						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Sign Up
						</Button>
						<Grid container justifyContent="flex-end">
							<Grid>
								<Button
									onClick={() => setLocation(LOGIN_ROUTE)}
									variant="text"
									size="small"
								>
									Already have an account? Sign in
								</Button>
							</Grid>
						</Grid>
					</Box>
				</Paper>
			</Box>
		</Container>
	);
};

export default SignupForm;
