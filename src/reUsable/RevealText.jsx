import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

const RevealText = ({ text }) => {
  const textRef = useRef()

  useEffect(() => {
    const splitText = new SplitType(textRef.current, {
      types: 'words, chars',
    })

    gsap.fromTo(
      splitText.chars,
      { color: '#888888' }, // Initial color
      {
        color: '#000',
        ease: 'power2.out', // Smooth easing
        stagger: 0.75, // Slower & smoother
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: true,
        },
      }
    )

    return () => {
      splitText.revert()
    }
  }, [])

  return (
    <h2
      ref={textRef}
      className="text-3xl md:text-4xl lg:text-[52px] tracking-wide font-bold md:leading-[1.3]"
    >
      {text}
    </h2>
  )
}

export default RevealText
