import React, { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const style = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: isDark ? "#222" : "#f0f0f0",
    color: isDark ? "#f0f0f0" : "#222",
    transition: "all 0.3s ease",
  };

  return (
    <div style={style}>
      <h1>{isDark ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={toggleTheme}>
        Switch to {isDark ? "Light" : "Dark"}
      </button>
    </div>
  );
}

export default App;
