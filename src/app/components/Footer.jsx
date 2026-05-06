import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Inspect, ScanFace, TextWrapIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
       
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Image
                src="/navlogo.jpg"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-bold text-gray-800">
                Quran Mazid
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              earum nihil, officia autem unde veniam modi libero. Iusto, aut
              nisi.
            </p>
          </div>

        
          <div>
            <h4 className="font-bold text-gray-800 mb-6">Other Pages</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <Link
                  href="#"
                  className="hover:text-green-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-green-600 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

      
          <div>
            <h4 className="font-bold text-gray-800 mb-6">Our Projects</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <Link
                  className="hover:text-green-600 transition-colors"
                  href="#"
                >
                  Read Quran
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-green-600 transition-colors"
                  href="#"
                >
                  IHadith
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-green-600 transition-colors"
                >
                  Dua & Ruqyah
                </Link>
              </li>
            </ul>
          </div>

        
          <div>
            <h4 className="font-bold text-gray-800 mb-6">Important Links</h4>
            <ul className="space-y-4 text-sm text-gray-500 mb-8">
              <li>
                <Link
                  href="#"
                  className="hover:text-green-600 transition-colors"
                >
                  IRD Foundation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-green-600 transition-colors"
                >
                  Quranmazid
                </Link>
              </li>
            </ul>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-all"
              >
                <ScanFace size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-all"
              >
                <TextWrapIcon size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-all"
              >
                <Inspect size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-all"
              >
                <pageYOffset size={18} />
              </Link>
            </div>
          </div>
        </div>

  
        <div className="border-t border-gray-50 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2026 All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>Developed by IRD Team</span>
            <Link href="#" className="hover:text-green-600">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
