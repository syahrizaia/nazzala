"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Layers, 
  TrendingUp, 
  ArrowUpRight, 
  Target,
  CheckCircle, 
  Globe2,
  Building2,
  Activity,
  Briefcase,
  Quote
} from "lucide-react";
import Image from "next/image";

// Kategori Filter
const categories = ["All", "Strategy", "Operations", "Finance"];

// Data Studi Kasus Bisnis
const projects = [
  {
    id: 1,
    title: "Restrukturisasi Operasional Perusahaan Supply Chain",
    category: "Operations",
    metric: "+35% Efficiency",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    challenge: "Proses logistik internal yang tumpang tindih menyebabkan keterlambatan pengiriman hingga 18% dan pembengkakan biaya lembur karyawan.",
    approach: "Mengimplementasikan metodologi Lean Management, merancang ulang tata letak gudang, dan mengintegrasikan sistem pelacakan otomatis.",
    results: ["Memangkas waktu pemrosesan order sebesar 35%", "Menghemat biaya operasional bulanan hingga $45,000", "Meningkatkan skor kepuasan pelanggan ke angka 94%"]
  },
  {
    id: 2,
    title: "Skalabilitas & Strategi Ekspansi Pasar Startup EdTech",
    category: "Strategy",
    metric: "2.5x Revenue Growth",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    challenge: "Pertumbuhan pengguna stagnan selama 3 kuartal berturut-turut karena penetrasi pasar yang tidak terfokus dan tingginya churn rate.",
    approach: "Melakukan analisis segmentasi pasar baru, merombak struktur paket langganan, dan memimpin tim lintas fungsi untuk ekspansi regional.",
    results: ["Mendorong pertumbuhan pendapatan sebesar 2.5x dalam 12 bulan", "Menurunkan churn rate pengguna sebesar 40%", "Berhasil memasuki 3 kota besar baru di Indonesia"]
  },
  {
    id: 3,
    title: "Optimasi Finansial dan Manajemen Risiko Korporat",
    category: "Finance",
    metric: "-15% Cost Reduction",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
    challenge: "Alokasi anggaran tidak efisien di sektor overhead dan kurangnya mitigasi risiko fluktuasi mata uang asing.",
    approach: "Membangun model finansial prediktif, melakukan audit menyeluruh terhadap pengeluaran vendor, dan menyusun kebijakan hedging.",
    results: ["Mengurangi pengeluaran tidak krusial sebesar 15%", "Meningkatkan margin keuntungan bersih perusahaan sebesar 4.2%", "Mengamankan arus kas dari risiko volatilitas pasar"]
  }
];

// Data Cakupan Industri (Sektor Bisnis)
const industries = [
  { name: "Supply Chain & Logistics", count: "12 Proyek" },
  { name: "SaaS & Digital Platform", count: "8 Proyek" },
  { name: "FMCG / Retail Scale", count: "6 Proyek" },
  { name: "Corporate Real Estate", count: "4 Proyek" },
];

