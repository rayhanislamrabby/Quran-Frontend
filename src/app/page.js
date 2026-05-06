import React from "react";


import Navbar from "./components/Navbar";
import QuranSearch from "./components/QuranSearch";


export default function Home() {
  return (
    <main className="min-h-screen bg-white  transition-colors duration-300">
      {/* Navbar Integration */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-10 pb-10 px-4 text-center">
     

        <QuranSearch />
      </section>
    </main>
  );
}
