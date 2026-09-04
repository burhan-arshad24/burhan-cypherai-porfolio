import React from 'react';

import inventoryImage from '../assets/project_images/inventory-saas.png';
import multiplayerImage from '../assets/project_images/multiplayer-game.png';
import debugOrDieImage from '../assets/project_images/debug-or-die.png';
import spamClassifierImage from '../assets/project_images/sms-spam.png';
import bikeDemandImage from '../assets/project_images/bike-demand.png';
import pearlEssenceImage from '../assets/project_images/pearl-essence-interiors.png';
import kadmeImage from '../assets/project_images/kadme.png';

const projects = [
  {
    name: 'INVENTORY SAAS',
    title: (
      <>
        INVENTORY{' '}
        <span className="font-light italic text-purple-300 lowercase font-serif">
          saas
        </span>
        <br />
        MANAGEMENT SYSTEM
      </>
    ),
    description:
      'A cloud-based multi-tenant inventory management system designed for SaaS environments. The system focuses on tenant isolation, database architecture, inventory management, purchase workflows, and real-time data synchronization.',
    image: inventoryImage,
    liveDemo: 'https://inventory-saas-eight.vercel.app/',
    github: 'https://github.com/burhan-arshad24/inventory-saas',
  },

  {
    name: 'MULTIPLAYER STEALTH-COMEDY GAME',
    title: (
      <>
        MULTIPLAYER{' '}
        <span className="font-light italic text-purple-300 lowercase font-serif">
          stealth
        </span>
        <br />
        COMEDY GAME
      </>
    ),
    description:
      'A multiplayer stealth-comedy burglary game built with Unity, focused on networked gameplay, cooperative mechanics, player interaction, environmental systems, AI behavior, and reliable multiplayer synchronization.',
    image: multiplayerImage,
    liveDemo: null,
    github:
      'https://github.com/burhan-arshad24/Unity-Multiplayer-Burglary-Game',
  },

  {
    name: 'DEBUG OR DIE',
    title: (
      <>
        DEBUG{' '}
        <span className="font-light italic text-purple-300 lowercase font-serif">
          or
        </span>
        <br />
        DIE
      </>
    ),
    description:
      'A horror game project exploring atmosphere, pacing, interactive environments, gameplay systems, and interactive storytelling through a dark and immersive experience.',
    image: debugOrDieImage,
    liveDemo: null,
    github: 'https://github.com/burhan-arshad24/debug-or-die',
  },

  {
    name: 'SMS SPAM CLASSIFIER',
    title: (
      <>
        SMS{' '}
        <span className="font-light italic text-purple-300 lowercase font-serif">
          spam
        </span>
        <br />
        CLASSIFIER
      </>
    ),
    description:
      'An NLP machine learning application that classifies SMS messages as Spam or Ham using TF-IDF and Linear SVM. The project includes GridSearchCV optimization and a real-time Streamlit prediction interface.',
    image: spamClassifierImage,
    liveDemo: 'https://nlp-spam-detection-burhan.streamlit.app/',
    github: 'https://github.com/burhan-arshad24/nlp-spam-detection',
  },

  {
    name: 'BIKE DEMAND PREDICTION',
    title: (
      <>
        BIKE DEMAND{' '}
        <span className="font-light italic text-purple-300 lowercase font-serif">
          prediction
        </span>
        <br />
        MACHINE LEARNING
      </>
    ),
    description:
      'A machine learning regression project that predicts bike rental demand using environmental and temporal features. The project includes datetime feature engineering, model comparison, Random Forest optimization, and a Streamlit interface.',
    image: bikeDemandImage,
    liveDemo: 'https://bike-demand-prediction-burhan.streamlit.app/',
    github: 'https://github.com/burhan-arshad24/bike-demand-prediction',
  },

  {
    name: 'PEARLESSENCEINTERIORS',
    title: (
      <>
        PEARL{' '}
        <span className="font-light italic text-purple-300 lowercase font-serif">
          essence
        </span>
        <br />
        INTERIORS
      </>
    ),
    description:
      'A professional WordPress website developed for a UAE-based interior design and fit-out business. The website presents the brand, interior design services, project capabilities, and consultation experience through a polished digital presence focused on luxury, functionality, and visual presentation.',
    image: pearlEssenceImage,
    liveDemo: 'https://pearlessenceinteriors.com/',
    github: null,
    specialType: 'wordpress',
  },

  {
    name: 'KADME',
    title: (
      <>
        KADME{' '}
        <span className="font-light italic text-purple-300 lowercase font-serif">
          footwear
        </span>
        <br />
        SHOPIFY STORE
      </>
    ),
    description:
      'A Shopify eCommerce store developed for a Pakistani shoe brand. The project focuses on product presentation, collection organization, responsive shopping experience, conversion-focused layouts, and a clean brand identity for online footwear sales.',
    image: kadmeImage,
    liveDemo: 'https://kadme.store/',
    github: null,
    specialType: 'shopify',
  },
];

