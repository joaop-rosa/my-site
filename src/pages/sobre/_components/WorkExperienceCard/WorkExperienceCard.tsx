import { useEffect, useState } from "react";
import { WORKS } from "@/constants/works";
import cn from "classnames";
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
				className={cn(s.worksWrapper, {
					[s.overflowAuto]: showScroll,
					[s.overflowHidden]: !showScroll,
				})}
			>
				{WORKS.map((work, index) => {
					const key = `${work.company}${work.role}${index}`;
					const isJpg =
						work.companyIcon.toLowerCase().endsWith(".jpg") ||
						work.companyIcon.toLowerCase().endsWith(".jpeg");
					return (
						<div className={s.work} key={key}>
							<div
								className={cn(s.workIconWrapper, { [s.workIconWrapperJpg]: isJpg })}
								style={{ backgroundColor: work.iconBackground }}
							>
								<div
									className={cn(s.workIconContainer, { [s.workIconContainerJpg]: isJpg })}
								>
									<img
										src={work.companyIcon}
										alt="Icone da empresa"
										className={cn(s.workIcon, {
											[s.workIconImageJpg]: isJpg,
											[s.workIconImageSvg]: !isJpg,
										})}
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
			<div className={cn(s.fadeOverlay, { [s.fadeOut]: isHovered })} />
		</div>
	);
}
