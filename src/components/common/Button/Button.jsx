import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  icon: Icon,
}) => {
  const classes = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`

  const content = (
    <>
      {Icon && <Icon className={styles.icon} />}
      <span>{children}</span>
    </>
  )

  if (href) {
    return (
      <Link to={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  )
}

export default React.memo(Button)
