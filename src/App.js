import './App.css';
import NavBar from './components/nav-bar/nav-bar';
import Footer from './components/footer/footer';
import { useState } from 'react';
import AppBody from './components/app-body/AppBody';

function App() {

  const [artData, setArtData] = useState('');
  return (
    <div className="App">
      <NavBar setArtData={setArtData} />
      <AppBody artData={artData} />
      <Footer />
    </div>
  );
}

export default App;
