import { Trans } from "@lingui/react/macro";
import { TECH_STACK } from "@/constants/techStack";
import s from "./TechStackCard.module.css";

export function TechStackCard() {
	return (
		<div className={s.techCard}>
			<h2 className={s.title}>
				<Trans>Tech Stack</Trans>
			</h2>
			<div className={s.badges}>
				{TECH_STACK.map((tech) => (
					<span key={tech} className={s.badge}>
						{tech}
					</span>
				))}
			</div>
		</div>
	);
}
