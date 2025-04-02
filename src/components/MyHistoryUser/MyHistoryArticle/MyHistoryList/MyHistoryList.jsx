import React from 'react';
import './MyHistoryList.css';

const highlightText = (text, words = [], phrases = []) => {
  if (!text) return null;

  const escapeRegExp = (string) => string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

  // Resaltar frases completas
  phrases.forEach(phrase => {
    const cleanPhrase = escapeRegExp(phrase);
    const regex = new RegExp(cleanPhrase, 'gi');
    text = text.replace(regex, match => `<b class="highlight">${match}</b>`);
  });

  // Resaltar palabras individuales
  if (words.length > 0) {
    const cleanWords = words.map(word => escapeRegExp(word));
    const regexWords = new RegExp(`\\b(${cleanWords.join('|')})\\b`, 'gi');
    text = text.replace(regexWords, match => `<b class="highlight">${match}</b>`);
  }

  return text;
};

const MyHistoryList = ({ position, altTitle, title, text, ulText, imgSrc, highlightWords = [], highlightPhrases = [] }) => {
  const validPosition = position === 'left' ? 'left' : 'right';

  return (
    <div className={`MyHistoryList MyHistoryList--${validPosition}`}>
      <section className='MyHistoryList__article'>
        <div className='MyHistoryList__divider'>
          {altTitle && <h3 className='MyHistoryList__text' dangerouslySetInnerHTML={{ __html: highlightText(altTitle, highlightWords, highlightPhrases) }} />}
          {title && <h2 className='MyHistoryList__text' dangerouslySetInnerHTML={{ __html: highlightText(title, highlightWords, highlightPhrases) }} />}
        </div>

        {text && <p className='MyHistoryList__text' dangerouslySetInnerHTML={{ __html: highlightText(text, highlightWords, highlightPhrases) }} />}

        {ulText && ulText.length > 0 && (
          <ul className='MyHistoryList__text'>
            {ulText.map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: highlightText(item, highlightWords, highlightPhrases) }} />
            ))}
          </ul>
        )}
      </section>

      <div className='MyHistoryList__img'>
        <img src={`LandingImg/${imgSrc}`} alt="A picture of Carla hanging up a cacao-cocoa product" />
      </div>
    </div>
  );
};

export default MyHistoryList;
