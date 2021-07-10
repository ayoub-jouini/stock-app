import './App.css';
import NavBar from './components/nav-bar/nav-bar';
import ArticleContrainer from './components/article-container/article-container';
import Footer from './components/footer/footer';
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import PageTwo from './components/page-2/page-2'
import ErrorBoundary from './components/ErrorBoundary';

function App() {

  const [artData, setArtData] = useState('');
  return (
    <div className="App">
      <ErrorBoundary>
        <NavBar setArtData={setArtData} />
        <Switch>
          <Route path="/pagetwo">
            <PageTwo />
          </Route>
          <Route path="/">
            <ArticleContrainer artData={artData} />
          </Route>
        </Switch>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
