import React from 'react';
import './MyHistoryArticle.css';

const highlightText = (text, words = [], phrases = []) => {
  if (!text) return null;

  // Función para escapar caracteres especiales en regex
  const escapeRegExp = (string) => string.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');

  // Construir regex combinada para frases y palabras
  const highlightRegex = new RegExp(
    [...phrases, ...words].map(escapeRegExp).join('|'),
    'gi'
  );

  return text.split(highlightRegex).reduce((acc, part, index, array) => {
    if (index < array.length - 1) {
      acc.push(part, <b key={index} className="highlight">{text.match(highlightRegex)[index]}</b>);
    } else {
      acc.push(part);
    }
    return acc;
  }, []);
};

const MyHistoryArticle = ({ text, highlightWords = [], highlightPhrases = [], title, secondTitle }) => {
  if (!text && !title && !secondTitle) return null;

  return (
    <section className='MyHistory__article'>
      {title && (
        <div className='MyHistory__divider'>
          <h2 className='MyHistory__text'>{title}</h2>
        </div>
      )}
      {secondTitle && (
        <h2 className='MyHistory__text__second'>{highlightText(secondTitle, highlightWords, highlightPhrases)}</h2>
      )}
      {text && (
        <p className='MyHistory__text'>{highlightText(text, highlightWords, highlightPhrases)}</p>
      )}
    </section>
  );
};

export default MyHistoryArticle;