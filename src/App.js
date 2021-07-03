import './App.css';
import NavBar from './components/nav-bar/nav-bar';
import ArticleContrainer from './components/article-container/article-container';
import Footer from './components/footer/footer';
import { useState } from 'react';

function App() {

  const [artData, setArtData] = useState('');
  return (
    <div className="App">
      <NavBar setArtData={setArtData} />
      <ArticleContrainer artData={artData} />
      <Footer />
    </div>
  );
}

export default App;
