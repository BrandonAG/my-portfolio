import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact'
import Portfolio from './components/Portfolio';

function App() {
  const [categories] = useState([
    { name: 'about' },
    { name: 'portfolio' },
    { name: 'contact' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  let page;
  if (currentCategory.name === 'portfolio') {
    page = <Portfolio></Portfolio>
  }
  else if (currentCategory.name === 'contact') {
    page = <Contact></Contact>
  }
  else {
    page = <About></About>
  }

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div className="container">
          <>
            {page}
          </>
        </div>
      </main>
      <footer className="page-footer">
          <div className="footer-copyright">
            <div className="container">
            by Brandon Arnst-Goodrich
            </div>
          </div>
        </footer>
    </div>
  );
}

export default App;
