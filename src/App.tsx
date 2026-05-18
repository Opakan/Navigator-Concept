/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, 
  X, 
  ArrowRight, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Cpu, 
  Construction, 
  Truck, 
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Send,
  Linkedin,
  Twitter,
  Instagram
} from "lucide-react";

// Using the exact paths from generation
const IMAGES = {
  hero: "/images/hero_epc_env_v2_1779110741617.png",
  engineering: "/images/engineering_blueprint_1779110672750.png",
  construction: "/images/construction_site_1779110687771.png",
  procurement: "/images/procurement_logistics_1779110705594.png",
  projectManagement: "/images/project_management_hub_1779110721034.png",
  projectShowcase: "/images/project_showcase_1_1779110760181.png"
};

const NAV_LINKS = ["Home", "Services", "Projects", "About", "Contact"];

const SERVICES = [
  {
    title: "Engineering Services",
    icon: <Cpu className="w-8 h-8" />,
    image: IMAGES.engineering,
    description: "Digital blueprints and structural systems engineered with precision modeling and simulation.",
    tags: ["Structural Analysis", "3D Modeling", "System Design"],
  },
  {
    title: "Construction",
    icon: <Construction className="w-8 h-8" />,
    image: IMAGES.construction,
    description: "Active project delivery with advanced steel assembly and heavy-duty industrial construction.",
    tags: ["Civil Works", "Steel Structures", "Site Prep"],
  },
  {
    title: "Procurement",
    icon: <Truck className="w-8 h-8" />,
    image: IMAGES.procurement,
    description: "Optimized logistics and industrial supply chain management for global project scaling.",
    tags: ["Supply Chain", "Logistics", "Material Sourcing"],
  },
  {
    title: "Project Management",
    icon: <BarChart3 className="w-8 h-8" />,
    image: IMAGES.projectManagement,
    description: "Futuristic control hubs and real-time dashboards for seamless execution oversight.",
    tags: ["Planning", "Risk Analysis", "Execution Control"],
  },
];

const PROJECTS = [
  {
    title: "Lagos Industrial Park Phase I",
    category: "Infrastructure",
    description: "A large-scale industrial zone development featuring advanced energy grids and logistics hubs.",
    image: IMAGES.projectShowcase,
  },
  {
    title: "MHE Central Pipeline Grid",
    category: "Energy",
    description: "Nationwide energy distribution network with real-time monitoring and smart pressure regulation.",
    image: IMAGES.hero, // Reusing hero for pipeline vibe
  }
];

