import { useRef } from 'react'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'
import AnimatedLetter from './AnimatedLetter'

const bodyText = "Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals."

export default function About() {
  const textRef = useRef<HTMLParagraphElement>(null)

  const headingSegments = [
    { text: 'I am Marcus Chen,', className: 'font-normal' },
    { text: 'a self-taught director.', className: 'italic font-serif' },
    { text: 'I have skills in color grading, visual effects, and narrative design.', className: 'font-normal' },
  ]

  return (
    <section className="bg-black py-20 md:py-32 px-4 md:px-6">
      <div className="bg-[#101010] rounded-2xl md:rounded-[2rem] max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 text-center">
        {/* Small label */}
        <p className="text-primary text-[10px] sm:text-xs mb-8 tracking-widest uppercase">
          Visual arts
        </p>

        {/* Multi-style heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] mb-10">
          <WordsPullUpMultiStyle segments={headingSegments} />
        </h2>

        {/* Scroll-linked paragraph */}
        <p
          ref={textRef}
          className="text-[#DEDBC8] text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
        >
          {bodyText.split('').map((char, i) => (
            <AnimatedLetter
              key={i}
              char={char}
              index={i}
              totalChars={bodyText.length}
              targetRef={textRef}
            />
          ))}
        </p>
      </div>
    </section>
  )
}
