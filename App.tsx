
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Cpu, Zap, Lightbulb, BookOpen, Layers, ArrowRight, Github, Linkedin, Mail, MousePointer2 } from 'lucide-react';
import { SERVICES, STRENGTHS, EXPERIENCES } from './constants';
import ThreeDCard from './components/ThreeDCard';
import BackgroundEffect from './components/BackgroundEffect';

const App: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Bot": return <Bot className="w-8 h-8 text-cyan-400" />;
      case "Zap": return <Zap className="w-8 h-8 text-yellow-400" />;
      case "BookOpen": return <BookOpen className="w-8 h-8 text-purple-400" />;
      case "Layers": return <Layers className="w-8 h-8 text-pink-400" />;
      default: return <Cpu className="w-8 h-8 text-blue-400" />;
    }
  };

  return (
    <div className="min-h-screen relative text-slate-100 selection:bg-cyan-500/30">
      <BackgroundEffect />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center backdrop-blur-md bg-slate-950/20 border-b border-white/5">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-2xl font-orbitron font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
        >
          KITE
        </motion.div>
        <div className="hidden md:flex space-x-8 font-medium uppercase tracking-widest text-xs">
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
          <a href="#strengths" className="hover:text-cyan-400 transition-colors">Strengths</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-5 py-2 rounded-full bg-cyan-500 text-slate-950 text-xs font-bold font-orbitron hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)]"
        >
          LET'S CHAT
        </motion.button>
      </nav>

      <main className="container mx-auto px-6 pt-32 pb-24">
        
        {/* Hero Section */}
        <section id="hero" className="min-h-[80vh] flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-[10px] font-orbitron tracking-widest uppercase mb-6 inline-block">
              AI Transformation Consultant
            </span>
            <h1 className="text-6xl md:text-9xl font-orbitron font-black mb-6 leading-none">
              <span className="block glitch-text">KITE</span>
              <span className="block text-2xl md:text-4xl mt text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 TO-PINK-300 uppercase tracking-[0.2em]">Beyond Tech, Towards Dreams</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-light leading-relaxed mb-10">
              인공지능 교육 전문가 및 AI 트랜스포메이션 컨설턴트<br/>
              <span className="text-slate-300 font-medium">생성형 AI 활용법 교육, 업무 자동화 프로세스 설계, 기업 맞춤형 AI 도입 코칭</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(34,211,238,0.5)" }}
                className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-slate-950 font-bold font-orbitron transition-all"
              >
                VIEW SERVICES <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                className="px-8 py-4 rounded-xl border border-white/20 font-bold font-orbitron transition-all"
              >
                KNOW MORE
              </motion.button>
            </div>
          </motion.div>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-20 opacity-30"
          >
            <MousePointer2 className="w-6 h-6" />
          </motion.div>
        </section>

        {/* Experience Summary / About */}
        <section id="about" className="py-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <h2 className="text-sm font-orbitron tracking-[0.3em] text-cyan-500 uppercase mb-4">The Specialist</h2>
              <h3 className="text-4xl md:text-5xl font-orbitron font-bold mb-8">혁신을 현실로 만드는<br/>AI 실무 파트너</h3>
              <p className="text-slate-400 leading-relaxed mb-8 text-lg">
                단순히 기술을 가르치는 것을 넘어, 조직의 비즈니스 구조를 이해하고 가장 효율적인 AI 워크플로우를 설계합니다. 복잡한 알고리즘 이면의 가치를 실무 언어로 풀어내는 것이 저의 핵심 강점입니다.
              </p>
              <div className="space-y-6">
                {EXPERIENCES.map((exp) => (
                  <motion.div key={exp.id} variants={itemVariants} className="flex gap-4 p-4 rounded-xl border border-white/5 bg-white/5 hover:border-cyan-500/30 transition-all">
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-orbitron font-bold text-cyan-400 text-sm mb-1">{exp.role}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{exp.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 mix-blend-overlay group-hover:scale-110 transition-transform duration-700"></div>
              <img src="https://picsum.photos/800/800?grayscale" alt="AI Expert Dain" className="w-full h-full object-cover" />
              <div className="absolute bottom-6 left-6 right-6 p-6 backdrop-blur-xl bg-slate-950/60 border border-white/10 rounded-2xl">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-orbitron font-bold text-xl uppercase">Dain Profile</div>
                  <div className="text-[10px] text-cyan-400 uppercase tracking-widest font-orbitron animate-pulse">Scanning...</div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <div className="h-1 bg-cyan-500 rounded-full"></div>
                  <div className="h-1 bg-cyan-500 rounded-full"></div>
                  <div className="h-1 bg-white/20 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32">
          <div className="text-center mb-20">
            <h2 className="text-sm font-orbitron tracking-[0.3em] text-cyan-500 uppercase mb-4">Our Services</h2>
            <h3 className="text-4xl md:text-5xl font-orbitron font-bold">맞춤형 AI 솔루션</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <ThreeDCard key={service.id} className="h-full">
                <div className="h-full p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 hover:border-cyan-500/50 transition-colors group flex flex-col">
                  <div className="mb-6 p-3 rounded-xl bg-slate-800 w-fit group-hover:scale-110 transition-transform duration-500">
                    {getIcon(service.icon)}
                  </div>
                  <h4 className="text-xl font-orbitron font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">{service.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center text-[10px] font-orbitron tracking-widest text-cyan-500 uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    Detailed View <ArrowRight className="w-3 h-3 ml-2" />
                  </div>
                </div>
              </ThreeDCard>
            ))}
          </div>
        </section>

        {/* Strengths Section */}
        <section id="strengths" className="py-32 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.1)_0%,transparent_70%)] pointer-events-none"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-sm font-orbitron tracking-[0.3em] text-cyan-500 uppercase mb-4">Core Strengths</h2>
              <h3 className="text-4xl md:text-5xl font-orbitron font-bold mb-10 leading-tight">압도적인 전문성,<br/>결과로 증명합니다</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                  <div className="text-3xl font-orbitron font-black text-cyan-400 mb-1">500+</div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest">Graduates</div>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                  <div className="text-3xl font-orbitron font-black text-purple-400 mb-1">100%</div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest">Practicality</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {STRENGTHS.map((strength, idx) => (
                <motion.div 
                  key={strength.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-2xl border border-white/10 bg-slate-900/50 hover:bg-slate-800/80 transition-all flex items-start gap-6 group"
                >
                  <div className="w-12 h-12 shrink-0 rounded-full border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-orbitron font-bold">
                    0{strength.id}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors">{strength.label}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{strength.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[3rem] bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 p-12 md:p-24 text-center border border-white/10 shadow-2xl overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <h2 className="text-sm font-orbitron tracking-[0.4em] text-cyan-400 uppercase mb-6">Start Your Journey</h2>
              <h3 className="text-4xl md:text-7xl font-orbitron font-black mb-10 leading-tight">AI로 여는<br/>새로운 비즈니스 시대</h3>
              <p className="max-w-xl mx-auto text-slate-400 mb-12 text-lg">
                KITE와 함께라면 복잡한 인공지능이 가장 강력한 도구가 됩니다. 지금 바로 상담을 시작하세요.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <a href="mailto:contact@kite.ai" className="flex items-center gap-3 text-2xl font-orbitron font-bold hover:text-cyan-400 transition-colors">
                  <Mail className="w-6 h-6" /> contact@kite.ai
                </a>
                <div className="flex gap-4">
                  <motion.div whileHover={{ y: -5 }} className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:border-cyan-500/50">
                    <Linkedin className="w-5 h-5" />
                  </motion.div>
                  <motion.div whileHover={{ y: -5 }} className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:border-cyan-500/50">
                    <Github className="w-5 h-5" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 bg-slate-950/50">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-orbitron font-black text-xl tracking-tighter opacity-50">KITE</div>
          <p className="text-slate-500 text-xs tracking-widest uppercase">
            © 2026 KITE TRANSFORMATION. ALL SYSTEMS OPERATIONAL.
          </p>
          <div className="flex gap-8 text-[10px] font-orbitron tracking-widest uppercase text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
