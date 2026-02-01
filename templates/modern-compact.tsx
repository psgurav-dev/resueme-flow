import React from 'react';
import { motion } from 'motion/react';
import { PortfolioData } from './types';

interface ThemeProps {
  data: PortfolioData;
}

const ModernCompact: React.FC<ThemeProps> = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white text-slate-900 selection:bg-indigo-100 flex items-start justify-center py-8"
    >
      <div className="w-[600px] max-w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <header className="relative py-8 px-6 bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
          <motion.div
            className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-400 rounded-full filter blur-2xl opacity-40"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <div className="relative z-10">
            <h1 className="text-3xl font-extrabold tracking-tight mb-1">{data.fullName}</h1>
            <p className="text-sm text-indigo-100 font-light mb-2">{data.jobTitle}</p>
            <div className="flex flex-wrap gap-3 text-xs text-indigo-100">
              {data.email && <a href={`mailto:${data.email}`}>{data.email}</a>}
              {data.phone && <span>{data.phone}</span>}
            </div>
          </div>
        </header>

        <main className="p-6 space-y-6">
          <section>
            <h2 className="text-lg font-bold mb-2">About</h2>
            <p className="text-sm text-slate-600">{data.summary}</p>
          </section>

          <section>
            <h3 className="text-sm font-semibold mb-2">Experience</h3>
            <div className="space-y-3 text-sm text-slate-700">
              {data.experience.slice(0, 2).map((exp, idx) => (
                <div key={idx} className="pb-2 border-b last:border-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold">{exp.company}</div>
                      <div className="text-xs text-slate-500">{exp.role}</div>
                    </div>
                    <div className="text-xs text-slate-400">{exp.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-sm font-semibold mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {data.skills.flatMap(sg => sg.items).slice(0, 12).map((skill, i) => (
                <span key={i} className="text-xs px-2 py-1 bg-slate-100 rounded text-slate-700">{skill}</span>
              ))}
            </div>
          </section>
        </main>

        <footer className="px-6 py-4 bg-slate-50 text-xs text-slate-500 flex justify-between">
          <div>{data.location}</div>
          <div>© {new Date().getFullYear()}</div>
        </footer>
      </div>
    </motion.div>
  );
};

export default ModernCompact;
