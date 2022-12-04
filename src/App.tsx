import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Technologies />
      Hello, samurai! Let's go!
    </div>
  );
}

function Header() {
  return (
    <div>
      <a href="#">Home</a>
      <a href="#">News</a>
      <a href="#">Feed</a>
    </div>
  );
}
function Technologies() {
  return (
    <div>
      <ul>
        <li>css</li>
        <li>html</li>
        <li>js</li>
        <li>react</li>
      </ul>
    </div>
  );
}

export default App;
