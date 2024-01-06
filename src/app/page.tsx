"use client"

import s from "./page.module.css"
import { CARD_THEME, CARD_TYPE, Card } from "./components/cards/Card"
import { ABOUT_ME_CARD, PROJECT_CARD } from "./constants/text"
import { PROJECTS } from "./constants/projects"
import Image from "next/image"
import { SOCIAL_MEDIAS } from "./constants/socialMedias"
import { useEffect, useState } from "react"
import Spinner from "./components/Spinner"
import { WORKS } from "./constants/works"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <main className={s.main}>
      <div className={s.container}>
        <div className={s.content}>
          <Card type={CARD_TYPE.CUSTOM}>
            <div className={s.cardName}>
              <h3 className={s.presentation}>Bem vindo!</h3>
              <h1 className={s.name}>João Paulo</h1>
              <h2 className={s.description}>Front-end Developer</h2>
            </div>
          </Card>
          <Card
            title={ABOUT_ME_CARD.TITLE}
            description={ABOUT_ME_CARD.DESCRIPTION}
            type={CARD_TYPE.TEXT}
            theme={CARD_THEME.LIGHT}
            className={s.cardAbout}
          />
          <Card type={CARD_TYPE.CUSTOM}>
            <div className={s.customCardPersonalWrapper}>
              <div className={s.personalImageWrapper}>
                <Image
                  src="/images/personal-photo.jpg"
                  alt="Foto pessoal."
                  className={s.personalImage}
                  fill
                  priority
                />
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
                          <Image
                            src={socialMedia.icon}
                            alt={`Ícone do ${socialMedia.name}`}
                            fill
                            priority
                          />
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </Card>
          <Card
            title={PROJECT_CARD.TITLE}
            type={CARD_TYPE.CAROUSEL}
            theme={CARD_THEME.DARK}
            itens={PROJECTS}
            icon="/icons/project.svg"
            className={s.cardCarousel}
          />
          <Card type={CARD_TYPE.CUSTOM}>
            <div className={s.workCardWrapper}>
              <h2>Exp. Profissionais</h2>
              <div className={s.worksWrapper}>
                {WORKS.map((work, index) => {
                  return (
                    <div className={s.work} key={index}>
                      <div
                        className={s.workIconWrapper}
                        style={{ backgroundColor: work.iconBackground }}
                      >
                        <div className={s.workIconContainer}>
                          <Image
                            src={work.companyIcon}
                            alt="Icone da empresa"
                            className={s.workIcon}
                            fill
                            priority
                          />
                        </div>
                      </div>
                      <div className={s.workTextWrapper}>
                        <h4 className={s.workTitle}>{work.company}</h4>
                        <p className={s.workSubtitle}>{work.role}</p>
                        <p className={s.workTime}>
                          {work.yearStart} - {work.yearEnd ?? "Atualmente"}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}
