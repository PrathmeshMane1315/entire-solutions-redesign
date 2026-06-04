import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '@components/common/SectionHeader/SectionHeader'
import { PARTNERS } from '@utils/constants'
import styles from './PartnersSection.module.scss'

const PartnersSection = () => {
  return (
    <section className={styles.partners}>
      <div className={styles.container}>
        <SectionHeader
          subtitle="Our Network"
          title="Strategic Networks"
          align="center"
          light
        />

        <div className={styles.grid}>
          {PARTNERS.map((partner, index) => (
            <motion.div
              key={partner.name}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.logoPlaceholder}>
                <span>{partner.name[0]}</span>
              </div>
              <h3 className={styles.name}>{partner.name}</h3>
              <p className={styles.subtitle}>{partner.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default React.memo(PartnersSection)
