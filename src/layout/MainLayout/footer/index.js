import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<>
			<footer>
				<div className="tpf">
					<div>
						<a href="/">
							<img
								src="/assets/images/logo.svg"
								className="foo-logo"
								alt="logo"
							/>
						</a>
						<p>
							La piattaforma gratuita che mette in contatto chi
							spende e chi riceve, un’azione utile a creare nuove
							occasioni di cittadinanza e sinergie sul territorio.
						</p>
					</div>
					<div>
						<h6>Contatti</h6>
						<div className="md-flex">
							<h6>Email:</h6>
							<p>
								<a href="mailto:info@ilbancodeisospesi.it">
									info@ilbancodeisospesi.it
								</a>
							</p>
						</div>
						<div className="md-flex">
							<h6>Indirizzo:</h6>
							<p>Piazza Bernini 5 – 10138 Torino</p>
						</div>
						<div className="md-flex">
							<a
								href="https://www.facebook.com/bancodeisospesi"
								target="_blank"
							>
								<i className="fab fa-facebook-f"></i>
							</a>
						</div>
					</div>
					<div>
						<h6>Pagamento</h6>
					</div>
				</div>
			</footer>
			<div className="suf">
				<p className="mb-3 md:mb-0">
					© Copyright 2019 Bancodeisospesi -{" "}
					<a
						href="https://starteed.com/"
						target="_blank"
						className="font-bold"
						rel="noopener noreferrer"
					>
						Starteed:
					</a>{" "}
					design e sviluppo;{" "}
					<a
						href="http://www.quattrolinee.it/"
						target="_blank"
						className="font-bold"
						rel="noopener noreferrer"
					>
						Quattrolinee:
					</a>{" "}
					brand identity e comunicazione{" "}
				</p>
				<p>
					<a href="">Mappa degli stakeholders</a>
				</p>
				<Link to="/privacy-policy">Privacy Policy</Link>
				<Link to="/code-ethics">Codice Etico</Link>
			</div>
		</>
	);
}
