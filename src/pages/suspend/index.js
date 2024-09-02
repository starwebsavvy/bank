import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import paths from "../../json/path.json";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import Textarea from "@mui/joy/Textarea";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
	clip: "rect(0 0 0 0)",
	clipPath: "inset(50%)",
	height: 1,
	overflow: "hidden",
	position: "absolute",
	bottom: 0,
	left: 0,
	whiteSpace: "nowrap",
	width: 1,
});
export default function Suspend() {
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: false,
			disable: false,
		});
	}, []);
	return (
		<div className="suspend">
			<div className="detail">
				<div>
					<h1>Sospendi il tuo tempo</h1>
					<p>
						Hai tempo, competenze, abilità, talenti (in matematica,
						italiano, scienze, musica, altro) che possono essere
						messi a disposizione, a distanza, di altre persone che
						hanno bisogno?
					</p>
					<p>
						Iscriviti al Banco dei Sospesi e segnala le tue
						disponibilità, verrai ricontattato e messo in contatto
						con chi ne ha bisogno.
					</p>
					<a>Compila il form</a>
				</div>
				<div>
					<svg
						width="100%"
						viewBox="0 0 864 636"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Group</title>
						<desc>Created with Sketch.</desc>
						<defs></defs>
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
										d={paths.svgTimePath1}
										id="Fill-2"
										fill="#70BD88"
										class="animate8"
									></path>
									<path
										d={paths.svgTimePath2}
										id="Fill-3"
										fill="#000206"
									></path>
									<path
										d={paths.svgTimePath3}
										id="Fill-4"
										fill="#000206"
									></path>
									<path
										d={paths.svgTimePath4}
										id="Fill-5"
										fill="#F0BF5D"
									></path>
									<path
										d={paths.svgTimePath5}
										id="Fill-6"
										fill="#1A1919"
										class="animate14"
									></path>
									<path
										d={paths.svgTimePath6}
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
					Questo tempo sospeso ha chiuso nelle case competenze,
					talenti e capacità che possono trasformarsi in occasioni da
					condividere con altri, in modalità virtuale, grazie alla
					risorsa tempo.
				</p>
			</div>
			<div className="example">
				<div>
					<p>Esempi di tempo sospeso</p>
					<p>
						Sospendi anche tu un’abilità o proponi un’azione di
						tempo sospeso che rispecchi le tue abilità.
					</p>
				</div>
				<div>
					<div className="num-b">
						<h6>VALORE TOTALE</h6>
						<h5>Numero di Attività</h5>
						<p>0</p>
					</div>
				</div>
			</div>
			<div className="cat">
				<div data-aos="fade-up">
					<h6>Musica</h6>
					<p>
						Sai suonare uno strumento o sai insegnare canto?Puoi
						lasciare in sospeso il tuo tempo per offrire le tue
						abilità a chi ne ha bisogno
					</p>
					<a>Sospendi il tuo tempo</a>
				</div>
				<div data-aos="fade-up">
					<h6>Scuola</h6>
					<p>
						Conosci molto bene la matematica o l’italiano? Hai
						abilità in qualche disciplina scolastica particolare?
						Puoi lasciare in sospeso il tuo tempo per offrire le tue
						abilità a chi ne ha bisogno
					</p>
					<a>Sospendi il tuo tempo</a>
				</div>
				<div data-aos="fade-up">
					<h6>Lingue</h6>
					<p>
						Conosci molte lingue straniere e pensi di poter
						trasmettere questa tua competenza ad altri? Puoi
						lasciare in sospeso il tuo tempo per offrire le tue
						competenze a chi ne ha bisogno
					</p>
					<a>Sospendi il tuo tempo</a>
				</div>
			</div>
			<div className="report">
				<div>
					<p>Come sospendere il tuo tempo</p>
					<p>
						Compila il form con tutti i tuoi dati e se desideri
						allega il tuo CV. Potrai essere selezionato per
						sospendere il tuo tempo, dedicandolo a chi è in
						difficoltà. Puoi proporre diverse tipologie di abilità,
						competenze e talenti: le valuteremo e sarai
						ricontattato.
					</p>
					<div>
						<p>Nome e Cognome*</p>
						<FormControl sx={{ width: "90%" }}>
							<OutlinedInput placeholder="Nome e Cognome*" />
						</FormControl>
					</div>
					<div>
						<p>Indirizzo email*</p>
						<FormControl sx={{ width: "90%" }}>
							<OutlinedInput placeholder="Indirizzo email*" />
						</FormControl>
					</div>
					<div>
						<p>Durata singola lezione*</p>
						<div>
							<FormControl sx={{ m: 1, minWidth: 120 }}>
								<Select displayEmpty>
									<MenuItem value="">00</MenuItem>
									<MenuItem value={10}>01</MenuItem>
									<MenuItem value={20}>02</MenuItem>
									<MenuItem value={30}>03</MenuItem>
									<MenuItem value={30}>04</MenuItem>
									<MenuItem value={30}>05</MenuItem>
									<MenuItem value={30}>06</MenuItem>
									<MenuItem value={30}>07</MenuItem>
									<MenuItem value={30}>08</MenuItem>
									<MenuItem value={30}>09</MenuItem>
									<MenuItem value={30}>10</MenuItem>
									<MenuItem value={30}>11</MenuItem>
									<MenuItem value={30}>12</MenuItem>
									<MenuItem value={30}>13</MenuItem>
									<MenuItem value={30}>14</MenuItem>
									<MenuItem value={30}>15</MenuItem>
									<MenuItem value={30}>16</MenuItem>
									<MenuItem value={30}>17</MenuItem>
									<MenuItem value={30}>18</MenuItem>
									<MenuItem value={30}>19</MenuItem>
									<MenuItem value={30}>20</MenuItem>
									<MenuItem value={30}>21</MenuItem>
									<MenuItem value={30}>22</MenuItem>
									<MenuItem value={30}>23</MenuItem>
								</Select>
							</FormControl>

							<FormControl sx={{ m: 1, minWidth: 120 }}>
								<Select displayEmpty>
									<MenuItem value="">00</MenuItem>
									<MenuItem value={10}>01</MenuItem>
									<MenuItem value={20}>02</MenuItem>
									<MenuItem value={30}>03</MenuItem>
									<MenuItem value={30}>04</MenuItem>
									<MenuItem value={30}>05</MenuItem>
									<MenuItem value={30}>06</MenuItem>
									<MenuItem value={30}>07</MenuItem>
									<MenuItem value={30}>08</MenuItem>
									<MenuItem value={30}>09</MenuItem>
									<MenuItem value={30}>10</MenuItem>
									<MenuItem value={30}>11</MenuItem>
									<MenuItem value={30}>12</MenuItem>
									<MenuItem value={30}>13</MenuItem>
									<MenuItem value={30}>14</MenuItem>
									<MenuItem value={30}>15</MenuItem>
									<MenuItem value={30}>16</MenuItem>
									<MenuItem value={30}>17</MenuItem>
									<MenuItem value={30}>18</MenuItem>
									<MenuItem value={30}>19</MenuItem>
									<MenuItem value={30}>20</MenuItem>
									<MenuItem value={30}>21</MenuItem>
									<MenuItem value={30}>22</MenuItem>
									<MenuItem value={30}>23</MenuItem>
								</Select>
							</FormControl>
						</div>
					</div>
					<div>
						<p>Numero di lezioni*</p>
						<Slider
							defaultValue={0}
							aria-label="Default"
							valueLabelDisplay="auto"
							className="sl-num"
							sx={{
								width: "90%",
								height: "13px",
								"& .MuiSlider-thumb": {
									backgroundColor: "#F9C852",
									width: 25,
									height: 25,
								},
								"& .MuiSlider-track": {
									backgroundColor: "#d3d3d3",
									border: "none",
								},
								"& .MuiSlider-rail": {
									backgroundColor: "#d3d3d3", // Change the rail color
								},
							}}
						/>
					</div>
					<div>
						<p>Descrizione attività*</p>
						<Textarea
							className="tx-des"
							color="neutral"
							minRows={10}
							placeholder="Descrizione attività*"
							sx={{ width: "90%" }}
						/>
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
							<p>Verbano-Cusio-Ossola</p>
						</div>
						<div className="dflex">
							<Checkbox size="large" />
							<p>Vercelli</p>
						</div>
					</div>
					<div>
						<p>Allega CV</p>
						<Button
							component="label"
							role={undefined}
							variant="contained"
							tabIndex={-1}
							startIcon={<CloudUploadIcon />}
						>
							Allega file
							<VisuallyHiddenInput
								type="file"
								onChange={(event) =>
									console.log(event.target.files)
								}
								multiple
							/>
						</Button>
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
