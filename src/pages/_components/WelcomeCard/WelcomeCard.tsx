import { SOCIAL_MEDIAS } from "@/constants/socialMedias";
import s from "./WelcomeCard.module.css";

export function WelcomeCard() {
	return (
		<div className={s.cardName}>
			<h3 className={s.presentation}>
				Oi, eu sou <span className={s.strikethrough}>Goku</span>
			</h3>
			<h1 className={s.name}>João Paulo</h1>
			<h2 className={s.description}>Front-end Developer</h2>
			<div className={s.socialMediasWrapper}>
				{SOCIAL_MEDIAS.map((socialMedia) => {
					return (
						<a
							className={s.socialMedia}
							key={socialMedia.name}
							href={socialMedia.url}
							target="_blanck"
						>
							<div className={s.iconWrapper}>
								<img
									src={socialMedia.icon}
									alt={`Ícone do ${socialMedia.name}`}
									className={s.iconImage}
								/>
							</div>
						</a>
					);
				})}
			</div>
		</div>
	);
}
