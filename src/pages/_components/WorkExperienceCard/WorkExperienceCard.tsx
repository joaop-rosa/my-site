import s from "./WorkExperienceCard.module.css"
import { WORKS } from "@/constants/works"

export function WorkExperienceCard() {
  return (
    <div className={s.workCardWrapper}>
      <h2>Exp. Profissionais</h2>
      <div className={s.worksWrapper}>
        {WORKS.map((work, index) => {
          const key = `${work.company}${work.role}${index}`
          const isJpg = work.companyIcon.toLowerCase().endsWith('.jpg') || work.companyIcon.toLowerCase().endsWith('.jpeg')
          const isSvg = work.companyIcon.toLowerCase().endsWith('.svg')
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
                    width: isJpg ? "60px" : undefined,
                    height: isJpg ? "60px" : undefined,
                  }}
                >
                  <img
                    src={work.companyIcon}
                    alt='Icone da empresa'
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
  )
}
