import { skills } from '../data'
import AnimateIn from './AnimateIn'

export default function Skills() {
  return (
    <section id="skills" className="py-28 section-padding bg-base-200">
      <div className="max-w-4xl mx-auto">
        <AnimateIn delay={0}>
          <div className="font-mono tracking-widest text-xs uppercase mb-4">
            Skills
          </div>
        </AnimateIn>
        <AnimateIn delay={100}>
          <h2 className="text-3xl md:text-4xl font-bold text-base-content mt-2 mb-12 leading-tight">
            Technical Skills
          </h2>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-5">
          {skills.map((group, i) => (
            <AnimateIn key={group.category} delay={i * 100 + 150}>
              <div className="card bg-base-100 border border-base-300 hover:border-primary/30 transition-colors duration-300 h-full">
                <div className="card-body gap-4">
                  <h3 className="card-title font-mono text-primary text-xs tracking-widest uppercase">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="gap-1.5">
                        <span className="w-1 h-1 rounded-full " />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
