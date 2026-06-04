import React from 'react'
import { motion } from 'framer-motion'
import { FaCogs, FaRuler, FaIndustry, FaCertificate, FaClock } from 'react-icons/fa'
import SectionHeader from '@components/common/SectionHeader/SectionHeader'
import { WHY_CHOOSE } from '@utils/constants'
import styles from './WhyChooseSection.module.scss'

const icons = [FaCogs, FaRuler, FaIndustry, FaCertificate, FaClock]

const WhyChooseSection = () => {
  return (
    <section className={styles.whyChoose}>
      <div className={styles.background}>
        <img src="/images/hero/hero-2.jpg" alt="Industrial background" className={styles.bgImage} />
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.container}>
        <SectionHeader
          subtitle="Why Choose Us"
          title="Built On Precision. Driven By Quality."
          description="Our commitment to excellence sets us apart in the industrial manufacturing landscape."
          align="center"
          light
        />

        <div className={styles.grid}>
          {WHY_CHOOSE.map((item, index) => {
            const Icon = icons[index % icons.length]
            return (
              <motion.div
                key={item.id}
                className={styles.card}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.iconWrapper}>
                  <Icon className={styles.icon} />
                </div>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default React.memo(WhyChooseSection)
