import { Trans, useLingui } from "@lingui/react/macro";
import { Link } from "react-router";
import s from "./PersonalPhotoCard.module.css";

export function PersonalPhotoCard() {
	const { t } = useLingui();

	return (
		<Link to="/sobre" className={s.customCardPersonalWrapper}>
			<div className={s.personalImageWrapper}>
				<img
					src="/images/personal-photo.jpeg"
					alt={t`Foto pessoal.`}
					className={s.personalImage}
				/>
				<div className={s.photoOverlay}>
					<div className={s.aboutOverlayContent}>
						<h2>
							<Trans>Sobre mim</Trans>
						</h2>
						<img
							src="/icons/arrow-right.svg"
							alt={t`Seta`}
							className={s.aboutOverlayIcon}
						/>
					</div>
				</div>
			</div>
		</Link>
	);
}
