import { Link } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState("false");
  return (
    <div>
      <Link to="/register">register</Link>
    </div>
  );
}

export default App;
