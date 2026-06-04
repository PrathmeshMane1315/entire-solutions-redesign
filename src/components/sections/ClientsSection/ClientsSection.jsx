import React from 'react'
import { motion } from 'framer-motion'
import { CLIENTS } from '@utils/constants'
import styles from './ClientsSection.module.scss'

const ClientsSection = () => {
  const doubledClients = [...CLIENTS, ...CLIENTS]

  return (
    <section className={styles.clients}>
      <div className={styles.container}>
        <motion.p
          className={styles.label}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Trusted by Industry Leaders
        </motion.p>
        <div className={styles.marquee}>
          <div className={styles.track}>
            {doubledClients.map((client, index) => (
              <div key={index} className={styles.client}>
                <span>{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(ClientsSection)
