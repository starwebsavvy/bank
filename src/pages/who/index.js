import React, { useEffect } from "react";
import paths from "../../json/path.json";
import AOS from "aos";
import "aos/dist/aos.css";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Who() {
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: false,
			disable: false,
		});
	}, []);
	return (
		<div className="who">
			<div className="detail">
				<div>
					<h1>Chi siamo</h1>
					<p>
						Questo tempo sospeso ha reso le disuguaglianze più
						profonde e la cultura del sospeso più diffusa. Il Banco
						dei sospesi vuole essere uno strumento di prossimità
						virtuale. Attraverso questa piattaforma, libera e
						gratuita, è possibile per far incontrare chi sospende e
						chi ha bisogno. L'algoritmo della piattaforma assegna i
						sospesi in maniera randomica.
					</p>
				</div>
				<div>
					<svg
						width="100%"
						viewBox="0 0 864 636"
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
								id="come-funziona"
								transform="translate(0.000000, -444.000000)"
							>
								<g
									id="Group"
									transform="translate(0.000000, 444.000000)"
								>
									<polyline
										id="Fill-1"
										fill="#E15F53"
										points="543.29 590.035 159.706 482.19 290.526 16.882 674.11 124.727 543.29 590.035"
									></polyline>
									<path
										d={paths.svgWhoPath1}
										id="Fill-2"
										fill="#70BD88"
										className="animate8"
									></path>
									<path
										d={paths.svgWhoPath2}
										id="Fill-3"
										fill="#000206"
									></path>
									<path
										d={paths.svgWhoPath3}
										id="Fill-4"
										fill="#000206"
									></path>
									<path
										d={paths.svgWhoPath4}
										id="Fill-5"
										fill="#F0BF5D"
									></path>
									<path
										d={paths.svgWhoPath5}
										id="Fill-6"
										fill="#1A1919"
										className="animate14"
									></path>
									<path
										d={paths.svgWhoPath6}
										id="Fill-7"
										fill="#66B8D9"
									></path>
								</g>
							</g>
						</g>
					</svg>
				</div>
			</div>
			<div className="tempo">
				<p>
					“Quando un napoletano è felice per qualche ragione, invece
					di pagare un solo caffè , quello che berrebbe lui, ne paga
					due, uno per sé e uno per il cliente che viene dopo. È come
					offrire un caffè al resto del mondo...”
				</p>
				<p>cit. Luciano De Crescenzo</p>
			</div>
			<div className="detail">
				<div>
					<p>
						Così come nella tipica usanza napoletana di lasciare un
						caffè sospeso per il prossimo avventore, sul Banco dei
						Sospesi il bancone del bar si trasforma in una bacheca
						dove chi vuole può appendere un pasto, una spesa, cibo
						fresco o cucinato, di qualità. Una bacheca analogica
						che, attraverso la piattaforma, diventa digitale. Il
						progetto, nato per creare nuove opportunità di
						cittadinanza (il biglietto sospeso del cinema o di un
						museo, perchè anche la cultura è pane), ma
						nell'emergenza è venuto ovvio e naturale riorientarlo
						sui beni primari. Questo tempo sospeso ha reso le
						disuguaglianze più profonde e la cultura del sospeso più
						diffusa. Questa piattaforma vuole essere uno strumento
						di prossimità virtuale.
					</p>
				</div>
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1051.19 654.04"
					>
						<g id="Livello_2" data-name="Livello 2">
							<g id="Livello_1-2" data-name="Livello 1">
								<path
									className="cls-1"
									d={paths.svgWhoPath7}
								></path>
								<path
									className="cls-2"
									d={paths.svgWhoPath8}
								></path>
								<path
									className="cls-2"
									d={paths.svgWhoPath9}
								></path>
								<path
									className="cls-2"
									d={paths.svgWhoPath10}
								></path>
								<path
									className="cls-2"
									d={paths.svgWhoPath11}
								></path>
								<path
									className="cls-2"
									d={paths.svgWhoPath12}
								></path>
								<path
									className="cls-2"
									d={paths.svgWhoPath13}
								></path>
								<path
									className="cls-2"
									d={paths.svgWhoPath14}
								></path>
								<path
									className="cls-2"
									d={paths.svgWhoPath15}
								></path>
								<path
									className="cls-3"
									d={paths.svgWhoPath16}
								></path>
								<path
									className="cls-4"
									d={paths.svgWhoPath17}
								></path>
								<path
									className="cls-4"
									d={paths.svgWhoPath18}
								></path>
								<path
									className="cls-4"
									d={paths.svgWhoPath19}
								></path>
								<polygon
									className="cls-5"
									points="280.9 344.7 320 654.04 736.35 529.05 571.32 89.53 280.9 344.7"
								></polygon>
								<path
									className="cls-2"
									d="M640.38,114.16s-57.17,67.18-127.69,67.18S385,114.16,385,114.16,442.16,47,512.69,47,640.38,114.16,640.38,114.16Z"
								></path>
								<path
									className="cls-6"
									d={paths.svgWhoPath20}
								></path>
								<path
									className="cls-6"
									d={paths.svgWhoPath21}
								></path>
								<path
									className="cls-4"
									d={paths.svgWhoPath22}
								></path>
								<path
									className="cls-5 animate8"
									d={paths.svgWhoPath23}
								></path>
							</g>
						</g>
					</svg>
				</div>
			</div>
			<div className="join">
				<p>Come funziona?</p>
				<p>
					Scegli il tuo ruolo ed entra nella comunità del Banco dei
					Sospesi:
				</p>
				<div>
					<div className="j-item" data-aos="fade-up">
						<img src="/assets/images/1.png" alt="ente category" />
						<h6>Chi spende </h6>
						<p>
							Vuoi lasciare in sospeso un’azione per un’altra
							persona?{" "}
						</p>
						<p>Scegli subito l’azione che vuoi sospendere! </p>
						<a>Vai alla bacheca</a>
					</div>
					<div className="j-item" data-aos="fade-up">
						<img src="/assets/images/2.png" alt="ente category" />
						<h6>Chi spende </h6>
						<p>Candidati per ricevere una delle azioni sospese. </p>
						<p>Compila il form ed entra nella nostra rete! </p>
						<a>Candidati subito</a>
					</div>
					<div className="j-item" data-aos="fade-up">
						<img src="/assets/images/3.png" alt="ente category" />
						<h6>Amico del Banco</h6>
						<p>
							Vuoi offrire a chi spende la possibilità di
							acquistare le tue azioni?{" "}
						</p>
						<p>Compila il form ed entra nella nostra rete!</p>
						<a>Vai al form</a>
					</div>
				</div>
			</div>
			<div className="sup">
				<p>
					La piattaforma del Banco dei Sospesi è un'infrastruttura
					aperta e gratuita (nell’ambito delle reti di prossimità),
					sviluppata da Starteed per Xkè? Srl Impresa Sociale grazie
					ad un grant erogato dalla Fondazione Compagnia di San Paolo
					e al supporto strategico e creativo di Quattrolinee.
				</p>
			</div>
			<div className="pending">
				<div>
					<div>
						<p>
							Chi vuole sospendere deve registrarsi sulla
							piattaforma e spendere il servizio che vuole
							lasciare in sospeso. La piattaforma mantiene in
							sospeso l’azione e la assegna, tramite un algoritmo,
							a chi si è candidato. La spesa viene letteralmente
							sospesa all'interno della piattaforma finché
							l'azione non viene assegnata.
						</p>
					</div>
					<div>
						<svg
							width="100%"
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
									id="Ilustrazioni_19"
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
											d={paths.svgWhoPath24}
											id="Fill-2"
											fill="#000206"
										></path>
										<path
											d={paths.svgWhoPath25}
											id="Fill-3"
											fill="#70BD88"
										></path>
										<path
											d={paths.svgWhoPath26}
											id="Fill-4"
											fill="#F0BF5D"
										></path>
										<path
											d={paths.svgWhoPath27}
											id="Fill-5"
											fill="#000206"
										></path>
										<path
											d={paths.svgWhoPath28}
											id="Fill-6"
											fill="#000206"
										></path>
										<path
											d={paths.svgWhoPath29}
											id="Fill-7"
											fill="#000206"
										></path>
										<path
											d={paths.svgWhoPath30}
											id="Fill-8"
											fill="#000206"
										></path>
										<path
											d={paths.svgWhoPath31}
											id="Fill-9"
											fill="#1A1919"
											className="animate2"
										></path>
										<path
											d={paths.svgWhoPath32}
											id="Fill-10"
											fill="#000206"
										></path>
									</g>
								</g>
							</g>
						</svg>
					</div>
				</div>
			</div>
			<div className="project">
				<div>
					<svg
						width="100%"
						viewBox="0 0 1139 627"
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
								id="Ilustrazioni_5"
								transform="translate(0.000000, -453.000000)"
							>
								<g
									id="Group"
									transform="translate(0.000000, 453.000000)"
								>
									<polyline
										id="Fill-1"
										fill="#70BD88"
										points="881.24 488.348 405.712 601.155 289.962 113.223 765.49 0.415 881.24 488.348"
									></polyline>
									<path
										d={paths.svgWhoPath33}
										id="Fill-2"
										fill="#F0BF5D"
									></path>
									<path
										d={paths.svgWhoPath34}
										id="Fill-3"
										fill="#000206"
									></path>
									<path
										d={paths.svgWhoPath35}
										id="Fill-4"
										fill="#000206"
									></path>
									<path
										d={paths.svgWhoPath36}
										id="Fill-5"
										fill="#000206"
									></path>
									<path
										d={paths.svgWhoPath37}
										id="Fill-6"
										fill="#F0BF5D"
										className="animate3"
									></path>
									<path
										d={paths.svgWhoPath38}
										id="Fill-7"
										fill="#1A1919"
									></path>
									<path
										d={paths.svgWhoPath39}
										id="Fill-8"
										fill="#1A1919"
									></path>
									<path
										d={paths.svgWhoPath40}
										id="Fill-9"
										fill="#1A1919"
									></path>
									<path
										d={paths.svgWhoPath41}
										id="Fill-10"
										fill="#E15F53"
									></path>
									<path
										d={paths.svgWhoPath42}
										id="Fill-11"
										fill="#66B8D9"
										className="animate5"
									></path>
								</g>
							</g>
						</g>
					</svg>
				</div>
				<div>
					<p>
						Il progetto, nato per creare nuove opportunità di
						cittadinanza (il biglietto sospeso del cinema o di un
						museo, perchè anche la cultura è pane), ma
						nell'emergenza è venuto ovvio e naturale riorientralo
						sui beni primari. La piattafoma vuole mettersi al
						servizo di quei gesti spontanei che hanno visto
						diffonfersi sempre di più la cultura del sospeso... per
						andare oltre, sospendere per chi non vediamo ma ne ha
						bisogno. Il Banco si avvale della collaborazione di
						enti, associazioni e soggetti del terzo settore,
						attivatori delle rispettive comunità di riferimento per
						aiutare i cittadini a iscriversi e prendere i servizi
						sospesi.
					</p>
				</div>
			</div>
			<div className="faq">
				<p>FAQ</p>
				<Accordion
					expanded={expanded === "panel1"}
					onChange={handleChange("panel1")}
					className="faq-list"
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1bh-content"
						id="panel1bh-header"
						className="title"
					>
						<Typography
							sx={{
								color: "#0a0a0a",
								fontWeight: "bold",
							}}
						>
							Come faccio a ricevere opportunità sospese per i
							beneficiari della mia associazione?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography
							sx={{ color: "#616161" }}
							className="content"
						>
							Il Banco dei Sospesi mette in relazione chi spende e
							l’associazione che consegnerà l’opportunità sospesa
							al beneficiario finale. Per ricevere randomicamente
							le opportunità sospese (visibili sulla bacheca
							virtuale) è necessario iscriversi e compilare il
							form con i dati dell’associazione.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={expanded === "panel2"}
					onChange={handleChange("panel2")}
					className="faq-list"
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2bh-content"
						id="panel2bh-header"
						className="title"
					>
						<Typography
							sx={{
								color: "#0a0a0a",
								fontWeight: "bold",
							}}
						>
							Quali metodi di pagamento accetta la piattaforma?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography
							sx={{ color: "#616161" }}
							className="content"
						>
							I metodi di pagamento accettati sono quelli
							accettati da Stripe, tra cui Visa,Mastercard,
							American Express, Apple Pay, Google Pay e addebito
							diretto SEPA. È possibile che alcune modalità di
							pagamento non siano attivate per specifici sospesi.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={expanded === "panel3"}
					onChange={handleChange("panel3")}
					className="faq-list"
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel3bh-content"
						id="panel3bh-header"
						className="title"
					>
						<Typography
							sx={{
								color: "#0a0a0a",
								fontWeight: "bold",
							}}
						>
							Come faccio ad inserire una nuova azione sospesa
							nella bacheca?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography
							sx={{ color: "#616161" }}
							className="content"
						>
							Gli amici del Banco possono registrarsi per
							permettere a chi spende di acquistare una
							opportunità che entrerà nel flusso dei sospesi. Se
							vuoi diventare amico del Banco dei Sospesi.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={expanded === "panel4"}
					onChange={handleChange("panel4")}
					className="faq-list"
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel4bh-content"
						id="panel4bh-header"
						className="title"
					>
						<Typography
							sx={{
								color: "#0a0a0a",
								fontWeight: "bold",
							}}
						>
							Posso sapere chi utilizza la mia opportunità
							sospesa?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography
							sx={{ color: "#616161" }}
							className="content"
						>
							Le donazioni sono completamente anonime, per questo
							non è possibile conoscere il nome di chi spende o di
							chi riceve l’opportunità sospesa. Solamente la
							piattaforma ha la titolarità dei dati.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<p>Tutte le FAQ</p>
			</div>
		</div>
	);
}
