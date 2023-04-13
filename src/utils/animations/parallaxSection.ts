import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function parallaxSection(element: string, triggerElement: string) {
  const responsiveAnimation = gsap.matchMedia()
  responsiveAnimation.add('(min-width:1024px)', () => {
    gsap.fromTo(
      element,
      { yPercent: 0 },
      {
        ease: 'none',
        scrollTrigger: {
          scrub: true,
          trigger: triggerElement,
          invalidateOnRefresh: true,
        },
        yPercent: 100,
      }
    )
  })
}
