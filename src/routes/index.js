import { Activity, Home, Suspend, Who, Spend, Friend, Contact } from "../pages";
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
			</Routes>
		</Router>
	);
}
