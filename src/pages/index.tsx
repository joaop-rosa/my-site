import s from "@/App.module.css"
import { Card } from "@/components/cards/Card"
import { CARD_THEME, CARD_TYPE } from "@/components/cards/constants"
import { PROJECTS } from "@/constants/projects"
import { SOCIAL_MEDIAS } from "@/constants/socialMedias"
import cn from "classnames"
import { PROJECT_CARD } from "@/constants/text"
import { WORKS } from "@/constants/works"

export default function Home() {
  return (
    <main className={s.main}>
      <div className={s.container}>
        <div className={s.content}>
          <Card type={CARD_TYPE.CUSTOM}>
            <div className={s.cardName}>
              <h3 className={s.presentation}>Oi, eu sou <span style={{ textDecorationLine: "line-through", opacity: 0.15 }}>Goku</span></h3>
              <h1 className={s.name}>João Paulo</h1>
              <h2 className={s.description}>Front-end Developer</h2>
            </div>
          </Card>
          
          <Card
            title={PROJECT_CARD.TITLE}
            type={CARD_TYPE.CAROUSEL}
            theme={CARD_THEME.DARK}
            itens={PROJECTS}
            icon='/icons/project.svg'
            className={s.cardCarousel}
          />

          <Card type={CARD_TYPE.CUSTOM}>
            <div className={s.workCardWrapper}>
              <h2>Exp. Profissionais</h2>
              <div className={s.worksWrapper}>
                {WORKS.map((work, index) => {
                  const key = `${work.company}${work.role}${index}`
                  return (
                    <div className={s.work} key={key}>
                      <div
                        className={s.workIconWrapper}
                        style={{ backgroundColor: work.iconBackground }}
                      >
                        <div className={s.workIconContainer}>
                          <img
                            src={work.companyIcon}
                            alt='Icone da empresa'
                            className={s.workIcon}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                              position: "absolute",
                              top: 0,
                              left: 0,
                            }}
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

          <div className={s.rightColumn}>
            <Card type={CARD_TYPE.CUSTOM}>
              <div className={s.customCardPersonalWrapper}>
                <div className={s.personalImageWrapper}>
                  <img
                    src='/images/personal-photo.jpeg'
                    alt='Foto pessoal.'
                    className={s.personalImage}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      position: "absolute",
                      top: 0,
                      left: 0,
                    }}
                  />
                  <div className={s.socialMediasWrapper}>
                    {SOCIAL_MEDIAS.map((socialMedia) => {
                      return (
                        <a
                          className={s.socialMedia}
                          key={socialMedia.name}
                          href={socialMedia.url}
                          target='_blanck'
                        >
                          <div className={s.iconWrapper}>
                            <img
                              src={socialMedia.icon}
                              alt={`Ícone do ${socialMedia.name}`}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                position: "absolute",
                                top: 0,
                                left: 0,
                              }}
                            />
                          </div>
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </Card>

            <Card type={CARD_TYPE.CUSTOM}>
              <div className={cn(s.cardAbout, "card-dark-theme-override")}>
                <div className={s.aboutCompactContent}>
                  <h2>Sobre mim</h2>
                  <img src="/icons/arrow-right.svg" alt="Seta" className={s.aboutCompactIcon} />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
