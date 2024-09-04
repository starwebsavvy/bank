import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(true);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className="header">
			<Link to="/" className="logo">
				<img src="/assets/images/logo.svg" alt="Logo" />
			</Link>

			<div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
				<Link to="/suspend-time" onClick={() => toggleMenu()}>
					Sospendi il tuo tempo
				</Link>
				<Link to="/who-we" onClick={() => toggleMenu()}>
					Chi siamo
				</Link>
				<Link to="/who-take" onClick={() => toggleMenu()}>
					Chi prende
				</Link>
				<Link to="/who-spends" onClick={() => toggleMenu()}>
					Chi spende
				</Link>
				<Link to="/become-friend" onClick={() => toggleMenu()}>
					Amico del banco
				</Link>
				<Link to="/contact" onClick={() => toggleMenu()}>
					Contattaci
				</Link>
				<Link to="/" onClick={() => toggleMenu()}>
					Lascia un sospeso
				</Link>
			</div>

			<div className="hamburger" onClick={toggleMenu}>
				<div className={`line ${!isMenuOpen ? "open" : ""}`}></div>
				<div className={`line ${!isMenuOpen ? "open" : ""}`}></div>
				<div className={`line ${!isMenuOpen ? "open" : ""}`}></div>
			</div>
		</div>
	);
}
