"use client";
import React from "react";
import Link from "next/link";
import { Sun, Heart,  } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-[#f3f6f2] shadow-sm border-b border-gray-200">
      <div className="flex items-center space-x-3">
        <div className="bg-[#2e7d32] p-2 rounded-lg">
          <Image
            src="/quran-icon.png"
            alt="Logo"
            height={100}
            width={100}
            className="w-6 h-6 invert"
          />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-800 leading-tight">
            Quran Mazid
          </h1>
          <p className="text-[10px] text-gray-500 uppercase tracking-tighter">
            Read, Study, and Learn The Quran
          </p>
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
        <Link href="/" className="hover:text-green-700 transition">
          Home
        </Link>
        <Link href="/read" className="hover:text-green-700 transition">
          Read Quran
        </Link>
      </div>

     
      <div className="flex items-center space-x-4">
        <button className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-100 transition">
          <Sun size={20} className="text-gray-600" />
        </button>

        <button className="flex items-center bg-[#2e7d32] text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-green-800 transition shadow-md">
          Support Us <Heart size={16} className="ml-2 fill-white" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
