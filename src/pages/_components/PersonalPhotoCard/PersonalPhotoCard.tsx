import { Link } from "react-router";
import s from "./PersonalPhotoCard.module.css";

export function PersonalPhotoCard() {
	return (
		<Link to="/sobre" className={s.customCardPersonalWrapper}>
			<div className={s.personalImageWrapper}>
				<img
					src="/images/personal-photo.jpeg"
					alt="Foto pessoal."
					className={s.personalImage}
				/>
				<div className={s.photoOverlay}>
					<div className={s.aboutOverlayContent}>
						<h2>Sobre mim</h2>
						<img
							src="/icons/arrow-right.svg"
							alt="Seta"
							className={s.aboutOverlayIcon}
						/>
					</div>
				</div>
			</div>
		</Link>
	);
}
