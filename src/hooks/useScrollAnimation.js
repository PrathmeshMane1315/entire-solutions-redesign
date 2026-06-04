import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const {
      from = { opacity: 0, y: 60 },
      to = { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
      start = 'top 85%',
      toggleActions = 'play none none reverse',
    } = options

    const animation = gsap.fromTo(element, from, {
      ...to,
      scrollTrigger: {
        trigger: element,
        start,
        toggleActions,
      },
    })

    return () => {
      animation.kill()
    }
  }, [options])

  return ref
}
