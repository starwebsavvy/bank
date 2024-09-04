import {
	Activity,
	Home,
	Suspend,
	Who,
	Spend,
	Friend,
	Contact,
	Privacy,
	Ethics,
	Faq,
	Bank,
} from "../pages";
import MainLayout from "../layout/MainLayout";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

export default function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route
					exact
					path="/"
					element={
						<MainLayout>
							<Home />
						</MainLayout>
					}
				/>
				<Route
					exact
					path="/suspend-time"
					element={
						<MainLayout>
							<Suspend />
						</MainLayout>
					}
				/>
				<Route
					exact
					path="/who-we"
					element={
						<MainLayout>
							<Who />
						</MainLayout>
					}
				/>
				<Route
					exact
					path="/who-take"
					element={
						<MainLayout>
							<Activity />
						</MainLayout>
					}
				/>
				<Route
					exact
					path="/who-spends"
					element={
						<MainLayout>
							<Spend />
						</MainLayout>
					}
				/>
				<Route
					exact
					path="/become-friend"
					element={
						<MainLayout>
							<Friend />
						</MainLayout>
					}
				/>
				<Route
					exact
					path="/contact"
					element={
						<MainLayout>
							<Contact />
						</MainLayout>
					}
				/>
				<Route
					exact
					path="/privacy-policy"
					element={
						<MainLayout>
							<Privacy />
						</MainLayout>
					}
				/>
				<Route
					exact
					path="/code-ethics"
					element={
						<MainLayout>
							<Ethics />
						</MainLayout>
					}
				/>
				<Route
					exact
					path="/all-faq"
					element={
						<MainLayout>
							<Faq />
						</MainLayout>
					}
				/>
				<Route
					exact
					path="/bank/:id"
					element={
						<MainLayout>
							<Bank />
						</MainLayout>
					}
				/>
			</Routes>
		</Router>
	);
}
