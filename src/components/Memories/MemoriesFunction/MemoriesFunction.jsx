import React from 'react';
import MemoriesImg from '../MemoriesImg/MemoriesImg';

const MemoriesFunction = ({ year, month }) => {
  const currentYear = year || new Date().getFullYear();
  const currentMonth = month || new Date().getMonth() + 1; 

  const days = new Date(currentYear, currentMonth, 0).getDate();

  return (
    <>
      {Array.from({ length: days }, (_, i) => (
        <MemoriesImg key={i + 1} NumberText={i + 1} TextTitle="My day" />
      ))}
    </>
  );
};

export default MemoriesFunction;
