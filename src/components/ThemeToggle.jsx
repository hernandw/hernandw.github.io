import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-800/80 text-yellow-400 hover:bg-gray-700 transition-all border border-gray-700 shadow-md flex items-center justify-center"
      title="Cambiar tema"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? <FaSun size={16} /> : <FaMoon size={16} className="text-blue-400" />}
    </button>
  );
};