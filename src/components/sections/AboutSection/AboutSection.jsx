import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaCheck } from 'react-icons/fa'
import SectionHeader from '@components/common/SectionHeader/SectionHeader'
import styles from './AboutSection.module.scss'

gsap.registerPlugin(ScrollTrigger)

const AboutSection = () => {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.2, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const features = [
    'ISO 9001:2015 Certified',
    'Advanced Fiber Laser Technology',
    'CNC Multi-Axis Bending',
    'Certified Welding Operations',
  ]

  return (
    <section id="about" className={styles.about} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageContainer} ref={imageRef}>
              <img
                src="/images/about.jpg"
                alt="Entire Solutions Manufacturing Facility"
                loading="lazy"
                className={styles.image}
              />
              <div className={styles.imageOverlay}></div>
            </div>
            <div className={styles.experienceBadge}>
              <span className={styles.years}>25+</span>
              <span className={styles.text}>Years of Excellence</span>
            </div>
          </div>

          <div className={styles.content}>
            <SectionHeader
              subtitle="About Entire Solutions"
              title="Precision Fabrication. Reliable Solutions."
              description="Established in 2020, Entire Solutions is a premier manufacturing hub specializing in high-tolerance light and heavy fabrication, state-of-the-art fiber laser cutting, precision CNC sheet metal processing, and certified welding operations."
              align="left"
            />

            <p className={styles.text}>
              Driven by advanced machinery and a rigid approach to quality, we serve high-demand B2B sectors including renewable energy, power grids, automotive chains, and infrastructure projects—consistently delivering precisely detailed industrial assets.
            </p>

            <ul className={styles.features}>
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className={styles.feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <FaCheck className={styles.checkIcon} />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(AboutSection)
