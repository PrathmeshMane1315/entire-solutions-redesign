import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaTwitter, FaFacebook, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa'
import { COMPANY_INFO, NAV_LINKS, LOGO_URL } from '@utils/constants'
import styles from './Footer.module.scss'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <img src={LOGO_URL} alt="Entire Solutions" className={styles.logoImg} />
            </div>
            <p className={styles.description}>
              Premium light and heavy engineering fabrication solutions tailored comprehensively for high-performance industrial and commercial environments.
            </p>
            <div className={styles.social}>
              <a href={COMPANY_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href={COMPANY_INFO.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href={COMPANY_INFO.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
            </div>
          </div>

          <div className={styles.links}>
            <h4>Quick Links</h4>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link to={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.services}>
            <h4>Services</h4>
            <ul>
              <li><Link to="#services">Laser Cutting</Link></li>
              <li><Link to="#services">Heavy Fabrication</Link></li>
              <li><Link to="#services">Powder Coating</Link></li>
              <li><Link to="#services">Electrical Panels</Link></li>
              <li><Link to="#services">Sheet Metal Bending</Link></li>
              <li><Link to="#services">Welding & Assembly</Link></li>
            </ul>
          </div>

          <div className={styles.contact}>
            <h4>Contact Us</h4>
            <ul>
              <li>
                <FaPhone />
                <span>{COMPANY_INFO.phone}</span>
              </li>
              <li>
                <FaEnvelope />
                <span>{COMPANY_INFO.email}</span>
              </li>
              <li>
                <FaMapMarkerAlt />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className={styles.gst}>
                <span>GST: {COMPANY_INFO.gst}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {currentYear} Entire Solutions. All rights reserved.</p>
          <p className={styles.developer}>Developed by Qiro Tech Innovation</p>
          <button className={styles.scrollTop} onClick={scrollToTop} aria-label="Scroll to top">
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default React.memo(Footer)
