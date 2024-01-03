// LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='mx-20 p-1 rounded-md bg-primary-400 flex gap-2'>
      <button className=' px-2 font-bold text-black-500' onClick={() => changeLanguage('en')}>En</button>
      <div className='bg-secondary-500 w-[1px]'> </div>
      <button className=' px-2 text-black-500 font-bold' onClick={() => changeLanguage('bn')}>বাং</button>
    </div>
  );
}

export default LanguageSwitcher;
