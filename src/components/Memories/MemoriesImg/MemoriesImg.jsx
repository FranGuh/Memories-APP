import React from 'react';
import './MemoriesImg.css';

const MemoriesImg = ({Id, NumberText, TextTitle}) => {
  return (
    <>
      <div id={Id} className='MemoriesImg'>
        <p className='MemoriesImg__text'>{NumberText}</p>
        <p className='MemoriesImg__text__alternative'>{TextTitle}</p>
        <img className="MemoriesImg__img"src="/AlbumImg/Escenario.jpg" alt="" />
      </div>
      
    </>
  )
}

export default MemoriesImg
