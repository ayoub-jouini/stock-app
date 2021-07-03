import './App.css';
import NavBar from './components/nav-bar/nav-bar';
import ArticleContrainer from './components/article-container/article-container';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ArticleContrainer />
      <Footer />
    </div>
  );
}

export default App;
