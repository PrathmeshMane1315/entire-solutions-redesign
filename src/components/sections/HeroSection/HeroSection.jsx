import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { FaArrowRight, FaPlay } from 'react-icons/fa'
import Button from '@components/common/Button/Button'
import styles from './HeroSection.module.scss'

const HeroSection = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-animate',
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: 'power3.out', delay: 0.5 }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.background}>
        <video
          className={styles.bgVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/hero/hero-bg.jpg"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-welding-sparks-in-a-dark-workshop-4982-large.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay}></div>
        <div className={styles.gridOverlay}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.textContent}>
          <motion.span
            className={`${styles.subtitle} hero-animate`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Industrial Manufacturing Excellence
          </motion.span>

          <h1 className={`${styles.title} hero-animate`}>
            <span className={styles.line1}>Strong Builds</span>
            <span className={styles.line2}>Start With <span className={styles.highlight}>Sharp Cuts</span></span>
          </h1>

          <p className={`${styles.description} hero-animate`}>
            Premium light and heavy engineering fabrication solutions tailored comprehensively for high-performance industrial and commercial environments.
          </p>

          <div className={`${styles.ctaGroup} hero-animate`}>
            <Button href="#services" size="lg" icon={FaArrowRight}>
              Explore Services
            </Button>
            <button className={styles.videoButton}>
              <span className={styles.playIcon}>
                <FaPlay />
              </span>
              Watch Our Process
            </button>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <span>Scroll</span>
      </div>
    </section>
  )
}

export default React.memo(HeroSection)
