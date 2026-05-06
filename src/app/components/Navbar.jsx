"use client";
import React from "react";
import Link from "next/link";
import { Sun, Heart,  } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-[#f3f6f2] shadow-sm border-b border-gray-200">
      <div className="flex items-center space-x-3">
      

<div className="relative w-14 h-12"> 
  <Image
    src="/navlogo.jpg" // সরাসরি স্লাশ দিয়ে ফাইলের নাম দিন
    alt="Logo"
    fill // কন্টেইনার অনুযায়ী লোগো সেট করার জন্য
    className="object-cover rounded-xl" // লোগো সুন্দরভাবে দেখানোর জন্য
    priority // লোগো আগে লোড করার জন্য
  />
</div>

       
      </div>

      <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
        <Link href="/" className="hover:text-green-700 transition">
          Home
        </Link>
      
      </div>

     
      <div className="flex items-center space-x-4">
      

        <button className="flex items-center bg-[#2e7d32] text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-green-800 transition shadow-md">
          Support Us <Heart size={16} className="ml-2 fill-white" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
