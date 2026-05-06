"use client";
import React, { useState } from 'react';
import { Loader2, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import useFetch from '../hooks/useFetch';
;



const SurahList = () => {
  // ডাটা ফেচ করা হচ্ছে
  const { data: surahs, loading, error } = useFetch('/api/surahs');
  
  // কতগুলো সুরা দেখানো হবে তার জন্য স্টেট (প্রাথমিকভাবে ২০টি)
  const [visibleCount, setVisibleCount] = useState(20);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Loader2 className="animate-spin text-green-600 w-10 h-10" />
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 py-10">Failed to load surahs.</div>;
  }

  // "See More" বাটনে ক্লিক করলে সব সুরা দেখানোর ফাংশন
  const handleSeeMore = () => {
    setVisibleCount(surahs.length); // সব সুরা সেট করে দিবে
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 bg-white">
      {/* Grid Layout - slice() ব্যবহার করে লিমিটেড ডাটা দেখানো হচ্ছে */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {surahs?.slice(0, visibleCount).map((surah) => (
          <Link href={`/surah/${surah.id}`} key={surah.id}>
            <div className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-green-100 transition-all cursor-pointer group h-full">
              {/* Left Side: Number and Names */}
              <div className="flex items-center space-x-4">
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gray-50 rotate-45 rounded-lg border border-gray-100 group-hover:bg-green-50 group-hover:border-green-200 transition-colors"></div>
                  <span className="relative z-10 text-xs font-bold text-gray-500 group-hover:text-green-700">
                    {surah.id}
                  </span>
                </div>

                <div>
                  <h3 className="text-[16px] font-bold text-gray-800 leading-tight">
                    {surah.transliteration}
                  </h3>
                  <p className="text-[13px] text-gray-400 font-medium">
                    {surah.translation}
                  </p>
                </div>
              </div>

              {/* Right Side: Arabic Name */}
              <div className="text-right">
                <p className="text-xl font-arabic text-gray-700 group-hover:text-green-700 transition-colors">
                  {surah.name}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* See More Button - শুধুমাত্র তখনই দেখাবে যখন আরও সুরা বাকি থাকবে */}
      {surahs && visibleCount < surahs.length && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={handleSeeMore}
            className="flex items-center space-x-2 px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-green-200 active:scale-95"
          >
            <span>See More Surahs</span>
            <ChevronDown size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default SurahList;