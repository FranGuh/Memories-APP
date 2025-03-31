import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MemoriesImg from './MemoriesImg/MemoriesImg';
import MemoriesFunction from './MemoriesFunction/MemoriesFunction';
import './Memories.css';

const Memories = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const changeMonth = (direction) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;

    // Desactivar retroceso en enero de 2000
    if (direction === 'prev' && year === 2000 && month === 1) {
      return; // No hacer nada si estamos en enero de 2000
    }

    // Desactivar avance en el mes actual del año actual
    if (direction === 'next' && year === currentYear && month === currentMonth) {
      return; // No hacer nada si estamos en el mes actual
    }

    if (direction === 'prev') {
      if (month === 1) {
        setMonth(12);
        setYear(year - 1);
      } else {
        setMonth(month - 1);
      }
    } else {
      // Desactivar avance si se sobrepasa el año y mes actual
      if (year === currentYear && month === 12) {
        return; // No permitir avanzar más allá de diciembre del año actual
      }
      if (month === 12) {
        setMonth(1);
        setYear(year + 1);
      } else {
        setMonth(month + 1);
      }
    }
  };

  // Generar un rango de años desde 2000 hasta el año actual
  const currentYear = new Date().getFullYear();
  const filteredYears = Array.from({ length: currentYear - 2000 + 1 }, (_, i) => 2000 + i);

  const handleYearSelect = (e) => {
    const selectedYear = Number(e.target.value);
    setYear(selectedYear);
  };

  return (
    <>
      <div className="MemoriesHeader">
        <button className="MemoriesButton" onClick={() => changeMonth('prev')}>
          <ChevronLeft size={24} />
        </button>
        <h2 className='MemoriesMonth__Text'>{months[month - 1]} {year}</h2>
        <button className="MemoriesButton" onClick={() => changeMonth('next')}>
          <ChevronRight size={24} />
        </button>
      </div>
      
      <div className="MemoriesSelector">
        <select value={month} onChange={(e) => setMonth(Number(e.target.value))}>
          {months.map((m, index) => (
            <option key={index + 1} value={index + 1}>{m}</option>
          ))}
        </select>

        <div className="MemoriesYearScroll">
          <select value={year} onChange={handleYearSelect}>
            {filteredYears.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className='MemoriesAlbum'>
        <MemoriesFunction year={year} month={month} />
      </div>
    </>
  );
};

export default Memories;
