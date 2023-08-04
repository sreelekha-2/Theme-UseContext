import React, { createContext, useState } from 'react';
import './style.css';
import Demo from './Demo';

export const ThemeContext = createContext();

export default function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <ThemeContext.Provider value={theme}>
        <Demo />
        <label>
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={(e) => {
              setTheme(e.target.checked ? 'dark' : 'light');
            }}
          />
          Use dark mode
        </label>
      </ThemeContext.Provider>
    </div>
  );
}
