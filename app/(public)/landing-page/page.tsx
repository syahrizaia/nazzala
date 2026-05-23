"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Users, 
  PieChart, 
  Target, 
  Briefcase, 
  Send,
  ChevronRight,
  Sparkles,
  Search,
  Sliders,
  CheckCircle2,
  Quote
} from "lucide-react";
import Image from "next/image";
import { addDoc, collection } from "firebase/firestore/lite";
import { db } from "@/lib/firebase";

// Data Keahlian Bisnis
const expertise = [
  { icon: Target, title: "Strategic Planning", desc: "Merancang roadmap bisnis jangka panjang untuk pertumbuhan yang terukur dan berkelanjutan." },
  { icon: Users, title: "Team Leadership", desc: "Membangun, memimpin, dan menskalakan tim berkinerja tinggi dengan budaya kerja positif." },
  { icon: TrendingUp, title: "Revenue Growth", desc: "Mengoptimalkan saluran pendapatan dan efisiensi operasional untuk memaksimalkan ROI." },
  { icon: PieChart, title: "Data-Driven Strategy", desc: "Pengambilan keputusan berbasis analisis data untuk memitigasi risiko bisnis." },
];

// Data Metodologi Kerja
const workflows = [
  { num: "01", icon: Search, title: "Deep-Dive Audit", desc: "Menganalisis data finansial dan sumbatan operasional (bottlenecks) yang menghambat efisiensi perusahaan." },
  { num: "02", icon: Sliders, title: "Tailored Framework", desc: "Menyusun skema restrukturisasi taktis dan KPI terukur yang disesuaikan dengan kapasitas tim Anda." },
  { num: "03", icon: CheckCircle2, title: "Precision Execution", desc: "Memimpin implementasi di lapangan bersama tim lintas divisi untuk memastikan target ROI tercapai." },
];

// Data Testimoni Eksekutif
const testimonials = [
  {
    quote: "Nazzala memiliki kemampuan langka dalam menyederhanakan masalah operasional yang rumit menjadi langkah-langkah eksekusi yang logis dan sangat efisien.",
    author: "Amiruddin Siregar",
    role: "Chief Operating Officer",
    company: "Nexus Supply Chain"
  },
  {
    quote: "Strategi pertumbuhan berbasis data yang dirancang berhasil memangkas biaya overhead kami hingga 15% tanpa mengorbankan produktivitas tim.",
    author: "Dian Permata",
    role: "Founder & CEO",
    company: "EduVantage Indonesia"
  }
];

