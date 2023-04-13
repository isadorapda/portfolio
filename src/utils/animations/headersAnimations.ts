import { gsap } from 'gsap'

export function headersAnimations(
  element: string,
  triggerElement: string,
  tweenVars: {},
  scrollVars: {}
) {
  gsap.timeline({ defaults: { opacity: 0, duration: 1.5 } }).from(element, {
    ease: 'power2.in',
    ...tweenVars,
    scrollTrigger: {
      trigger: triggerElement,
      scrub: 1,
      ...scrollVars,
      invalidateOnRefresh: true,
      toggleActions: 'play none none reset',
    },
  })
}
