import { experience } from '../data'
import AnimateIn from './AnimateIn'

export default function Experience() {
  return (
    <section id="experience" className="py-28 section-padding bg-base-200">
      <div className="max-w-3xl mx-auto">
        <AnimateIn delay={0}>
          <div className="font-mono tracking-widest text-xs uppercase mb-4">
            Experience
          </div>
        </AnimateIn>
        <AnimateIn delay={100}>
          <h2 className="text-3xl md:text-4xl font-bold text-base-content mt-2 mb-12 leading-tight">
            Work Experience
          </h2>
        </AnimateIn>

        <div className="flex flex-col gap-5">
          {experience.map((job, i) => (
            <AnimateIn key={i} delay={i * 120 + 150}>
              <div className="card bg-base-100 border border-base-300 hover:border-primary/40 hover:shadow-lg transition-all duration-300">
                <div className="card-body">
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div className="flex items-center gap-4">
    
                      <div>
                        <h3 className="card-title text-base-content text-lg leading-tight">
                          {job.role}
                        </h3>
                        <span className="text-primary font-mono text-sm">{job.company}</span>
                      </div>
                    </div>
                    <span className="badge badge-ghost font-mono text-xs self-start sm:self-auto whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>

                  <div className="divider my-0" />

                  {/* Bullets */}
                  <ul className="space-y-2 mt-2">
                    {job.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 text-base-content/60 text-sm leading-relaxed">
                        <span className="text-primary mt-0.5 shrink-0">▹</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