export default function LandingPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Simulasi Handle Submit ke Firebase
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
        await addDoc(collection(db, "inquiries"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        createdAt: new Date()
        });
        alert("Pesan berhasil dikirim!");
        setFormData({ name: "", email: "", message: "" });
    } catch (error) {
        console.error("Error adding document: ", error);
        alert("Gagal mengirim pesan.");
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-rose-300/30 font-sans relative overflow-x-hidden">
      
      {/* --- ANIMATED BACKGROUND DECORATIONS --- */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Glow Blurs Langit-Langit */}
        <motion.div 
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-rose-900/20 rounded-full blur-[150px]"
        />
        <motion.div 
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[120px]"
        />

        {/* Garis Grid Estetik Interaktif */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Ornamen Floating Geometris Mengambang */}
        <motion.div
          animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[25%] left-[8%] w-3 h-3 rounded-full bg-rose-400/40 blur-xs hidden md:block"
        />
        <motion.div
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[60%] right-[10%] w-4 h-4 rounded-full bg-amber-400/30 blur-[2px] hidden md:block"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-32">
        
        {/* --- HERO SECTION --- */}
        <section className="flex flex-col md:flex-row gap-12 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rose-300/20 bg-rose-300/5 text-rose-300 text-sm font-medium tracking-wide">
              <Sparkles size={16} className="animate-pulse text-amber-300" />
              <span>Business Strategist & Operations Lead</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-tight text-white">
              Mengubah <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-rose-200 to-amber-200">Visi</span> menjadi<br/>
              Eksekusi Presisi.
            </h1>
            
            <p className="text-neutral-400 text-lg md:text-xl max-w-xl leading-relaxed">
              Halo, saya <span className="text-white font-medium">Nazzala</span >. 
              Saya membantu perusahaan mengoptimalkan operasi, memimpin tim lintas fungsi, dan mendorong pertumbuhan pendapatan melalui strategi berbasis data.
            </p>
            
            <div className="pt-4 flex gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="px-8 py-4 bg-rose-200 hover:bg-rose-300 text-neutral-950 font-semibold rounded-full flex items-center gap-2 transition-colors"
              >
                Mari Diskusi <ChevronRight size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/portofolio"
                className="px-8 py-4 bg-transparent border border-neutral-700 hover:border-neutral-500 text-white font-medium rounded-full transition-colors"
              >
                Lihat Portofolio
              </motion.a>
            </div>
          </motion.div>

          {/* Foto/Visual Representasi */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 w-full relative group"
          >
            <div className="absolute -inset-1 rounded-3xl bg-linear-to-tr from-rose-500/20 to-amber-500/10 opacity-30 blur-xl group-hover:opacity-60 transition-opacity duration-700" />
            <div className="relative aspect-[4/5] md:aspect-square w-full max-w-md mx-auto rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl z-10">
              <div className="absolute inset-0 bg-linear-to-tr from-rose-900/40 to-transparent z-10 mix-blend-overlay" />
              <Image
                src="/my-photo.png" 
                alt="Professional Portrait" 
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700"
                width={800}
                height={1000}
                priority
              />
            </div>
          </motion.div>
        </section>

        <section className="mb-32 py-6 border-y border-neutral-900">
          <p className="text-center text-xs uppercase tracking-widest text-neutral-600 font-mono mb-6">Dipercaya Oleh Berbagai Entitas & Korporasi</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale filter contrast-200">
            <span className="text-xl font-bold tracking-wider text-white">NEXUS SUPPLY</span>
            <span className="text-xl font-serif italic text-white">EduVantage</span>
            <span className="text-xl font-mono text-white">[ALPHA_CORP]</span>
            <span className="text-xl font-semibold tracking-tight text-white">VORTEX.CO</span>
          </div>
        </section>

        {/* --- BENTO GRID STATS (Pencapaian) --- */}
        <section className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { label: "Pertumbuhan YoY", value: "125%" },
              { label: "Anggota Tim", value: "40+" },
              { label: "Nilai Proyek", value: "$2.5M+" },
              { label: "Tahun Pengalaman", value: "7+" }
            ].map((stat, i) => (
              <div key={i} className="p-8 rounded-3xl bg-neutral-900/50 backdrop-blur-md border border-neutral-800 hover:border-rose-900/50 transition-colors flex flex-col justify-center items-center text-center group">
                <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-b from-white to-neutral-500 mb-2 group-hover:from-rose-200 group-hover:to-amber-500 transition-all duration-500">
                  {stat.value}
                </h3>
                <p className="text-neutral-500 text-sm font-medium uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* --- EXPERTISE SECTION --- */}
        <section id="experience" className="mb-32">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">Area Eksekutif & <span className="font-semibold text-rose-200">Keahlian Utama</span></h2>
            <p className="text-neutral-400 max-w-2xl">Fokus pada penyelarasan strategi manajemen dengan tujuan bisnis untuk menciptakan ekosistem kerja yang efisien dan menguntungkan.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {expertise.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-rose-400/30 hover:bg-neutral-800/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-rose-950/50 flex items-center justify-center text-rose-300 mb-6">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-sm md:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-32">
          <div className="mb-12 text-center md:text-left">
            <span className="text-xs font-mono tracking-widest text-rose-300 uppercase">/ The Operational Blueprint</span>
            <h2 className="text-3xl md:text-4xl font-light text-white mt-2">Bagaimana Saya <span className="font-semibold text-rose-200">Bekerja</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {workflows.map((flow, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-8 rounded-3xl bg-linear-to-b from-neutral-900 to-neutral-950 border border-neutral-900 group overflow-hidden"
              >
                <span className="absolute -top-4 -right-2 text-7xl font-black text-neutral-900/60 font-mono group-hover:text-rose-950/40 transition-colors pointer-events-none">{flow.num}</span>
                <div className="w-10 h-10 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-amber-200 mb-6">
                  <flow.icon size={18} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{flow.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed font-light">{flow.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-32">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light text-white">Rekomendasi <span className="font-semibold text-rose-200">Profesional</span></h2>
            <p className="text-neutral-500 text-sm mt-2">Penilaian objektif dari jajaran direksi dan pendiri perusahaan terkait performa kerja nyata.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((test, i) => (
              <div key={i} className="p-8 rounded-3xl bg-neutral-900/30 border border-neutral-900/80 backdrop-blur-xs flex flex-col justify-between relative">
                <Quote size={40} className="absolute top-6 right-6 text-neutral-800/40 pointer-events-none" />
                <p className="text-neutral-300 text-sm md:text-base leading-relaxed italic font-light z-10">&quot;{test.quote}&quot;</p>
                
                <div className="pt-6 mt-6 border-t border-neutral-900 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-linear-to-tr from-rose-950 to-neutral-800 border border-rose-900/20 flex items-center justify-center text-rose-300 font-bold text-xs uppercase">
                    {test.author.substring(0,2)}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{test.author}</h4>
                    <p className="text-xs text-neutral-500">{test.role} at <span className="text-rose-300/70">{test.company}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- CONTACT / LEAD FORM (Firebase Ready) --- */}
        <section id="contact" className="relative p-1 rounded-3xl bg-linear-to-b from-neutral-800 to-neutral-950 overflow-hidden">
          <div className="relative bg-neutral-950 rounded-[calc(1.5rem-1px)] p-8 md:p-16 flex flex-col md:flex-row gap-12 z-10">
            
            {/* Info Kiri */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                Punya tantangan bisnis yang <span className="font-semibold text-rose-200">ingin diselesaikan?</span>
              </h2>
              <p className="text-neutral-400 mb-8 max-w-md leading-relaxed">
                Saya selalu terbuka untuk mendiskusikan peluang kepemimpinan, konsultasi manajemen, atau sekadar bertukar perspektif bisnis.
              </p>
              <div className="space-y-4 text-neutral-300">
                <div className="flex items-center gap-4">
                  <Briefcase className="text-rose-300" size={20} />
                  <span>Tersedia untuk Posisi Eksekutif / Konsultasi</span>
                </div>
                <div className="flex items-center gap-4">
                  <Send className="text-rose-300" size={20} />
                  <span>hasanahnazza@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Form Kanan */}
            <div className="flex-1 bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-400 mb-2">Nama Lengkap</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-hidden focus:border-rose-400 focus:ring-1 focus:ring-rose-400 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-400 mb-2">Email Profesional</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-hidden focus:border-rose-400 focus:ring-1 focus:ring-rose-400 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-400 mb-2">Agenda / Pesan</label>
                  <textarea 
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-hidden focus:border-rose-400 focus:ring-1 focus:ring-rose-400 transition-colors resize-none"
                    placeholder="Saya ingin berdiskusi mengenai..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-rose-200 hover:bg-rose-300 text-neutral-950 font-bold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Mengirim Pesan..." : "Kirim Pesan"}
                </button>
              </form>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}