import React, { useEffect } from "react";
import paths from "../../json/path.json";
import AOS from "aos";
import "aos/dist/aos.css";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Textarea from "@mui/joy/Textarea";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";

export default function Activity() {
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: false,
			disable: false,
		});
	}, []);
	return (
		<div className="activity suspend">
			<div className="detail">
				<div>
					<svg
						class="mb-6 lg:mb-0 hero__imgRight"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1189.25 597.61"
					>
						<g id="Livello_2" data-name="Livello 2">
							<g id="Livello_1-2" data-name="Livello 1">
								<path
									class="cls-1c"
									d={paths.svgActPath1}
								></path>
								<path
									class="cls-2c"
									d={paths.svgActPath2}
								></path>
								<path
									class="cls-2c"
									d={paths.svgActPath3}
								></path>
								<path
									class="cls-2c"
									d={paths.svgActPath4}
								></path>
								<path
									class="cls-3c"
									d={paths.svgActPath5}
								></path>
								<path
									class="cls-4c"
									d={paths.svgActPath6}
								></path>
								<path
									class="cls-5c"
									d={paths.svgActPath7}
								></path>
								<path
									class="cls-6c animate3"
									d={paths.svgActPath8}
								></path>
								<path
									class="cls-3c"
									d={paths.svgActPath9}
								></path>
								<path
									class="cls-7c"
									d={paths.svgActPath10}
								></path>
								<path
									class="cls-3c"
									d={paths.svgActPath11}
								></path>
								<path
									class="cls-3c"
									d={paths.svgActPath12}
								></path>
							</g>
						</g>
					</svg>
				</div>
				<div>
					<p data-aos="fade-up" data-aos-delay="500">
						Ricevi le attività del Banco dei Sospesi
					</p>
					<p data-aos="fade-up" data-aos-delay="1000">
						Il tempo sospeso ha reso ancora più centrali l’impegno e
						il lavoro delle associazioni e degli enti del terzo
						settore, per soccorrere le disuguaglianze, aiutare gli
						invisibili, crescere la cultura della reciprocità. Sei
						un’associazione o un ente del terzo settore? Candidati a
						ricevere (per la tua comunità) le azioni sospese
						all’insegna della randomicità del Banco dei Sospesi.
					</p>
					<a data-aos="fade-up" data-aos-delay="1500">
						Candidati
					</a>
				</div>
			</div>
			<div className="report">
				<div>
					<p>Come procedere</p>
					<p>
						Compila il form con tutti i tuoi dati e potrai essere
						selezionato per usufruire delle azioni sospese presenti
						nella nostra bacheca!
					</p>
					<div>
						<p>Nome*</p>
						<FormControl sx={{ width: "90%" }}>
							<OutlinedInput placeholder="Nome*" />
						</FormControl>
					</div>
					<div>
						<p>Indirizzo*</p>
						<FormControl sx={{ width: "90%" }}>
							<OutlinedInput placeholder="Indirizzo*" />
						</FormControl>
					</div>
					<div>
						<p>Legale rappresentante*</p>
						<FormControl sx={{ width: "90%" }}>
							<OutlinedInput placeholder="Legale rappresentante*" />
						</FormControl>
					</div>
					<div>
						<p>Natura giuridica (Ets, associazione, altro)*</p>
						<FormControl sx={{ width: "90%" }}>
							<OutlinedInput placeholder="Natura giuridica (Ets, associazione, altro)*" />
						</FormControl>
					</div>
					<div>
						<p>Campo principale impegno sociale*</p>
						<FormControl sx={{ width: "90%" }}>
							<OutlinedInput placeholder="Campo principale impegno sociale*" />
						</FormControl>
					</div>
					<div>
						<p>Indirizzo Email *</p>
						<FormControl sx={{ width: "90%" }}>
							<OutlinedInput placeholder="Indirizzo Email *" />
						</FormControl>
					</div>
					<div>
						<p>Numero di Cellulare *</p>
						<FormControl sx={{ width: "90%" }}>
							<OutlinedInput placeholder="Numero di Cellulare *" />
						</FormControl>
					</div>
					<div>
						<p>Codice Fiscale *</p>
						<FormControl sx={{ width: "90%" }}>
							<OutlinedInput placeholder="Codice Fiscale *" />
						</FormControl>
					</div>
					<div>
						<p>Voglio ricevere i sospesi per la provincia di:</p>
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
							<p>Verbano-Cusio-Ossola</p>
						</div>
						<div className="dflex">
							<Checkbox size="large" />
							<p>Vercelli</p>
						</div>
					</div>
					<div>
						<p>Note*</p>
						<Textarea
							className="tx-des"
							color="neutral"
							minRows={10}
							placeholder="Note*"
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
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 884.56 852.28"
					>
						<g id="Livello_2" data-name="Livello 2">
							<g id="Livello_1-2" data-name="Livello 1">
								<path
									class="cls-10"
									d={paths.svgTimePath7}
								></path>
								<path
									class="cls-11"
									d={paths.svgTimePath8}
								></path>
								<path
									class="cls-12"
									d={paths.svgTimePath9}
								></path>
								<path
									class="cls-14"
									d={paths.svgTimePath10}
								></path>
								<circle
									class="cls-15 animate5"
									cx="84.31"
									cy="453.36"
									r="84.31"
								></circle>

								<path
									class="cls-12"
									d={paths.svgTimePath11}
								></path>
								<path
									class="cls-12"
									d={paths.svgTimePath12}
								></path>
								<path
									class="cls-13"
									d={paths.svgTimePath13}
								></path>
							</g>
						</g>
					</svg>
				</div>
			</div>
		</div>
	);
}
