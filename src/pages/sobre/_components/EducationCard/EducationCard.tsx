import { Trans, useLingui } from "@lingui/react/macro";
import cn from "classnames";
import { EDUCATION } from "@/constants/education";
import { useDelayedScroll } from "@/hooks/useDelayedScroll";
import s from "./EducationCard.module.css";

interface EducationCardProps {
	isHovered?: boolean;
}

export function EducationCard({ isHovered = false }: EducationCardProps) {
	const { t } = useLingui();
	const showScroll = useDelayedScroll(isHovered);

	return (
		<div className={s.educationCardWrapper}>
			<h2>
				<Trans>Certificados & Formações</Trans>
			</h2>
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
								className={cn(s.workIconWrapper, {
									[s.workIconWrapperJpg]: isJpg,
								})}
								style={{ backgroundColor: item.iconBackground }}
							>
								<div
									className={cn(s.workIconContainer, {
										[s.workIconContainerJpg]: isJpg,
									})}
								>
									<img
										src={item.icon}
										alt={t`Icone`}
										className={cn(s.workIcon, {
											[s.workIconImageJpg]: isJpg,
											[s.workIconImageSvg]: !isJpg,
										})}
									/>
								</div>
							</div>
							<div className={s.workTextWrapper}>
								<h4 className={s.workTitle}>{t(item.title)}</h4>
								<p className={s.workSubtitle}>{t(item.subtitle)}</p>
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
