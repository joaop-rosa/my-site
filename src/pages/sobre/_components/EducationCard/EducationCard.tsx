import { useEffect, useState } from "react";
import { EDUCATION } from "@/constants/education";
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
				className={`${s.educationWrapper} ${showScroll ? s.overflowAuto : s.overflowHidden}`}
			>
				{EDUCATION.map((item, index) => {
					const key = `${item.title}${index}`;
					const isSvg = item.icon.toLowerCase().endsWith(".svg");
					const isJpg =
						item.icon.toLowerCase().endsWith(".jpg") ||
						item.icon.toLowerCase().endsWith(".jpeg");
					return (
						<div className={s.innerCard} key={key}>
							<div
								className={s.workIconWrapper}
								style={{
									backgroundColor: item.iconBackground,
									padding: isJpg ? 0 : undefined,
								}}
							>
								<div
									className={s.workIconContainer}
									style={{
										width: isJpg ? "60px" : undefined,
										height: isJpg ? "60px" : undefined,
									}}
								>
									<img
										src={item.icon}
										alt="Icone"
										className={s.workIcon}
										style={{
											width: "100%",
											height: "100%",
											objectFit: isJpg ? "cover" : "contain",
											position: "absolute",
											top: 0,
											left: 0,
											filter: isSvg ? "none" : "grayscale(100%)",
										}}
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
			<div className={`${s.fadeOverlay} ${isHovered ? s.fadeOut : ""}`} />
		</div>
	);
}
