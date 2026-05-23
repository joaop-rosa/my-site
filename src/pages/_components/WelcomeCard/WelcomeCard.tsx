import s from "./WelcomeCard.module.css"
import { SOCIAL_MEDIAS } from "@/constants/socialMedias"

export function WelcomeCard() {
  return (
    <div className={s.cardName}>
      <h3 className={s.presentation}>
        Oi, eu sou <span style={{ textDecorationLine: "line-through", opacity: 0.15 }}>Goku</span>
      </h3>
      <h1 className={s.name}>João Paulo</h1>
      <h2 className={s.description}>Front-end Developer</h2>
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
  )
}
