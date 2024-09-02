import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import jsonfaq from "../../json/faq.json";

export default function Ethics() {
	const [expanded, setExpanded] = useState(false);
	const [faq, setFaq] = useState([]);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	useEffect(() => {
		setFaq(jsonfaq);
	}, []);
	return (
		<div className="allfaq">
			<h1>Tutte le FAQ</h1>
			{faq.map((item, index) => (
				<Accordion
					expanded={expanded === `panel${index}`}
					onChange={handleChange(`panel${index}`)}
					className="faq-list"
					key={index}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1bh-content"
						className="title"
					>
						<Typography
							sx={{
								color: "#0a0a0a",
								fontWeight: "bold",
							}}
						>
							{item.title}
						</Typography>
					</AccordionSummary>
					<AccordionDetails className="detail">
						<Typography
							sx={{ color: "#616161" }}
							className="content"
						>
							{item.detail}
						</Typography>
					</AccordionDetails>
				</Accordion>
			))}
		</div>
	);
}
