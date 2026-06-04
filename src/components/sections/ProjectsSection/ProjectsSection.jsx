import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa'
import SectionHeader from '@components/common/SectionHeader/SectionHeader'
import { PROJECTS } from '@utils/constants'
import styles from './ProjectsSection.module.scss'

const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const next = () => setActiveIndex((prev) => (prev + 1) % PROJECTS.length)
  const prev = () => setActiveIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length)

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <SectionHeader
            subtitle="Our Work"
            title="Completed Projects"
            align="left"
          />
          <div className={styles.navButtons}>
            <button onClick={prev} className={styles.navBtn} aria-label="Previous">
              <FaArrowLeft />
            </button>
            <button onClick={next} className={styles.navBtn} aria-label="Next">
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className={styles.slider}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className={styles.project}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={PROJECTS[activeIndex].image}
                  alt={PROJECTS[activeIndex].title}
                  className={styles.image}
                />
                <div className={styles.overlay}></div>
              </div>
              <div className={styles.content}>
                <span className={styles.category}>{PROJECTS[activeIndex].category}</span>
                <h3 className={styles.title}>{PROJECTS[activeIndex].title}</h3>
                <button className={styles.link}>
                  View Details <FaExternalLinkAlt />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className={styles.indicators}>
            {PROJECTS.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === activeIndex ? styles.active : ''}`}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(ProjectsSection)
