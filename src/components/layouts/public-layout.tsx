import Navbar from "../ui/navbar";
import { publicChildrenWrapper } from "./layouts.css";

interface IPublicLayout {
	children: React.ReactNode;
}

const PublicLayout = ({ children }: IPublicLayout) => {
	return (
		<>
			<Navbar />
			<div className={publicChildrenWrapper}>{children}</div>
		</>
	);
};

export default PublicLayout;
