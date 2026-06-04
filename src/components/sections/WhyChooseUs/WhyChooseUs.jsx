import React from 'react'
import { motion } from 'framer-motion'
import styles from './WhyChooseUs.module.scss'

const FEATURES = [
  {
    id: 1,
    title: 'Sharp Laser Cutting',
    description: 'Advanced fiber laser technology for micron-level accuracy and smooth edges.',
  },
  {
    id: 2,
    title: 'Heavy-Duty Fabrication',
    description: 'Robust structural engineering built to withstand extreme industrial loads.',
  },
  {
    id: 3,
    title: 'Modern Infrastructure',
    description: 'State-of-the-art machinery paired with expert artisan precision.',
  },
  {
    id: 4,
    title: 'Cost-Efficient',
    description: 'Optimized production workflows to maximize value without compromising quality.',
  },
  {
    id: 5,
    title: 'Trusted Partner',
    description: 'Decades of proven excellence in renewable energy and industrial sectors.',
  },
]

const WhyChooseUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <img
          src="/images/services/2_Robotic_Welding_Process_Creates_Sparks.png"
          alt="Industrial background"
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.container}>
        <motion.span
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          WHY CHOOSE US
        </motion.span>

        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          BUILT ON PRECISION.<br />
          <span className={styles.highlight}>DRIVEN BY QUALITY.</span>
        </motion.h2>

        <div className={styles.grid}>
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.1 }}
            >
              <div className={styles.cardLine}></div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default React.memo(WhyChooseUs)
