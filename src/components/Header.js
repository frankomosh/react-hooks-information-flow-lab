import React from 'react'

export default function Header({onDarkModeClick,isDarkMode}) {
    function onClickk() {
        onDarkModeClick(isDarkMode);
    }

  return (
    <div>
        <header>
        <h2>Shopster</h2>
        <button onClick={onClickk}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
    </div>
  )
}