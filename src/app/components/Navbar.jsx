"use client";
import { useState, useEffect } from "react";
import { Search, Sun, Moon, Settings, Menu } from "lucide-react";

export default function Navbar({ onSearch, onOpenSettings, onOpenMenu }) {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(true);

  // Initial Load from LocalStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDark(savedTheme === "dark");
    }
    setMounted(true);
  }, []);

  // Update Theme & Save to LocalStorage
  useEffect(() => {
    if (mounted) {
      if (dark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  }, [dark, mounted]);

  if (!mounted) return <div className="h-16" />; // Prevent Hydration mismatch

  return (
    <nav className="h-16 border-b dark:border-gray-800 border-gray-200 dark:bg-[#0f172a]/80 bg-white/80 backdrop-blur-md flex items-center justify-between px-4 sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <button onClick={onOpenMenu} className="md:hidden p-2 dark:text-white text-gray-800">
          <Menu size={20} />
        </button>
        <div className="flex items-center gap-2">
          <div className="bg-green-600 p-1.5 rounded-lg text-white font-bold">QM</div>
          <span className="text-xl font-black dark:text-white text-gray-900 hidden sm:block uppercase italic">
            Quran<span className="text-green-500">Mazid</span>
          </span>
        </div>
      </div>

      {/* Responsive Search Bar */}
      <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-800/50 border dark:border-gray-700 border-gray-200 rounded-full px-4 py-1.5 w-1/3 focus-within:ring-1 focus-within:ring-green-500">
        <Search size={16} className="text-gray-500" />
        <input 
          type="text" 
          placeholder="What do you want to read? (Ctrl+K)" 
          onChange={(e) => onSearch(e.target.value)}
          className="bg-transparent border-none outline-none text-sm px-3 w-full placeholder:text-gray-500 dark:text-white"
        />
      </div>

      <div className="flex items-center gap-2">
        <button 
          onClick={() => setDark(!dark)}
          className="p-2 rounded-full dark:bg-gray-800 bg-gray-100 dark:text-green-500 text-gray-600 hover:scale-110 transition-all"
        >
          {dark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button 
          onClick={onOpenSettings}
          className="p-2 rounded-full dark:bg-gray-800 bg-gray-100 dark:text-green-500 text-gray-600 hover:scale-110 transition-all"
        >
          <Settings size={20} />
        </button>
      </div>
    </nav>
  );
}