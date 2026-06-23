import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { 
  WelcomeBanner, 
  StatCard, 
  ModuleCard 
} from './components/DashboardElements';
import { Users, BookOpen, Clock } from 'lucide-react';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const stats = [
    { icon: Users, label: 'Total Siswa', value: '28 Siswa', color: 'bg-blue-500' },
    { icon: BookOpen, label: 'Modul Aktif', value: '12 Modul', color: 'bg-emerald-500' },
    { icon: Clock, label: 'Jadwal Hari Ini', value: '4 Sesi', color: 'bg-amber-500' },
  ];

  const modules = [
    {
      title: "Matematika: Bangun Ruang Sederhana",
      subject: "Matematika",
      type: "video" as const,
      progress: 75,
      thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Bahasa Sunda: Pangajaran 5 - Kaulinan Lembur",
      subject: "Muatan Lokal",
      type: "pdf" as const,
      progress: 40,
      thumbnail: "https://images.unsplash.com/photo-1544650039-228833959c1c?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "IPAS: Siklus Hidup Makhluk Hidup",
      subject: "IPAS",
      type: "video" as const,
      progress: 90,
      thumbnail: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "PLH: Menjaga Lingkungan Kota Bogor",
      subject: "Muatan Lokal",
      type: "pdf" as const,
      progress: 25,
      thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
        
        <main className="p-8 max-w-7xl mx-auto">
          <WelcomeBanner />

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {stats.map((stat, i) => (
              <StatCard key={i} {...stat} />
            ))}
          </div>

          {/* Recent Modules Section */}
          <section className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-slate-800 dark:text-white">Modul Ajar Terbaru</h2>
                <p className="text-sm text-slate-500">Lanjutkan persiapan materi ajar Anda</p>
              </div>
              <button className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm transition-colors">
                Lihat Semua
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {modules.map((mod, i) => (
                <ModuleCard key={i} {...mod} />
              ))}
            </div>
          </section>

          {/* Schedule or Other Section */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Aktivitas Kelas Terbaru</h2>
                <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl">
                  <Clock size={20} className="text-slate-400" />
                </button>
              </div>
              
              <div className="space-y-6">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                      <span className="text-lg font-bold text-slate-400">0{i+8}</span>
                    </div>
                    <div className="flex-1 pb-6 border-b border-slate-100 dark:border-slate-800 group-last:border-0">
                      <p className="font-semibold text-slate-800 dark:text-white">Pengumpulan Tugas: Matematika Dasar</p>
                      <p className="text-sm text-slate-500 mt-1">15/28 Siswa telah mengumpulkan</p>
                    </div>
                    <span className="text-xs font-medium text-slate-400 whitespace-nowrap">2 jam yang lalu</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-600 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-xl font-bold mb-4">Pengingat Guru</h2>
                <p className="text-emerald-50 text-sm mb-6 opacity-90 leading-relaxed">
                  Rapat Koordinasi Kurikulum Merdeka akan dilaksanakan besok pukul 08:00 di Ruang Guru.
                </p>
                <button className="w-full py-3 bg-white text-emerald-600 rounded-2xl font-bold text-sm hover:bg-emerald-50 transition-colors shadow-lg">
                  Buka Kalender
                </button>
              </div>
              <div className="absolute right-[-20px] bottom-[-20px] opacity-10">
                <Clock size={160} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
