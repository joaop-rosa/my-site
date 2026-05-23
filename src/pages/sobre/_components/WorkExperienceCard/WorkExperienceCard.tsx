import { useEffect, useState } from "react";
import { WORKS } from "@/constants/works";
import s from "./WorkExperienceCard.module.css";

interface WorkExperienceCardProps {
	isHovered?: boolean;
}

export function WorkExperienceCard({
	isHovered = false,
}: WorkExperienceCardProps) {
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
		<div className={s.workCardWrapper}>
			<h2>Exp. Profissionais</h2>
			<div
				className={`${s.worksWrapper} ${showScroll ? s.overflowAuto : s.overflowHidden}`}
			>
				{WORKS.map((work, index) => {
					const key = `${work.company}${work.role}${index}`;
					const isJpg =
						work.companyIcon.toLowerCase().endsWith(".jpg") ||
						work.companyIcon.toLowerCase().endsWith(".jpeg");
					const isSvg = work.companyIcon.toLowerCase().endsWith(".svg");
					return (
						<div className={s.work} key={key}>
							<div
								className={s.workIconWrapper}
								style={{
									backgroundColor: work.iconBackground,
									padding: isJpg ? 0 : undefined,
								}}
							>
								<div
									className={s.workIconContainer}
									style={{
										width: isJpg ? "28px" : undefined,
										height: isJpg ? "28px" : undefined,
									}}
								>
									<img
										src={work.companyIcon}
										alt="Icone da empresa"
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
								<h4 className={s.workTitle}>{work.role}</h4>
								<p className={s.workCompany}>{work.company}</p>
								<p className={s.workTime}>
									{work.yearStart} - {work.yearEnd ?? "Atualmente"}
								</p>
							</div>
						</div>
					);
				})}
			</div>
			<div className={`${s.fadeOverlay} ${isHovered ? s.fadeOut : ""}`} />
		</div>
	);
}
