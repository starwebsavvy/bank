import React, { useEffect } from "react";
import paths from "../../json/path.json";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Spend() {
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: false,
			disable: false,
		});
	}, []);
	return (
		<div className="spend activity">
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
						Sospendi <br /> un'esperienza
					</p>
					<p data-aos="fade-up" data-aos-delay="1000">
						Il Banco dei Sospesi era nato per sospendere pillole di
						cittadinanza, ma con l'emergenza sanitaria abbiamo
						deciso di riorientare la piattafoma sui bisogni primari.
						Questo tempo sospeso infatti ha reso le disuguaglianze
						più profonde e la cultura del sospeso più diffusa.
						Questa piattaforma vuole essere uno strumento di
						prossimità virtuale
					</p>
					<a data-aos="fade-up" data-aos-delay="1500">
						Scopri i sospesi
					</a>
				</div>
			</div>
			<div className="work">
				<div>
					<p data-aos="fade-up" data-aos-delay="500">
						Come funziona
					</p>
					<p data-aos="fade-up" data-aos-delay="1000">
						Chi vuole sospendere deve registrarsi sulla piattaforma
						e comprare fra le opzioni della bacheca l'azione che
						vuole lasciare in sospeso . La piattaforma lo assegna in
						maniera randomica e verrà consegnato a chi ne ha più
						bisogno, attraverso associazioni, enti del terzo settore
						e istituzioni.
					</p>
				</div>
				<div>
					<img src="assets/images/chi_spende_1.png" />
				</div>
			</div>
		</div>
	);
}
