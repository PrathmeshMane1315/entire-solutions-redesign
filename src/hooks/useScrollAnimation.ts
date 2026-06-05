import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimation(
  animationType: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale' = 'fadeUp',
  delay: number = 0,
  duration: number = 1
) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const animations = {
      fadeUp: { y: 60, opacity: 0 },
      fadeIn: { opacity: 0 },
      slideLeft: { x: -100, opacity: 0 },
      slideRight: { x: 100, opacity: 0 },
      scale: { scale: 0.8, opacity: 0 },
    }

    const initialState = animations[animationType]

    gsap.set(element, initialState)

    const animation = gsap.to(element, {
      y: 0,
      x: 0,
      scale: 1,
      opacity: 1,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })

    return () => {
      animation.kill()
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === element) st.kill()
      })
    }
  }, [animationType, delay, duration])

  return ref
}
