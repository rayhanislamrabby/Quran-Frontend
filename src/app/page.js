"use client";
import { useState } from "react";
import { useQuran } from "./hooks/useQuran";
import Navbar from "./components/Navbar";
import SettingsPanel from "./components/SettingsPanel";
import AyahCard from "./components/AyahCard";

export default function Home() {
  const { surahs, selectedSurah, loading, error, loadSurah } = useQuran();
  const [searchTerm, setSearchTerm] = useState("");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [settings, setSettings] = useState({
    arabicFont: "'Amiri', serif",
    arabicSize: 32,
    translationSize: 16
  });



  return (
    <main className="min-h-screen dark:bg-[#020617] bg-white transition-colors">
      <Navbar onSearch={setSearchTerm} onOpenSettings={() => setIsSettingsOpen(true)} />
      
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-10">
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : error ? (
          <div className="text-red-500 text-center">{error}</div>
        ) : !selectedSurah ? (
          <>
            {/* Tab Selector Like Image */}
            <div className="flex justify-between items-center mb-10 overflow-x-auto gap-4">
              <h1 className="text-3xl font-black dark:text-white text-gray-900">Quran Mazid</h1>
              <div className="flex bg-gray-100 dark:bg-gray-800/50 p-1 rounded-2xl min-w-max">
                {["Surah", "Juz", "Page"].map((tab) => (
                  <button key={tab} className={`px-8 py-2 rounded-xl text-sm font-bold transition-all ${tab === 'Surah' ? 'bg-white dark:bg-gray-700 shadow-sm dark:text-white' : 'text-gray-500'}`}>
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Surah Grid List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSurahs.map((surah) => (
                <button
                  key={surah.number}
                  onClick={() => loadSurah(surah.number)}
                  className="flex items-center gap-4 p-5 rounded-2xl border dark:border-gray-800 border-gray-100 dark:bg-[#0f172a] bg-white hover:border-green-500/50 transition-all text-left group"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-500 font-bold rotate-45 group-hover:bg-green-600 group-hover:text-white transition-all">
                    <span className="-rotate-45">{surah.number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold dark:text-white text-gray-900">{surah.englishName}</h3>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{surah.englishNameTranslation}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-arabic text-xl dark:text-gray-400 text-gray-600">{surah.name}</p>
                    <p className="text-[10px] text-gray-400 mt-1">{surah.numberOfAyahs} Ayahs</p>
                  </div>
                </button>
              ))}
            </div>
          </>
        ) : (
          /* Ayah View (যখন সূরা সিলেক্ট হবে) */
          <div className="max-w-4xl mx-auto pb-20">
            <button 
              onClick={() => window.location.reload()} // Back to Surah List
              className="mb-8 text-green-600 font-bold flex items-center gap-2 hover:underline"
            >
              ← Back to Surah List
            </button>
            
            <div className="text-center mb-16 py-10 rounded-[40px] dark:bg-gray-900/40 bg-gray-50 border dark:border-gray-800">
               <h2 className="text-4xl font-black dark:text-white italic">{selectedSurah.englishName}</h2>
               <p className="text-green-500 font-arabic text-4xl mt-4">{selectedSurah.name}</p>
            </div>

            <div className="space-y-6">
              {selectedSurah.ayahs.map(ayah => (
                <AyahCard key={ayah.number} ayah={ayah} settings={settings} />
              ))}
            </div>
          </div>
        )}
      </div>

      <SettingsPanel isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} settings={settings} setSettings={setSettings} />
    </main>
  );
}