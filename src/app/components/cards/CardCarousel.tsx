"use client"

import Image from "next/image"
import s from "./CardCarousel.module.css"
import Slider from "react-slick"
import classNames from "classnames"

export type ProjectItem = {
  name: string
  repoUrl: string
  prodUrl: string
  icon: string
  alt: string
  width: number
  height: number
}

export function CardCarousel({ itens }: { itens: ProjectItem[] }) {
  function PrevArrow(props: { className: any; style: any; onClick: any }) {
    const { className, style, onClick } = props
    return (
      <Image
        src="/icons/arrow-left.svg"
        alt="Flecha para esquerda."
        width={50}
        className={classNames(className, s.arrow, s.arrowLeft)}
        height={60}
        priority
        onClick={onClick}
      />
    )
  }

  function NextArrow(props: { className: any; style: any; onClick: any }) {
    const { className, style, onClick } = props
    return (
      <Image
        src="/icons/arrow-right.svg"
        alt="Flecha para direira."
        width={50}
        className={classNames(className, s.arrow, s.arrowRight)}
        height={60}
        priority
        onClick={onClick}
      />
    )
  }

  return (
    <div className={s.carouselWrapper}>
      <Slider
        nextArrow={
          <NextArrow
            className={undefined}
            style={undefined}
            onClick={undefined}
          />
        }
        prevArrow={
          <PrevArrow
            className={undefined}
            style={undefined}
            onClick={undefined}
          />
        }
        className={s.carousel}
        infinite
        slidesToShow={1}
        slidesToScroll={1}
        autoplay
        autoplaySpeed={8000}
      >
        {itens.map((item) => {
          return (
            <div className={s.item} key={item.name}>
              <Image
                src={item.icon}
                alt={item.alt}
                className={s.icon}
                width={100}
                height={100}
                priority
              />

              <h4 className={s.title}>{item.name}</h4>
              <div className={s.links}>
                {item.repoUrl ? (
                  <a href={item.repoUrl} target="_blank">
                    <Image
                      src="/icons/github.svg"
                      alt="/github.svg"
                      className={s.link}
                      width={30}
                      height={30}
                      priority
                    />
                  </a>
                ) : null}

                {item.prodUrl ? (
                  <a href={item.prodUrl} target="_blank">
                    <Image
                      src="/icons/visit.svg"
                      alt="/visit.svg"
                      className={s.link}
                      width={40}
                      height={40}
                      priority
                    />
                  </a>
                ) : null}
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
