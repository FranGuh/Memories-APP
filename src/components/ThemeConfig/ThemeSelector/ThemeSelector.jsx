// ThemeSelector.jsx
import React from 'react';
import { useTheme } from '../ThemeContext';

const ThemeSelector = () => {
  const { currentTheme, setTheme } = useTheme();
  
  const themeOptions = [
    { value: 'light', label: 'Claro' },
    { value: 'dark', label: 'Oscuro' },
    { value: 'blue', label: 'Azul' }
  ];

  return (
    <div className="theme-selector">
      <h3>Seleccionar Tema:</h3>
      <select 
        value={currentTheme} 
        onChange={(e) => setTheme(e.target.value)}
      >
        {themeOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemeSelector;