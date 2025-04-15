// ThemeContext.js 
import React, { createContext, useState, useContext, useEffect } from 'react';

// Temas predefinidos (actualizados con tertiary y quaternary)
const predefinedThemes = {
  light: {
    primary: '#1f7d53',
    secondary: '#27391c',
    tertiary: '#255f38',
    quaternary: '#18230f',
    text: '#f1f1f1'
  },
  dark: {
    primary: '#333333',
    secondary: '#dddddd',
    tertiary: '#1a1a1a',
    quaternary: '#666666',
    text: '#ffffff'
  },
  blue: {
    primary: '#3a7bd5',
    secondary: '#f5f5f5',
    tertiary: '#2b5fad',
    quaternary: '#cbd7f1',
    text: '#1a1a1a'
  }
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light');
  const [customTheme, setCustomTheme] = useState(predefinedThemes.light);

  const applyTheme = (theme) => {
    Object.entries(theme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
  };

  const setPredefinedTheme = (themeName) => {
    if (predefinedThemes[themeName]) {
      const theme = predefinedThemes[themeName];
      setCurrentTheme(themeName);
      setCustomTheme(theme);
      applyTheme(theme);
      localStorage.setItem('theme', themeName);
    }
  };

  const setCustomThemeAndApply = (theme) => {
    setCurrentTheme('custom');
    setCustomTheme(theme);
    applyTheme(theme);
    localStorage.setItem('theme', 'custom');
    localStorage.setItem('customTheme', JSON.stringify(theme));
  };

  useEffect(() => {
    const savedThemeName = localStorage.getItem('theme') || 'light';
    if (savedThemeName === 'custom') {
      const savedCustomTheme = JSON.parse(localStorage.getItem('customTheme')) || predefinedThemes.light;
      setCustomThemeAndApply(savedCustomTheme);
    } else {
      setPredefinedTheme(savedThemeName);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ 
      currentTheme, 
      customTheme,
      setTheme: setPredefinedTheme,
      setCustomTheme: setCustomThemeAndApply,
      toggleTheme: () => {
        const themeOrder = ['light', 'dark', 'blue'];
        const currentIndex = themeOrder.indexOf(currentTheme);
        const nextIndex = (currentIndex + 1) % themeOrder.length;
        setPredefinedTheme(themeOrder[nextIndex]);
      }
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
