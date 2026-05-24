import { Trans } from "@lingui/react/macro";
import { useState } from "react";
import { useNavigate } from "react-router";
import { BioCard } from "./_components/BioCard/BioCard";
import { EducationCard } from "./_components/EducationCard/EducationCard";
import { TechStackCard } from "./_components/TechStackCard/TechStackCard";
import { WorkExperienceCard } from "./_components/WorkExperienceCard/WorkExperienceCard";
import s from "./Sobre.module.css";

export default function Sobre() {
	const navigate = useNavigate();
	const [hoveredCard, setHoveredCard] = useState<"work" | "education" | null>(
		null,
	);

	return (
		<main className={s.main}>
			<div className={s.container}>
				<button
					type="button"
					onClick={() => navigate("/")}
					className={s.backButton}
				>
					<Trans>← VOLTAR PARA HOME</Trans>
				</button>
				<div className={s.content}>
					<div className={s.leftColumn}>
						<div className={s.bioArea}>
							<BioCard />
						</div>
						<div className={s.techArea}>
							<TechStackCard />
						</div>
					</div>
					<div className={s.rightColumn}>
						{/** biome-ignore lint/a11y/noStaticElementInteractions: interactive card element */}
						<div
							role="presentation"
							onMouseEnter={() => setHoveredCard("work")}
							onMouseLeave={() => setHoveredCard(null)}
							className={`${s.workArea} ${hoveredCard === "work" ? s.expanded : hoveredCard === "education" ? s.collapsed : ""}`}
						>
							<WorkExperienceCard isHovered={hoveredCard === "work"} />
						</div>
						{/** biome-ignore lint/a11y/noStaticElementInteractions: interactive card element */}
						<div
							role="presentation"
							onMouseEnter={() => setHoveredCard("education")}
							onMouseLeave={() => setHoveredCard(null)}
							className={`${s.educationArea} ${hoveredCard === "education" ? s.expanded : hoveredCard === "work" ? s.collapsed : ""}`}
						>
							<EducationCard isHovered={hoveredCard === "education"} />
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
