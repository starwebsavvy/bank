import Header from "./header";
import Footer from "./footer";

function MainLayout({ children }) {
	return (
		<div>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
}

export default MainLayout;
