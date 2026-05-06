"use client";
import React, { useState, useEffect, useRef } from "react";
import { Search, Loader2, X, BookOpen } from "lucide-react";
import useFetch from "../hooks/useFetch";


const QuranSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSurahs, setFilteredSurahs] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);

  const { data: surahs, loading, error } = useFetch("/api/surahs");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!surahs || searchTerm.trim() === "") {
      setFilteredSurahs([]);
      setIsOpen(false);
    } else {
      const lowerSearch = searchTerm.toLowerCase();
      const results = surahs.filter((surah) => {
        const transliteration = surah?.transliteration?.toLowerCase() || "";
        const translation = surah?.translation?.toLowerCase() || "";
        const arabicName = surah?.name || "";
        const surahId = surah?.id?.toString() || "";

        return (
          transliteration.includes(lowerSearch) ||
          translation.includes(lowerSearch) ||
          arabicName.includes(searchTerm) ||
          surahId === searchTerm
        );
      });
      setFilteredSurahs(results);
      setIsOpen(true);
    }
  }, [searchTerm, surahs]);

  return (
    <div className="flex flex-col items-center w-full px-4 py-12 bg-white min-h-96">
      <div className="flex flex-col items-center mb-10">
        <div className="bg-green-50 p-3 rounded-full mb-4">
          <BookOpen className="text-green-600 w-10 h-10" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          Quran Mazid
        </h1>
        <p className="text-gray-500 mt-2 text-sm">
          Read, study, and learn the Noble Quran
        </p>
      </div>

      <div className="relative w-full max-w-xl" ref={searchRef}>
        <div className="relative">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
            {loading ? (
              <Loader2 className="animate-spin text-green-600" size={20} />
            ) : (
              <Search className="text-gray-400" size={20} />
            )}
          </div>

          <input
            type="text"
            value={searchTerm}
            onFocus={() => searchTerm && setIsOpen(true)}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by Surah name, meaning or number..."
            className="w-full py-5 pl-14 pr-12 bg-white border border-gray-200 rounded-2xl text-gray-800 shadow-sm focus:outline-none focus:ring-4 focus:ring-green-500/10 focus:border-green-500/40 transition-all text-lg"
          />

          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute inset-y-0 right-5 flex items-center text-gray-400 hover:text-red-500 transition-colors"
            >
              <X size={20} />
            </button>
          )}
        </div>

        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm text-center">
            Backend server connection failed. Please try again later.
          </div>
        )}

        {isOpen && (
          <div className="absolute top-full mt-3 w-full bg-white border border-gray-100 rounded-2xl shadow-2xl z-[100] max-h-96 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-200">
            {filteredSurahs.length > 0 ? (
              <div className="py-2">
                <div className="px-5 py-3 border-b border-gray-50">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                    Found {filteredSurahs.length} Surahs
                  </span>
                </div>

                {filteredSurahs.map((surah) => (
                  <div
                    key={surah.id}
                    className="flex items-center justify-between px-6 py-4 hover:bg-green-50/60 cursor-pointer transition-all border-b border-gray-50 last:border-none group"
                  >
                    <div className="flex items-center space-x-5">
                      <div className="w-10 h-10 flex items-center justify-center bg-gray-50 text-gray-500 rounded-xl text-sm font-bold group-hover:bg-green-600 group-hover:text-white transition-all">
                        {surah.id}
                      </div>

                      <div>
                        <h3 className="text-md font-bold text-gray-800 group-hover:text-green-700 transition-colors">
                          {surah.transliteration}
                        </h3>
                        <p className="text-xs text-gray-500 font-medium italic">
                          {surah.translation}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-2xl font-serif text-gray-800 mb-1 leading-relaxed">
                        {surah.name}
                      </p>
                      <span className="text-[10px] text-gray-400 font-bold uppercase">
                        {surah.total_verses} Ayahs
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-12 text-center">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="text-gray-300" size={30} />
                </div>
                <p className="text-gray-500 text-sm">
                  No results found for{" "}
                  <span className="text-gray-800 font-semibold">
                    {searchTerm}
                  </span>
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuranSearch;
