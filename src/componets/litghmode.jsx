import React from "react";

const LightMode = ({ darkMode, setDarkMode }) => {

  function mudarModo() {
    setDarkMode(!darkMode);
  }

  return (
    <button className="lightmode" onClick={mudarModo}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default LightMode;