import s from "./page.module.css";
import { CARD_THEME, CARD_TYPE, Card } from "./components/Card";
import { ABOUT_ME_CARD, PROJECT_CARD } from "./constants/text";
import { PROJECTS } from "./constants/projects";
import Image from "next/image";
import { SOCIAL_MEDIAS } from "./constants/socialMedias";

export default function Home() {
  return (
    <main className={s.main}>
      <div className={s.container}>
        <div className={s.content}>
          <Card
            title={ABOUT_ME_CARD.TITLE}
            description={ABOUT_ME_CARD.DESCRIPTION}
            type={CARD_TYPE.TEXT}
            theme={CARD_THEME.LIGHT}
          />
          <Card />
          <Card
            title={PROJECT_CARD.TITLE}
            type={CARD_TYPE.CAROUSEL}
            theme={CARD_THEME.DARK}
            itens={PROJECTS}
            icon="/icons/project.svg"
          />
          <Card type={CARD_TYPE.CUSTOM}>
            <div className={s.customCardsWrapper}>
              <div className={s.personalImageWrapper}>
                <Image
                  src="/images/personal-photo.jpeg"
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
                    );
                  })}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
