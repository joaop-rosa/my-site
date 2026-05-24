import { useLingui } from "@lingui/react/macro";
import s from "@/App.module.css";
import { Card } from "@/components/cards/Card";
import { CARD_THEME, CARD_TYPE } from "@/components/cards/constants";
import { PROJECTS } from "@/constants/projects";
import { PROJECT_CARD } from "@/constants/text";
import { PersonalPhotoCard } from "./_components/PersonalPhotoCard/PersonalPhotoCard";
import { WelcomeCard } from "./_components/WelcomeCard/WelcomeCard";

export default function Home() {
	const { t } = useLingui();

	const translatedProjects = PROJECTS.map((project) => ({
		...project,
		name: t(project.name),
		description: t(project.description),
	}));

	return (
		<main className={s.main}>
			<div className={s.container}>
				<div className={s.content}>
					<div className={s.welcomeGridArea}>
						<WelcomeCard />
					</div>

					<Card
						title={t(PROJECT_CARD.TITLE)}
						type={CARD_TYPE.CAROUSEL}
						theme={CARD_THEME.DARK}
						itens={translatedProjects}
						className={s.cardCarousel}
					/>

					<div className={s.rightColumn}>
						<div className={s.photoArea}>
							<PersonalPhotoCard />
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
