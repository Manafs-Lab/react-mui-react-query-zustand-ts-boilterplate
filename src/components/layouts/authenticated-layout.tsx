import React from "react";
import Navbar from "../ui/navbar";
import { authenticatedChildrenWrapper } from "./layouts.css";

interface IAuthenticatedLayout {
	children: React.ReactNode;
}

const AuthenticatedLayout = ({ children }: IAuthenticatedLayout) => {
	return (
		<>
			<Navbar />
			<div className={authenticatedChildrenWrapper}>{children}</div>
		</>
	);
};

export default AuthenticatedLayout;
