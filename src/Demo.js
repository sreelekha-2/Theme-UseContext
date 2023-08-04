import React, { useContext } from 'react';
import { ThemeContext } from './App';

const Demo = () => {
  const themeVal = useContext(ThemeContext);
  console.log(themeVal);
  return (
    <div>
      <h1 className={`theme-${themeVal}`}>Hi welcome frnds</h1>
    </div>
  );
};

export default Demo;
