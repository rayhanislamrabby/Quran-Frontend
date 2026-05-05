"use client";
import { Play } from "lucide-react";

export default function AyahCard({ ayah, settings }) {
  const playAudio = () => {
    const audio = new Audio(`https://cdn.islamic.network/quran/audio/128/ar.alafasy/${ayah.number}.mp3`);
    audio.play();
  };

  return (
    <div className="p-6 border-b dark:border-gray-800 border-gray-100 group">
      <div className="flex justify-between items-center mb-6">
        <span className="text-green-600 font-bold text-sm">Verse {ayah.numberInSurah}</span>
        <button onClick={playAudio} className="p-2 rounded-full hover:bg-green-600/10 text-green-600 transition-colors">
          <Play size={18} fill="currentColor" />
        </button>
      </div>
      <p className="text-right leading-[2.5] mb-4 dark:text-white text-gray-900 font-arabic" style={{ fontSize: `${settings.arabicSize}px`, fontFamily: settings.arabicFont }}>
        {ayah.text}
      </p>
      <p className="dark:text-gray-400 text-gray-600 italic" style={{ fontSize: `${settings.translationSize}px` }}>
        {ayah.translation || "Loading translation..."}
      </p>
    </div>
  );
}