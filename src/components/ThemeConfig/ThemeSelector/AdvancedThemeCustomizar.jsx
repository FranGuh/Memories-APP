import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';

const AdvancedThemeCustomizer = () => {
  const { customTheme, setCustomTheme } = useTheme();
  const [localTheme, setLocalTheme] = useState(customTheme);

  const handleColorChange = (e) => {
    const { name, value } = e.target;
    setLocalTheme(prev => ({ ...prev, [name]: value }));
  };

  const applyCustomTheme = () => {
    setCustomTheme(localTheme);
  };

  return (
    <div className="theme-customizer">
      <h3>Personaliza tu tema:</h3>
      <div className="color-pickers">
        <label>
          Color principal:
          <input 
            type="color" 
            name="primary" 
            value={localTheme.primary}
            onChange={handleColorChange}
          />
          <span>{localTheme.primary}</span>
        </label>
        <label>
          Color secundario:
          <input 
            type="color" 
            name="secondary" 
            value={localTheme.secondary}
            onChange={handleColorChange}
          />
          <span>{localTheme.secondary}</span>
        </label>
        <label>
          Color de texto:
          <input 
            type="color" 
            name="text" 
            value={localTheme.text}
            onChange={handleColorChange}
          />
          <span>{localTheme.text}</span>
        </label>
      </div>
      <button onClick={applyCustomTheme}>Aplicar tema personalizado</button>
    </div>
  );
};

export default AdvancedThemeCustomizer;