import './App.css';
import React, { useState } from 'react';
import HomeSoultree from './components/content/HomeSoultree/HomeSoultree';
import Header from './components/ui/Header/Header';
import Navigation from './components/ui/Navigation/Navigation';


function App() {

  const [menuOpen, setMenuOpen] = useState(false)
  const bodyElem = document.body

  if (menuOpen) {
    bodyElem.style.overflowY = 'hidden'
  }

  return (
    <div className="app dFlex">
      <Header setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>
      <Navigation menuOpen={menuOpen} />
      <main>
        <HomeSoultree/>
      </main>
    </div>
  );
}

export default App;
