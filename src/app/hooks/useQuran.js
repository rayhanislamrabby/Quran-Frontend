"use client";
import { useState, useEffect } from "react";

export const useQuran = () => {
  const [surahs, setSurahs] = useState([]);
  const [selectedSurah, setSelectedSurah] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // সব সূরার লিস্ট ফেচ করা
  useEffect(() => {
    fetch("http://localhost:5000/api/surahs")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setSurahs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // নির্দিষ্ট সূরা লোড করার ফাংশন
  const loadSurah = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/surah/${id}`);
      const data = await res.json();
      setSelectedSurah(data);
    } catch (err) {
      console.error("Error loading surah details:", err);
    }
  };

  return { surahs, selectedSurah, loading, error, loadSurah };
};