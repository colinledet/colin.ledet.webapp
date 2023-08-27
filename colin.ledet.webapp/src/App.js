import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import StickyFooter from './components/StickyFooter';

function App() {
  return (
    <div className="App" id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
        <header>Colin Ledet</header>
        <body>
        </body>
      </div>
      <StickyFooter />
    </div>
  );
}

export default App;