import { useState, useRef } from "react";
import { SOCIAL_MEDIAS } from "@/constants/socialMedias";
import s from "./WelcomeCard.module.css";

export function WelcomeCard() {
	const [gokuState, setGokuState] = useState<'idle' | 'flying' | 'leaving'>('idle');
	const gifRef = useRef<HTMLImageElement>(null);

	const handleMouseEnter = () => {
		setGokuState('flying');
	};

	const handleMouseLeave = () => {
		if (gokuState === 'flying') {
			if (gifRef.current) {
				const style = window.getComputedStyle(gifRef.current);
				gifRef.current.style.setProperty('--exit-start-left', style.left);
				gifRef.current.style.setProperty('--exit-start-top', style.top);
			}
			setGokuState('leaving');
			
			setTimeout(() => {
				setGokuState('idle');
			}, 800); // tempo da animação de saída
		}
	};

	return (
		<div className={s.cardName}>
			<h3 className={s.presentation}>
				Oi, eu sou{" "}
				<span 
					className={s.gokuContainer}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<span className={s.strikethrough}>Goku</span>
					<img 
						ref={gifRef}
						src="/images/goku.gif" 
						alt="Goku voando" 
						className={`${s.gokuGif} ${s[gokuState]}`} 
					/>
				</span>
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
