"use client";

import { motion } from "framer-motion";
import { 
  Award, 
  Compass, 
  Lightbulb, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowUpRight, 
  TrendingUp
} from "lucide-react";
import Image from "next/image";

// Data Filosofi Kerja / Core Values
const coreValues = [
  { 
    icon: Compass, 
    title: "Visionary Guidance", 
    desc: "Menavigasi ketidakpastian pasar dengan strategi jangka panjang yang adaptif dan komprehensif." 
  },
  { 
    icon: Lightbulb, 
    title: "Innovative Efficiency", 
    desc: "Mengintegrasikan otomatisasi dan pemikiran modern untuk memangkas biaya operasional tanpa mengurangi kualitas." 
  },
  { 
    icon: ShieldCheck, 
    title: "Accountable Leadership", 
    desc: "Membangun budaya tim yang transparan, berbasis integritas tinggi, dan fokus pada hasil nyata." 
  }
];

// Data Dampak Kuantitatif (Sebelum vs Sesudah Intervensi Strategi)
const impactMetrics = [
  { label: "Waktu Siklus Operasional", before: "45 Hari", after: "28 Hari", status: "-37% Lebih Cepat" },
  { label: "Efisiensi Anggaran Overhead", before: "100%", after: "82%", status: "18% Anggaran Dihemat" },
  { label: "Skor Retensi & Output Tim", before: "72%", after: "91%", status: "+19% Produktivitas" },
];

// Data Toolkit & Sistem Manajemen Modern
const managementTools = [
  { category: "Data & Analytics", tools: ["Tableau", "Google Looker Studio", "Excel Advanced", "Power BI"] },
  { category: "Operations & Agile", tools: ["Jira", "Asana", "Trello", "Notion Enterprise"] },
  { category: "Finance & ERP", tools: ["SAP Lite", "Jurnal by Mekari", "Xero"] },
];

