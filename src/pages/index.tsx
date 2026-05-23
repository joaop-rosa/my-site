import s from "@/App.module.css"
import { Card } from "@/components/cards/Card"
import { CARD_THEME, CARD_TYPE } from "@/components/cards/constants"
import { PROJECTS } from "@/constants/projects"
import { PROJECT_CARD } from "@/constants/text"

import { WelcomeCard } from "./_components/WelcomeCard/WelcomeCard"
import { WorkExperienceCard } from "./_components/WorkExperienceCard/WorkExperienceCard"
import { EducationCard } from "./_components/EducationCard/EducationCard"
import { PersonalPhotoCard } from "./_components/PersonalPhotoCard/PersonalPhotoCard"

export default function Home() {
  return (
    <main className={s.main}>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.welcomeGridArea}>
            <WelcomeCard />
          </div>
          
          <Card
            title={PROJECT_CARD.TITLE}
            type={CARD_TYPE.CAROUSEL}
            theme={CARD_THEME.DARK}
            itens={PROJECTS}
            className={s.cardCarousel}
          />

          <div className={s.workGridArea}>
            <WorkExperienceCard />
          </div>

          <div className={s.rightColumn}>
            <PersonalPhotoCard />
            <EducationCard />
          </div>
        </div>
      </div>
    </main>
  )
}
