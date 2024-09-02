import React, { useEffect } from "react";
import paths from "../../json/path.json";
import AOS from "aos";
import "aos/dist/aos.css";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Textarea from "@mui/joy/Textarea";
import Checkbox from "@mui/material/Checkbox";

export default function Friend() {
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: false,
			disable: false,
		});
	}, []);
	return (
		<div className="friend">
			<div className="detail">
				<div>
					<svg
						class="mb-6 lg:mb-0 hero__imgRight"
						viewBox="0 0 1085 657"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g
							id="Page-1"
							stroke="none"
							stroke-width="1"
							fill="none"
							fill-rule="evenodd"
						>
							<g
								id="header-diventa-amico"
								transform="translate(0.000000, -423.000000)"
							>
								<g
									id="Group"
									transform="translate(0.000000, 423.000000)"
								>
									<polyline
										id="Fill-1"
										fill="#66B8D9"
										points="613.28 611.77 253.036 389.672 480.928 20.03 841.17 242.128 613.28 611.77"
									></polyline>
									<path
										d={paths.svgFPath1}
										id="Fill-2"
										fill="#000206"
									></path>
									<path
										d={paths.svgFPath2}
										id="Fill-3"
										fill="#F0BF5D"
									></path>
									<path
										d={paths.svgFPath3}
										id="Fill-4"
										fill="#E15F53"
									></path>
									<path
										d={paths.svgFPath4}
										id="Fill-5"
										fill="#000206"
									></path>
									<path
										d={paths.svgFPath5}
										id="Fill-6"
										fill="#000206"
									></path>
									<path
										d={paths.svgFPath6}
										id="Fill-7"
										fill="#000206"
									></path>
									<path
										d={paths.svgFPath7}
										id="Fill-8"
										fill="#000206"
									></path>
									<path
										class="animate1"
										d={paths.svgFPath8}
										id="Fill-9"
										fill="#70BD88"
									></path>
									<path
										d={paths.svgFPath9}
										id="Fill-10"
										fill="#000206"
									></path>
								</g>
							</g>
						</g>
					</svg>
				</div>
				<div>
					<p data-aos="fade-up" data-aos-delay="500">
						Diventa amico del <br /> Banco dei Sospesi
					</p>
					<p data-aos="fade-up" data-aos-delay="1000">
						Questo tempo sospeso ha reso le disuguaglianze più
						profonde e la cultura del sospeso più diffusa. Questa
						piattaforma vuole essere uno strumento di prossimità
						virtuale. Il Banco dei Sospesi era nato per sospendere
						pillole di cittadinanza, ma con l'emergenza sanitaria
						abbiamo deciso di riorientare la piattaforma su bisogni
						primari. Diventando Amico del Banco dei Sospesi offri la
						possibilità a chi spende di sospendere presso di te,
						creando un circolo virtuoso.
					</p>
					<a data-aos="fade-up" data-aos-delay="1500">
						Candidati
					</a>
				</div>
			</div>
			<div className="report">
				<div>
					<p>Basta poco!</p>
					<p>
						Sei interessato a diventare Amico del Banco? Compila il
						form per entrare nella nostra rete.
					</p>
					<div>
						<p>Nome dell'ente*</p>
						<FormControl sx={{ width: "90%" }}>
							<OutlinedInput placeholder="Nome dell'ente*" />
						</FormControl>
					</div>
					<div>
						<p>Indirizzo email*</p>
						<FormControl sx={{ width: "90%" }}>
							<OutlinedInput placeholder="Indirizzo email*" />
						</FormControl>
					</div>
					<div>
						<p>Numero di telefono*</p>
						<FormControl sx={{ width: "90%" }}>
							<OutlinedInput placeholder="Numero di telefono*" />
						</FormControl>
					</div>

					<div>
						<p>Servizio attivo nella provincia di:</p>
						<div className="dflex">
							<Checkbox size="large" />
							<p>Alessandria</p>
						</div>
						<div className="dflex">
							<Checkbox size="large" />
							<p>Asti</p>
						</div>
						<div className="dflex">
							<Checkbox size="large" />
							<p>Biella</p>
						</div>
						<div className="dflex">
							<Checkbox size="large" />
							<p>Cuneo</p>
						</div>
						<div className="dflex">
							<Checkbox size="large" />
							<p>Novara</p>
						</div>
						<div className="dflex">
							<Checkbox size="large" />
							<p>Torino</p>
						</div>
						<div className="dflex">
							<Checkbox size="large" />
							<p>Vercelli</p>
						</div>
						<div className="dflex">
							<Checkbox size="large" />
							<p>Verbano-Cusio-Ossola</p>
						</div>
					</div>
					<div>
						<p>Commenti*</p>
						<Textarea
							className="tx-des"
							color="neutral"
							minRows={10}
							placeholder="Commenti*"
							sx={{ width: "90%" }}
						/>
					</div>
					<div>
						<p>Chi ti ha parlato del Banco dei Sospesi?*</p>
						<Textarea
							className="tx-des"
							color="neutral"
							minRows={10}
							placeholder="Chi ti ha parlato del Banco dei Sospesi?*"
							sx={{ width: "90%" }}
						/>
					</div>
					<div className="dflex">
						<Checkbox size="large" />
						<p>
							Dichiaro di aver letto e accettato il Codice Etico
							del presente sito*
						</p>
					</div>
					<div className="dflex">
						<Checkbox size="large" />
						<p>
							Dichiaro di aver letto e accettato la Privacy Policy
							del presente sito*
						</p>
					</div>
					<div className="dflex">
						<Checkbox size="large" />
						<p>
							Do il consenso per il trattamento dei dati per
							attività di marketing e/o promozionale diretta
						</p>
					</div>
					<div className="dflex">
						<Checkbox size="large" />
						<p>
							Do il consenso per la comunicazione e cessione dei
							dati a terze parti, come specificato
							nell'informativa
						</p>
					</div>
					<a className="rbtn">Invia</a>
				</div>
				<div>
					<svg
						width="100%"
						viewBox="0 0 913 714"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g
							id="Page-1"
							stroke="none"
							stroke-width="1"
							fill="none"
							fill-rule="evenodd"
						>
							<g
								id="diventa-amico"
								transform="translate(0.000000, -366.000000)"
							>
								<g
									id="Group"
									transform="translate(0.000000, 366.000000)"
								>
									<polyline
										id="Fill-1"
										fill="#1A1919"
										points="627.91 595.839 376.915 713.223 424.597 161.1 878.91 478.456 627.91 595.839"
									></polyline>
									<path
										d={paths.svgFPath10}
										id="Fill-2"
										fill="#1A1919"
										class="animate1"
									></path>
									<path
										d={paths.svgFPath11}
										id="Fill-3"
										fill="#1A1919"
										class="animate3"
									></path>
									<path
										d={paths.svgFPath12}
										id="Fill-4"
										fill="#1A1919"
										class="animate10"
									></path>
									<path
										d={paths.svgFPath13}
										id="Fill-5"
										fill="#66B8D9"
									></path>
									<path
										d={paths.svgFPath14}
										id="Fill-6"
										fill="#70BD88"
									></path>
									<path
										d={paths.svgFPath15}
										id="Fill-7"
										fill="#F0BF5D"
									></path>
									<path
										d={paths.svgFPath16}
										id="Fill-8"
										fill="#000206"
									></path>
									<path
										d={paths.svgFPath17}
										id="Fill-9"
										fill="#000206"
									></path>
								</g>
							</g>
						</g>
					</svg>
				</div>
			</div>
		</div>
	);
}
