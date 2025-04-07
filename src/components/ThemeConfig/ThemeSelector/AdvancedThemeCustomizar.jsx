import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';
import './AdvancedThemeCustomizer.css'

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
    <main className='theme'>
      <div className="theme-customizer">
        <h3 className="theme-customizer__title">Personaliza tu tema:</h3>
        <div className="theme-customizer__color-pickers">
          <div className="theme-customizer__color-picker">
            <label>
              Color principal:
              <input 
                type="color" 
                name="primary" 
                value={localTheme.primary}
                onChange={handleColorChange}
                className="theme-customizer__input"
              />
            </label>
            <span className="theme-customizer__input-value">{localTheme.primary}</span>
          </div>
          <div className="theme-customizer__color-picker">
            <label>
              Color secundario:
              <input 
                type="color" 
                name="secondary" 
                value={localTheme.secondary}
                onChange={handleColorChange}
                className="theme-customizer__input"
              />
            </label>
            <span className="theme-customizer__input-value">{localTheme.secondary}</span>
          </div>
          <div className="theme-customizer__color-picker">
            <label>
              Color de texto:
              <input 
                type="color" 
                name="text" 
                value={localTheme.text}
                onChange={handleColorChange}
                className="theme-customizer__input"
              />
            </label>
            <span className="theme-customizer__input-value">{localTheme.text}</span>
          </div>
        </div>
        <button onClick={applyCustomTheme} className="theme-customizer__button">Aplicar tema personalizado</button>
      </div>
    </main>
  );
};

export default AdvancedThemeCustomizer;
