import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RoomIcon from "@mui/icons-material/Room";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import susbanks from "../../json/bank.json";

export default function Bank() {
	const { id } = useParams();
	const [bankInfo, setBankInfo] = useState();
	useEffect(() => {
		const item = susbanks.find((element) => element.id === id);
		setBankInfo(item);
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="bank">
			<div className="info">
				<div>
					<div>
						<h1>{bankInfo?.title}</h1>
						<div
							style={{
								backgroundImage: `url("/assets/images/${bankInfo?.subimg}")`,
							}}
						></div>
						<div className="geo">
							<RoomIcon sx={{ width: 25, height: 32 }} />
							<div>
								<h6>{bankInfo?.address1}</h6>
								<p>{bankInfo?.address2}</p>
							</div>
						</div>
					</div>
					<div>
						<div>
							<p>€ {bankInfo?.cost}</p>
							<p>costo singolo sospeso</p>
						</div>
						<div>
							<p>{bankInfo?.deliver}</p>
							<p>
								totali sospesi <br /> consegnati
							</p>
						</div>
						<p>Puoi acquistare e sospendere questa esperienza</p>
						<a>Lascia un sospeso</a>
						<div>
							<p>Condividi ora</p>
							<div>
								<FacebookIcon />
								<LinkedInIcon />
								<TwitterIcon />
							</div>
						</div>
					</div>
				</div>
				<div>
					<div>
						<h1>{bankInfo?.subtitle}</h1>
						<img
							src={`/assets/images/${bankInfo?.detailimg}`}
							alt="detail"
						/>
						<p>{bankInfo?.detail}</p>
					</div>
				</div>
			</div>
			<div className="pending">
				<div>
					<div>
						<img src="/assets/images/cat.svg" alt="category" />
						<div>
							<p className="tit">Scopri altri sospesi.</p>
							<p className="con">
								Scegli l’esperienza che vuoi sospendere tra le
								aree della nostra bacheca!
							</p>
						</div>
					</div>
					<div>
						<a>Scopri</a>
					</div>
				</div>
			</div>
		</div>
	);
}
