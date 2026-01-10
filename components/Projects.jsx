"use client";

const projects = [
  {
    name: "E-Commerce Platform",
    status: "Active",
    statusColor: "emerald",
    description: "Full-stack marketplace with payment integration and real-time inventory.",
    icon: "🛍️"
  },
  {
    name: "AI Content Generator",
    status: "In Development",
    statusColor: "blue",
    description: "Smart writing assistant powered by advanced language models.",
    icon: "✨"
  },
  {
    name: "Analytics Dashboard",
    status: "Completed",
    statusColor: "purple",
    description: "Real-time data visualization for business intelligence.",
    icon: "📊"
  }
];

export default function Projects() {
  return (
    <section className="mb-24 transition-all duration-1000 delay-400 opacity-0 animate-fadeInUp">
      <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-6">Projects</h2>
      <p className="text-slate-400 mb-8">These are my personal projects, both past and ongoing:</p>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{project.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                      {project.name}
                    </h3>
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mt-1
                      ${project.statusColor === 'emerald' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : ''}
                      ${project.statusColor === 'blue' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : ''}
                      ${project.statusColor === 'purple' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' : ''}
                    `}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
