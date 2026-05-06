"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, SkipForward, SkipBack } from 'lucide-react';

const AudioPlayer = ({ ayahs, currentAyahIndex, setCurrentAyahIndex }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) audioRef.current?.play();
  }, [currentAyahIndex]);

  const togglePlay = () => {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-100 p-4 shadow-2xl z-[200] flex items-center justify-center space-x-10">
      <audio 
        ref={audioRef} 
        src={ayahs[currentAyahIndex]?.audio} 
        onEnded={() => currentAyahIndex < ayahs.length - 1 ? setCurrentAyahIndex(currentAyahIndex + 1) : setIsPlaying(false)}
        muted={isMuted}
      />

      <div className="flex items-center space-x-6">
        <button onClick={() => setCurrentAyahIndex(Math.max(0, currentAyahIndex - 1))} className="text-gray-400 hover:text-green-600 transition-colors">
          <SkipBack size={24} fill="currentColor" />
        </button>
        
        <button 
          onClick={togglePlay}
          className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-all shadow-xl shadow-green-200 active:scale-90"
        >
          {isPlaying ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" className="ml-1" />}
        </button>

        <button onClick={() => setCurrentAyahIndex(Math.min(ayahs.length - 1, currentAyahIndex + 1))} className="text-gray-400 hover:text-green-600 transition-colors">
          <SkipForward size={24} fill="currentColor" />
        </button>
      </div>

      <button onClick={() => setIsMuted(!isMuted)} className="text-gray-400 hover:text-green-600">
        {isMuted ? <VolumeX size={22} /> : <Volume2 size={22} />}
      </button>
    </div>
  );
};

export default AudioPlayer;