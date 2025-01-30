import Navbar from "../ui/navbar";
import { contentChildrenWrapper } from "./layouts.css";

interface IContentLayout {
	children: React.ReactNode;
}

const ContentLayout = ({ children }: IContentLayout) => {
	return (
		<>
			<Navbar />
			<div className={contentChildrenWrapper}>{children}</div>
		</>
	);
};

export default ContentLayout;
