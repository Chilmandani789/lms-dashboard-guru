import React from 'react';
import { Search, Bell, Moon, Sun, User } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="h-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-40 border-b border-slate-200 dark:border-slate-800 px-8 flex items-center justify-between">
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors" size={20} />
          <input 
            type="text" 
            placeholder="Cari modul, materi, atau nama siswa..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-100 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={toggleDarkMode}
          className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-all"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        
        <button className="relative p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-all">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
        </button>

        <div className="h-10 w-[1px] bg-slate-200 dark:bg-slate-800 mx-2"></div>

        <button className="flex items-center gap-3 p-1.5 pr-3 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600">
            <User size={20} />
          </div>
          <div className="hidden md:block text-left">
            <p className="text-sm font-semibold text-slate-800 dark:text-white leading-tight">Ibu Pertiwi, S.Pd.</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Guru Kelas 4A</p>
          </div>
        </button>
      </div>
    </header>
  );
};