// Data Rekam Jejak / Milestone Pendidikan & Sertifikasi Eksekutif
const milestones = [
  { year: "2024", title: "Certified Senior Business Management (CSBM)", institution: "International Management Institute" },
  { year: "2021", title: "Master of Business Administration (MBA)", institution: "Universitas Terkemuka" },
  { year: "2019", title: "Strategic Leadership Certification", institution: "Executive Education Program" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-rose-300/30 font-sans relative overflow-hidden">
      
      {/* --- ANIMATED BACKGROUND DECORATIONS --- */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Glow Blurs yang Mengembang Lambat */}
        <motion.div 
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-rose-900/10 rounded-full blur-[150px]"
        />
        <motion.div 
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute top-[50%] left-[-10%] w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[150px]"
        />

        {/* Orbit Lines Dekoratif (Rotasi Lambat) */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-[15%] right-[5%] w-[400px] h-[400px] rounded-full border border-neutral-900 border-dashed opacity-40 hidden md:block"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] left-[2%] w-[500px] h-[500px] rounded-full border border-neutral-900/60 border-dashed opacity-30 hidden md:block"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 md:py-40">
        
        {/* HERO NARRATIVE SECTION */}
        <section className="grid md:grid-cols-12 gap-12 items-center mb-32">
          
          {/* Sisi Kiri: Teks Narasi */}
          <div className="md:col-span-7 space-y-6 order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block text-sm font-mono tracking-widest text-rose-300 uppercase"
            >
              / The Story Behind The Strategy
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-light tracking-tight text-white leading-tight"
            >
              Menjembatani <span className="font-semibold text-transparent bg-clip-text bg-linear-to-r from-rose-200 to-amber-200">Ide Spektakuler</span> dengan Eksekusi Realistis.
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-neutral-400 text-base md:text-lg leading-relaxed font-light"
            >
              <p>
                Selama lebih dari 7 tahun, saya mendedikasikan karir saya untuk memahami struktur operasional bisnis dari hulu ke hilir. Sebagai seorang profesional di bidang manajemen, tantangan terbesar bukanlah menemukan ide baru, melainkan bagaimana menyelaraskan manusia, sistem, dan modal agar bergerak ke arah yang sama.
              </p>
              <p>
                Saya percaya bahwa kepemimpinan yang sukses adalah kepemimpinan yang inklusif namun tetap tegas berbasis data (data-driven). Pendekatan saya menggabungkan empati manajemen dengan metrik performa (KPI) yang ketat untuk memastikan setiap keputusan menghasilkan ROI optimal bagi perusahaan.
              </p>
            </motion.div>
          </div>

          {/* Sisi Kanan: Foto Profil Mini & Struktur Estetik */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 order-1 md:order-2 flex justify-center relative"
          >
            {/* Dekorasi Aura Belakang Foto */}
            <div className="absolute -inset-2 bg-linear-to-tr from-rose-500/10 to-amber-500/5 rounded-3xl blur-xl opacity-50 pointer-events-none" />
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl bg-neutral-900 border border-neutral-800 p-4 shadow-2xl group overflow-hidden z-10">
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-neutral-950/80 z-10"></div>
              <Image 
                src="/my-photo.png" 
                alt="Nazzala" 
                fill
                className="object-cover rounded-2xl grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                sizes="(max-w-768px) 100vw, 400px"
                priority
              />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <p className="text-white font-semibold tracking-wide">Nazzala, S.M.</p>
                <p className="text-rose-300 text-xs font-mono">Operations Lead & Consultant</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mb-32">
          <div className="mb-12">
            <span className="text-xs font-mono tracking-widest text-amber-200 uppercase">/ Measurable Optimization</span>
            <h2 className="text-2xl md:text-3xl font-light text-white mt-1">
              Rekam Jejak <span className="font-semibold text-rose-200">Optimalisasi</span> Sistem
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {impactMetrics.map((metric, i) => (
              <div key={i} className="p-6 rounded-3xl bg-neutral-900/30 border border-neutral-900 space-y-4 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 rounded-bl-full blur-xl group-hover:bg-rose-500/10 transition-colors"></div>
                <h4 className="text-sm font-medium text-neutral-300">{metric.label}</h4>
                <div className="flex items-center gap-6">
                  <div>
                    <p className="text-xs text-neutral-500 font-mono">Sebelum</p>
                    <p className="text-lg font-light text-neutral-400 line-through">{metric.before}</p>
                  </div>
                  <div className="text-neutral-700 font-light">→</div>
                  <div>
                    <p className="text-xs text-rose-300 font-mono">Sesudah</p>
                    <p className="text-2xl font-bold text-white">{metric.after}</p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/5 px-2.5 py-1 rounded-md border border-emerald-500/10">
                  <TrendingUp size={12} />
                  <span>{metric.status}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CORE VALUES / PHILOSOPHY SECTION */}
        <section className="mb-32">
          <div className="text-center md:text-left mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-white">
              Filosofi <span className="font-semibold text-rose-200">Manajemen</span>
            </h2>
            <p className="text-neutral-500 text-sm mt-2">Prinsip kerja baku yang saya bawa ke dalam setiap organisasi.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {coreValues.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-neutral-900/40 backdrop-blur-md border border-neutral-800/60 hover:border-rose-400/20 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Spotlight Background Effect */}
                <div className="absolute -inset-px bg-radial from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-rose-950 to-neutral-900 border border-rose-800/30 flex items-center justify-center text-rose-300 mb-6 relative z-10">
                  <value.icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 relative z-10">{value.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed font-light relative z-10">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-32">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 space-y-3">
              <span className="text-xs font-mono tracking-widest text-rose-300 select-none">/ Technical Capabilities</span>
              <h2 className="text-2xl md:text-3xl font-light text-white">
                Infrastruktur & <span className="font-semibold text-rose-200">Tools</span> Manajemen
              </h2>
              <p className="text-neutral-500 text-sm font-light leading-relaxed">
                Pemanfaatan instrumen digital mutakhir untuk memastikan seluruh visualisasi data, pengawasan alur kerja, dan pelaporan keuangan berjalan presisi.
              </p>
            </div>

            <div className="md:col-span-8 grid sm:grid-cols-3 gap-4">
              {managementTools.map((stack, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-neutral-900/20 border border-neutral-900 space-y-4">
                  <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider pb-2 border-b border-neutral-900">{stack.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {stack.tools.map((tool, tIdx) => (
                      <span key={tIdx} className="text-xs px-2.5 py-1 rounded-md bg-neutral-900 text-neutral-300 border border-neutral-800 font-light">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE SPLIT & MILESTONES (BENTO) */}
        <section className="grid md:grid-cols-12 gap-8 items-start">
          
          {/* Kiri: Area Keahlian Teknis Bisnis */}
          <div className="md:col-span-6 space-y-6">
            <h2 className="text-2xl md:text-3xl font-light text-white">
              Metodologi & <span className="font-semibold text-rose-200">Keahlian Taktis</span>
            </h2>
            <p className="text-neutral-400 font-light text-sm md:text-base">
              Kombinasi hard skills analisis finansial dan soft skills tata kelola organisasi skala makro.
            </p>
            
            <div className="space-y-3 pt-2">
              {[
                "Corporate Governance & Restructuring",
                "Financial Modeling & Budgeting Optimization",
                "Agile Project Management & Scrum Framework",
                "Risk Assessment & Crisis Mitigation",
                "Cross-functional Team Alignment",
              ].map((skill, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-neutral-900/30 border border-neutral-900">
                  <CheckCircle2 size={18} className="text-rose-300 shrink-0" />
                  <span className="text-neutral-300 text-sm md:text-base font-light">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Kanan: Kredensial & Edukasi (Liquid Glass Style Card) */}
          <div className="md:col-span-6 p-[1px] rounded-3xl bg-linear-to-b from-neutral-800 to-transparent">
            <div className="bg-neutral-950/80 p-8 rounded-[calc(1.5rem-1px)] border border-neutral-900/50 backdrop-blur-xl space-y-8 relative overflow-hidden group">
              
              {/* Subtle Corner Light Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors duration-700" />

              <div className="flex items-center gap-3 pb-4 border-b border-neutral-800 relative z-10">
                <Award className="text-amber-200" size={24} />
                <h3 className="text-xl font-medium text-white">Kredensial Eksekutif</h3>
              </div>

              <div className="relative pl-4 space-y-8 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[1px] before:bg-neutral-800 relative z-10">
                {milestones.map((item, i) => (
                  <div key={i} className="relative group/item">
                    {/* Dot Indikator Linimasa dengan Efek Pulse */}
                    <div className="absolute -left-[20.5px] top-1.5 w-2 h-2 rounded-full bg-neutral-800 group-hover/item:bg-rose-300 shadow-sm transition-colors duration-300" />
                    
                    <span className="text-xs font-mono text-rose-300/80 block mb-1">{item.year}</span>
                    <h4 className="text-base font-semibold text-white group-hover/item:text-amber-100 transition-colors">{item.title}</h4>
                    <p className="text-xs text-neutral-500 mt-1">{item.institution}</p>
                  </div>
                ))}
              </div>

              {/* Call to Action Mini */}
              <div className="pt-4 relative z-10">
                <a 
                  href="/portofolio" 
                  className="inline-flex items-center gap-2 text-sm font-medium text-rose-200 hover:text-rose-100 transition-colors group"
                >
                  Lihat Studi Kasus Proyek 
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </section>

      </div>
    </div>
  );
}