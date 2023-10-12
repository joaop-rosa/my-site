"use client";

import Image from "next/image";
import s from "./CardCarousel.module.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cn from "classnames";

export type ProjectItem = {
  name: string;
  repoUrl: string;
  prodUrl: string;
  icon: string;
  alt: string;
  width: number;
  height: number;
};

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

export function CardCarousel({ itens }: { itens: ProjectItem[] }) {
  const [[indexCarousel, direction], setIndexCarousel] = useState(
    itens.length ? [0, 0] : [0, -1]
  );

  const disabledButton = itens.length === 1;

  function handleForward() {
    if (indexCarousel + 1 === itens.length) {
      return setIndexCarousel([0, 1]);
    }
    setIndexCarousel([indexCarousel + 1, 1]);
  }

  function handleBack() {
    if (indexCarousel === 0) {
      return setIndexCarousel([itens.length - 1, -1]);
    }
    setIndexCarousel([indexCarousel - 1, -1]);
  }

  function handleDot(index: number) {
    setIndexCarousel((currentValue) => [
      index,
      index > currentValue[0] ? 1 : -1,
    ]);
  }

  function renderDots() {
    return (
      <div className={s.dotsWrapper}>
        {itens.map((_, index) => {
          return (
            <button
              key={index}
              className={cn(s.dot, {
                [s.dotNotChecked]: index !== indexCarousel,
              })}
              onClick={() => handleDot(index)}
            />
          );
        })}
      </div>
    );
  }

  useEffect(() => {
    const carouselInterval = setInterval(handleForward, 10000);
    return () => clearInterval(carouselInterval);
  }, []);

  return (
    <div className={s.carousel}>
      <AnimatePresence initial={false} custom={direction}>
        {/* TO DO - Adicionar drag para troca de item */}
        {/* TO DO - Animar timer para passagem */}
        {/* TO DO - Limitar tamanho máximo icone da linguagem */}
        {/* TO DO - bug on speed switch */}
        <motion.div
          className={s.item}
          key={itens[indexCarousel].name}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7 }}
        >
          <div className={s.iconWrapper}>
            <Image
              src={itens[indexCarousel].icon}
              alt={itens[indexCarousel].alt}
              className={s.icon}
              fill
              priority
            />
          </div>

          <h4 className={s.title}>{itens[indexCarousel].name}</h4>
          <div className={s.links}>
            <a href={itens[indexCarousel].repoUrl} target="_blank">
              <Image
                src="/icons/github.svg"
                alt="/github.svg"
                className={s.link}
                width={25}
                height={25}
                priority
              />
            </a>
            <a href={itens[indexCarousel].prodUrl} target="_blank">
              <Image
                src="/icons/visit.svg"
                alt="/visit.svg"
                className={s.link}
                width={30}
                height={30}
                priority
              />
            </a>
          </div>
        </motion.div>
      </AnimatePresence>

      {renderDots()}

      <button
        disabled={disabledButton}
        className={cn(s.button, s.buttonBack)}
        onClick={handleBack}
      >
        <Image
          src="/icons/arrow-left.svg"
          alt="Flecha para esquerda."
          width={50}
          className={s.buttonIcon}
          height={60}
          priority
        />
      </button>
      <button
        disabled={disabledButton}
        className={cn(s.button, s.buttonForward)}
        onClick={handleForward}
      >
        <Image
          src="/icons/arrow-right.svg"
          alt="Flecha para direira."
          width={50}
          className={s.buttonIcon}
          height={60}
          priority
        />
      </button>
    </div>
  );
}