const HERO_STEPS = [
  { image: IMAGES.engineering, label: "01. Engineering", sub: "Digital Blueprinting" },
  { image: IMAGES.construction, label: "02. Construction", sub: "Structural Execution" },
  { image: IMAGES.projectShowcase, label: "03. Reality", sub: "Operational Excellence" },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroStep, setHeroStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    
    const interval = setInterval(() => {
      setHeroStep((prev) => (prev + 1) % HERO_STEPS.length);
    }, 5000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-navy-950">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? "bg-navy-950/90 backdrop-blur-2xl border-b border-white/5 py-3" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-electric-blue to-accent-blue rounded-lg flex items-center justify-center font-bold text-white text-xl shadow-[0_0_15px_rgba(59,130,246,0.5)]">N</div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-tighter text-white uppercase leading-none">Navigator</span>
              <span className="text-[10px] font-mono text-electric-blue tracking-[0.3em] uppercase leading-none mt-1">Concept Ltd</span>
            </div>
          </motion.div>

          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link, i) => (
              <motion.a 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={link} 
                href={`#${link.toLowerCase()}`} 
                className="text-[11px] font-bold text-slate-400 hover:text-white transition-all uppercase tracking-[0.2em] relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-electric-blue transition-all group-hover:w-full" />
              </motion.a>
            ))}
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-2 bg-white text-navy-950 rounded text-[10px] font-bold uppercase tracking-widest hover:bg-electric-blue hover:text-white transition-all duration-500 shadow-xl"
            >
              Consult
            </motion.button>
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-navy-950 flex flex-col items-center justify-center gap-8 py-20 overflow-y-auto"
            >
              <div className="absolute top-6 right-6">
                <button className="text-white p-2" onClick={() => setIsMenuOpen(false)}>
                  <X className="w-8 h-8" />
                </button>
              </div>
              <div className="flex flex-col items-center gap-8">
                <div className="w-16 h-16 bg-electric-blue rounded-xl flex items-center justify-center font-bold text-white text-3xl shadow-[0_0_20px_rgba(59,130,246,0.5)] mb-4">N</div>
                {NAV_LINKS.map(link => (
                  <a 
                    key={link} 
                    href={`#${link.toLowerCase()}`} 
                    className="text-3xl font-display font-bold text-white uppercase tracking-tighter hover:text-electric-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link}
                  </a>
                ))}
                <button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="mt-4 px-10 py-4 bg-white text-navy-950 rounded font-bold uppercase tracking-widest text-sm"
                >
                  Request Consultation
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Layers */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={heroStep}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={HERO_STEPS[heroStep].image} 
              alt="Industrial Environment" 
              className="w-full h-full object-cover grayscale brightness-[0.4]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/50 z-1" />
        <div className="absolute inset-0 bg-electric-blue/5 mix-blend-overlay z-1" />

        {/* Technical Hud Overlay */}
        <div className="absolute inset-x-0 bottom-0 top-0 blueprint-grid opacity-10 z-1" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 text-left">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-[1px] w-12 bg-electric-blue" />
                  <span className="text-electric-blue font-mono text-[10px] uppercase tracking-[0.4em]">Navigator EPC Operations</span>
                </div>
                <h1 className="text-5xl md:text-8xl font-bold text-white leading-[0.95] mb-8 uppercase italic-style">
                  Engineering <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-accent-blue to-white text-glow">Vision</span> <br />
                  Into Reality
                </h1>
                <p className="max-w-xl text-lg text-slate-400 mb-10 font-light leading-relaxed">
                  Pioneering complex infrastructure and industrial systems with a technical mastery that transforms conceptual sketches into monumental landmarks.
                </p>
                <div className="flex flex-wrap items-center gap-6">
                  <button 
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-5 bg-electric-blue text-white rounded-sm font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-3 group hover:bg-white hover:text-navy-950 transition-all duration-500 shadow-2xl"
                  >
                    Our Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <div 
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex items-center gap-4 text-white hover:text-electric-blue cursor-pointer transition-colors py-2"
                  >
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Learn More</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-4 hidden lg:block">
              <div className="p-8 glass-card border-none bg-white/[0.02] rounded-none border-l border-white/10">
                <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-10">System Status: Active</div>
                <div className="space-y-8">
                  {HERO_STEPS.map((step, i) => (
                    <div key={i} className={`flex items-center gap-6 transition-all duration-500 ${i === heroStep ? "opacity-100 translate-x-2" : "opacity-30"}`}>
                      <div className={`text-xs font-mono ${i === heroStep ? "text-electric-blue" : "text-white"}`}>0{i + 1}</div>
                      <div>
                        <div className="text-white font-bold uppercase text-sm">{step.label}</div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-widest">{step.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-12 pt-12 border-t border-white/5">
                  <div className="text-3xl font-display font-light text-white mb-2">99.9%</div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest leading-none">Accuracy in<br />site estimation</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-electric-blue to-transparent" />
          <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Scroll to Explore</span>
        </motion.div>
      </section>


      {/* Services Section */}
      <section id="services" className="py-32 relative bg-navy-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <span className="text-electric-blue font-mono text-xs uppercase tracking-[0.3em] mb-4 block">Core Capabilities</span>
              <h2 className="text-4xl md:text-6xl font-bold text-white uppercase italic-style">Industrial EPC Operations</h2>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-slate-400 max-w-sm font-light text-lg"
            >
              Mastering the intersection of complex architectural theory and monumental physical execution.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 perspective-1000">
            {SERVICES.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ 
                  rotateY: 5, 
                  rotateX: -5,
                  scale: 1.02,
                  translateZ: 20
                }}
                className="group relative h-[500px] rounded-none overflow-hidden glass-card border-none bg-white/[0.03] transition-all duration-500 transform-gpu cursor-pointer"
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-20 filter grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-60 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
                  <div className="text-6xl font-display font-bold text-white">0{i + 1}</div>
                </div>
                
                <div className="relative h-full p-8 flex flex-col justify-end">
                  <div className="text-electric-blue mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">{service.title}</h3>
                  <p className="text-sm text-slate-400 mb-8 font-light leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                    {service.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-mono py-1 px-2 border border-white/10 rounded-sm uppercase text-slate-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Projects Showcase */}
      <section id="projects" className="py-24 bg-steel-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-electric-blue font-mono text-xs uppercase tracking-widest mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white uppercase">Legacy Structures</h2>
          </div>

          <div className="space-y-12">
            {PROJECTS.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative h-[600px] w-full rounded-3xl overflow-hidden glass-card flex flex-col md:flex-row items-center"
              >
                <div className="w-full md:w-3/5 h-1/2 md:h-full relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-navy-950/20" />
                </div>
                <div className="w-full md:w-2/5 p-8 md:p-16 flex flex-col justify-center">
                  <span className="font-mono text-[10px] uppercase text-electric-blue mb-4 tracking-[0.2em]">
                    {project.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-8 mb-10">
                    <div>
                      <div className="text-xs font-mono text-slate-500 uppercase mb-1">Duration</div>
                      <div className="text-sm font-bold text-white">24 Months</div>
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-500 uppercase mb-1">Status</div>
                      <div className="text-sm font-bold text-electric-blue">Completed</div>
                    </div>
                  </div>
                  <button className="w-fit flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white border-b border-white/20 pb-2 hover:border-electric-blue hover:text-electric-blue transition-all">
                    View Project Details <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-navy-950 overflow-hidden relative">
        {/* Background blueprint elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full blueprint-grid opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden glass-card p-2">
                <img 
                  src={IMAGES.construction} 
                  alt="Team and Capability" 
                  className="w-full rounded-xl aspect-[4/5] object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-electric-blue/20 rounded-full blur-3xl" />
              <div className="absolute -top-12 -left-12 p-8 glass-card rounded-2xl hidden md:block">
                <div className="text-4xl font-display font-bold text-white mb-2">15+</div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest leading-tight">Years Industrial<br />Excellence</div>
              </div>
            </div>

            <div>
              <span className="text-electric-blue font-mono text-xs uppercase tracking-widest mb-4 block">Proven Technical Expertise</span>
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8 uppercase">Innovation <br /> In Execution</h2>
              <p className="text-xl text-slate-400 mb-8 font-light leading-relaxed">
                Navigator Concept Limited is a premier EPC firm dedicated to reshaping the industrial landscape through precision engineering and unparalleled construction capability. 
              </p>
              <div className="space-y-6 mb-10">
                {[
                  "ISO Certified Quality Management Systems",
                  "Advanced 3D Modeling and VR Site Planning",
                  "Global Procurement Network in 15+ Countries",
                  "Industry-Leading HSE Safety Protocols"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="text-electric-blue w-6 h-6 shrink-0" />
                    <span className="text-slate-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-navy-950 rounded-lg font-bold uppercase tracking-widest hover:bg-electric-blue hover:text-white transition-all duration-300"
              >
                Discover Our History
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-steel-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <span className="text-electric-blue font-mono text-xs uppercase tracking-widest mb-4 block">Regional Presence</span>
              <h2 className="text-4xl font-bold text-white mb-8 uppercase">Strategic Base</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center shrink-0">
                    <MapPin className="text-electric-blue" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest mb-2">Primary Office</h4>
                    <p className="text-slate-400 text-lg">
                      Block V, Flat 11, MHE, Post Office Rd.
                    </p>
                  </div>
                </div>
                <div className="p-8 glass-card rounded-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <BarChart3 className="w-24 h-24" />
                  </div>
                  <h4 className="text-white font-bold uppercase text-xs mb-4">Operations Status</h4>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-white font-mono text-sm uppercase">Site Active</span>
                  </div>
                  <p className="text-slate-400 text-xs">Technical teams currently deployed across 12 active sites nationwide.</p>
                </div>
              </div>
            </div>

            <div className="h-[400px] rounded-3xl overflow-hidden glass-card relative group perspective-1000">
              {/* Symbolic 3D/Technical Map Representation */}
              <div className="absolute inset-0 blueprint-grid opacity-30" />
              <motion.div 
                whileHover={{ rotateY: 15, rotateX: 10 }}
                className="relative h-full flex flex-col items-center justify-center transform-gpu transition-transform duration-700"
              >
                <div className="relative">
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.2, 0.4, 0.2]
                    }} 
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-32 h-32 bg-electric-blue rounded-full absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
                    style={{ filter: 'blur(40px)' }}
                  />
                  <div className="w-6 h-6 bg-white rounded-full shadow-[0_0_30px_white] relative z-10" />
                  <motion.div 
                    animate={{ height: [40, 60, 40] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-[2px] bg-gradient-to-t from-white to-transparent absolute bottom-6 left-1/2 -translate-x-1/2"
                  />
                </div>
                <div className="mt-12 text-center">
                  <div className="text-white font-mono text-sm tracking-[0.3em] font-bold">LOC_BASE: NAV_HQ</div>
                  <div className="text-slate-500 text-[10px] font-mono mt-2 uppercase tracking-widest">Sector V | MHE Hub</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <span className="text-electric-blue font-mono text-xs uppercase tracking-widest mb-4 block">Consultation</span>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 uppercase leading-tight">Start Your <br /> Project</h2>
              <p className="text-slate-400 mb-12 text-lg font-light">
                Professional inquiry for large-scale engineering, procurement, and construction services.
              </p>

              <div className="space-y-6">
                <a 
                  href="tel:08106166032" 
                  className="flex items-center gap-6 p-6 glass-card rounded-2xl hover:bg-white/10 transition-all group"
                >
                  <div className="w-14 h-14 bg-electric-blue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="text-white" />
                  </div>
                  <div>
                    <div className="text-slate-500 font-mono text-[10px] uppercase mb-1">Direct Call</div>
                    <div className="text-white text-xl font-bold">0810 616 6032</div>
                  </div>
                </a>
                
                <a 
                  href="https://wa.me/2348106166032" 
                  className="flex items-center gap-6 p-6 glass-card rounded-2xl hover:bg-white/10 transition-all group"
                >
                  <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageSquare className="text-white" />
                  </div>
                  <div>
                    <div className="text-slate-500 font-mono text-[10px] uppercase mb-1">WhatsApp Operations</div>
                    <div className="text-white text-xl font-bold">Secure Message Link</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="glass-card p-10 rounded-3xl relative">
              <h3 className="text-2xl font-bold text-white mb-8 uppercase">Project Intake Form</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-mono text-slate-500 uppercase mb-2">Full Name</label>
                    <input className="w-full bg-navy-950/50 border border-white/10 rounded-lg py-4 px-6 text-white focus:outline-none focus:border-electric-blue transition-colors" placeholder="Johnathan Doe" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-slate-500 uppercase mb-2">Company Entity</label>
                    <input className="w-full bg-navy-950/50 border border-white/10 rounded-lg py-4 px-6 text-white focus:outline-none focus:border-electric-blue transition-colors" placeholder="Corporate Group" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-slate-500 uppercase mb-2">Email Address</label>
                  <input className="w-full bg-navy-950/50 border border-white/10 rounded-lg py-4 px-6 text-white focus:outline-none focus:border-electric-blue transition-colors" placeholder="j.doe@company.industrial" />
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-slate-500 uppercase mb-2">Technical Insight / Message</label>
                  <textarea className="w-full bg-navy-950/50 border border-white/10 rounded-lg py-4 px-6 text-white h-32 focus:outline-none focus:border-electric-blue transition-colors" placeholder="Describe the project scope and technical requirements..."></textarea>
                </div>
                <button className="w-full py-5 bg-electric-blue text-white rounded-lg font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-white hover:text-navy-950 transition-all duration-300">
                  Transmit Request <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-950 border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 bg-electric-blue rounded flex items-center justify-center font-bold text-white text-lg">N</div>
                <span className="font-display font-bold text-lg tracking-tight text-white uppercase leading-none">Navigator <br/><span className="text-[10px] tracking-[0.3em] font-mono text-electric-blue">Concept Ltd</span></span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Engineering excellence at a global scale. We bridge the gap between architectural vision and massive industrial execution.
              </p>
              <div className="flex items-center gap-4">
                {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-electric-blue hover:text-white transition-all">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-8">Capabilities</h4>
              <ul className="space-y-4">
                {["Structural Engineering", "Industrial Construction", "Smart Procurement", "Project Management", "Digital Blueprints"].map(item => (
                  <li key={item}><a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-8">Quick Links</h4>
              <ul className="space-y-4">
                {NAV_LINKS.map(link => (
                  <li key={link}><a href={`#${link.toLowerCase()}`} className="text-slate-500 hover:text-white text-sm transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-8">Global HQ</h4>
              <address className="not-italic text-sm text-slate-500 leading-relaxed mb-4">
                Block V, Flat 11, MHE,<br />
                Post Office Rd.<br />
                Nigeria.
              </address>
              <div className="text-white font-bold">0810 616 6032</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-6">
            <div className="text-xs font-mono text-slate-600 uppercase tracking-widest">
              © 2024 Navigator Concept Limited. All Rights Reserved.
            </div>
            <div className="flex items-center gap-8 text-[10px] font-mono text-slate-600 uppercase tracking-widest">
              <a href="#" className="hover:text-white">Privacy Protocol</a>
              <a href="#" className="hover:text-white">Site Manual</a>
              <a href="#" className="hover:text-white">Safety Ethics</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
