import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeader from '@components/common/SectionHeader/SectionHeader'
import { ENGINEERING_ITEMS } from '@utils/constants'
import styles from './EngineeringSection.module.scss'

gsap.registerPlugin(ScrollTrigger)

const EngineeringSection = () => {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    const items = track.querySelectorAll(`.${styles.item}`)
    const totalWidth = track.scrollWidth - window.innerWidth + 100

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: -totalWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${totalWidth}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      })

      items.forEach((item, i) => {
        gsap.fromTo(item.querySelector(`.${styles.image}`),
          { scale: 1.2 },
          {
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: item,
              containerAnimation: gsap.getById ? undefined : undefined,
              start: 'left right',
              end: 'right left',
              scrub: true,
            },
          }
        )
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section className={styles.engineering} ref={sectionRef}>
      <div className={styles.header}>
        <div className={styles.container}>
          <SectionHeader
            subtitle="Engineering Division"
            title="Our Capabilities"
            align="left"
            light
          />
        </div>
      </div>

      <div className={styles.track} ref={trackRef}>
        {ENGINEERING_ITEMS.map((item, index) => (
          <div key={item.id} className={styles.item}>
            <div className={styles.number}>{item.id}</div>
            <div className={styles.imageWrapper}>
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className={styles.image}
              />
              <div className={styles.imageOverlay}></div>
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default React.memo(EngineeringSection)
