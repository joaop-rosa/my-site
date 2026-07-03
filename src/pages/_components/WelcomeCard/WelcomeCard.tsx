import { Trans, useLingui } from "@lingui/react/macro";
import { useRef, useState } from "react";
import { SOCIAL_MEDIAS } from "@/constants/socialMedias";
import s from "./WelcomeCard.module.css";

export function WelcomeCard() {
	const { t } = useLingui();
	const [gokuState, setGokuState] = useState<"idle" | "flying" | "leaving">(
		"idle",
	);
	const gifRef = useRef<HTMLImageElement>(null);

	const handleMouseEnter = () => {
		setGokuState("flying");
	};

	const handleMouseLeave = () => {
		if (gokuState === "flying") {
			if (gifRef.current) {
				const style = window.getComputedStyle(gifRef.current);
				gifRef.current.style.setProperty("--exit-start-left", style.left);
				gifRef.current.style.setProperty("--exit-start-top", style.top);
			}
			setGokuState("leaving");

			setTimeout(() => {
				setGokuState("idle");
			}, 800); // tempo da animação de saída
		}
	};

	return (
		<div className={s.cardName}>
			<h3 className={s.presentation}>
				<Trans>Oi, eu sou</Trans>{" "}
				{/** biome-ignore lint/a11y/noStaticElementInteractions: is necessary */}
				<span
					className={s.gokuContainer}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<span className={s.strikethrough}>Goku</span>
					<img
						ref={gifRef}
						src="/images/goku.gif"
						alt={t`Goku voando`}
						className={`${s.gokuGif} ${s[gokuState]}`}
					/>
				</span>
			</h3>
			<h1 className={s.name}>João Paulo</h1>
			<h2 className={s.description}>
				<Trans>Front-end Developer</Trans>
			</h2>
			<div className={s.actionsWrapper}>
				<div className={s.socialMediasWrapper}>
					{SOCIAL_MEDIAS.map((socialMedia) => {
						return (
							<a
								className={s.socialMedia}
								key={socialMedia.name}
								href={socialMedia.url}
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className={s.iconWrapper}>
									<img
										src={socialMedia.icon}
										alt={t`Ícone do ${socialMedia.name}`}
										className={s.iconImage}
									/>
								</div>
							</a>
						);
					})}
				</div>

				<a
					href="/CV-JoaoPauloDaRosa.pdf"
					download="CV-JoaoPauloDaRosa.pdf"
					className={s.downloadBtn}
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="/icons/download.svg"
						alt=""
						aria-hidden="true"
						className={s.downloadIcon}
					/>
					<Trans>Baixar CV</Trans>
				</a>
			</div>
		</div>
	);
}
