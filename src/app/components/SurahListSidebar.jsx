"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import useFetch from "../hooks/useFetch";

const SurahListSidebar = ({ activeId }) => {
  const { data: surahs } = useFetch("/api/surahs");
  const [search, setSearch] = useState("");

  const filtered = surahs?.filter((s) =>
    s.transliteration.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="p-5 space-y-4">
        <div className="flex bg-gray-100 p-1 rounded-xl">
          <button className="flex-1 py-2 text-xs font-bold bg-white rounded-lg shadow-sm">
            Surah
          </button>
       
        </div>
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={16}
          />
          <input
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Surah"
            className="w-full bg-gray-50 border-none rounded-xl py-3 pl-10 text-sm outline-none focus:ring-1 ring-green-500/20"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-3 space-y-1">
        {filtered?.map((surah) => (
          <Link href={`/surah/${surah.id}`} key={surah.id}>
            <div
              className={`flex items-center justify-between p-3 rounded-2xl transition-all ${
                activeId == surah.id
                  ? "bg-green-50 border border-green-100"
                  : "hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center space-x-4">
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-lg rotate-45 border text-[10px] font-bold ${
                    activeId == surah.id
                      ? "bg-green-600 border-green-600 text-white"
                      : "bg-gray-50 text-gray-400"
                  }`}
                >
                  <span className="-rotate-45">{surah.id}</span>
                </div>
                <div>
                  <h4
                    className={`text-sm font-bold ${activeId == surah.id ? "text-green-700" : "text-gray-800"}`}
                  >
                    {surah.transliteration}
                  </h4>
                  <p className="text-[10px] text-gray-400 uppercase font-medium">
                    {surah.translation}
                  </p>
                </div>
              </div>
              <p className="font-arabic text-gray-400 text-sm">{surah.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SurahListSidebar;