const Project = ({ onCtaClick }) => {
  return (
    <section
      id="project"
      className="relative w-full bg-[#070711] text-white overflow-hidden"
    >
      <div className="px-6 md:px-10 lg:px-16 pt-24 md:pt-32 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-purple-500" />

            <span className="font-mono text-xs tracking-[0.3em] text-purple-400">
              SYS.04 // PROJECTS
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9]">
            SELECTED
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-purple-600">
              PROJECTS.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-sm md:text-base text-gray-400 leading-relaxed">
            A selection of software, machine learning, NLP, database,
            multiplayer, game development, WordPress, and eCommerce projects
            built through hands-on experimentation and continuous learning.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-10 lg:px-16 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto space-y-24 md:space-y-32">

          {projects.map((proj, index) => {
            const isSpecial = proj.specialType;

            if (isSpecial === 'wordpress') {
              return (
                <article
                  key={proj.name}
                  className="group relative overflow-hidden rounded-[2rem] border border-purple-500/20 bg-[#0b0b18] shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-transparent to-fuchsia-950/20 pointer-events-none" />

                  <div className="relative grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">

                    {/* Website Preview */}
                    <div className="lg:col-span-7 p-5 sm:p-6 md:p-8 lg:p-10 flex items-center">
                      <div className="relative w-full rounded-[1.5rem] border border-purple-400/25 bg-[#08080f] p-2 sm:p-3 shadow-[0_25px_70px_rgba(0,0,0,0.65)] transition-all duration-500 group-hover:border-purple-400/50 group-hover:shadow-[0_30px_90px_rgba(139,92,246,0.2)]">

                        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black">

                          {/* Browser Bar */}
                          <div className="relative z-20 h-9 sm:h-10 bg-black/90 backdrop-blur-md border-b border-white/10 flex items-center px-3 sm:px-4 gap-1.5 sm:gap-2">

                            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-red-400/60" />
                            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-yellow-400/60" />
                            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-green-400/60" />

                            <div className="ml-2 sm:ml-4 flex-1 h-5 sm:h-6 rounded-md bg-white/5 border border-white/10 flex items-center px-2 sm:px-3 overflow-hidden">
                              <span className="text-[7px] sm:text-[8px] font-mono text-white/30 truncate">
                                pearlessenceinteriors.com
                              </span>
                            </div>
                          </div>

                          {/* Website Image */}
                          <div className="relative w-full bg-[#050509]">
                            <img
                              src={proj.image}
                              alt={proj.name}
                              className="block w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.015]"
                            />

                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-950/15 via-transparent to-fuchsia-500/10 pointer-events-none" />
                          </div>

                        </div>

                        {/* Outer Frame */}
                        <div className="absolute inset-0 rounded-[1.5rem] border border-white/5 pointer-events-none" />
                        <div className="absolute -inset-[1px] rounded-[1.6rem] border border-purple-500/10 pointer-events-none" />

                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-5 relative p-8 md:p-10 lg:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10">

                      <div className="flex items-center gap-3 mb-6">
                        <span className="font-mono text-xs text-purple-400">
                          06
                        </span>

                        <div className="h-px w-8 bg-purple-500/50" />

                        <span className="font-mono text-[10px] tracking-[0.2em] text-gray-500">
                          CLIENT WEBSITE
                        </span>
                      </div>

                      <h3 className="text-4xl md:text-5xl font-black uppercase leading-[0.9] tracking-tight">
                        {proj.title}
                      </h3>

                      <p className="mt-7 text-sm md:text-base text-gray-400 leading-relaxed">
                        {proj.description}
                      </p>

                      <div className="mt-8 flex flex-wrap gap-3">

                        <a
                          href={proj.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold transition-all duration-300 shadow-[0_0_25px_rgba(139,92,246,0.2)]"
                        >
                          Visit Website
                        </a>

                        <span className="inline-flex items-center px-5 py-3 rounded-full border border-white/10 text-xs font-mono text-white/40">
                          WORDPRESS
                        </span>

                      </div>
                    </div>

                  </div>
                </article>
              );
            }

            if (isSpecial === 'shopify') {
              return (
                <article
                  key={proj.name}
                  className="group relative overflow-hidden rounded-[2rem] border border-pink-500/20 bg-[#0b0b18] shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-950/25 via-transparent to-purple-950/30 pointer-events-none" />

                  <div className="relative grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">

                    {/* Content */}
                    <div className="lg:col-span-5 lg:order-1 relative p-8 md:p-10 lg:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">

                      <div className="flex items-center gap-3 mb-6">
                        <span className="font-mono text-xs text-pink-400">
                          07
                        </span>

                        <div className="h-px w-8 bg-pink-500/50" />

                        <span className="font-mono text-[10px] tracking-[0.2em] text-gray-500">
                          eCOMMERCE PROJECT
                        </span>
                      </div>

                      <h3 className="text-4xl md:text-5xl font-black uppercase leading-[0.9] tracking-tight">
                        {proj.title}
                      </h3>

                      <p className="mt-7 text-sm md:text-base text-gray-400 leading-relaxed">
                        {proj.description}
                      </p>

                      <div className="mt-8 flex flex-wrap gap-3">

                        <a
                          href={proj.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 rounded-full bg-pink-600 hover:bg-pink-500 text-white text-sm font-semibold transition-all duration-300 shadow-[0_0_25px_rgba(236,72,153,0.2)]"
                        >
                          Visit Store
                        </a>

                        <span className="inline-flex items-center px-5 py-3 rounded-full border border-white/10 text-xs font-mono text-white/40">
                          SHOPIFY
                        </span>

                      </div>
                    </div>

                    {/* Store Preview */}
                    <div className="lg:col-span-7 lg:order-2 p-5 sm:p-6 md:p-8 lg:p-10 flex items-center">
                      <div className="relative w-full rounded-[1.5rem] border border-pink-400/25 bg-[#08080f] p-2 sm:p-3 shadow-[0_25px_70px_rgba(0,0,0,0.65)] transition-all duration-500 group-hover:border-pink-400/50 group-hover:shadow-[0_30px_90px_rgba(236,72,153,0.18)]">

                        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black">

                          {/* Browser Bar */}
                          <div className="relative z-20 h-9 sm:h-10 bg-black/90 backdrop-blur-md border-b border-white/10 flex items-center px-3 sm:px-4 gap-1.5 sm:gap-2">

                            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-red-400/60" />
                            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-yellow-400/60" />
                            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-green-400/60" />

                            <div className="ml-2 sm:ml-4 flex-1 h-5 sm:h-6 rounded-md bg-white/5 border border-white/10 flex items-center px-2 sm:px-3 overflow-hidden">
                              <span className="text-[7px] sm:text-[8px] font-mono text-white/30 truncate">
                                kadme.store
                              </span>
                            </div>
                          </div>

                          {/* Store Image */}
                          <div className="relative w-full bg-[#050509]">
                            <img
                              src={proj.image}
                              alt={proj.name}
                              className="block w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.015]"
                            />

                            <div className="absolute inset-0 bg-gradient-to-tr from-pink-950/15 via-transparent to-purple-500/10 pointer-events-none" />
                          </div>

                        </div>

                        {/* Outer Frame */}
                        <div className="absolute inset-0 rounded-[1.5rem] border border-white/5 pointer-events-none" />
                        <div className="absolute -inset-[1px] rounded-[1.6rem] border border-pink-500/10 pointer-events-none" />

                      </div>
                    </div>

                  </div>
                </article>
              );
            }

            const isReversed = index % 2 !== 0;

            return (
              <article
                key={proj.name}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                <div
                  className={`${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-purple-500/20 bg-[#101021] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-950/30 via-transparent to-pink-950/20 z-10 pointer-events-none" />

                    <img
                      src={proj.image}
                      alt={proj.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />

                    <div className="absolute inset-0 bg-purple-600/5 group-hover:bg-transparent transition-colors duration-500" />

                    <div className="absolute top-5 left-5 z-20">
                      <span className="font-mono text-[10px] tracking-[0.25em] text-white/60 bg-black/40 backdrop-blur-md px-3 py-2 rounded-full border border-white/10">
                        PROJECT_{String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                  </div>
                </div>

                <div
                  className={`${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-5">

                    <span className="font-mono text-xs text-purple-400">
                      0{index + 1}
                    </span>

                    <div className="h-px w-8 bg-purple-500/50" />

                    <span className="font-mono text-[10px] tracking-[0.2em] text-gray-500">
                      CASE STUDY
                    </span>

                  </div>

                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.9] tracking-tight">
                    {proj.title}
                  </h3>

                  <p className="mt-7 text-sm md:text-base text-gray-400 leading-relaxed max-w-xl">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-4 mt-8">

                    {proj.liveDemo && (
                      <a
                        href={proj.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold transition-all duration-300 shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:shadow-[0_0_35px_rgba(139,92,246,0.35)]"
                      >
                        Live Demo
                      </a>
                    )}

                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-purple-500/40 hover:border-purple-400 hover:bg-purple-500/10 text-white text-sm font-semibold transition-all duration-300"
                      >
                        GitHub
                      </a>
                    )}

                  </div>
                </div>
              </article>
            );
          })}

        </div>

        <div className="max-w-7xl mx-auto mt-24 md:mt-32 flex justify-center">
  <a
    href="https://github.com/burhan-arshad24/"
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex items-center gap-4 px-8 py-4 rounded-full border border-purple-500/40 hover:border-purple-400 bg-purple-500/5 hover:bg-purple-500/10 transition-all duration-300"
  >
    <span className="font-mono text-xs tracking-[0.2em] text-purple-300">
      VIEW MORE PROJECTS
    </span>

    <span className="text-purple-400 group-hover:translate-x-1 transition-transform duration-300">
      →
    </span>
  </a>
</div>
      </div>
    </section>
  );
};

export default Project;