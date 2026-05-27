import { projects } from '../data'
import AnimateIn from './AnimateIn'

export default function Projects() {
  return (
    <section id="projects" className="py-28 section-padding bg-base-100">
      <div className="max-w-5xl mx-auto">
        <AnimateIn delay={0}>
          <div className=" font-mono tracking-widest text-xs uppercase mb-4">
            Projects
          </div>
        </AnimateIn>
        <AnimateIn delay={100}>
          <h2 className="text-3xl md:text-4xl font-bold text-base-content mt-2 mb-12 leading-tight">
            Projects
          </h2>
        </AnimateIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <AnimateIn key={project.title} delay={i * 100 + 150}>
              <div className="card bg-base-200 border border-base-300 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="card-body">
                  <div className="flex items-start justify-between mb-2">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                    </svg>
                    <div className="flex gap-2">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                          className="btn btn-ghost btn-xs btn-circle text-base-content/40 hover:text-base-content" aria-label="GitHub">
                          <GitHubIcon />
                        </a>
                      )}
            
                    </div>
                  </div>
                  <h3 className="card-title text-base-content hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-base-content/60 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="card-actions mt-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="badge badge-primary badge-outline text-xs font-mono">
                        {tag}
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

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}
