import React from "react";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Textarea from "@mui/joy/Textarea";
import Checkbox from "@mui/material/Checkbox";

export default function Contact() {
	return (
		<div className="contact">
			<p>Contattaci</p>
			<p>
				Lascia qui il tuo messaggio e sarai ricontattato dal Banco dei
				sospesi.
			</p>
			<div>
				<p>Nome *</p>
				<FormControl sx={{ width: "100%" }}>
					<OutlinedInput placeholder="Nome *" />
				</FormControl>
			</div>
			<div>
				<p>Email *</p>
				<FormControl sx={{ width: "100%" }}>
					<OutlinedInput placeholder="Email *" />
				</FormControl>
			</div>
			<div>
				<p>Telefono*</p>
				<FormControl sx={{ width: "100%" }}>
					<OutlinedInput placeholder="Telefono*" />
				</FormControl>
			</div>

			<div>
				<p>Messaggio*</p>
				<Textarea
					className="tx-des"
					color="neutral"
					minRows={10}
					placeholder="Messaggio*"
					sx={{ width: "100%" }}
				/>
			</div>
			<div style={{ marginBottom: "2rem" }}>
				<p>Chi ti ha parlato del Banco dei Sospesi?*</p>
				<Textarea
					className="tx-des"
					color="neutral"
					minRows={10}
					placeholder="Chi ti ha parlato del Banco dei Sospesi?*"
					sx={{ width: "100%" }}
				/>
			</div>
			<div className="dflex">
				<Checkbox size="large" />
				<p>
					Dichiaro di aver letto e accettato il Codice Etico del
					presente sito*
				</p>
			</div>
			<div className="dflex">
				<Checkbox size="large" />
				<p>
					Dichiaro di aver letto e accettato la Privacy Policy del
					presente sito*
				</p>
			</div>
			<div className="dflex">
				<Checkbox size="large" />
				<p>
					Do il consenso per il trattamento dei dati per attività di
					marketing e/o promozionale diretta
				</p>
			</div>
			<div className="dflex">
				<Checkbox size="large" />
				<p>
					Do il consenso per la comunicazione e cessione dei dati a
					terze parti, come specificato nell'informativa
				</p>
			</div>
			<a className="rbtn">Invia</a>
		</div>
	);
}
