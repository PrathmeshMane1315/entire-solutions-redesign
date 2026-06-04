import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS, COMPANY_INFO, LOGO_URL } from '@utils/constants'
import { scrollToSection } from '@utils/helpers'
import styles from './Navbar.module.scss'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = useCallback((e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      scrollToSection(href.slice(1))
      setIsMobileMenuOpen(false)
    }
  }, [])

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.capsule}>
          <div className={styles.leftLinks}>
            {NAV_LINKS.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={styles.link}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link to="/" className={styles.logo}>
            <img src={LOGO_URL} alt="Entire Solutions" className={styles.logoImg} />
          </Link>

          <div className={styles.rightLinks}>
            {NAV_LINKS.slice(2).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={styles.link}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </Link>
            ))}
            <a href={`tel:${COMPANY_INFO.phone}`} className={styles.phoneBtn}>
              <FaPhone />
            </a>
          </div>

          <button
            className={styles.mobileToggle}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={styles.mobileLink}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </Link>
            ))}
            <a href={`tel:${COMPANY_INFO.phone}`} className={styles.mobilePhone}>
              <FaPhone />
              {COMPANY_INFO.phone}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default React.memo(Navbar)
