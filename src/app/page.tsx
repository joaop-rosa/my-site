"use client";

import s from "./page.module.css";
import { CARD_THEME, CARD_TYPE, Card } from "./components/Card";
import { ABOUT_ME_CARD, PROJECT_CARD } from "./constants/text";
import { PROJECTS } from "./constants/projects";
import Image from "next/image";
import { SOCIAL_MEDIAS } from "./constants/socialMedias";
import { useEffect, useState } from "react";
import Spinner from "./components/cards/Spinner";
import ReactDOM from "react-dom";
import { WORKS } from "./constants/works";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <main className={s.main}>
      <div className={s.container}>
        <div className={s.content}>
          <Card type={CARD_TYPE.CUSTOM}>
            <div className={s.customStartCardWrapper}>
              <h1 className={s.name}>João Paulo</h1>
              <h2 className={s.description}>Front-End Developer</h2>
            </div>
          </Card>
          <Card
            title={ABOUT_ME_CARD.TITLE}
            description={ABOUT_ME_CARD.DESCRIPTION}
            type={CARD_TYPE.TEXT}
            theme={CARD_THEME.LIGHT}
          />
          <Card
            title={PROJECT_CARD.TITLE}
            type={CARD_TYPE.CAROUSEL}
            theme={CARD_THEME.DARK}
            itens={PROJECTS}
            icon="/icons/project.svg"
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
                    );
                  })}
                </div>
              </div>
              {/* TO DO - Card muito pequeno para o conteudo */}
              <div className={s.workCardWrapper}>
                <h2>Exp. Profissionais</h2>
                <div className={s.worksWrapper}>
                  {WORKS.map((work) => {
                    return (
                      <div className={s.work}>
                        <div className={s.workIconWrapper}>
                          <Image
                            src={work.companyIcon}
                            alt="Icone da empresa"
                            className={s.workIcon}
                            fill
                            priority
                          />
                        </div>
                        <div className={s.workTextWrapper}>
                          <h4>{work.company}</h4>
                          <p>{work.role}</p>
                          <p>
                            {work.yearStart} - {work.yearEnd ?? "Atualmente"}
                          </p>
                        </div>
                      </div>
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
