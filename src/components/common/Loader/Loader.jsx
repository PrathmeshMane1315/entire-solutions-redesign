import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LOGO_URL } from '@utils/constants'
import styles from './Loader.module.scss'

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsExiting(true)
            setTimeout(onComplete, 800)
          }, 400)
          return 100
        }
        return prev + Math.random() * 15 + 5
      })
    }, 150)

    return () => clearInterval(interval)
  }, [onComplete])

  const displayProgress = Math.min(Math.round(progress), 100)

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className={styles.loader}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className={styles.content}>
            <div className={styles.logoWrapper}>
              <img src={LOGO_URL} alt="Entire Solutions" className={styles.logoImg} />
            </div>

            <div className={styles.progressContainer}>
              <div className={styles.progressBar}>
                <motion.div
                  className={styles.progressFill}
                  style={{ width: `${displayProgress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className={styles.progressInfo}>
                <span className={styles.progressLabel}>Loading</span>
                <span className={styles.progressValue}>{displayProgress}%</span>
              </div>
            </div>

            <div className={styles.tagline}>
              <span>Precision Fabrication</span>
              <span className={styles.dot}></span>
              <span>Reliable Solutions</span>
            </div>
          </div>

          <div className={styles.background}>
            <div className={styles.grid}></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default React.memo(Loader)
