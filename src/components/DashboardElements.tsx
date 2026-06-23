import { Play, FileText, MoreVertical } from 'lucide-react';
import { motion } from 'framer-motion';

export const WelcomeBanner = () => (
  <div className="relative overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-8 mb-8 text-white">
    <div className="relative z-10">
      <h1 className="text-3xl font-bold mb-2">Selamat Pagi, Guru Hebat! 👋</h1>
      <p className="text-emerald-50 opacity-90 max-w-lg">
        Hari ini adalah kesempatan baru untuk membimbing tunas bangsa. Cek jadwal mengajar dan persiapan modul ajar Anda hari ini.
      </p>
    </div>
    <div className="absolute right-[-20px] top-[-20px] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
    <div className="absolute right-20 bottom-[-40px] w-32 h-32 bg-emerald-300/20 rounded-full blur-2xl"></div>
  </div>
);

export const StatCard = ({ icon: Icon, label, value, color }: { icon: any, label: string, value: string, color: string }) => (
  <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center gap-4">
      <div className={`p-3 rounded-2xl ${color}`}>
        <Icon size={24} className="text-white" />
      </div>
      <div>
        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{label}</p>
        <p className="text-2xl font-bold text-slate-800 dark:text-white">{value}</p>
      </div>
    </div>
  </div>
);

export const ModuleCard = ({ title, subject, type, progress, thumbnail }: { title: string, subject: string, type: 'video' | 'pdf', progress: number, thumbnail: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm group"
  >
    <div className="relative h-44 overflow-hidden">
      <img src={thumbnail} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        {type === 'video' ? (
          <div className="w-12 h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/50">
            <Play fill="white" size={24} />
          </div>
        ) : (
          <div className="w-12 h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/50">
            <FileText size={24} />
          </div>
        )}
      </div>
      <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
        {subject}
      </div>
    </div>
    <div className="p-5">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-slate-800 dark:text-white line-clamp-2 leading-tight flex-1">{title}</h3>
        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
          <MoreVertical size={18} />
        </button>
      </div>
      <div className="mt-4">
        <div className="flex justify-between text-xs mb-1.5">
          <span className="text-slate-500">Progres Belajar</span>
          <span className="font-semibold text-emerald-600">{progress}%</span>
        </div>
        <div className="h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-emerald-500"
          ></motion.div>
        </div>
      </div>
    </div>
  </motion.div>
);
