"use client";
import React, { useState, useEffect } from "react";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="fixed top-0 left-0 w-full bg-amber-50 dark:bg-gray-900 z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="Vec.png" alt="Logo" className="h-6" />
          <img src="Movie.png" alt="Movie" className="h-6" />
        </div>

        <div className="hidden md:flex flex-1 justify-center">
          <input
            type="text"
            placeholder="Search movies..."
            className="w-full max-w-md p-2 rounded-xl border text-black dark:text-white dark:bg-gray-800"
          />
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-9 h-9 flex items-center justify-center border rounded-md dark:border-gray-600"
          >
            <img src="moon.png" alt="Dark mode" className="w-5 h-5" />
          </button>

          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      <div className="md:hidden px-4 pb-3">
        <input
          type="text"
          placeholder="Search movies..."
          className="w-full p-2 rounded-xl border text-black dark:text-white dark:bg-gray-800"
        />
      </div>

      {menuOpen && (
        <div className="md:hidden bg-amber-50 dark:bg-gray-900 border-t dark:border-gray-700 px-4 py-4">
          <ul className="flex flex-col gap-4 text-black dark:text-white">
            <li className="hover:text-amber-500 cursor-pointer">Home</li>
            <li className="hover:text-amber-500 cursor-pointer">Movies</li>
            <li className="hover:text-amber-500 cursor-pointer">Series</li>
            <li className="hover:text-amber-500 cursor-pointer">Favorites</li>
          </ul>
        </div>
      )}
    </header>
  );
};
