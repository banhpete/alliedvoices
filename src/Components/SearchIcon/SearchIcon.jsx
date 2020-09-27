import React from 'react';
import SearchIconStyles from './SearchIcon.module.css'

const Icon = ({ primary, secondary }) => {

  let color;

  if (primary) {
    color = '#7895FF'
  } else if (secondary) {
    color = '#ffffff'
  } else {
    color = 'black'
  }

  return (
    <div className={SearchIconStyles.Container}>
      <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill={color} fillRule="evenodd" clipRule="evenodd" d="M6.11456 1.35879C3.48802 1.35879 1.35879 3.48802 1.35879 6.11456C1.35879 8.7411 3.48802 10.8703 6.11456 10.8703C8.7411 10.8703 10.8703 8.7411 10.8703 6.11456C10.8703 3.48802 8.7411 1.35879 6.11456 1.35879ZM0 6.11456C0 2.73758 2.73758 0 6.11456 0C9.49154 0 12.2291 2.73758 12.2291 6.11456C12.2291 7.55866 11.7285 8.88583 10.8914 9.93195C10.9006 9.94024 10.9097 9.94893 10.9186 9.95777L13.801 12.8402C14.0663 13.1055 14.0663 13.5357 13.801 13.801C13.5357 14.0663 13.1055 14.0663 12.8402 13.801L9.95777 10.9186C9.94893 10.9097 9.94024 10.9006 9.93195 10.8914C8.88583 11.7285 7.55866 12.2291 6.11456 12.2291C2.73758 12.2291 0 9.49154 0 6.11456ZM5.43516 3.39698C5.43516 3.02176 5.73934 2.71758 6.11456 2.71758C7.99066 2.71758 9.51154 4.23846 9.51154 6.11456C9.51154 6.48978 9.20736 6.79396 8.83214 6.79396C8.45693 6.79396 8.15275 6.48978 8.15275 6.11456C8.15275 4.9889 7.24022 4.07637 6.11456 4.07637C5.73934 4.07637 5.43516 3.77219 5.43516 3.39698Z" />
      </svg>
    </div>
  );
}

export default Icon;