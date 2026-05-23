import s from "./EducationCard.module.css"
import { EDUCATION } from "@/constants/education"

export function EducationCard() {
  return (
    <div className={s.educationCardWrapper}>
      <h2>Certificados & Formações</h2>
      <div className={s.educationWrapper}>
        {EDUCATION.map((item, index) => {
          const key = `${item.title}${index}`
          const isSvg = item.icon.toLowerCase().endsWith('.svg')
          const isJpg = item.icon.toLowerCase().endsWith('.jpg') || item.icon.toLowerCase().endsWith('.jpeg')
          return (
            <div className={s.work} key={key}>
              <div
                className={s.workIconWrapper}
                style={{ 
                  backgroundColor: item.iconBackground,
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
                    src={item.icon}
                    alt='Icone'
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
                <h4 className={s.workTitle}>{item.title}</h4>
                <p className={s.workSubtitle}>{item.subtitle}</p>
                <p className={s.workTime}>{item.year}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
