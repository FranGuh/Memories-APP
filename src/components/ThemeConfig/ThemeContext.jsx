// ThemeContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

// Temas predefinidos (ahora con valores directos)
const predefinedThemes = {
  light: {
    primary: '#9e7372',
    secondary: '#ffffff',
    text: '#333333'
  },
  dark: {
    primary: '#333333',
    secondary: '#dddddd',
    text: '#ffffff'
  },
  blue: {
    primary: '#3a7bd5',
    secondary: '#f5f5f5',
    text: '#1a1a1a'
  }
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light');
  const [customTheme, setCustomTheme] = useState(predefinedThemes.light);

  // Función para aplicar cualquier tema
  const applyTheme = (theme) => {
    Object.keys(theme).forEach(key => {
      document.documentElement.style.setProperty(`--${key}`, theme[key]);
    });
  };

  // Cambiar a tema predefinido
  const setPredefinedTheme = (themeName) => {
    if (predefinedThemes[themeName]) {
      setCurrentTheme(themeName);
      setCustomTheme(predefinedThemes[themeName]);
      applyTheme(predefinedThemes[themeName]);
      localStorage.setItem('theme', themeName);
    }
  };

  // Cambiar a tema personalizado
  const setCustomThemeAndApply = (theme) => {
    setCurrentTheme('custom');
    setCustomTheme(theme);
    applyTheme(theme);
    localStorage.setItem('theme', 'custom');
    localStorage.setItem('customTheme', JSON.stringify(theme));
  };

  // Cargar tema al iniciar
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