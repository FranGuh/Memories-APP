import React from 'react';
import './MemoriesButton.css';

const MemoriesButton = ({MemoriesButtonClass, MemoriesButtomText}) => {
  return (
    <button className={MemoriesButtonClass}>
        {MemoriesButtomText}
    </button>
  )
}

export default MemoriesButton
