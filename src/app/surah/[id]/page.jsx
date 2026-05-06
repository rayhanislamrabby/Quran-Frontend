"use client";
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

import Navbar from '@/app/components/Navbar';
import SurahListSidebar from '@/app/components/SurahListSidebar';
import AudioPlayer from '@/app/components/AudioPlayer';
import useFetch from '@/app/hooks/useFetch';

const SurahDetails = () => {
  const { id } = useParams();
  const [currentAyahIndex, setCurrentAyahIndex] = useState(0);
  const { data: surah, loading, error } = useFetch(`/api/surah/${id}`);


  useEffect(() => {
    const activeAyah = document.getElementById(`ayah-${currentAyahIndex}`);
    if (activeAyah) {
      activeAyah.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [currentAyahIndex]);

  if (loading) return <div className="h-screen flex items-center justify-center">Loading Quran Mazid...</div>;
  if (error || !surah) return <div className="h-screen flex items-center justify-center text-red-500">No Data Found</div>;

  return (
    <div className="flex flex-col h-screen bg-white">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
   
        <aside className="hidden lg:block w-2xs border-r border-gray-100 overflow-y-auto">
          <SurahListSidebar activeId={id} />
        </aside>

     
        <main className="flex-1 overflow-y-auto pb-40 custom-scrollbar scroll-smooth">
      
          <div className="py-12 border-b border-gray-50 text-center bg-gray-50/30">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Surah {surah.englishName}</h1>
            <p className="text-gray-400 font-medium tracking-wide">
              {surah.revelationType} • {surah.ayahs.length} Ayahs
            </p>
          </div>

          <div className="max-w-5xl mx-auto px-6 py-10 space-y-10">
            {surah.ayahs.map((ayah, index) => {
              const isActive = currentAyahIndex === index;
              return (
                <div 
                  key={index} 
                  id={`ayah-${index}`}
                  className={`p-8 rounded-4xl transition-all duration-500 border ${
                    isActive 
                    ? 'bg-green-50/50 border-green-200 shadow-sm ring-1 ring-green-100' 
                    : 'border-transparent hover:bg-gray-50/50'
                  }`}
                >
                  {/* Ayah Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`w-8 h-8 flex items-center justify-center rounded-xl font-bold text-xs ${
                      isActive ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-400'
                    }`}>
                      {surah.number}:{ayah.numberInSurah}
                    </span>
                    {isActive && (
                      <span className="text-[10px] font-black text-green-600 animate-pulse tracking-tighter">
                        READING NOW
                      </span>
                    )}
                  </div>

                  {/* Arabic Text */}
                  <div className="text-right mb-6">
                    <p className={`font-arabic leading-[2.6] transition-all ${
                      isActive ? 'text-green-900 text-3xl' : 'text-gray-800 text-3xl'
                    }`} dir="rtl">
                      {ayah.text_arabic}
                    </p>
                  </div>

                  {/* Translation */}
                  <div className="text-left border-l-2 border-gray-100 pl-6">
                    <p className={`text-[8px] font-black uppercase tracking-widest mb-2 ${isActive ? 'text-green-600' : 'text-gray-400'}`}>
                      Saheeh International
                    </p>
                    <p className={`text-lg leading-relaxed ${isActive ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>
                      {ayah.text_english}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>

      <AudioPlayer 
        ayahs={surah.ayahs} 
        currentAyahIndex={currentAyahIndex} 
        setCurrentAyahIndex={setCurrentAyahIndex} 
      />
    </div>
  );
};

export default SurahDetails;