import React from 'react';
import { 
  Home, 
  BookOpen, 
  MapPin, 
  FileQuestion, 
  Users, 
  BarChart3, 
  ChevronLeft, 
  ChevronRight,
  GraduationCap
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const navItems = [
  { icon: Home, label: 'Beranda', active: true },
  { icon: BookOpen, label: 'Modul Ajar (RPP)' },
  { icon: MapPin, label: 'Muatan Lokal' },
  { icon: FileQuestion, label: 'Bank Soal' },
  { icon: Users, label: 'Data Siswa' },
  { icon: BarChart3, label: 'Rekap Nilai' },
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <aside 
      className={cn(
        "fixed left-0 top-0 h-screen bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-all duration-300 z-50",
        isOpen ? "w-64" : "w-20"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800">
        <div className={cn("flex items-center gap-3 overflow-hidden transition-all", !isOpen && "opacity-0 w-0")}>
          <div className="bg-emerald-500 p-2 rounded-lg">
            <GraduationCap className="text-white w-6 h-6" />
          </div>
          <span className="font-bold text-slate-800 dark:text-white truncate">LMS Guru</span>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
        >
          {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>

      <nav className="p-4 space-y-2">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={cn(
              "w-full flex items-center gap-4 p-3 rounded-xl transition-all duration-200 group",
              item.active 
                ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400" 
                : "text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400"
            )}
          >
            <item.icon size={22} className={cn("shrink-0", item.active ? "text-emerald-600" : "group-hover:text-emerald-500")} />
            <span className={cn("font-medium transition-all duration-300 whitespace-nowrap", !isOpen && "opacity-0 w-0")}>
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </aside>
  );
};
