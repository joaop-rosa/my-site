import { useEffect, useState } from "react";
import { EDUCATION } from "@/constants/education";
import cn from "classnames";
import s from "./EducationCard.module.css";

interface EducationCardProps {
	isHovered?: boolean;
}

export function EducationCard({ isHovered = false }: EducationCardProps) {
	const [showScroll, setShowScroll] = useState(false);

	useEffect(() => {
		let timeoutId: ReturnType<typeof setTimeout>;
		if (isHovered) {
			timeoutId = setTimeout(() => {
				setShowScroll(true);
			}, 500); // Aguarda a animação do CSS (0.5s) terminar
		} else {
			setShowScroll(false);
		}
		return () => clearTimeout(timeoutId);
	}, [isHovered]);

	return (
		<div className={s.educationCardWrapper}>
			<h2>Certificados & Formações</h2>
			<div
				className={cn(s.educationWrapper, {
					[s.overflowAuto]: showScroll,
					[s.overflowHidden]: !showScroll,
				})}
			>
				{EDUCATION.map((item, index) => {
					const key = `${item.title}${index}`;
					const isJpg =
						item.icon.toLowerCase().endsWith(".jpg") ||
						item.icon.toLowerCase().endsWith(".jpeg");
					return (
						<div className={s.innerCard} key={key}>
							<div
								className={cn(s.workIconWrapper, { [s.workIconWrapperJpg]: isJpg })}
								style={{ backgroundColor: item.iconBackground }}
							>
								<div
									className={cn(s.workIconContainer, { [s.workIconContainerJpg]: isJpg })}
								>
									<img
										src={item.icon}
										alt="Icone"
										className={cn(s.workIcon, {
											[s.workIconImageJpg]: isJpg,
											[s.workIconImageSvg]: !isJpg,
										})}
									/>
								</div>
							</div>
							<div className={s.workTextWrapper}>
								<h4 className={s.workTitle}>{item.title}</h4>
								<p className={s.workSubtitle}>{item.subtitle}</p>
								<p className={s.workTime}>{item.year}</p>
							</div>
						</div>
					);
				})}
			</div>
			<div className={cn(s.fadeOverlay, { [s.fadeOut]: isHovered })} />
		</div>
	);
}
