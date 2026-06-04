import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '@components/common/SectionHeader/SectionHeader'
import { INDUSTRIES } from '@utils/constants'
import styles from './IndustriesSection.module.scss'

const IndustriesSection = () => {
  const [activeTab, setActiveTab] = useState(INDUSTRIES[0].id)
  const activeIndustry = INDUSTRIES.find((i) => i.id === activeTab)

  return (
    <section className={styles.industries}>
      <div className={styles.container}>
        <SectionHeader
          subtitle="Industries We Serve"
          title="Sector Expertise"
          description="Delivering precision-engineered solutions across diverse industrial sectors."
          align="center"
        />

        <div className={styles.tabs}>
          {INDUSTRIES.map((industry) => (
            <button
              key={industry.id}
              className={`${styles.tab} ${activeTab === industry.id ? styles.active : ''}`}
              onClick={() => setActiveTab(industry.id)}
            >
              {industry.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className={styles.content}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className={styles.imageWrapper}>
              <img
                src={activeIndustry.image}
                alt={activeIndustry.name}
                className={styles.image}
              />
              <div className={styles.imageOverlay}></div>
            </div>
            <div className={styles.textContent}>
              <h3 className={styles.title}>{activeIndustry.name}</h3>
              <p className={styles.description}>{activeIndustry.description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default React.memo(IndustriesSection)
