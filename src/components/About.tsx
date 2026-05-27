import { meta } from '../data'
import AnimateIn from './AnimateIn'

export default function About() {
  return (
    <section id="about" className="py-28 section-padding bg-base-100">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <AnimateIn delay={0}>
            <div className="font-mono tracking-widest text-xs uppercase mb-4">
              About Me
            </div>
          </AnimateIn>
          <AnimateIn delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-base-content mt-2 mb-6 leading-tight">
              Who am I?
            </h2>
          </AnimateIn>
          <AnimateIn delay={200}>
            <div className="space-y-4 text-base-content/60 leading-relaxed">
              {meta.bio.split('\n').map((line, i) => (
                <p key={i}>{line.trim()}</p>
              ))}
            </div>
          </AnimateIn>
          <AnimateIn delay={300}>
            <a href={meta.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-primary btn-sm mt-8 gap-2">
              Download Resume
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </a>
          </AnimateIn>
        </div>

        <AnimateIn direction="left" delay={150}>
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="avatar">
                <div className="w-56 md:w-72 rounded-2xl ring ring-primary/20 ring-offset-4 ring-offset-(--color-base-100)">
                <figure className="hover-gallery">
                  <img src={meta.avatar} alt={meta.name} />
                  <img src={meta.avatar2} alt={meta.name} />
                  <img src={meta.avatar3} alt={meta.name} />
                </figure>
                </div>
              </div>
              <span className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-primary/30 rounded-br-2xl pointer-events-none" />
              <span className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl pointer-events-none" />
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
