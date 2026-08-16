import React from 'react';
import { FaJava } from 'react-icons/fa';
import { TbBrandCSharp, TbBrandAws } from 'react-icons/tb';
import {
  SiTypescript,
  SiJavascript,
  SiAngular,
  SiIonic,
  SiReactivex,
  SiTailwindcss,
  SiSpringboot,
  SiMongodb,
  SiRedis,
  SiFirebase,
  SiApachekafka,
  SiRabbitmq,
  SiNodedotjs,
  SiDocker,
  SiGit,
  SiBitbucket,
  SiPostman,
  SiJira,
} from 'react-icons/si';
import { Database, Layers, Cpu, GitMerge, Search, Users } from 'lucide-react';

// Map each skill label to its icon component + brand hex color
const ICONS = {
  // Languages
  'Java':       { icon: FaJava,          color: '#f89820' },
  'TypeScript': { icon: SiTypescript,    color: '#3178c6' },
  'JavaScript': { icon: SiJavascript,    color: '#f7df1e' },
  'C#':         { icon: TbBrandCSharp,   color: '#9b4f96' },
  'SQL':        { icon: Database,        color: '#00758f' },

  // Frontend
  'Angular':         { icon: SiAngular,     color: '#dd0031' },
  'Ionic Framework': { icon: SiIonic,       color: '#3880ff' },
  'RxJS':            { icon: SiReactivex,   color: '#b7178c' },
  'Tailwind CSS':    { icon: SiTailwindcss, color: '#06b6d4' },

  // Backend & DB
  'Eclipse Vert.x (Reactive Java)': { icon: Cpu,           color: '#800020' },
  'Spring Boot':                    { icon: SiSpringboot,    color: '#6db33f' },
  'REST APIs & Microservices':     { icon: Layers,        color: '#a52a2a' },
  'MongoDB':                        { icon: SiMongodb,       color: '#47a248' },
  'Redis':                          { icon: SiRedis,         color: '#dc382d' },
  'Kafka':                          { icon: SiApachekafka,   color: '#231f20' },
  'RabbitMQ':                       { icon: SiRabbitmq,      color: '#ff6600' },
  'Node.js':                        { icon: SiNodedotjs,     color: '#339933' },

  // Cloud & DevOps
  'AWS EC2 & ECS':            { icon: TbBrandAws,   color: '#ff9900' },
  'AWS Lambda & API Gateway': { icon: TbBrandAws,   color: '#ff9900' },
  'AWS S3 / SES / Amplify':   { icon: TbBrandAws,   color: '#ff9900' },
  'Docker':                   { icon: SiDocker,     color: '#2496ed' },
  'CI/CD Pipelines':          { icon: GitMerge,     color: '#800020' },

  // Tools & Process
  'Git & Bitbucket': { icon: SiGit,      color: '#f05032' },
  'Postman':         { icon: SiPostman,  color: '#ff6c37' },
  'Agile / Scrum':   { icon: SiJira,     color: '#0052cc' },
  'Unit Testing':    { icon: Search,     color: '#800020' },
  'Code Reviews':    { icon: Users,      color: '#800020' },

  // Architecture
  'Database Schema Design':   { icon: Database,      color: '#800020' },
  'Event-Driven Systems':     { icon: SiApachekafka, color: '#231f20' },
  'Microservice Patterns':    { icon: Layers,        color: '#a52a2a' },
  'System Design & Analysis': { icon: Cpu,           color: '#800020' },
  'Stakeholder Discovery':    { icon: Users,         color: '#800020' },
};

const skillCategories = [
  {
    title: 'LANGUAGES',
    accent: '#800020',
    items: ['Java', 'TypeScript', 'JavaScript', 'C#', 'SQL'],
  },
  {
    title: 'FRONTEND',
    accent: '#BE5103',
    items: ['Angular', 'Ionic Framework', 'RxJS', 'Tailwind CSS'],
  },
  {
    title: 'BACKEND & DATABASES',
    accent: '#800020',
    items: [
      'Eclipse Vert.x (Reactive Java)',
      'Spring Boot',
      'REST APIs & Microservices',
      'MongoDB',
      'Redis',
      'Kafka',
      'RabbitMQ',
      'Node.js',
    ],
  },
  {
    title: 'CLOUD & DEVOPS',
    accent: '#BE5103',
    items: [
      'AWS EC2 & ECS',
      'AWS Lambda & API Gateway',
      'AWS S3 / SES / Amplify',
      'Docker',
      'CI/CD Pipelines',
    ],
  },
  {
    title: 'TOOLS & PROCESS',
    accent: '#A52A2A',
    items: ['Git & Bitbucket', 'Postman', 'Agile / Scrum', 'Unit Testing', 'Code Reviews'],
  },
  {
    title: 'ARCHITECTURE',
    accent: '#800020',
    items: [
      'Database Schema Design',
      'Event-Driven Systems',
      'Microservice Patterns',
      'System Design & Analysis',
      'Stakeholder Discovery',
    ],
  },
];

const SkillItem = ({ label }) => {
  const entry = ICONS[label];
  if (!entry) {
    return (
      <li className="flex items-center gap-3 py-1">
        <span className="w-5 h-5 rounded bg-slate-200 dark:bg-slate-800 shrink-0" />
        <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">{label}</span>
      </li>
    );
  }
  const IconComp = entry.icon;
  return (
    <li className="flex items-center gap-3 py-1 group/item">
      <span
        className="w-5 h-5 shrink-0 flex items-center justify-center transition-transform group-hover/item:scale-110"
        style={{ color: entry.color }}
      >
        <IconComp size={18} />
      </span>
      <span className="text-sm text-slate-700 dark:text-slate-300 font-medium group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">
        {label}
      </span>
    </li>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-maroon-600/10 text-maroon-700 dark:text-maroon-300 text-xs font-mono font-medium border border-maroon-500/20">
            <span>TECH STACK & TOOLING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white">
            Technologies & Stack
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base">
            Production-grade tools I use day-to-day — from reactive Java backends to cloud orchestration.
          </p>
        </div>

        {/* Card Grid matching santifer.io design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white/70 dark:bg-[#10121a]/80 backdrop-blur-sm p-6 hover:border-maroon-500/40 dark:hover:border-maroon-700/60 hover:shadow-lg dark:hover:shadow-black/40 transition-all duration-300"
            >
              {/* Category Label with left accent bar */}
              <div className="flex items-center gap-2 mb-5">
                <span
                  className="w-1 h-4 rounded-full shrink-0"
                  style={{ backgroundColor: cat.accent }}
                />
                <h3
                  className="text-xs font-mono font-bold tracking-widest uppercase"
                  style={{ color: cat.accent }}
                >
                  {cat.title}
                </h3>
              </div>

              {/* Item List with official brand icons */}
              <ul className="space-y-2">
                {cat.items.map((item, iIdx) => (
                  <SkillItem key={iIdx} label={item} />
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
