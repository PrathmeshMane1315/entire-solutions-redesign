import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaWhatsapp } from 'react-icons/fa'
import { COMPANY_INFO } from '@utils/constants'
import styles from './ContactSection.module.scss'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! We will contact you soon.')
  }

  const phoneNumber = COMPANY_INFO.phone.replace(/[^0-9]/g, '')

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.background}>
        <img src="/images/contact-bg.jpg" alt="Industrial background" className={styles.bgImage} />
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.info}>
            <motion.span
              className={styles.subtitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Get In Touch
            </motion.span>
            <motion.h2
              className={styles.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Let&apos;s Build Something Great Together
            </motion.h2>

            <div className={styles.details}>
              <div className={styles.detailItem}>
                <FaMapMarkerAlt className={styles.icon} />
                <div>
                  <span className={styles.label}>Address</span>
                  <span className={styles.value}>{COMPANY_INFO.address}</span>
                </div>
              </div>
              <div className={styles.detailItem}>
                <FaPhone className={styles.icon} />
                <div>
                  <span className={styles.label}>Phone</span>
                  <span className={styles.value}>{COMPANY_INFO.phone}</span>
                </div>
              </div>
              <div className={styles.detailItem}>
                <FaEnvelope className={styles.icon} />
                <div>
                  <span className={styles.label}>Email</span>
                  <span className={styles.value}>{COMPANY_INFO.email}</span>
                </div>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.gstLabel}>GST</span>
                <span className={styles.gstValue}>{COMPANY_INFO.gst}</span>
              </div>
            </div>
          </div>

          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={styles.formTitle}>Send Us a Message</h3>
            <div className={styles.formGrid}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="message"
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
            />
            <button type="submit" className={styles.submitBtn}>
              <FaPaperPlane /> Initialize Request
            </button>
          </motion.form>
        </div>
      </div>

      <a
        href={`https://wa.me/${phoneNumber}`}
        className={styles.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </section>
  )
}

export default React.memo(ContactSection)
