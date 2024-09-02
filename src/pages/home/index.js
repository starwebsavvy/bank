import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import paths from "../../json/path.json";

export default function Home() {
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: false,
			disable: false,
		});
	}, []);
	const susBanks = [
		{
			url: "sus-2.png",
			title: "Pasto delle cucine Fa Bene",
			status: "Fa bene",
			ticket: "Pasto cucinato",
		},
		{
			url: "sus-1.png",
			title: "Materiale scolastico Secondarie I grado",
			status: "Elca 2000 s.a.s.",
			ticket: "Materiale di cartoleria",
		},
		{
			url: "sus-1.png",
			title: "Materiale scolastico scuole primarie",
			status: "Elca 2000 s.a.s.",
			ticket: "Materiale di cartoleria",
		},
		{
			url: "sus-3.png",
			title: "Fa Bene alla dispensa",
			status: "Fa bene",
			ticket: "Prodotti a lunga conservazione",
		},
		{
			url: "sus-3.png",
			title: "Box Zucche Sorprendenti",
			status: "APS Oltre la corte",
			ticket: "",
		},
		{
			url: "sus-3.png",
			title: "Materiale scolastico scuole primarie",
			status: "Elca 2000 s.a.s.",
			ticket: "Materiale di cartoleria",
		},
		{
			url: "sus-1.png",
			title: "Materiale scolastico Secondarie I grado",
			status: "Elca 2000 s.a.s.",
			ticket: "Materiale di cartoleria",
		},
		{
			url: "sus-1.png",
			title: "Materiale scolastico Secondarie I grado",
			status: "Elca 2000 s.a.s.",
			ticket: "Materiale di cartoleria",
		},
		{
			url: "sus-2.png",
			title: "Box Patate Felici e Solidali 2021",
			status: "APS Oltre la corte",
		},
		{
			url: "sus-2.png",
			title: "Box frutta e verdura Fa Bene",
			status: "Fa bene",
			ticket: "Prodotti freschi",
		},
	];
	return (
		<div className="home">
			<div className="detail">
				<div>
					<p>
						Attraverso questa bacheca, l'usanza dell'azione sospesa
						diventa digitale. Una azione di reciprocità, una prassi
						solidale per far girare l'economia. Il Banco dei Sospesi
						era nato per sospendere pillole di cittadinanza, ma con
						l'emergenza sanitaria abbiamo deciso di riorientare la
						piattafoma sui bisogni primari. Questo tempo sospeso ha
						reso le disuguaglianze più profonde e la cultura del
						sospeso più diffusa. Questa piattaforma vuole essere uno
						strumento di prossimità virtuale.
					</p>
					<a>Scopri i sospesi</a>
				</div>
				<div>
					<svg
						viewBox="0 0 1107 763"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						className="hero__img hidden lg:block"
					>
						<title>Group</title>
						<desc>Created with Sketch.</desc>
						<defs></defs>
						<g
							id="Page-1"
							stroke="none"
							strokeWidth="1"
							fill="none"
							fillRule="evenodd"
						>
							<g
								id="Ilustrazioni_1"
								transform="translate(0.000000, -317.000000)"
							>
								<g
									id="Group"
									transform="translate(0.000000, 317.000000)"
								>
									<polyline
										id="Fill-1"
										fill="#1A1919"
										points="970.43 668.194 155.489 668.194 155.489 475.883 970.43 203.588 970.43 668.194"
									></polyline>
									<path
										d={paths.svgHomePath1}
										id="Fill-2"
										fill="#F0BF5D"
									></path>
									<path
										d={paths.svgHomePath2}
										id="Fill-3"
										fill="#E15F53"
									></path>
									<path
										className="animate3"
										d={paths.svgHomePath3}
										id="Fill-4"
										fill="#66B8D9"
									></path>
									<g>
										<path
											d={paths.svgHomePath4}
											id="Fill-5"
											fill="#000206"
										></path>
										<path
											d={paths.svgHomePath5}
											id="Fill-6"
											fill="#000206"
										></path>
									</g>
									<path
										d={paths.svgHomePath6}
										id="Fill-7"
										fill="#000206"
									></path>
									<polygon
										id="Fill-8"
										fill="#1A1919"
										points="334.747 193.3 367.345 193.3 367.345 42.41 334.747 42.41"
									></polygon>
									<polygon
										id="Fill-9"
										fill="#1A1919"
										points="384.549 91.307 417.147 91.307 417.147 0.757 384.549 0.757"
									></polygon>
									<path
										className="animate6"
										d={paths.svgHomePath7}
										id="Fill-10"
										fill="#E15F53"
									></path>
									<path
										className="animate8"
										d={paths.svgHomePath8}
										id="Fill-11"
										fill="#1A1919"
									></path>
									<path
										className="animate9"
										d={paths.svgHomePath9}
										id="Fill-12"
										fill="#1A1919"
									></path>
									<path
										className="animate10"
										d={paths.svgHomePath10}
										id="Fill-13"
										fill="#1A1919"
									></path>
									<path
										d={paths.svgHomePath11}
										id="Fill-14"
										fill="#000206"
									></path>
								</g>
							</g>
						</g>
					</svg>
				</div>
			</div>
			<div className="suspend">
				<p>Il Banco dei Sospesi</p>
				<div>
					{susBanks.map((item, index) => (
						<div className="sus-item" key={index}>
							<div
								style={{
									backgroundImage: `url("assets/images/${item.url}")`,
								}}
							></div>
							<div>
								<p className="title">{item.title}</p>
								<p className="status">{item.status}</p>
								<p className="ticket">{item.ticket}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="join">
				<p>Entra a far parte della nostra rete</p>
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
		</div>
	);
}
