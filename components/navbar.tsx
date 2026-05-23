"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Briefcase, User, Mail, Sparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Portfolio", href: "/portofolio", icon: Briefcase },
  { name: "Contact", href: "/contact", icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [, setActiveIndex] = useState(0);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      {/* Container Utama dengan Efek Liquid Glass */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="relative flex items-center gap-2 px-4 py-2.5 rounded-full bg-neutral-950/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] before:absolute before:inset-0 before:rounded-full before:p-[1px] before:bg-linear-to-b before:from-white/20 before:to-transparent before:-z-10"
      >
        {/* Dekorasi Cahaya Liquid di dalam Navbar */}
        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-linear-to-b from-rose-400/20 to-transparent blur-md"></div>
        </div>

        {/* Logo / Icon Branding Kecil */}
        <div className="flex items-center pl-2 pr-4 border-r border-white/10 text-rose-300">
          <Sparkles size={18} className="animate-pulse" />
        </div>

        {/* Menu Items */}
        <ul className="flex items-center gap-1 relative">
          {navItems.map((item, index) => {
            const IsActive = pathname === item.href;
            
            return (
              <li key={item.name} className="relative">
                <Link
                  href={item.href}
                  onClick={() => {
                    // Sementara prevent default untuk demo, hapus baris ini jika route asli aktif
                    // e.preventDefault(); 
                    setActiveIndex(index);
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 z-10 ${
                    IsActive ? "text-neutral-950" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <item.icon size={16} />
                  <span className="hidden md:inline">{item.name}</span>
                </Link>

                {/* Efek Hover: Liquid Pill yang Mengikuti Cursor (Pill Bergerak) */}
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="liquid-hover"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 28,
                    }}
                    className="absolute inset-0 bg-white/5 rounded-full -z-10 border border-white/5 backdrop-blur-xs"
                  />
                )}

                {/* Efek Active: Kaca Cair Padat Saat Menu Dipilih */}
                {IsActive && (
                  <motion.div
                    layoutId="liquid-active"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    className="absolute inset-0 bg-linear-to-r from-rose-200 to-amber-100 rounded-full -z-20 shadow-[0_0_20px_rgba(254,205,211,0.4)]"
                  />
                )}
              </li>
            );
          })}
        </ul>
      </motion.nav>
    </div>
  );
}