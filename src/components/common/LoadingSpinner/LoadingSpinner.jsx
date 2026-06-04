import React, { useState, useEffect } from 'react'
import styles from './LoadingSpinner.module.scss'

const LoadingSpinner = ({ minimal = false }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (minimal) return
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 30)
    return () => clearInterval(interval)
  }, [minimal])

  if (minimal) {
    return (
      <div className={styles.minimalLoader}>
        <div className={styles.spinner}></div>
      </div>
    )
  }

  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loaderContent}>
        <div className={styles.logoWrapper}>
          <img
            src="https://entire-solutions.vercel.app/_next/image?url=%2Flogo.png&w=256&q=75"
            alt="Entire Solutions"
            className={styles.logo}
          />
        </div>
        <div className={styles.countWrapper}>
          <span className={styles.count}>{count}</span>
          <span className={styles.percent}>%</span>
        </div>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${count}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingSpinner
