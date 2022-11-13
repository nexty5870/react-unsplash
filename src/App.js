import React from "react";
import "./App.css";
import SearchPhotos from "./components/SearchPhoto";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="container"></div>
      <h1 className="title">React Photo Search 📸</h1>
      <SearchPhotos />
      <Footer />
    </div>
  );
}

export default App;
