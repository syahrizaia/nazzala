"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Clock, 
  MapPin, 
  Calendar,
  HelpCircle,
  ArrowUpRight
} from "lucide-react";

const faqs = [
  {
    q: "Bagaimana skema kerja sama awal?",
    a: "Sesi awal berupa konsultasi 30 menit (gratis) untuk memetakan tantangan bisnis Anda. Setelah itu, saya akan menyusun proposal strategi operasional / finansial sesuai skala kebutuhan."
  },
  {
    q: "Apakah menerima proyek remote luar kota/negeri?",
    a: "Ya. Sebagian besar konsultasi strategi dijalankan secara remote via Zoom/Teams, namun saya terbuka untuk kunjungan on-site pada fase audit krusial."
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    service: "Consultation",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Integrasi Firebase Firestore Anda di sini
    // await addDoc(collection(db, "inquiries"), formData);

    setTimeout(() => {
      alert("Permintaan jadwal konsultasi Anda telah terkirim. Asisten saya akan menghubungi Anda dalam waktu maksimal 1x24 jam.");
      setIsSubmitting(false);
      setFormData({ name: "", company: "", email: "", service: "Consultation", message: "" });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-rose-300/30 font-sans relative overflow-hidden">
      
      {/* --- BACKGROUND EFFECT --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[30%] right-[-5%] w-[500px] h-[500px] bg-rose-900/5 rounded-full blur-[140px] opacity-30"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[600px] h-[600px] bg-amber-900/5 rounded-full blur-[160px] opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 md:py-40">
        
        {/* --- HEADER --- */}
        <div className="max-w-2xl mb-16">
          <span className="text-sm font-mono tracking-widest text-rose-300 uppercase">/ Strategic Alignment</span>
          <h1 className="text-4xl md:text-5xl font-light text-white mt-3 leading-tight">
            Mari Jadwalkan <span className="font-semibold text-transparent bg-clip-text bg-linear-to-r from-rose-200 to-amber-200">Sesi Penyelarasan</span> Bisnis
          </h1>
          <p className="text-neutral-400 mt-4 font-light">
            Silakan isi formulir di bawah ini untuk mengatur waktu evaluasi efisiensi operasional atau konsultasi manajemen korporat.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          
          {/* KOLOM KIRI: INFO KORESPONDENSI & FAQ */}
          <div className="md:col-span-5 space-y-10">
            
            {/* Informasi Kontak Bisnis */}
            <div className="space-y-6">
              <h3 className="text-sm font-mono uppercase tracking-widest text-neutral-500">Corporate Channels</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-900/30 border border-neutral-900">
                  <Mail className="text-rose-300 mt-0.5" size={18} />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-neutral-500 font-mono">Email Resmi</h4>
                    <p className="text-white text-sm mt-1 font-light">hasanahnazza@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-900/30 border border-neutral-900">
                  <Clock className="text-rose-300 mt-0.5" size={18} />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-neutral-500 font-mono">Jam Operasional</h4>
                    <p className="text-white text-sm mt-1 font-light">Senin – Jumat | 09:00 – 17:00 WIB</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-900/30 border border-neutral-900">
                  <MapPin className="text-rose-300 mt-0.5" size={18} />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-neutral-500 font-mono">Pusat Operasi</h4>
                    <p className="text-white text-sm mt-1 font-light">Bekasi, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pertanyaan Umum / FAQ Singkat */}
            <div className="space-y-4 pt-4 border-t border-neutral-900">
              <h3 className="text-sm font-mono uppercase tracking-widest text-neutral-500 flex items-center gap-2">
                <HelpCircle size={16} className="text-amber-200" /> FAQ Pra-Konsultasi
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="space-y-1">
                    <h4 className="text-sm font-semibold text-neutral-200">{faq.q}</h4>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* KOLOM KANAN: FORM KONSULTASI (FIREBASE) */}
          <div className="md:col-span-7 p-[1px] rounded-3xl bg-linear-to-b from-neutral-800 to-transparent">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-neutral-950/90 p-8 md:p-10 rounded-[calc(1.5rem-1px)] backdrop-blur-xl border border-neutral-900/50"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-neutral-400 font-mono mb-2">Nama Lengkap</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-hidden focus:border-rose-400 focus:ring-1 focus:ring-rose-400/50 transition-colors"
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-neutral-400 font-mono mb-2">Nama Perusahaan / Institusi</label>
                    <input 
                      type="text" 
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-hidden focus:border-rose-400 focus:ring-1 focus:ring-rose-400/50 transition-colors"
                      placeholder="PT. Contoh Mulia"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-400 font-mono mb-2">Email Korporat</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-hidden focus:border-rose-400 focus:ring-1 focus:ring-rose-400/50 transition-colors"
                    placeholder="name@company.com"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-400 font-mono mb-2">Fokus Kebutuhan</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-neutral-300 text-sm focus:outline-hidden focus:border-rose-400 transition-colors"
                  >
                    <option value="Consultation">Sesi Konsultasi Strategi Umum</option>
                    <option value="Operations">Audit Efisiensi Operasional</option>
                    <option value="Finance">Restrukturisasi Finansial / ROI</option>
                    <option value="Speaker">Undangan Pembicara / Panelis Eksekutif</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-400 font-mono mb-2">Ringkasan Masalah / Agenda</label>
                  <textarea 
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-hidden focus:border-rose-400 focus:ring-1 focus:ring-rose-400/50 transition-colors resize-none leading-relaxed"
                    placeholder="Jabarkan secara singkat kendala operasional atau rencana ekspansi yang ingin Anda diskusikan..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-linear-to-r from-rose-200 to-amber-100 hover:from-rose-300 hover:to-amber-200 text-neutral-950 font-bold rounded-xl text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group shadow-[0_4px_20px_rgba(254,205,211,0.15)]"
                >
                  <Calendar size={16} />
                  <span>{isSubmitting ? "Memproses Penjadwalan..." : "Ajukan Jadwal Pertemuan"}</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>

        </div>

      </div>
    </div>
  );
}