// Data Testimoni Hasil Proyek Khusus
const projectFeedback = [
  {
    text: "Intervensi strategi finansial yang diberikan tidak hanya menyelesaikan masalah arus kas jangka pendek, tetapi memberi kami pondasi proyeksi anggaran untuk 3 tahun ke depan.",
    client: "Direktur Keuangan",
    industry: "Sektor Konstruksi & Infrastruktur"
  },
  {
    text: "Eksekusi pemangkasan birokrasi operasional gudang berjalan mulus tanpa resistensi internal tim berkat pendekatan manajemen yang inklusif.",
    client: "VP of Operations",
    industry: "Distributor Nasional FMCG"
  }
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-rose-300/30 font-sans relative overflow-hidden">
      
      {/* --- BACKGROUND EFFECT --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[-5%] w-[600px] h-[600px] bg-amber-900/5 rounded-full blur-[160px] opacity-40"></div>
        <div className="absolute bottom-[15%] right-[-5%] w-[500px] h-[500px] bg-rose-900/10 rounded-full blur-[140px] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 md:py-40">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-sm font-mono tracking-widest text-rose-300 uppercase">/ Proven Track Record</span>
            <h1 className="text-4xl md:text-5xl font-light text-white mt-3">
              Studi Kasus & <span className="font-semibold text-transparent bg-clip-text bg-linear-to-r from-rose-200 to-amber-200">Hasil Nyata</span>
            </h1>
          </div>

          {/* --- FILTER BUTTONS (Liquid Glass Style) --- */}
          <div className="flex flex-wrap gap-1 p-1.5 rounded-full bg-neutral-900/50 backdrop-blur-md border border-white/5 w-fit">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-5 py-2 text-xs md:text-sm font-medium rounded-full transition-colors duration-300 z-10 ${
                    isActive ? "text-neutral-950" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{cat}</span>
                  {isActive && (
                    <motion.div
                      layoutId="portfolio-filter-active"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-linear-to-r from-rose-200 to-amber-100 rounded-full -z-10 shadow-[0_0_15px_rgba(254,205,211,0.3)]"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* --- CASES GRID --- */}
        <div className="space-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="p-8 md:p-12 rounded-3xl bg-neutral-900/40 backdrop-blur-md border border-neutral-800 hover:border-rose-400/20 transition-colors duration-300 grid md:grid-cols-12 gap-8 items-center"
              >
                {/* Kolom Kiri: Visual & Metrik Utama */}
                <div className="md:col-span-4 space-y-4">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950">
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      sizes="(max-w-768px) 100vw, 300px"
                    />
                    {/* Badge Kategori */}
                    <span className="absolute top-4 left-4 px-3 py-1 text-[10px] uppercase font-mono tracking-wider rounded-md bg-neutral-950/80 backdrop-blur-xs border border-white/10 text-neutral-300">
                      {project.category}
                    </span>
                  </div>

                  {/* Highlight Box Metrik Keberhasilan */}
                  <div className="p-4 rounded-xl bg-linear-to-br from-rose-950/40 to-neutral-950 border border-rose-900/20 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-rose-400/10 flex items-center justify-center text-rose-300 shrink-0">
                      <TrendingUp size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono">Key Deliverable</p>
                      <p className="text-lg font-bold text-white mt-0.5">{project.metric}</p>
                    </div>
                  </div>
                </div>

                {/* Kolom Kanan: Narasi Bisnis (Challenge, Approach, Results) */}
                <div className="md:col-span-8 flex flex-col h-full justify-between space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-6 group hover:text-rose-200 transition-colors flex items-start gap-2">
                      {project.title}
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6 text-sm">
                      {/* Tantangan Bisnis */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-neutral-400 font-medium">
                          <Target size={16} className="text-amber-300" />
                          <span>The Challenge</span>
                        </div>
                        <p className="text-neutral-400 leading-relaxed font-light">{project.challenge}</p>
                      </div>

                      {/* Pendekatan Manajemen */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-neutral-400 font-medium">
                          <Layers size={16} className="text-rose-300" />
                          <span>The Approach</span>
                        </div>
                        <p className="text-neutral-400 leading-relaxed font-light">{project.approach}</p>
                      </div>
                    </div>
                  </div>

                  {/* Hasil Riil */}
                  <div className="pt-4 border-t border-neutral-800">
                    <p className="text-xs uppercase font-mono tracking-widest text-neutral-500 mb-3">Measurable Impact:</p>
                    <div className="grid sm:grid-cols-3 gap-3">
                      {project.results.map((res, rIndex) => (
                        <div key={rIndex} className="flex gap-2 items-start">
                          <CheckCircle size={14} className="text-rose-300 mt-0.5 shrink-0" />
                          <span className="text-xs text-neutral-300 font-light leading-snug">{res}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <section className="mt-32 p-8 md:p-10 rounded-3xl bg-neutral-900/20 border border-neutral-900 grid sm:grid-cols-3 gap-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-rose-500/5 to-transparent pointer-events-none"></div>
          
          <div className="space-y-1">
            <div className="text-xs font-mono text-neutral-500 flex items-center gap-1.5 uppercase">
              <Activity size={12} className="text-rose-300" /> Capital Optimization
            </div>
            <p className="text-3xl font-bold text-white">$240K+</p>
            <p className="text-xs text-neutral-400 font-light">Total akumulasi efisiensi anggaran klien yang berhasil dipangkas.</p>
          </div>

          <div className="space-y-1 sm:border-x sm:border-neutral-900 sm:px-8">
            <div className="text-xs font-mono text-neutral-500 flex items-center gap-1.5 uppercase">
              <Building2 size={12} className="text-amber-200" /> Corporate Alignment
            </div>
            <p className="text-3xl font-bold text-white">30+</p>
            <p className="text-xs text-neutral-400 font-light">Sesi audit komprehensif lintas divisi struktur organisasi skala makro.</p>
          </div>

          <div className="space-y-1">
            <div className="text-xs font-mono text-neutral-500 flex items-center gap-1.5 uppercase">
              <Globe2 size={12} className="text-rose-300" /> Execution Rate
            </div>
            <p className="text-3xl font-bold text-white">96.4%</p>
            <p className="text-xs text-neutral-400 font-light">Rasio keberhasilan implementasi program sesuai tenggat waktu KPI.</p>
          </div>
        </section>

        <section className="mt-32">
          <div className="mb-12">
            <span className="text-xs font-mono tracking-widest text-amber-200 uppercase">/ Industry Versatility</span>
            <h2 className="text-2xl md:text-3xl font-light text-white mt-1">
              Cakupan <span className="font-semibold text-rose-200">Sektor Industri</span> Terdahulu
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <div key={i} className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-900/60 hover:bg-neutral-900/90 transition-all duration-300 group">
                <Briefcase size={16} className="text-neutral-600 group-hover:text-rose-300 transition-colors mb-4" />
                <h4 className="text-sm font-semibold text-white leading-tight">{ind.name}</h4>
                <p className="text-xs text-rose-300/60 font-mono mt-1">{ind.count}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-32">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="space-y-3">
              <span className="text-xs font-mono tracking-widest text-rose-300 uppercase">/ Stakeholder Opinions</span>
              <h3 className="text-2xl font-light text-white">Ulasan Nilai Tambah</h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-light">Catatan langsung dari dewan manajemen atas dampak nyata yang dirasakan pasca integrasi strategi selesai.</p>
            </div>

            <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
              {projectFeedback.map((feed, fIdx) => (
                <div key={fIdx} className="p-6 rounded-2xl bg-neutral-900/20 border border-neutral-900 flex flex-col justify-between relative">
                  <Quote size={24} className="text-neutral-800 absolute top-4 right-4" />
                  <p className="text-xs text-neutral-400 font-light leading-relaxed italic">&quot;{feed.text}&quot;</p>
                  <div className="mt-6 pt-4 border-t border-neutral-900/60">
                    <h5 className="text-xs font-bold text-white">{feed.client}</h5>
                    <p className="text-[10px] text-rose-300/70 font-mono mt-0.5">{feed.industry}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- BOTTOM CALL TO ACTION --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center space-y-4"
        >
          <p className="text-neutral-400 font-light">Butuh strategi serupa untuk merombak efisiensi bisnis Anda?</p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 text-rose-300 font-medium hover:text-rose-200 transition-colors group border-b border-rose-400/30 pb-1"
          >
            Mari jadwalkan sesi konsultasi 1-on-1
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

      </div>
    </div>
  );
}