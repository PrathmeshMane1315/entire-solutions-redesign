import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import SectionHeader from '@components/common/SectionHeader/SectionHeader'
import { SERVICES } from '@utils/constants'
import styles from './ServicesSection.module.scss'

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      className={`${styles.card} ${styles[service.size]}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className={styles.imageWrapper}>
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className={styles.image}
        />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{service.title}</h3>
        <p className={styles.description}>{service.description}</p>
        <button className={styles.link}>
          Learn More <FaArrowRight />
        </button>
      </div>
    </motion.div>
  )
}

const ServicesSection = () => {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <SectionHeader
          subtitle="Our Services"
          title="Precision Systems & Custom Engineering"
          description="Comprehensive manufacturing solutions from design to delivery, tailored to your exact specifications."
        />

        <div className={styles.bentoGrid}>
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default React.memo(ServicesSection)
